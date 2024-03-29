'use strict'
var express=require('express');
var bodyParser=require('body-parser');
var app=express();
var sessions=require('express-session');
const cookieParser = require('cookie-parser');
const oneDay = 1000 * 60 * 60 * 24;
// var tipoRoutes=require('./routes/tipo.routes');
// var usuarioRoutes=require('./routes/usuario.routes');
// var ventaRoutes=require('./routes/venta.routes');
var parteRoutes=require('./routes/parte.routes');
//var cors = require('cors');

//app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, X-Request-With, Content-Type,Accept, Access-Control-Allow, Request-Method')
    res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE');
    res.header('Allow','GET, POST, OPTIONS, PUT, DELETE');
    res.header("Acess-Control-Allow-Credentials",true);
    next();
});

app.use((req, res, next) => {
    //allow access to current url. work for https as well
    res.setHeader('Access-Control-Allow-Origin','*');
    res.removeHeader('x-powered-by');
    //allow access to current method
    res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('X-Foo', 'bar');
    res.setHeader('Content-Type', 'text/plain');
    next();
});
  
app.use(sessions({
    secret: "qwertpoiuyasdfgñlkjhzxcvbmnOwO",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}));
app.use(cookieParser());
//rutas
/*
app.get('/',(req,res)=>{
    res.status(456).send(
        '<h1>Hola, Bienvenido</h1>'
    )
})
*/
app.use('/',parteRoutes);
module.exports=app;