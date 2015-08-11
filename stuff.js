var stuff = module.exports = {
  register: function(server, options, next) {

    server.decorate('request', 'foo', function() {
      console.log('foo!')
    })

    next()
  }
}

stuff.register.attributes = {
  name: 'stuff',
  version: '1.0.0'
}
