const {YB_API_KEY} = require('../params.js');
const videoService = require('./videoService')
const request = require("superagent");

const fetchCommentsFromVideo = (videoId, params, callback) => {
    const url = 'https://www.googleapis.com/youtube/v3/commentThreads';
    const query = {
      'key' : YB_API_KEY,
      'videoId': videoId,
      'part': 'snippet',
    };
    fetchYoutubeList({url, query, maxSize : 150},
      (list) =>
       {
         if (list != null) {
           console.log("list");
           console.log(list.length);
           videoService.create({
             id : videoId,
             status : "COMPLETED",
             topLevelComments : list
           })
         } else {
           console.log("Error fetching comments for video " + videoId);
         }
       }
    );
}

const fetchRepliesFromComment = (commentId) => {
  const url = 'https://www.googleapis.com/youtube/v3/comment';
  const query = {
    'key' : YB_API_KEY,
    'parentId': commentId,
    'part': 'snippet',
  };

  return new Promise((resolve, reject) => {

    fetchYoutubeList({url, query, maxSize : 25},
      (list, err) => {
        if (err) {
          reject();
        } else {
          resolve(list)
        }
      });
  })
}

const fetchYoutubeList = (params, callback, recursionParams) => {

  var {url, query, maxSize} = params

  var list = [];

  const pagePromise = (rUrl, rQuery) => {
    return request.get(rUrl).query(rQuery).end(
     (error, success) => {
       if (error || !success.body.nextPageToken) {
         if (error) {
           callback(null)
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
         if (maxSize && list.length >= maxSize) {
           callback(list)
         } else {
           rQuery["pageToken"] = nextPageToken
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
