/*
import {ResourceEdit} from '../react/resources/Edit.js';
import {ResourceIndex} from '../react/resources/Index.js';
*/
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router';
import { IndexPage } from '../react/IndexPage.js';

render((
  <Router history={hashHistory}>
    <Route path="/" component={IndexPage}/>
  </Router>

), document.getElementById('reactContainer'))
