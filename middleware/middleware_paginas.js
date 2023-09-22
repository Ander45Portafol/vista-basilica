//Importación de axios para las peticiones
import axios from "axios";

// Variable para almacenar las promesas de las peticiones pendientes
let axios_pendientes = [];

// Agregar un interceptor de solicitud para añadir la promesa de la petición al array
axios.interceptors.request.use(config => {
    const PETICION = new Promise((resolve, reject) => {
        config.metadata = { resolve, reject };
    });
    axios_pendientes.push(PETICION);
    return config;
});

// Agregar un interceptor de respuesta para resolver la promesa cuando se completa la petición
axios.interceptors.response.use(response => {
    response.config.metadata.resolve();
    axios_pendientes = axios_pendientes.filter(p => p !== response.config.metadata.promise);
    return response;
}, error => {
    error.config.metadata.reject();
    axios_pendientes = axios_pendientes.filter(p => p !== error.config.metadata.promise);
    return Promise.reject(error);
});

export default defineNuxtRouteMiddleware(async (to, from) => {
    // Esperar hasta que todas las peticiones axios se hayan completado
    await Promise.all(axios_pendientes);

    //Constante para guardar los permisos del usuario
    const PERMISOS_TRUE = [];
    if (process.client) {
        //Si el usuario no tiene un token, es enviado a la página del login
        if (!localStorage.getItem('token') || (localStorage.getItem('token') && !localStorage.getItem('usuario'))) {
            console.log('usuario')
            return navigateTo('/');
        } else {
            try {
                //Se realiza la petición axios para verficiar que sea un token válido
                const res = await axios.post('/verificar-token/', localStorage.getItem('token'), {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                })

                //Si el token es válido
                if (res.data.message == 'Acceso concedido.') {
                    //Se realiza la petición axios
                    const res = await axios.post("/accesos-usuario", localStorage.getItem('token'), {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('token')}`,
                        },
                    });

                    //Se recorre el retorno del axios, filtrando solamente los registros que sean true
                    for (const key in res.data.data.data[0]) {
                        if (res.data.data.data[0].hasOwnProperty(key) && res.data.data.data[0][key] === true) {
                            PERMISOS_TRUE.push(key);
                        }
                    }

                    //Se evalua si el usuario tiene acceso a la página que intenta acceder
                    if ((to.path === '/enlace_amigo' || to.path === '/misa' || to.path === '/grupo_parroquial' || to.path === '/categoria_grupo' || to.path === '/configuracion_parroquia') && !PERMISOS_TRUE.includes('acceso_parroquia')) {
                        return navigateTo('/');
                    } else if ((to.path === '/usuario' || to.path === '/rol_usuario') && !PERMISOS_TRUE.includes('acceso_usuarios')) {
                        return navigateTo('/');
                    } else if ((to.path === '/pagina' || to.path === '/seccion') && !PERMISOS_TRUE.includes('acceso_navegabilidad')) {
                        return navigateTo('/');
                    } else if (to.path === '/anuncio' && !PERMISOS_TRUE.includes('acceso_anuncios')) {
                        return navigateTo('/');
                    } else if ((to.path === '/contacto' || to.path === '/mensaje') && !PERMISOS_TRUE.includes('acceso_mensajes')) {
                        return navigateTo('/');
                    } else if ((to.path === '/donacion' || to.path === '/proyecto') && !PERMISOS_TRUE.includes('acceso_donaciones')) {
                        return navigateTo('/');
                    } else if ((to.path === '/donante' || to.path === '/rango') && !PERMISOS_TRUE.includes('acceso_donantes')) {
                        return navigateTo('/');
                    } else if (to.path === '/calendario' && !PERMISOS_TRUE.includes('acceso_calendario')) {
                        return navigateTo('/');
                    } else if ((to.path === '/personal' || to.path === '/tipo_personal') && !PERMISOS_TRUE.includes('acceso_personal')) {
                        return navigateTo('/');
                    }
                } else {
                    console.log(res.data.message)
                    //Si el usuario tiene un token invalido es enviado a la página del login
                    return navigateTo('/');
                }

            } catch (error) {
                console.log(error);
            }
        }
    }
});
