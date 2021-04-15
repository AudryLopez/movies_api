import axios from "axios";


const callApi = ()=>{
    axios.get('http://localhost:8000/peliculas')
        .then(function (response) {
            console.log(response);
  })}

export default callApi;