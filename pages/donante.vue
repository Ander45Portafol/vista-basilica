<template>
    <div class="principal mt-4">
        <MenuDonantesDashboard class="mr-8" />
        <!-- Contendor principal -->
        <div class="mdprincipal flex-col mt-8 px-8 overflow-hidden">
            <!-- Sección del buscador -->
            <div class="h-16 w-full rounded-xl flex justify-between items-center content-buttons max-[450px]:flex-wrap">
                <!-- Sección del buscador -->
                <div class="w-3/4 flex items-center h-full mt-4 max-[500px]:w-full">
                    <!-- Se enlaza la variable buscar con v-model y se le asigna el evento para el buscador -->
                    <input type="text" class="rounded-lg relative w-2/4 h-12 outline-none max-[800px]:w-full min-w-[200px]"
                        placeholder="Buscar... (nombre donante/ correo donante)" v-model="buscar.buscador" @keyup=" buscarDonantes($event)" />
                    <div class="flex justify-end items-center">
                        <!-- Se le asigna la función para limpiar el buscador al botón -->
                        <button class="absolute mr-4" @click="limpiarBuscador()">
                            <svg width="20px" height="20px" stroke-width="2" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" color="#000000">
                                <path d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
                                    stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <!-- Botones -->
                <div
                    class="buttons flex mt-4 mr-[-15px] max-[800px]:mt-4 min-w-[100px] max-[450px]:m-auto max-[450px]:mt-3">
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
                </div>
            </div>
            <!-- Línea divisora -->
            <div class="line bg-slate-800 h-0.5 mt-4 w-full min-w-[200px]"></div>
            <!-- Se manda a traer la longitud del array de donantes (el que trae los registros) y así saber cuantos registros son -->
            <div class="h-screen">
                <p v-if="donantes.length > 0 && !ceroRegistrosEncontrados"
                    class="font-extrabold text-slate-900 mt-8 ml-4 max-[425px]:mt-16">{{ donantes[pagina -
                        1].length
                    }}<span class="text-gray-500 font-normal ml-2">registro encontrado!</span></p>
                <p v-else class="font-extrabold text-slate-900 mt-8 ml-4 max-[425px]:mt-16">
                    -
                    <span class="text-gray-500 font-normal ml-2">registros encontrados!</span>
                </p>
                <!-- Alerta a mostrar el usuario busca algo que no coincide con ningún registro -->
                <div class="flex-col">
                    <div v-if="donantes.length == 0 && ceroRegistrosEncontrados">
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
                    <TablaCargando v-if="donantes.lenght==0&&!ceroRegistrosEncontrados"/>
                    <TablesDonante v-if="donantes.length > 0" :datos_donantes="donantes" :actualizar_datos="cargarTabla"
                        :paginacion="pagina" />
                </div>
                <div class="flex justify-center mt-6">
                    <Paginacion v-if="donantes.length > 1 && !ceroRegistrosEncontrados" v-model:pagina_actual="pagina"
                        @cambioDePagina="cambioDePagina" :items_totales="donantes.length" />
                </div>
            </div>
        </div>
    </div>
    <!-- Llama el componente del timer-->
    <TimerToken />
</template>
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
<script setup>
//El setup se usa para manejar una sintaxis mas concisa del codigo y poder usar la reactividad de vue 3
//Importaciones de plugins y funciones necesarias para el funcionamiento del proyecto
//Importacion para usar el hook de onMounted
import { onMounted, ref } from "vue";
//Importación de axios, se utiliza para hacer las peticiones al servidor -> Para mas información vean el axiosPlugin en la carpeta plugins
import axios from "axios";
//Importación de sweetalert
import Swal from "sweetalert2"

/*definePageMeta es un macro compilador (Se ejecuta mientras el programa se compila) para los componentes que se 
encuentran en /pages, este permite establecer/transformar las propiedades de los componentes de nuxt*/
definePageMeta({
    //Se le establece el layout principal
    layout: "principal",
    //Se le establece un middleware a la página
    middleware: "middleware-paginas"
});

