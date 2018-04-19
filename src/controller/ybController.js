var express = require('express');
var router = express.Router();
const ybService = require('../service/ybService');

router.get('/fetchComments/video/:videoId', (req, res) => {
  const params = req.params;
  const {videoId} = params;
  if (!videoId) {
    res.send("missing video id")
  }
  ybService.fetchCommentsFromVideo(videoId, () => {console.log("  lolol")});
  res.send(req.params)
})

module.exports = router;
