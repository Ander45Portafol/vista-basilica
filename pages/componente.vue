<script setup>
//Importacion para usar el hook de onMounted
import { onMounted, ref } from "vue";
//Importación de axios, se utiliza para hacer las peticiones al servidor -> Para mas información vean el axiosPlugin en la carpeta plugins
import axios from "axios";
//Importación de sweetalert
import Swal from "sweetalert2";
//Importación de archivo de validaciones
import validaciones from "../assets/validaciones.js";

//onMounted es un hook (en vue los hooks se usan para hacer tareas especificas con los componentes)
/*En este hook se crean todas las funciones relacionadas al manejo del modal, se crean en este onMounted para que se
realicen mientras el componente se crea y se añade al DOM*/
onMounted(() => {
    //Se le asigna un valor a la variable token para poder utilizar el middleware de laravel
    token.value = localStorage.getItem('token');
    //Se leen los tipos
    llenarSelectTiposCategorias();
});

definePageMeta({
    layout: "principal",
});

const token = ref();

//Variable reactiva para almacenar los datos de la tabla
const data = ref(null);

/*Se crea una constante ref que se usa para llevar el control de la información que se muestra dependiendo de la pagina*/
const componentes = ref([]);

//Se crea una constante ref para saber cuando el usuario realizo una búsqueda que no retorno ningún registro
const cero_registros_encontrados = ref(false);

//Constante ref para poder intercambiar los registros entre visibles y no visibles
const registros_visibles = ref(true);

//Evento para reiniciar el tiempo del componente del timer
const EVENTO = new Event('reset-timer');

//Se establece una variable reactiva para manejar la paginación de registros, se establece como 1 ya que es la pagina default
const pagina = ref(parseInt(useRoute().query.pagina) || 1);

/*Función para leer la información de los registros de la página actual, se hace uso de axios para llamar la ruta junto con 
?page que se usa para ver la paginación de registros, y mediante el valor de la constante de "pagina" se manda a llamar los registros especificos*/
async function leerComponentes() {
    //Se actualiza el valor del token (esto para evitar errores con todos los refresh del token)
    token.value = localStorage.getItem('token');
    try {
        //Se evalua si se quieren mostrar los registros visibles o invisibles
        if (registros_visibles.value) {
            //Se realiza la petición axios para leer los registros visibles
            const { data: res } = await axios.get('/componentes', {
                headers: {
                    Authorization: `Bearer ${token.value}`,
                },
            });

            //Se asigna el valor de la respuesta de axios a la constante data
            data.value = res.data;

            //Se limpia el array de registros paginados
            componentes.value = [];

            //Se usa un for para paginar los registros almacenados en la constante data de 10 en 10
            for (let i = 0; i < res.data.length; i += 10) {
                componentes.value.push(res.data.slice(i, i + 10));
            }

            //Se reinicia el timer
            window.dispatchEvent(EVENTO);
            //Se refresca el valor del token con la respuesta del axios
            localStorage.setItem('token', res.token);
            token.value = localStorage.getItem('token');

            //Se actualiza el valor de la constante de búsqueda a false
            cero_registros_encontrados.value = false;

        } else {
            //Se realiza la petición axios para leer los registros no visibles
            const { data: res } = await axios.get('/componentes_ocultos', {
                headers: {
                    Authorization: `Bearer ${token.value}`,
                },
            });
            //Se asigna el valor de la respuesta de axios a la constante data
            data.value = res.data;

            //Se limpia el array de registros paginados
            componentes.value = [];

            //Se usa un for para paginar los registros almacenados en la constante data de 10 en 10
            for (let i = 0; i < res.data.length; i += 10) {
                componentes.value.push(res.data.slice(i, i + 10));
            }

            //Se reinicia el timer
            window.dispatchEvent(EVENTO);
            //Se refresca el valor del token con la respuesta del axios
            localStorage.setItem('token', res.token);
            token.value = localStorage.getItem('token');

            //Se actualiza el valor de la constante de búsqueda a false
            cero_registros_encontrados.value = false;
        }
        //Se evalua si el número de páginas es menor al valor de la constante de pagina, esto para evitar errores de eliminar un registro de una página que solo tenía un registro 
        //y que se bugee la paginación
        if ((componentes.value.length < pagina.value) && pagina.value != 1) {
            //Se actualiza el valor de la constante pagina
            pagina.value = componentes.value.length;
        }

        if (componentes.value.length == 0) {
            cero_registros_encontrados.value = true;
        }

        console.log(componentes.value);

    } catch (error) {
        console.log(error);
        const MENSAJE_ERROR = error.response.data.message;
        if (error.response.status == 401) {
            navigateTo('/error_401');
        } else {
            if (!error.response.data.errors) {
                //Se extrae el sqlstate (identificador de acciones SQL)
                const SQL_STATE = validaciones.extraerSqlState(MENSAJE_ERROR);
                //Se llama la función de mensajeSqlState para mostrar un mensaje de error relacionado al sqlstate
                const RES = validaciones.mensajeSqlState(SQL_STATE);

                //Se muestra un sweetalert con el mensaje
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: RES,
                    confirmButtonColor: '#3F4280'
                });
            } else {
                //Se muestra un sweetalert con el mensaje
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: MENSAJE_ERROR,
                    confirmButtonColor: '#3F4280'
                });
            }
        }
    }
}

async function llenarSelectTiposCategorias() {
    const { data: res2 } = await axios.get('/tipos-categoria-select', {
        headers: {
            Authorization: `Bearer ${token.value}`,
        },
    });

    console.log(res2);
}

