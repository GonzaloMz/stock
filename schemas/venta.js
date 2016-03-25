var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ventaSchema = new Schema({
	productos: [{
		producto: Schema.Types.ObjectId,
    		cantidad: Number,
    		precio: Number
	}],
    	fecha: { type: Date, default: Date.now }
});

exports.VentaModel = mongoose.model('VentaModel', ventaSchema);
