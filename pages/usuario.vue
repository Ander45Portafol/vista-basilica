<template>
    <div class="principal mt-4">
        <!--Componente para cargar el menu superior del formulario-->
        <MenuUsuarioDashboard class="mr-8" />
        <div class="mdprincipal flex-col mt-8 px-8 overflow-hidden">
            <div class="h-16 w-full rounded-xl flex justify-between items-center content-buttons max-[450px]:flex-wrap">
                <form action="" class="w-3/4 flex items-center h-full mt-4 max-[500px]:w-full">
                    <input type="text" class="rounded-lg relative w-2/4 h-12 outline-none max-[800px]:w-full min-w-[200px]"
                        placeholder="Buscar... (usuario/correo)" v-model="buscar.buscador" @keyup="buscarUsuarios()">
                    <div class="flex justify-end items-center">
                        <button class="absolute mr-4" type="button" @click="limpiarBuscador()"><svg width="20px"
                                height="20px" stroke-width="2" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" color="#000000">
                                <path d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
                                    stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                            </svg>
                        </button>
                    </div>
                </form>
                <div
                    class="buttons flex mt-4 mr-[-15px] max-[800px]:mt-4 min-w-[100px] max-[450px]:m-auto max-[450px]:mt-3">
                    <button @click="generarReporte"
                        class="w-12 h-10 flex items-center justify-center ml-4 rounded-lg max-[800px]:w-8 max-[800px]:h-8 max-[800px]:ml-2">
                        <svg width="28px" height="28px" stroke-width="2.5" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg" color="#000000">
                            <path
                                d="M3 17h18M6 10V3.6a.6.6 0 01.6-.6h10.8a.6.6 0 01.6.6V10m3 10.4V14a4 4 0 00-4-4H7a4 4 0 00-4 4v6.4a.6.6 0 00.6.6h16.8a.6.6 0 00.6-.6z"
                                stroke="#1B1C30" stroke-width="2.5"></path>
                            <path d="M17 13.01l.01-.011" stroke="#1B1C30" stroke-width="2.5" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                        </svg>
                    </button>
                    <button @click="visibilidadRegistros" type="button"
                        class="w-12 h-10 flex items-center justify-center ml-4 rounded-lg max-[800px]:w-8 max-[800px]:h-8 max-[800px]:ml-2 max-[450px]:mx-8">
                        <!-- Cambia el icono del botón según los registros que se quieren mostrar -->
                        <svg v-if="registros_visibles" width="28px" height="28px" stroke-width="2.5" viewBox="0 0 24 24"
                            fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                            <path d="M12 14a2 2 0 100-4 2 2 0 000 4z" stroke="#000000" stroke-width="2.5"
                                stroke-linecap="round" stroke-linejoin="round"></path>
                            <path
                                d="M21 12c-1.889 2.991-5.282 6-9 6s-7.111-3.009-9-6c2.299-2.842 4.992-6 9-6s6.701 3.158 9 6z"
                                stroke="#000000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <svg v-else width="28px" height="28px" stroke-width="2.5" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg" color="#000000">
                            <path d="M3 3l18 18M10.5 10.677a2 2 0 002.823 2.823" stroke="#000000" stroke-width="2.5"
                                stroke-linecap="round" stroke-linejoin="round"></path>
                            <path
                                d="M7.362 7.561C5.68 8.74 4.279 10.42 3 12c1.889 2.991 5.282 6 9 6 1.55 0 3.043-.523 4.395-1.35M12 6c4.008 0 6.701 3.158 9 6a15.66 15.66 0 01-1.078 1.5"
                                stroke="#000000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </button>
                    <button id="btnadd" type="button"
                        class="w-20 h-10 flex items-center justify-center mx-4 font-bold rounded-lg max-[800px]:w-8 max-[800px]:h-8 max-[800px]:ml-2 max-[450px]:ml-0">
                        <svg width="24px" height="24px" stroke-width="2.5" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg" color="#FFFFFF">
                            <path
                                d="M8 12h4m4 0h-4m0 0V8m0 4v4M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                                stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
            <p class="text-black text-lg"></p>
            <div class="line bg-slate-800 h-0.5 mt-4 w-full min-w-[200px]"></div>
            <div class="h-screen">
                <p v-if="usuarios.length > 0 && !ceroRegistrosEncontrados"
                    class="font-extrabold text-slate-900 mt-8 ml-4 max-[425px]:mt-16">{{ usuarios[pagina -
                        1].length
                    }}<span class="text-gray-500 font-normal ml-2">registro encontrado!</span></p>
                <p v-else class="font-extrabold text-slate-900 mt-8 ml-4 max-[425px]:mt-16">
                    -
                    <span class="text-gray-500 font-normal ml-2">registros encontrados!</span>
                </p>
                <!-- Alerta a mostrar el usuario busca algo que no coincide con ningún registro -->
                <div class="flex-col">
                    <div v-if="usuarios.length == 0 && ceroRegistrosEncontrados">
                        <div class="flex items-center px-4 py-6 mt-5 mb-4 text-sm text-purpleLogin border-2 border-purpleLogin rounded-lg bg-transparent"
                            role="alert">
                            <svg class="flex-shrink-0 inline w-6 h-6 mr-3" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                            </svg>
                            <div class="text-base">
                                <span class="font-medium">No se encontraron registros, </span> la petición realizada no
                                obtuvo resultados.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tables overflow-y-scroll h-3/5 pr-4">
                    <div v-if="usuarios.length == 0 && !ceroRegistrosEncontrados"
                        class="loadingtable overflow-hidden h-full pr-4">
                        <div class="contained-data flex-col" v-for="number in 6" :key="number">
                            <div
                                class="border-4 border-slate-300 animate-pulse flex justify-between mt-4 rounded-xl p-4 max-[400px]:flex-wrap max-[400px]:w-full min-w-[200px]">
                                <div class="flex justify-start w-3/4 items-center max-[400px]:w-full">
                                    <div class="h-16 w-16 bg-slate-300 mr-5 rounded-2xl max-[600px]:hidden"></div>
                                    <div class="datainfo flex-col max-[400px] p-0 w-full ml-0 mt-2 text-center">
                                        <div
                                            class="h-4 bg-slate-300 rounded-full dark:bg-gray-700 w-48 max-[450px]:w-40 max-[400px]:w-full mb-4">
                                        </div>
                                        <div
                                            class="h-3 bg-slate-300 rounded-full dark:bg-gray-700 w-1/2 mb-2.5 max-[400px]:w-full">
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="buttons-data flex justify-center items-center max-[750px]:flex-col max-[400px]:flex-row max-[400px]:m-auto max-[400px]:mt-2">
                                    <div
                                        class="bg-slate-300 h-10 w-10 ml-4 rounded-md flex items-center justify-center max-[750px]:ml-0 max-[750px]:mt-2 max-[400px]:mt-0 max-[400px]:ml-2">
                                    </div>
                                    <div
                                        class="bg-slate-300 h-10 w-10 ml-4 rounded-md flex items-center justify-center max-[750px]:ml-0 max-[750px]:mt-2 max-[400px]:mt-0 max-[400px]:ml-8">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <TablesUsuarios v-if="usuarios.length > 0" :datos_usuarios="usuarios" :actualizar_datos="cargarTabla" :paginacion="pagina" />
                </div>
                <div class="flex justify-center mt-6">
                    <Paginacion v-if="usuarios.length > 1 && !ceroRegistrosEncontrados" v-model:pagina_actual="pagina"
                        @cambioDePagina="cambioDePagina" :items_totales="data.length" />
                </div>
            </div>
        </div>
    </div>
    <TimerToken />
