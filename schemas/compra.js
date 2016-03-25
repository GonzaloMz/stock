var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var compraSchema = new Schema({
	productos: [{
		producto: Schema.Types.ObjectId,
    		cantidad: Number,
    		costo: Number
	}],
    	proveedor: Schema.Types.ObjectId,
    	fecha: { type: Date, default: Date.now }
});

exports.CompraModel = mongoose.model('CompraModel', compraSchema);
