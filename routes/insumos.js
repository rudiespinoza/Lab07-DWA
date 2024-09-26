const express = require('express');
const router = express.Router();
const Insumo = require('../model/Insumo');

// Listar insumos
router.get('/', async (req, res) => {
    const insumos = await Insumo.find();
    res.render('insumos', { insumos });
});

// Crear nuevo insumo
router.post('/crear', async (req, res) => {
    const nuevoInsumo = new Insumo(req.body);
    await nuevoInsumo.save();
    res.redirect('/insumos');
});

// Eliminar insumo
router.get('/borrar/:id', async (req, res) => {
    await Insumo.findByIdAndDelete(req.params.id);
    res.redirect('/insumos');
});

module.exports = router;
