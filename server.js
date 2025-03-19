const express = require('express');
const port = 3000;
const app = express();

app.get ('/', (req,res)=> { //request , respuesta
    res.send("<h1>Hola mundo</h1>")
})

app.listen(port, () => {
    console.log('Servidor funcionando en el puerto 3000')
})