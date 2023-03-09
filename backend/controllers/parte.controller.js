'use strict'
var fs=require('fs');
const path=require('path');
var Parte=require('../models/parte');

var controller={
    guardarParte:function(req,res){
        var parte=new Parte();
        
        parte.nombre=req.body.nombre;
        parte.marca=req.body.marca;
        parte.modelo=req.body.modelo;
        parte.precio=req.body.precio;
        //console.log(parte);
        Parte.findOne({marca:parte.marca,modelo:parte.modelo})
        .then(result => {
            if (!result){
                parte.save()
                    .then(result => {
                        if (!result) return res.status(404).send({ message: "No se han podido guardar los datos" });
                        return res.status(200).send({ result });
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }else{
                return res.status(200).send({message:"Ya existe una parte registrada cone stas caracteristicas"});
            }
        })
        .catch(err => {
            console.log(err);
        });
        
        
    },
    obtenerPartesPorNombre:function(req,res){
        var nombreBuscar=req.params.nombre;
        Parte.find({nombre:nombreBuscar}).sort().exec()
        .then(result => {
            if (!result) return res.status(404).send({message:'No se encontraron datos con los valores proporcionados'});
            return res.status(200).send({result});
        })
        .catch(err => {
            console.log(err);
        });
    },
    obtenerPartesPorMarca:function(req,res){
        var marcaBuscar=req.params.marca;
        Parte.find({marca:marcaBuscar}).sort().exec()
        .then(result => {
            if (!result) return res.status(404).send({message:'No se encontraron datos con los valores proporcionados'});
            return res.status(200).send({result});
        })
        .catch(err => {
            console.log(err);
        });
    },
    obtenerPartes:function(req,res){
        Parte.find({}).sort().exec()
        .then(result => {
            if (!result) return res.status(404).send({message:'No se encontraron datos'});
            return res.status(200).send({result});
        })
        .catch(err => {
            console.log(err);
        });
    },
    actualizarPartePorId:function(req,res){
        var idBuscar=req.body._id;
        var parte;
        parte.marca=req.body.marca;
        parte.modelo=req.body.modelo;
        parte.precio=req.body.precio;
        Parte.findByIdAndUpdate(idBuscar,parte,{new:true})
        .then(result => {
            if (!result) return res.status(404).send({message:'No se han podido actualizar los datos'});
            return res.status(200).send({result});
        })
        .catch(err => {
            console.log(err);
        });
    },
    eliminarPartePorId:function(req,res){
        var idBuscar=req.params.id;
        Parte.findByIdAndDelete(idBuscar)
        .then(result => {
            if (!result) return res.status(404).send({message:'No se pudo eliminar el registro'});
            return res.status(200).send({result});
        })
        .catch(err => {
            console.log(err);
        });
    }
}

module.exports=controller;