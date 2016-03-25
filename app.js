
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , mongoose = require('mongoose');

mongoose.connect('mongodb://192.168.0.7:3001/test');

var productoRoute = require('./routes/productos.js');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes------------

app.get('/', routes.index);

console.log(productoRoute.todosLosProductos);

app.get('/todosLosProductos', productoRoute.todosLosProductos);

app.get('/altaDeProducto', productoRoute.altaDeProductoForm);

app.post('/altaDeProducto', productoRoute.altaDeProductoPost);

app.get('/modificacionDeProducto/:id', productoRoute.modificacionDeProductoForm);

app.post('/modificacionDeProducto/:id', productoRoute.modificacionDeProductoPost);

//---------------

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});

