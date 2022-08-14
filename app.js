const express = require('express')
const cors    = require('cors')
const bodyParser = require('body-parser')
const app     = express()
const port    = 3000

// Servicio de producto
const Raza = require('./services/raza.services')
const Tipomascota = require('./services/tipomascota.services')
const Mascota = require('./services/mascota.services')

app.use(cors())
app.use(bodyParser.json())

// Razas
app.get('/razas', async (req, res) => {
    const razas = await Raza.todos()
    res.send(razas)
})
// new
// app.post('/razas', async (req, res) => {
//     const razas  = req.body
//     console.log(req.headers.token)
//     const respuesta = await Razas.nuevo(razas)
//     res.send(respuesta)
// })
// // edit
// app.put('/razas',  async (req, res) => {
//     const razas  = req.body
//     const respuesta = await Razas.editar(razas)
//     res.send(respuesta)
// })

// app.delete('/razas/:id', async (req, res) => {
//     const id  = req.params.id
//     const respuesta = await Razas.eliminar(id)
//     res.send(respuesta)
// })

// app.get('/razas/:id', async (req, res) => {
//     const id  = req.params.id
//     const respuesta = await Razas.porId(id)
//     res.send(respuesta)
// })


// tipomascotas
app.get('/tipomascotas', async (req, res) => {
    const tipomascotas = await Tipomascota.todos()
    res.send(tipomascotas)
})

// Mascota
app.get('/mascotas', async (req, res) => {
    const mascotas = await Mascota.todos()
    res.send(mascotas)
})

// new Mascota
app.post('/mascotas', async (req, res) => {
    const mascotas  = req.body
    const respuesta = await Mascota.nuevo(mascotas)
    res.send(respuesta)
})
// obtener mascota por id
app.get('/mascotas/:id', async (req, res) => {
    const id  = req.params.id
    const respuesta = await Mascota.porId(id)
    res.send(respuesta)
})

// actualizar mascota por id
app.put('/mascotas', async (req, res) => {
    const mascotas  = req.body
    const respuesta = await Mascota.editar(mascotas)
    res.send(respuesta)
})

app.listen(port, (req, res) => {
    console.log("running ::OK ", port)
})