</template>
<script setup>
import { onMounted } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';
definePageMeta({
    layout: "principal",
    middleware: "middleware-paginas",
});
//Seccion para cargar o modificar el DOM despues de haber cargado todo el template
onMounted(() => {
    token.value = localStorage.getItem('token');
    id.value = localStorage.getItem('usuario');
    console.log(id.value);

    leerUsuarios();
});

//Evento para reiniciar el tiempo del componente del timer
const EVENT = new Event('reset-timer');
//Se crea una constante ref para saber cuando el usuario realizo una búsqueda que no retorno ningún registro
const ceroRegistrosEncontrados = ref(false);

//Funcion para generar un reporte
async function generarReporte() {
    //Constante donde se almacena la respuesta que retorna de la api
    const ruta = new URL(`http://127.0.0.1:8000/api/usuario_reporte`);
    //Le añadimos el token en la ruta del reporte
    ruta.searchParams.append('token', token.value);
    //Le añadimos el id del usuario que ha iniciado sesion, se captura mediante el token
    ruta.searchParams.append('id', id.value);
    // Se abre el reporte en una nueva pestaña del navegador web.
    window.open(ruta.href);
}
const registros_visibles = ref(true);
//Función para evaluar registros según la visibilidad que quiera el usuario
function visibilidadRegistros() {
    //Se establece el valor de la variable registros_visibles a su opuesto
    registros_visibles.value = !registros_visibles.value;
    //Se establece el número de página a 1
    pagina.value = 1;
    //Se leen todas las páginas
    leerUsuarios();
    //Se evalua el buscador para filtrar los registros
    if (buscar.value.buscador) {
        buscarUsuarios();
    }
}
//Seccion para establecer variables
const token = ref(null);
const id = ref(null);
const data = ref(null);

//Se establece una constante ref para manejar la paginación de registros, se establece como 1 ya que es la pagina default
const pagina = ref(useRoute().query.pagina || 1);

//Función para manejar el evento de cuando se realiza un cambio de página en el componente de paginación
function cambioDePagina(pagina_prop) {
    pagina.value = pagina_prop;
}

let usuarios = ref([]);
const buscar = ref({
    buscador: "",
})

