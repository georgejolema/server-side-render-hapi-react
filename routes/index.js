'use strict';

const apiBikesroutes = require('./api/bikes');
const bikesRoutes = require('./bikes');

const staticRoute = [{
    method: 'GET',
    path: '/public/{param*}',
    handler: {
        directory: {
            path: 'public/dist'
        }
    }
}];

const routes = [].concat(apiBikesroutes, bikesRoutes, staticRoute);

module.exports = routes;
