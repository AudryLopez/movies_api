import React from 'react';

import axios from 'axios';

const CallApi = () =>{
    axios.get('http://127.0.0.1:8000/api/peliculas')
      .then(answ => (movie)=>{
        console.log(movie)
        return(
          <p>{movie.nombre}</p>
        )
      })
  }

  export default CallApi;