const Video = require('../model/Video')

const create = (videoDic, callback) => {

  var video = {};
  video["_id"] = videoDic.id;
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
      text : topLevelComment.snippet.textDisplay
    })
  }

  Video.update({_id: videoDic.id}, video, {upsert: true, setDefaultsOnInsert: true},
    (err) => {
    if (err) {
      console.log("Erro ao salvar o video")
      console.log(err);
    }
    callback(null, err)
  });
}

module.exports = {
  create,
}
