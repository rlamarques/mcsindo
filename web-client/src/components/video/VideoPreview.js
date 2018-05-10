import React, {Component} from 'react'

require("../../stylesheets/components/videoPreview.scss")

class VideoPreview extends Component {

  render () {
    const {video} = this.props;
    console.log(video);
    return (
      <div className="video-preview">
        <span className="video-id">
          {video["_id"]}
        </span>
        <span className="video-status">
          {video["status"]}
        </span>
      </div>
    )
  }

}

export default VideoPreview;
