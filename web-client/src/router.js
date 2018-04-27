import React from 'react'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

import HomePage from './pages/HomePage'

require('./stylesheets/base/base.scss');
export default (

  <BrowserRouter>
    <div>
      <Route exact path='/' component={HomePage}/>
    </div>
  </BrowserRouter>

)
