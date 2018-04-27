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

    videoService.create({
      id : videoId,
      status : "LOADING",
      topLevelComment : []
    }, callback)

    const {minSize, maxSize} = params;

    fetchYoutubeList({url, query, maxSize : maxSize , minSize},
      (list) =>
       {
         if (list != null) {
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
//
// const fetchRepliesFromComment = (commentId) => {
//   const url = 'https://www.googleapis.com/youtube/v3/comment';
//   const query = {
//     'key' : YB_API_KEY,
//     'parentId': commentId,
//     'part': 'snippet',
//   };
//
//   return new Promise((resolve, reject) => {
//
//     fetchYoutubeList({url, query, maxSize : 20},
//       (list, err) => {
//         if (err) {
//           console.log("Error fetching replies");
//           console.log(err);
//           reject();
//         } else {
//           console.log("List replies");
//           console.log(list);
//           resolve(list)
//         }
//       });
//   })
// }

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
