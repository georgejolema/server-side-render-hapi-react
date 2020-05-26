'use strict';

const mongoose = require('mongoose');

const bikesShema = new mongoose.Schema({
    description: String,
    color: String,
    price: Number,
    model: String
}, {collection: 'bikes'});

const Bikes = mongoose.model('bikes', bikesShema);

module.exports = Bikes;
