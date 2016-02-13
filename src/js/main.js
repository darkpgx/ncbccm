/*
import {ResourceEdit} from '../react/resources/Edit.js';
import {ResourceIndex} from '../react/resources/Index.js';
*/
import {IndexPage} from '../react/IndexPage.js';
import { Router, Route, Link, hashHistory } from 'react-router';
import { render } from 'react-dom';
import React from 'react';

const App = React.createClass({
  render() {
    return (
      <div> 
        <h1> hello world </h1>
        {this.props.children}
      </div>
    )
  }
});

render((
<App />
), document.getElementById('reactContainer'))
