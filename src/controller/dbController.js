var express = require('express');
var router = express.Router();
const videoService = require('../service/videoService');

router.get('/comments', (req, res) => {
  videoService.fetchComments(
    (allComments) => {
      res.send(JSON.stringify(allComments));
    }
  )
})

module.exports = router;
