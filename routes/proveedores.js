const express = require('express');
const router = express.Router();
const Proveedor = require('../model/Proveedor');

// Listar proveedores
router.get('/', async (req, res) => {
    const proveedores = await Proveedor.find();
    res.render('proveedores', { proveedores });
});

// Crear nuevo proveedor
router.post('/crear', async (req, res) => {
    const nuevoProveedor = new Proveedor(req.body);
    await nuevoProveedor.save();
    res.redirect('/proveedores');
});

// Eliminar proveedor
router.get('/borrar/:id', async (req, res) => {
    await Proveedor.findByIdAndDelete(req.params.id);
    res.redirect('/proveedores');
});

module.exports = router;
