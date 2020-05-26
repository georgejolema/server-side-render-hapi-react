/* global window document */
'use strict';
require('bootstrap');
require('./css/custom.scss');
require('whatwg-fetch');
const { BrowserRouter } = require('react-router-dom');

const React = require('react');
const ReactDOM = require('react-dom');
const routes = require('./routes');

const AppComponent = (props) => (<BrowserRouter>{routes(props)}</BrowserRouter>);

const App = React.createFactory(AppComponent);
const mountNode = document.getElementById('app-mount');
const serverState = window.state;


ReactDOM.hydrate(App(serverState), mountNode);
