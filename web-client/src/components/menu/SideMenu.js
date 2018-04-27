import React, {Component} from 'react'

require("../../stylesheets/components/sideMenu.scss")
class SideMenu extends Component {

  render () {
    return (
      <div className="side-menu">
        <div className="side-menu-item">
          <i className="far fa-comment fa-2x"/>
          <div className="section-title">
            Comments
          </div>
        </div>
      </div>
    )
  }
}

export default SideMenu;
