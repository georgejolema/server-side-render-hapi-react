const Hapi = require('hapi');
const Path = require('path');
const vision = require('vision');
const inert = require('inert');
const engine = require('hapi-react-views');
const routes = require('./routes');

async function createServer() {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    await server.register(vision);
    await server.register(inert);

    server.route(routes);

    server.views({
        defaultExtension: 'js',
        relativeTo: __dirname,
        path: 'public',
        engines: {
            js: engine
        },
        compileOptions: {
            renderMethod: 'renderToString',
            layoutPath: Path.join(__dirname, 'public'),
            layout: 'index'
        }
    });

    return server;
}

module.exports = createServer;
