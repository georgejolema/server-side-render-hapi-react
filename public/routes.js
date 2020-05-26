'use strict';

const React = require('react');
const { Route } = require('react-router-dom');
const List = require('./pages/list');
const Add = require('./pages/add');

const routes = (props) => (
    <div>
        <Route exact path='/list' render={() => <List {...props}/>} />
        <Route exact path='/add' render={() => <Add {...props} />} />
    </div>
);

module.exports = routes;
