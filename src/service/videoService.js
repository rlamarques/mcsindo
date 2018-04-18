const Video = require('../model/Video')

const create = (videoDic, callback) => {
  Video.create(videoDic, callback);
}

module.exports = {
  create,
}
