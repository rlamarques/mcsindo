import React , {Component} from 'react'


class CommentPreview extends Component {
  render () {
    const {comment} = this.props;
    return (
      <div className="comment-preview" style={
        {
          margin : "10px",
          backgroundColor: "aliceblue",
          padding : "10px",
          borderRadius : "10px"
        }}>
        <div>
          <div style= {
            {
              fontWeight : "600",
              marginBottom : "10px"
            }
          }>
            {comment.author.name}
          </div>
        </div>
        {comment.text}
      </div>
    )
  }
}

export default CommentPreview;
