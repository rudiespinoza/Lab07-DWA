const express = require('express');
const app = express();

const db = require('./db'); // Asegúrate que la conexión a la DB esté configurada en este archivo

// Seteamos el motor de plantillas ejs
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Importar rutas
const clientes = require('./routes/clientes');
const proveedores = require('./routes/proveedores'); 
const insumos = require('./routes/insumos'); 

// Prefijos de rutas
app.use('/clientes', clientes); // Todas las rutas de clientes estarán bajo /clientes
app.use('/proveedores', proveedores); // Todas las rutas de proveedores estarán bajo /proveedores
app.use('/insumos', insumos); // Todas las rutas de insumos estarán bajo /insumos

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static('public'));

// Escuchar el servidor en el puerto 4000
app.listen(4000, () => {
    console.log('¡Server UP! en http://localhost:4000');
});