//onMounted es un hook (en vue los hooks se usan para hacer tareas especificas con los componentes)
/*En este hook se crean todas las funciones relacionadas al manejo del modal, se crean en este onMounted para que se
realicen mientras el componente se crea y se añade al DOM*/
onMounted(() => {
    //Se le asigna un valor a la variable token para poder utilizar el middleware de laravel
    token.value = localStorage.getItem('token');
    //Se leen los donantes al montarse la página para evitar problemas del setup y el localStorage
    leerDonantes();
});

//Evento para reiniciar el tiempo del componente del timer
const EVENT = new Event('reset-timer');
//Se crea una constante ref para saber cuando el usuario realizo una búsqueda que no retorno ningún registro
const ceroRegistrosEncontrados = ref(false);

//Variable reactiva para almacenar el token del localStorage
const token = ref(null);

//Variable reactiva para almacenar los datos de la tabla
const data = ref(null);

//Se establece una variable reactiva para manejar la paginación de registros, se establece como 1 ya que es la pagina default
const pagina = ref(parseInt(useRoute().query.pagina) || 1);

//Se crea una variable reactiva para el buscador
const buscar = ref({
    buscador: "",
});

//Función para manejar el evento de cuando se realiza un cambio de página en el componente de paginación
function cambioDePagina(pagina_prop) {
    pagina.value = pagina_prop;
}

async function cargarTabla() {
    await leerDonantes();
    if (buscar.value.buscador) {
        filtrarPaginas();
    }
}

/*Se crea una variable let (variable de bloque / su alcance se limita a un bloque cercano). Esta variable es reactiva
y se usa para llevar el control de la información que se muestra dependiendo de la pagina*/
const donantes=ref([]);

/*Se crea un watch (detecta cada que "pagina" cambia) y ejecuta un select a los registros de esa página,
además muestra en la url la página actual*/
watch(pagina, async () => {
    //Se cambia la url para agregar en que pagina se encuentra el usuario
    useRouter().push({ query: { pagina: pagina.value } });
});
//Constante ref para poder intercambiar los registros entre visibles y no visibles
const registros_visibles = ref(true);

//Función para evaluar registros según la visibilidad que quiera el usuario
async function visibilidadRegistros() {
    //Se establece el valor de la variable registros_visibles a su opuesto
    registros_visibles.value = !registros_visibles.value;
    //Se establece el número de página a 1
    pagina.value = 1;
    //Se leen todas las páginas
    await leerDonantes();
    //Se evalua el buscador para filtrar los registros
    if (buscar.value.buscador) {
        filtrarPaginas();
    }
}

/*Función para leer la información de los registros de la página actual, se hace uso de axios para llamar la ruta junto con 
?page que se usa para ver la paginación de registros, y mediante el valor de la constante de "pagina" se manda a llamar los registros especificos*/
async function leerDonantes() {
    //Se actualiza el valor del token (esto para evitar errores con todos los refresh del token)
    token.value = localStorage.getItem('token');
    try {
        if (registros_visibles.value) {
            const { data: res } = await axios.get('/donantes', {
                headers: {
                    Authorization: `Bearer ${token.value}`,
                },
            });
            data.value = res.data;
            donantes.value = [];


            //Se usa un for para paginar los registros almacenados en la constante data de 10 en 10
            for (let i = 0; i < res.data.length; i += 10) {
                donantes.value.push(res.data.slice(i, i + 10));
            }

            //Se reinicia el timer
            window.dispatchEvent(EVENT);
            //Se refresca el valor del token con la respuesta del axios
            localStorage.setItem('token', res.token);
            token.value = localStorage.getItem('token');

            //Se actualiza el valor de la constante de búsqueda a false
            ceroRegistrosEncontrados.value = false;
        } else {
            const { data: res } = await axios.get('/donantes_ocultos', {
                headers: {
                    Authorization: `Bearer ${token.value}`,
                },
            });
            data.value = res.data;
            donantes.value = [];

            //Se usa un for para paginar los registros almacenados en la constante data de 10 en 10
            for (let i = 0; i < res.data.length; i += 10) {
                donantes.value.push(res.data.slice(i, i + 10));
            }

            //Se reinicia el timer
            window.dispatchEvent(EVENT);
            //Se refresca el valor del token con la respuesta del axios
            localStorage.setItem('token', res.token);
            token.value = localStorage.getItem('token');

            //Se actualiza el valor de la constante de búsqueda a false
            ceroRegistrosEncontrados.value = false;
        }
        if ((donantes.value.length < pagina.value) && pagina.value != 1) {
            //Se actualiza el valor de la constante pagina
            pagina.value = donantes.value.length;
        }

        if (donantes.value.length == 0) {
            ceroRegistrosEncontrados.value = true;
        }
    } catch (error) {
        console.log(error);
    }
}

