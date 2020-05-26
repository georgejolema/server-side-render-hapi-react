'use strict';

const { renderBikes, defaultAction } = require('./../handlers/bikes');

module.exports =[{
    method: 'GET',
    path: '/list',
    handler: renderBikes
},
{
    method: 'GET',
    path: '/add',
    handler: defaultAction
}];
