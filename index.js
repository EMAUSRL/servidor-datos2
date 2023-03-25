const express = require('express') 
const catalogo = require('./catalogo.js')
const PORT = process.env.PORT || 3000
const app = new express()

app.get( '/' , ( req , res )=>{
    res
        .send(JSON.stringify(catalogo.obtenerDatos()))
})

app.listen(PORT, () => {
    console
        .log('Servidor corriendo...')
});
