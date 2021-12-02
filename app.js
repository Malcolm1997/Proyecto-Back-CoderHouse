const express = require('express')
const app = express()
const PORT = 8080
const Contenedor = require('./contenedor')

const Archivo = new Contenedor("./productos.json")

const run = async () => {
    await Archivo.init()
}

run()


app.listen(process.env.PORT || PORT, () => {
    console.log(`App escuchando el puerto ${PORT}`)
})

app.get('/' , (req, res) => {
    res.send("hola")
})

app.get('/api/productos', (req, res) => {
    res.send(Archivo.getAll())
})

app.get('/api/productos/:id', (req, res) => {
    let id = req.params.id;
})

app.post('/api/productos', (req, res) => {

})

app.put('/api/productos/:id', (req, res) => {

})

app.delete('/api/productos/:id', (req, res)=> {

})