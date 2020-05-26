'use strict';

const Joi = require('joi');
const { getBikes, addBikes, deleteBikes } = require('./../../handlers/bikes');

module.exports = [{
    method: 'GET',
    path: '/api/bikes',
    handler: getBikes
},
{
    method: 'POST',
    path: '/api/bikes',
    handler: addBikes,
    options: {
        validate: {
            payload: {
                description: Joi.string().min(1).max(50).required(),
                color: Joi.string().min(1).max(50).required(),
                model: Joi.string().min(1).max(50).required(),
                price: Joi.number().required()
            }
        }
    }
},
{
    method: 'DELETE',
    path: '/api/bikes/{id}',
    handler: deleteBikes
}];
