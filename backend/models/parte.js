'use strict'
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var parteSchema=Schema({
    nombre:String,
    marca:String,
    modelo:String,
    precio:Number,
    imagen:String
});

module.exports=mongoose.model('Parte',parteSchema);