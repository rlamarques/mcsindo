import React, {Component} from 'react'
import BasePage from './BasePage'
import Comment from '../components/comment/Comments'

class CommentsPage extends Component {

  render() {
    return (
      <BasePage>
        <Comment/>
      </BasePage>
    )
  }
}

export default CommentsPage;