//Constante ref para controlar que no se pueda spamear el delete en el buscador y bugear el token
const ejecutado_despues_borrar = ref(false);

//Función para buscar registros dependiendo del valor del buscador
function buscarDonantes(event) {
    try {
        //Se evalua que el buscador no este vacio
        if (buscar.value.buscador != "") {

            //Se regresa a la página 1
            pagina.value = 1;

            //Se coloca como false para que si se pueda presionar el borrar
            ejecutado_despues_borrar.value = false;

            filtrarPaginas();

        } else {
            //Se valida las teclas que el usuario puede presionar para bugear el buscador
            if (buscar.value.buscador.length == 0 && (event.key != 'CapsLock' && event.key != 'Shift' && event.key != 'Control' && event.key != 'Alt' && event.key != 'Meta' && event.key != 'Escape' && event.key != 'Enter') && !ejecutado_despues_borrar.value) {
                //Se coloca como true para que no se pueda presionar el borrar
                ejecutado_despues_borrar.value = true;
                //Se regresa a la página 1 y se cargan todos los registros
                limpiarBuscador();
                //Se actualiza el valor de la constante de búsqueda a false
                ceroRegistrosEncontrados.value = false;
            }
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

function filtrarPaginas() {
    //Se filtran los registros de data según los parámetros del buscador (nombre_pagina / numero_pagina)
    const data_filtrada = ref();

    data_filtrada.value = data.value.filter(donante =>
            donante.campos.nombre_donante.toLowerCase().includes(buscar.value.buscador.toLowerCase()) ||
            donante.campos.correo_donante.toString().includes(buscar.value.buscador)
            );

    //Se limpia el array de registros paginados
    donantes.value = [];

    //Se evalua la longitud del array filtrado, si es 0 significa que no hay registros similares
    if (data_filtrada.value.length == 0) {
        //Se actualiza el valor de la constante de búsqueda a true para mostrar un mensaje al usuario
        ceroRegistrosEncontrados.value = true;
        pagina.value = 1;
    } else {
        //En caso de que si hayan registros similares, se paginan los registros de 10 en 10 usando el for
        for (let i = 0; i < data_filtrada.value.length; i += 10) {
            donantes.value.push(data_filtrada.value.slice(i, i + 10));
        }
        //Se actualiza el valor de la constante de búsqueda a false
        ceroRegistrosEncontrados.value = false;
    }
    
    //Se evalua si el número de páginas es menor al valor de la constante de pagina, esto para evitar errores de eliminar un registro de una página que solo tenía un registro 
    //y que se bugee la paginación
    if ((donantes.value.length < pagina.value) && pagina.value != 1) {
        //Se actualiza el valor de la constante pagina
        pagina.value = donantes.value.length;
    }
}



//Función para limpiar el buscador
function limpiarBuscador() {
    //Se coloca la constante pagina 1 para que salga la primera pagina de registros
    pagina.value = 1;
    //Se leen todos los registros
    leerDonantes();
    //Se coloca el valor del buscador a nulo
    buscar.value.buscador = "";
    //Se limpia la ruta
    useRouter().push({ query: '' });
}
</script>