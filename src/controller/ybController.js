var express = require('express');
var router = express.Router();
const ybService = require('../service/ybService');

router.get('/fetchComments/video/:videoId', (req, res) => {
  const params = req.params;
  const {videoId} = params;
  const {minSize, maxSize} = req.query;
  if (!videoId) {
    res.send("missing video id")
  }
  ybService.fetchCommentsFromVideo(videoId, {maxSize, minSize}, () => {
    res.send(req.params)
  });
})

module.exports = router;
