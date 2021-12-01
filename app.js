const express = require('express')
const app = express()
const PORT = 8080
const Contenedor = require('./contenedor')

const Archivo = new Contenedor("./productos.json")

const run = async () => {
    await Archivo.init()
}

run()


app.listen(PORT, () => {
    console.log(`App escuchando el puerto ${PORT}`)
})

app.get('/' , (req, res) => {
    res.send("hola")
})

app.get('/productos', (req, res) => {
    res.send(Archivo.getAll())
})


app.get('/productoRandom', (req, res) => {
    res.send(Archivo.productoRandom())
})