import React, {Component} from 'react'

import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import SideMenu from '../components/menu/SideMenu'


require('../stylesheets/pages/basePage.scss')

class BasePage extends Component {

  render() {
    return (
      <div className="base-page">
        <div className="base-page-content">
          <SideMenu/>
          <div className="base-page-content-right" style={{marginLeft : "185px", padding: "17px"}}>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default BasePage;
