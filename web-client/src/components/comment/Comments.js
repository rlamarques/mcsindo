import React, {Component} from 'react'

import CommentPreview from './CommentPreview'
import Loading from '../loading/Loading'

class Comments extends Component {


  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      comments : []
    }

    this.fetchComments = this.fetchComments.bind(this);
  }

  fetchComments () {
    var that = this;
    this.setState({
      loading : true
    })
    $.ajax({
      url: API_URL + "db/comments",
    }).then(
      (data, textStatus, jqXHR) => {
        that.setState({
          loading : false,
          comments : JSON.parse(data)
        })
    })
  }

  componentDidMount () {
    this.fetchComments();
  }

  render () {
    const {comments, loading} = this.state;
    return (
      <div className="comments">
        {loading &&
          <Loading/>
        }
        {comments &&
          comments.map(
            (v, i) => {
              return (
                <CommentPreview comment={v} key={v["_id"]}/>
              )
            }
          )
        }
      </div>
    )
  }
}

export default Comments;
