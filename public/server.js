'use strict';

const React = require('react');
const routes = require('./routes');
const { StaticRouter } = require('react-router-dom');

const Server = (props) => {
    return (
        <StaticRouter context={{}}>{routes(props)}</StaticRouter>
    );
};

module.exports = Server;
