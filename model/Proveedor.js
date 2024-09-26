const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProveedorSchema = new Schema({
    idproveedor: Number,
    nombrecia: String
});

module.exports = mongoose.model('Proveedor', ProveedorSchema);
