//Importación de axios para las peticiones
import axios from "axios";

export default defineNuxtRouteMiddleware(async (to, from) => {
    if (process.client) {
        //Si el usuario no tiene un token, es enviado a la página del login
        if (!localStorage.getItem('token') || (localStorage.getItem('token') && !localStorage.getItem('usuario'))) {
            window.location.href = '/';
        }else{
            try {
                //Se realiza la petición axios para verficiar que sea un token válido
                const res = await axios.post('/verificar-token/', localStorage.getItem('token'), {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });

                //Si el token es válido
                if (res.data.message != 'Acceso concedido.') {
                    window.location.href = '/';
                }
            }catch (error) {
                console.log(error);
            }  
        }
    }
});