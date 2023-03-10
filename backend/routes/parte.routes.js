'use strict'
var express=require('express');
var router=express.Router();
var parteController=require('../controllers/parte.controller');
const parte = require('../models/parte');

var multiparty=require('connect-multiparty');
var multipartyMiddleWare=multiparty({uploadDir:'./uploads'});

// guardar parte
router.post('/parte',parteController.guardarParte);
// obtener partes
router.get('/parte/:id',parteController.obtenerPartePorId);
router.get('/parteM/:marca',parteController.obtenerPartesPorMarca);
router.get('/parteN/:nombre',parteController.obtenerPartesPorNombre);
// obtener partes
router.get('/parte',parteController.obtenerPartes);
// actualizar parte por id
router.put('/parte',parteController.actualizarPartePorId);
// eliminar parte por nombre
router.delete('/parte/:id',parteController.eliminarPartePorId);

//agregar una imagen
router.post('/subir-imagen/:id',multipartyMiddleWare,parteController.uploadImage);
//recuperar una imagen
router.get('/get-imagen/:imagen',parteController.getImage);

module.exports=router;