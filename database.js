const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'prueba',
  password: 'admin',
  port: 5432,
})

const empleados = (req, res) =>{
    pool.query('select * from empleados', (error, results) =>{
        if(error){
            throw error
        }
        res.status(200).json(results.rows)
    }
)
}

const peliculas = (req, res) =>{
    pool.query('select * from peliculas', (error, results) =>{
        if(error){
            throw error
        }
        res.status(200).json(results.rows)
    }
)
}

const peliculasId = (req, res) =>{
    const id = parseInt(req.params.id)
    pool.query('select * from peliculas where codigo=$1', [id],(error, result) =>{
        if(error){
            throw error
        }
            res.status(200).json(result.rows)
    })
}

const createpelicula = (req, res) =>{
    const {name, calificacion} = req.body;
    pool.query('insert into peliculas ($1, $2)', [name,calificacion],(result, error)=>{
        if(error){
            throw error
        }
        res.status(201).send('Usuario registrado')
    })
}



module.exports = {
    empleados,
    peliculas,
    peliculasId,
    createpelicula,
};