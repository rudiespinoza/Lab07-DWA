const Insumo = require('../model/Insumo');

module.exports.mostrar = (req, res) => {
    Insumo.find({}, (error, insumos) => {
        if (error) {
            return res.status(500).json({
                message: 'Error mostrando los insumos'
            });
        }
        return res.render('insumos', { insumos });
    });
};

module.exports.crear = (req, res) => {
    const insumo = new Insumo({
        nombre: req.body.nombre,
        cantidad: req.body.cantidad,
        precio: req.body.precio
    });
    insumo.save((error, insumo) => {
        if (error) {
            return res.status(500).json({
                message: 'Error al crear el insumo'
            });
        }
        res.redirect('/insumos');
    });
};
