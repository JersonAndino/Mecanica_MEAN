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
        parte.imagen=null;
        //console.log(parte);
        Parte.findOne({nombre:parte.nombre,marca:parte.marca,modelo:parte.modelo})
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
    obtenerPartePorId:function(req,res){
        var idBuscar=req.params.id;
        Parte.findById(idBuscar)
        .then(result => {
            if (!result) return res.status(404).send({message:'No se encontraron datos con los valores proporcionados'});
            return res.status(200).send({result});
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
        var parte = new Parte(req.body);
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
    },
    uploadImage:function(req,res){
        var idParte=req.params.id;
        var fileName='Imagen no subida';

        if(req.files){
            var filePath=req.files.imagen.path;
            var file_split=filePath.split('\\');
            var fileName=file_split[1];
            var extSplit=fileName.split('\.');
            var fileExt=extSplit[1];
            if(fileExt=='png'||fileExt=='jpg'||fileExt=='jpeg'||fileExt=='gif'){
                Parte.findByIdAndUpdate(idParte,{imagen:fileName},{new:true})
                .then(result => {
                    if (!result) return res.status(404).send({message:'No se pueden actualizar los datos'});
                    return res.status(200).send({result});
                })
                .catch(err => {
                    return res.status(200).send({message:'Error al actualizar los datos'});
                });
            }else{
                fs.unlink(filePath,(err)=>{
                    return res.status(200).send({message:'La extension no es valida'});
                });
            }
        }else{
            return res.status(200).send({message:fileName});
        }
    },
    getImage:function(req,res){
        var file=req.params.imagen;
        var path_file="./uploads/"+file;
        fs.exists(path_file,(exists)=>{
            if (exists){
                return  res.sendFile(path.resolve(path_file));
            }else{
                res.status(200).send({message:"La imagen no existe"});
            }
        })
    }
}

module.exports=controller;