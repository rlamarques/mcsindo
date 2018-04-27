import React, {Component} from 'react'

import CommentPreview from './CommentPreview'

class Comments extends Component {


  constructor(props) {
    super(props)

    this.state = {
      comments : []
    }

    this.fetchComments = this.fetchComments.bind(this);
  }

  fetchComments () {
    var that = this;
    $.ajax({
      url: API_URL + "db/comments",
    }).then(
      (data, textStatus, jqXHR) => {
        that.setState({
          comments : JSON.parse(data)
        })
    })
  }

  componentDidMount () {
    this.fetchComments();
  }

  render () {
    const {comments} = this.state;
    return (
      <div className="comments">
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
