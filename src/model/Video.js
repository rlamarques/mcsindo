var Comment = require('./Comment')

var mongoose = require('mongoose');

var VideoSchema = mongoose.Schema({
  _id : String,
  topLevelComment : [Comment.schema]
},  { _id: false })

var Video = mongoose.model('Video', VideoSchema)

Video.create = (videoDic, callback) => {

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

  const instance = new Video(video);
  instance.save().then(callback)
}
module.exports = Video;
