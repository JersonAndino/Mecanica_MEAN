'use strict'
var express=require('express');
var router=express.Router();
var parteController=require('../controllers/parte.controller');
const parte = require('../models/parte');

// guardar parte
router.post('/parte',parteController.guardarParte);
// obtener partes
router.get('/parteM/:marca',parteController.obtenerPartesPorMarca);
router.get('/parteN/:nombre',parteController.obtenerPartesPorMarca);
// obtener partes
router.get('/parte',parteController.obtenerPartes);
// actualizar parte por id
router.put('/parte',parteController.actualizarPartePorId);
// eliminar parte por nombre
router.delete('/parte/:id',parteController.eliminarPartePorId);

module.exports=router;