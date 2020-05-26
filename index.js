'use strict';

require('babel-register');
require('./database');
const server = require('./server');

const init = async () => {
    const app = await server();
    await app.start();
    console.log(`Server running at: ${app.info.uri}`);
};

init();

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});