import React, {Component} from 'react'
import {Link} from 'react-router-dom'


require("../../stylesheets/components/sideMenu.scss")
class SideMenu extends Component {

  render () {
    return (
      <div className="side-menu">
        <Link to="comments" style={{
          color: "#444444",
        }}>
          <div className="side-menu-item">
            <i className="far fa-comment fa-2x"/>
            <div className="section-title">
              Comments
            </div>
          </div>
        </Link>
        <Link to="addVideo" style={{
          color: "#444444",
        }}>
          <div className="side-menu-item">
            <i className="fas fa-plus fa-2x"/>
            <div className="section-title">
              Add video
            </div>
          </div>
        </Link>
        <Link to="videos" style={{
          color: "#444444",
        }}>
          <div className="side-menu-item">
            <i className="fas fa-video fa-2x"/>
            <div className="section-title">
              videos
            </div>
          </div>
        </Link>
      </div>
    )
  }
}

export default SideMenu;
