const Author = require('./Author')

const mongoose = require('mongoose')
var CommentSchema = mongoose.Schema({
  _id : String,
  author : Author.schema,
  text : String,
  likeCount : Number
},  { _id: false })

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
