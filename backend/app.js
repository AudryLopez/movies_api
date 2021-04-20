const express = require('express');
const cors = require('cors');
const DB = require('./database');
const app = express();

app.use(cors())

const port = 8000


app.get('/api/empleados/:id')
app.get('/', (req, res) =>{
  res.send('<a href="/empleados">empleados</a>')
})
app.get('/api/empleados', DB.empleados)
app.get('/api/peliculas', DB.peliculas)
app.get('/api/peliculas/:id', DB.peliculasId)

app.put('/api/createpelicula/:id', DB.createpelicula)

app.listen(port, (req, res) => {
  console.log("Running:", {port})
})