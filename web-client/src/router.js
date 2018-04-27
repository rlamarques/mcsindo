import React from 'react'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

import HomePage from './pages/HomePage'
import CommentsPage from './pages/CommentsPage'

require('./stylesheets/base/base.scss');
export default (

  <BrowserRouter>
    <div>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/comments' component={CommentsPage}/>
    </div>
  </BrowserRouter>

)
