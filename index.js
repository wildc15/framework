const http=require('http');
const express= require('express');
const app=express();

app.use(express.static(__dirname+'/'));
app.get('/', (req,res)=>{
    res.render('index.html');
});

app.listen(4000);
console.log('Servidor corriendo en el puerto 4000');

//para cuando elegimos una opcion equivocada nos devuelva un error
app.get('*',(req,res)=>{
    res.sendFile(__dirname+'/unfound.html');
});
