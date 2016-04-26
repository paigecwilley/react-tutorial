var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Rout;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../compenents/Main');
var Home = require('../compenents/Home');

var routes = (
	<Router>
		<Route path='/' component={Main}>
		<Route path='/home' compenent={Home}/>
	</Router>

);

module.exports routes;