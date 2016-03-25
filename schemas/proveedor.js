var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var proveedorSchema = new Schema({
    nombre: String,
    direccion: String,
    telefono: String
});

exports.ProveedorModel = mongoose.model('ProveedorModel', proveedorSchema);
