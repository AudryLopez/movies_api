import axios from "axios";


const callApi = ()=>{
    axios.get('http://localhost:8000/peliculas')
        .then(function (response) {
            response.forEach(element => console.log(element));
  })}

export default callApi;