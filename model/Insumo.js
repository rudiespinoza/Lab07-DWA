const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InsumoSchema = new Schema({
    idinsumo: Number,
    nominsumo: String,
    idproveedor: Number,
    preUni: Number,
    stock: Number
});

module.exports = mongoose.model('Insumo', InsumoSchema);
