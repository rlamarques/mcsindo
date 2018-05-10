import React, {Component} from 'react'

import {Link} from 'react-router-dom'

import Loading from '../loading/Loading'

require('../../stylesheets/components/addVideo.scss')

class AddVideo extends Component {

  constructor(props) {

    super(props)
    this.state = {
      videoId : ""
    }

    this.onChange = this.onChange.bind(this);
    this.loadVideo = this.loadVideo.bind(this);
  }

  onChange (e) {
    this.setState({
      videoId : e.target.value
    })
  }

  loadVideo () {
    const {videoId} = this.state
    var that = this;

    that.setState({
      loaded : false
    })
    $.ajax({
      url: API_URL + "youtube/fetchComments/video/" + videoId,
    }).then(
      (data, textStatus, jqXHR) => {
        console.log("data");
        console.log(data);
        console.log(textStatus);
        if (textStatus == "success") {
          that.setState({
            loaded : true
          })
        }
        // that.setState({
        //   loading : false,
        //   comments : JSON.parse(data)
        // })
    })
  }

  render() {
    const {videoId, loaded} = this.state;
    return (
      <div className="addVideo">
        <div className="video-input-container">
          <input className="video-input" onChange={this.onChange} value={videoId}/>
          <button className="submit" onClick={this.loadVideo}>
            LOAD
          </button>
          {loaded &&
            <div className="loaded-label">
              <span>
                Video loading
              </span>
              <span className="link">
                <Link to="/videos">
                  SEE VIDEOS STATUS
                </Link>
              </span>
            </div>}
        </div>
      </div>
    )
  }
}

export default AddVideo;
