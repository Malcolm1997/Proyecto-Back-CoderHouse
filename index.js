const express = require('express')
const app = express()
const PORT = 8080


app.listen(PORT, () => {
    console.log(`App escuchando el puerto ${PORT}`)
})

app.get('/', (req, res) => {

    
})

app.get('/productos', (req, res) => {
    res.send('Hola')
})


app.get('/productoRandom', (req, res) => {
    
})