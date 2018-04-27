import React, {Component} from 'react'

import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import SideMenu from '../components/menu/SideMenu'


require('../stylesheets/pages/basePage.scss')

class BasePage extends Component {

  render() {
    return (
      <div className="base-page">
        <Header/>
        <div className="base-page-content">
          <SideMenu/>
          {this.props.children}
        </div>
        <Footer/>
      </div>
    )
  }
}

export default BasePage;
