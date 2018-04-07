const {YB_API_KEY} = require('../params.js');

const request = require("superagent");

const fetchCommentsFromVideo = (videoId, callback) => {
    const url = 'https://www.googleapis.com/youtube/v3/commentThreads';
    const query = {
      'key' : YB_API_KEY,
      'videoId': videoId,
      'part': 'snippet',
    };
    fetchYoutubeList({url, query, maxSize : 20},
      (list) =>
       {

       }
    );

}

const fetchYoutubeList = (params, callback, recursionParams) => {

  var {url, query, maxSize} = params;

  var list = [];

  const pagePromise = (rUrl, rQuery) => {
    return request.get(rUrl).query(rQuery).end(
     (error, success) => {
       if (error || !success.body.nextPageToken) {
         if (error) {
           console.log(error);
         } else {
           const body = success.body;
           const items = body.items
           list = list.concat(items);
         }
         callback(list)
       } else {
         const body = success.body;
         const items = body.items
         list = list.concat(items);

         const nextPageToken = body.nextPageToken;
         if (maxSize && list.length >= params.maxSize) {
           callback(list)
         } else {
           rQuery["nextPageToken"] = nextPageToken
           pagePromise(rUrl, rQuery)
         }
       }
     }
  )}

  pagePromise(url, query)
}

module.exports = {
  fetchCommentsFromVideo
}