</script>
<template>
    <!-- Componente principal -->
    <div class="principal mt-4">
        <!-- Encabezado principal -->
        <MenuComponenteDashboard class="mr-8" />
        <div class="mdprincipal flex-col mt-8 px-8 overflow-hidden">
            <div class="h-16 w-full rounded-xl flex justify-between items-center content-buttons max-[450px]:flex-wrap">
                <!-- Search Form -->
                <form action="" class="w-3/4 flex items-center h-full mt-4 max-[500px]:w-full">
                    <input type="text" class="rounded-lg relative w-2/4 h-12 outline-none max-[800px]:w-full min-w-[200px]"
                        placeholder="Buscar ...">
                    <div class="flex justify-end items-center">
                        <button class="absolute mr-4"><svg width="20px" height="20px" stroke-width="2" viewBox="0 0 24 24"
                                fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                                <path d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
                                    stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                    </div>
                </form>
                <!-- Buttons -->
                <div
                    class="buttons flex mt-4 mr-[-15px] max-[800px]:mt-4 min-w-[100px] max-[450px]:m-auto max-[450px]:mt-3">
                    <button
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
                    <button
                        class="w-12 h-10 flex items-center justify-center ml-4 rounded-lg max-[800px]:w-8 max-[800px]:h-8 max-[800px]:ml-2 max-[450px]:mx-8">
                        <svg width="24px" height="24px" stroke-width="2.5" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg" color="#000000">
                            <path d="M7 6h10M7 9h10M9 17h6" stroke="#1B1C30" stroke-width="2.5" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                            <path
                                d="M3 12h-.4a.6.6 0 00-.6.6v8.8a.6.6 0 00.6.6h18.8a.6.6 0 00.6-.6v-8.8a.6.6 0 00-.6-.6H21M3 12V2.6a.6.6 0 01.6-.6h16.8a.6.6 0 01.6.6V12M3 12h18"
                                stroke="#1B1C30" stroke-width="2.5"></path>
                        </svg>
                    </button>
                    <NuxtLink to="/tipo_componente" id="btnadd" type="button"
                        class="w-20 h-10 flex items-center justify-center mx-4 font-bold rounded-lg max-[800px]:w-8 max-[800px]:h-8 max-[800px]:ml-2 max-[450px]:ml-0">
                        <svg width="24px" height="24px" stroke-width="2.5" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg" color="#FFFFFF">
                            <path
                                d="M8 12h4m4 0h-4m0 0V8m0 4v4M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                                stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </NuxtLink>
                </div>
            </div>
            <div class="line bg-slate-800 h-0.5 mt-4 w-full min-w-[200px]"></div>
            <!-- Haciendo uso de la variable se puede mostrar el total de registros -->
            <p class="font-extrabold text-slate-900 mt-8 ml-4 max-[425px]:mt-16">1<span
                    class="text-gray-500 font-normal ml-2">registro
                    encontrado!</span></p>
            <div class="contained-data flex-col">
                <!-- Haciendo uso del v-for se evalua cada registro individualmente para poder llenar todas las cards -->
                <div
                    class="data-contained flex justify-between mt-4 rounded-xl p-4 max-[400px]:flex-wrap max-[400px]:w-full min-w-[200px]">
                    <div class="flex justify-start w-3/4 items-center max-[400px]:w-full">
                        <!--Con la implementación de una variable que permite visualizar la información contenida en cada uno-->
                        <div
                            class="datainfo flex-col ml-8 max-[400px]:p-0 max-[400px]:w-full max-[400px]:ml-0 max-[400px]:text-center">
                            <p class="font-extrabold text-xl text-salte-900 max-[750px]:text-[18px]">Slider</p>
                            <p class="font-normal text-sm mt-1text-gray-500 max-[750px]:text-[12px]">Parroquia</p>
                            <p class="font-normal text-sm text-gray-500 max-[750px]:text-[12px]">Pagina 6
                            </p>
                        </div>
                    </div>
                    <!-- Buttons -->
                    <div
                        class="buttons-data flex justify-center items-center max-[750px]:flex-col max-[400px]:flex-row max-[400px]:m-auto max-[400px]:mt-2">
                        <button class="h-10 w-10 rounded-md flex items-center justify-center editbtn max-[400px]:mx-4">
                            <svg width="26px" height="26px" stroke-width="2" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" color="#000000">
                                <path
                                    d="M3 21h18M12.222 5.828L15.05 3 20 7.95l-2.828 2.828m-4.95-4.95l-5.607 5.607a1 1 0 00-.293.707v4.536h4.536a1 1 0 00.707-.293l5.607-5.607m-4.95-4.95l4.95 4.95"
                                    stroke="#C99856" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                        <button
                            class="h-10 w-10 rounded-md flex items-center justify-center ml-4 deletebtn max-[750px]:ml-0 max-[750px]:mt-2 max-[400px]:mt-0 max-[400px]:mx-4">
                            <svg width="26px" height="26px" viewBox="0 0 24 24" stroke-width="2" fill="none"
                                xmlns="http://www.w3.org/2000/svg" color="#000000">
                                <path
                                    d="M20 9l-1.995 11.346A2 2 0 0116.035 22h-8.07a2 2 0 01-1.97-1.654L4 9M21 6h-5.625M3 6h5.625m0 0V4a2 2 0 012-2h2.75a2 2 0 012 2v2m-6.75 0h6.75"
                                    stroke="#872727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
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

.data-contained {
    border: 3px solid #1b1c30;
}

.buttons-data .editbtn {
    border: 3px solid #c99856;
}

.buttons-data .deletebtn {
    border: 3px solid #872727;
}
</style>