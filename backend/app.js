const express = require('express')
const cors = require('cors')
const DB = require('./database')
const app = express();

const port = 8000

app.use(cors)

app.get('/empleados/:id', (req, res)=>{
  res.status(404).send("<h3>Bad request</h3>")
})
app.get('/', (req, res) =>{
  res.send('<a href="/empleados">empleados</a>')
})
app.get('/empleados', DB.empleados)
app.get('/peliculas', DB.peliculas)
app.get('/peliculas/?name&category', DB.peliculasId)

app.put('/createpelicula/:nombre', DB.createpelicula)

app.listen(port, (req, res) => {
  console.log("Running:", port)
})