function cargarTabla() {
    leerUsuarios();
    if (buscar.value.texto_buscador) {
        buscarUsuarios();
    }
}

//Seccion para establecer funciones y utilizar las constantes
async function leerUsuarios() {
    //Se actualiza el valor del token (esto para evitar errores con todos los refresh del token)
    token.value = localStorage.getItem('token');
    try {
        if (registros_visibles.value) {
            const { data: res } = await axios.get('/usuarios', {
                headers: {
                    Authorization: `Bearer ${token.value}`,
                },
            });
            data.value = res.data;
            usuarios.value = [];


            //Se usa un for para paginar los registros almacenados en la constante data de 10 en 10
            for (let i = 0; i < res.data.length; i += 10) {
                usuarios.value.push(res.data.slice(i, i + 10));
            }

            //Se reinicia el timer
            window.dispatchEvent(EVENT);
            //Se refresca el valor del token con la respuesta del axios
            localStorage.setItem('token', res.token);
            token.value = localStorage.getItem('token');

            //Se actualiza el valor de la constante de búsqueda a false
            ceroRegistrosEncontrados.value = false;
        } else {
            const { data: res } = await axios.get('/usuarios_ocultos', {
                headers: {
                    Authorization: `Bearer ${token.value}`,
                },
            });
            data.value = res.data;
            usuarios.value = [];

            //Se usa un for para paginar los registros almacenados en la constante data de 10 en 10
            for (let i = 0; i < res.data.length; i += 2) {
                usuarios.value.push(res.data.slice(i, i + 2));
            }

            //Se reinicia el timer
            window.dispatchEvent(EVENT);
            //Se refresca el valor del token con la respuesta del axios
            localStorage.setItem('token', res.token);
            token.value = localStorage.getItem('token');

            //Se actualiza el valor de la constante de búsqueda a false
            ceroRegistrosEncontrados.value = false;
        }
        if (usuarios.value.length < pagina.value) {
            //Se actualiza el valor de la constante pagina
            pagina.value = pagina.value - 1;
        }

        if (usuarios.value.length == 0) {
            ceroRegistrosEncontrados.value = true;
        }
    } catch (error) {
        console.log(error);
    }
}
watch(pagina, async () => {
    //Se cambia la url para agregar en que pagina se encuentra el usuario
    useRouter().push({ query: { pagina: pagina.value } })
})
async function buscarUsuarios() {
    try {
        //Se evalua que el buscador no este vacio
        if (buscar.value.buscador != "") {

            //Se actualiza la ruta del navegador para mostrar lo que se esta buscando
            useRouter().push({ query: { buscador: buscar.value.buscador } });

            //Se filtran los registros de data según los parámetros del buscador (nombre_pagina / numero_pagina)
            data.value = data.value.filter(usuario =>
                usuario.campos.usuario.toLowerCase().includes(buscar.value.buscador.toLowerCase()) ||
                usuario.campos.correo_usuario.toLowerCase().includes(buscar.value.buscador.toLowerCase())
            );

            //Se limpia el array de registros paginados
            usuarios.value = [];

            //Se evalua la longitud del array filtrado, si es 0 significa que no hay registros similares
            if (data.value.length == 0) {
                //Se actualiza el valor de la constante de búsqueda a true para mostrar un mensaje al usuario
                ceroRegistrosEncontrados.value = true;
            } else {
                //En caso de que si hayan registros similares, se paginan los registros de 10 en 10 usando el for
                for (let i = 0; i < data.value.length; i += 10) {
                    usuarios.value.push(data.value.slice(i, i + 10));
                }
                //Se actualiza el valor de la constante de búsqueda a false
                ceroRegistrosEncontrados.value = false;
            }

        } else {
            //Se regresa a la página 1 y se cargan todos los registros
            pagina.value = 1;
            leerUsuarios();
            useRouter().push({ query: { pagina: pagina.value } });
            //Se actualiza el valor de la constante de búsqueda a false
            ceroRegistrosEncontrados.value = false;
        }
    } catch (error) {
        console.log(error);

        //Se muestra un sweetalert con el mensaje
        Swal.fire({
            icon: "error",
            title: "Error",
            text: error,
            confirmButtonColor: "#3F4280",
        });
    }
}

//Función para limpiar el buscador
function limpiarBuscador() {
    //Se coloca la constante pagina 1 para que salga la primera pagina de registros
    pagina.value = 1;
    //Se leen todos los registros
    leerUsuarios();
    //Se coloca el valor del buscador a nulo
    buscar.value.buscador = "";
}
</script>
<style scoped>
.content-buttons input {
    border: 3px solid #1b1c30;
}

.buttons button {
    border: 3px solid #1b1c30;
}

#btnadd {
    background-color: #1b1c30;
}

.tables::-webkit-scrollbar {
    width: 7px;
}

.tables::-webkit-scrollbar-thumb {
    background: #32345A;
}
</style>
