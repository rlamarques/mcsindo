import React, {Component} from 'react'
import BasePage from './BasePage'

import Videos from '../components/video/Videos'

class VideosPage extends Component {
  render() {
    return (
      <BasePage>
        <Videos/>
      </BasePage>
    )
  }
}

export default VideosPage;
