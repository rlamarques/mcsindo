import React, {Component} from 'react'
import VideoPreview from './VideoPreview'
import Loading from '../loading/Loading'

class Videos extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videos : [],
      loading : false
    }

    this.fetchVideos = this.fetchVideos.bind(this);
  }

  componentDidMount() {
    this.fetchVideos()
  }

  fetchVideos() {
    var that = this;
    that.setState({
      loading : true
    })

    $.ajax({
      url: API_URL + "db/videos",
    }).then(
      (data, textStatus, jqXHR) => {
        that.setState({
          loading : false,
          videos : JSON.parse(data)
        })
    })
  }

  render () {
    const {videos, loading} = this.state;
    return (
      <div className="videos">
        {videos.map(
          (v, i) => {
            return <VideoPreview video={v}/>
          }
        )}
        {loading && <Loading/>}
      </div>
    )
  }
}

export default Videos;
