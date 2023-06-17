//Este archivo es para la configuración de axios

//Se importa axios
import axios from 'axios';

//Configuración del plugin
export default defineNuxtPlugin((nuxtApp) => {
    /*Se coloca la url base de todas las peticiones de axios, en este caso mandamos el servidor de la api, así solo tendremos que mandar un pedazo de la ruta a la que queremos acceder
    y no la ruta completa*/
    axios.defaults.baseURL = "http://127.0.0.1:8000/api";
    //Esta parte es para configurar que todo lo que retorne axios sea json
    axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
    axios.defaults.headers.common["Content-Type"] = "application/json";
    axios.defaults.headers.common["Accept"] = "application/json";
    //Esto se usa para que las rutas lleven la auntenticación del login
    axios.defaults.withCredentials = true;
})
