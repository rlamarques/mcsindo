import React, {Component} from 'react'

require("../../stylesheets/components/loading.scss")

class Loading extends Component {

  render () {
    return (
      <span className="loading fa fa-spinner fa-spin fa-3x"/>
    )
  }
}

export default Loading;
