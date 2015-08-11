var Hapi = require('hapi');

// Create a server with a host and port
var server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

server.views({
  engines: {
    html: require('handlebars')
  },
  path: __dirname + '/templates'
})

// Add the route
server.route({
  method: ['GET', 'POST'],
  path:'/hello',
  handler: function (request, reply) {
    request.foo()
    var name = request.payload && request.payload.name || 'NodeMN'
    reply.view('hello', { name: name });
  }
});

server.route({
  method: 'GET',
  path: '/form',
  handler: function (request, reply) {
    reply.view('form')
  }
})

server.register([require('./stuff')], function() {
  // Start the server
  server.start();
})
