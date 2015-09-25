import {ResourceEdit} from '../react/resources/Edit.js';
import {ResourceIndex} from '../react/resources/Index.js';
import {IndexPage} from '../react/IndexPage.js';
var Router = require('react-router');
var React = require('react');

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  render: function () {
    return (<RouteHandler/>);
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="resources" handler={App}>
      <Route path=":id" handler={ResourceEdit}/>
      <Route path=":id/edit" handler={ResourceEdit}/>
      <DefaultRoute name="resourceIndex" handler={ResourceIndex}/>
    </Route>
    <DefaultRoute name="index" handler={IndexPage}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('reactContainer'));
});

