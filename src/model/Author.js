const mongoose = require('mongoose')

var AuthorSchema = mongoose.Schema({
  _id : String,
  name : String
},  { _id: false })

const Author  = mongoose.model('Author', AuthorSchema);

module.exports = Author
