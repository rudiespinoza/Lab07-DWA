const Proveedor = require('../model/Proveedor');

module.exports.mostrar = (req, res) => {
    Proveedor.find({}, (error, proveedores) => {
        if (error) {
            return res.status(500).json({
                message: 'Error mostrando los proveedores'
            });
        }
        return res.render('proveedores', { proveedores });
    });
};

module.exports.crear = (req, res) => {
    const proveedor = new Proveedor({
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        direccion: req.body.direccion
    });
    proveedor.save((error, proveedor) => {
        if (error) {
            return res.status(500).json({
                message: 'Error al crear al proveedor'
            });
        }
        res.redirect('/proveedores');
    });
};
