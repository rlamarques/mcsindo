import React from 'react'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

import HomePage from './pages/HomePage'
import CommentsPage from './pages/CommentsPage'
import AddVideoPage from './pages/AddVideoPage'
import VideosPage from './pages/VideosPage'


require('./stylesheets/base/base.scss');
export default (

  <BrowserRouter>
    <div>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/comments' component={CommentsPage}/>
      <Route exact path='/addVideo' component={AddVideoPage}/>
      <Route exact path='/videos' component={VideosPage}/>
    </div>
  </BrowserRouter>

)
