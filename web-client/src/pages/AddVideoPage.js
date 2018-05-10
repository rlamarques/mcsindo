import React, {Component} from 'react'
import BasePage from './BasePage'
import AddVideo from '../components/video/AddVideo'

class AddVideoPage extends Component {

  render() {
    return (
      <BasePage>
        <AddVideo/>
      </BasePage>
    )
  }
}

export default AddVideoPage;
