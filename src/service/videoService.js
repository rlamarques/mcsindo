const Video = require('../model/Video')

const create = (videoDic, callback) => {

  if (!callback) {
    callback = () => {}
  }

  var video = {};
  video["_id"] = videoDic.id;
  video.status = videoDic.status;
  var comments = [];
  video.topLevelComment =comments
  for (var index in videoDic.topLevelComments) {
    var topLevelComment = videoDic.topLevelComments[index].snippet.topLevelComment

    var author = {}
    author.id = topLevelComment.snippet.authorChannelId.value;
    author.name = topLevelComment.snippet.authorDisplayName;


    comments.push({
      _id : topLevelComment.id,
      author : author,
      text : topLevelComment.snippet.textOriginal ,
      likeCount : topLevelComment.snippet.likeCount
    })
  }

  Video.update({_id: videoDic.id}, video, {upsert: true, setDefaultsOnInsert: true},
    (err) => {
    if (err) {
      console.log("Erro ao salvar o video")
      console.log(err);
      callback(null, err)
    }
    callback(null, err)
  });
}

const fetchComments = (callback) => {
  Video.find({}).select({topLevelComment : 1}).exec(
    (err, videos) => {
      var allComments = [];
      for (var videoIndex in videos) {
        var topLevelComments = videos[videoIndex].topLevelComment;
        allComments = allComments.concat(topLevelComments);
      }
      callback(allComments);
  })
}

const fetchVideos = (callback) => {
  Video.find({}).select({}).exec(
    (err, videos) => {
      callback(videos);
  })
}

module.exports = {
  create,
  fetchComments,
  fetchVideos
}
