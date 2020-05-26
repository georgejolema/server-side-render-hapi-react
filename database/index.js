'use strict';

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bikesStore', { useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB error connection'));
