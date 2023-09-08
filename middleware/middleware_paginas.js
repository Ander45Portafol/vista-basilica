import axios from "axios";

export default defineNuxtRouteMiddleware(async (to, from) => {
    const trueValuesArray = [];
    if (process.client) {
        if (!localStorage.getItem('token')) {
            return navigateTo('/');
        } else {
            try {
                const res = await axios.post('/verificar-token/', localStorage.getItem('token'), {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                })

                if (res.data.message == 'El token de acceso es valido.') {
                    const res = await axios.post("/accesos-usuario", localStorage.getItem('token'), {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('token')}`,
                        },
                    });

                    for (const key in res.data.data.data[0]) {
                        if (res.data.data.data[0].hasOwnProperty(key) && res.data.data.data[0][key] === true) {
                            trueValuesArray.push(key);
                        }
                    }

                    if ((to.path === '/pagina' || to.path === '/seccion') && trueValuesArray.includes('acceso_navegabilidad')) {
                        return navigateTo('/');
                    }else if((to.path === '/enlace_amigo' || to.path === '/misa' || to.path === '/grupos_parroquiales' || to.path === '/categoria_grupos' || to.path === '/configuracion_parroquia')){

                    }
                } else {
                    return navigateTo('/');
                }

            }catch (error) {
            console.log(error);
        }
    }
}
});
