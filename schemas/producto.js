var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productoSchema = new Schema({
	codigo: {type:Number,unique:true,required:true},
	descripcion: {
		color: String,
    		tipo: String
	},
	precio: {
		lista: Number,
    		descuento: Number,
    		porcentajeDescuento:Number
	},
	stock: Number,
	proveedor: Schema.Types.ObjectId
});

var ProductoModel = mongoose.model('Producto', productoSchema);

exports.ProductoModel = ProductoModel;


