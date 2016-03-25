/*
 * GET home page.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var producto = require('../schemas/producto.js');

exports.todosLosProductos = function(req, res){
	producto.ProductoModel.find(function  (err, productos) {
		res.json(productos);
	});
};

exports.altaDeProductoForm = function(req, res){
	res.render('altaDeProducto', {operacion:'Alta de Producto'});
};

exports.altaDeProductoPost= function(req, res){
	var body = req.body;
	var nuevoProducto = new producto.ProductoModel(body);
	/*nuevoProducto.codigo = body.codigo;
	nuevoProducto.descripcion.color = body.color;
	nuevoProducto.descripcion.ripo = body.tipo;*/
	nuevoProducto.save(function (err, product, numAffected) {
  		if (err) console.log(err);
	});
	res.send(nuevoProducto);
};

exports.modificacionDeProductoPost = function(req, res){
	var body = req.body;
	producto.ProductoModel.findOneAndUpdate(
			{_id:req.params.id}
			, body
			, function  (err, prod) {
				if (err)
					res.send(err);
				else
					res.send();
				console.log(new producto.ProductoModel().toJSON());
			});
}

exports.modificacionDeProductoForm = function(req, res){
	req.operacion="Modificacion De Producto";
	producto.ProductoModel.findById(req.params.id, function(err, prod){
		console.log(prod);
		prod.operacion="Modificacion De Producto";
		res.render('modificacionDeProducto', prod);
	});
};
