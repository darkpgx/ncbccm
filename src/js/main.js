/*
import {ResourceEdit} from '../react/resources/Edit.js';
*/
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { IndexPage } from '../react/IndexPage.js';
import { ResourceIndex } from '../react/resources/Index.js';

const App = React.createClass({
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
})

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={IndexPage} />
      <Route path="resources/:id" component={ResourceIndex} />
    </Route>
  </Router>

), document.getElementById('reactContainer'))
