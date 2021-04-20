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
app.get('/empleados', DB.empleados)
app.get('/peliculas', DB.peliculas)
app.get('/peliculas/:id', DB.peliculasId)

app.put('/api/createpelicula/:id', DB.createpelicula)

app.listen(port, (req, res) => {
  console.log("Running:", {port})
})