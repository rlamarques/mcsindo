const controllers =  require('./controller/index');
const express = require('express');
var cors = require('cors')

const app = express();

app.use(cors())
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mcsindo');

const startExpressApp = () => {
  app.disable('etag');
  app.use("/", require('./controller/index'));
  app.listen(3000, () => {
    console.log("App listening on port 3000");
  })
}

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  startExpressApp();
});
