var Comment = require('./Comment')

var mongoose = require('mongoose');

var VideoSchema = mongoose.Schema({
  _id : String,
  topLevelComment : [Comment.schema]
},  { _id: false })

var Video = mongoose.model('Video', VideoSchema)

module.exports = Video;
