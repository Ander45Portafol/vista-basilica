<template>
    <div class="contained-data flex-col" v-for="seccione in datos_secciones[paginacion - 1]" :key="seccione.id">
        <div
            class="data-contained flex justify-between mt-4 rounded-xl p-4 max-[400px]:flex-wrap max-[400px]:w-full min-w-[200px]">
            <div class="flex justify-start w-3/4 items-center max-[400px]:w-full">
                <div
                    class="datainfo flex-col ml-8 max-[400px]:p-0 max-[400px]:w-full max-[400px]:ml-0 max-[400px]:text-center">
                    <p class="font-extrabold text-xl text-salte-900 max-[750px]:text-[18px]">{{
                        seccione.campos.titulo_seccion }}
                    </p>
                    <p v-if="seccione.campos.subtitulo_seccion"
                        class="font-normal text-sm text-gray-500 max-[750px]:text-[12px]">{{
                            seccione.campos.subtitulo_seccion }}
                    </p>
                    <p v-else class="font-normal text-sm text-gray-500 max-[750px]:text-[12px]">Esta sección no
                        tiene subtitulo</p>
                    <p v-if="seccione.campos.descripcion_seccion"
                        class="font-normal text-sm text-gray-500 max-[750px]:text-[12px]">{{
                            seccione.campos.descripcion_seccion }}
                    </p>
                    <p v-else class="font-normal text-sm text-gray-500 max-[750px]:text-[12px]">Esta sección no
                        tiene una descripción</p>
                </div>
            </div>
            <!-- Botones de la tabla -->
            <div
                class="buttons-data flex justify-center items-center max-[750px]:flex-col max-[400px]:flex-row max-[400px]:m-auto max-[400px]:mt-2">
                <button class="h-10 w-10 rounded-md flex items-center justify-center max-[400px]:mx-4 editbtn" id="btnedit"
                    @click="estadoActualizar(seccione.id)" v-if="seccione.campos.visibilidad_seccion == 1">
                    <svg width="26px" height="26px" stroke-width="2" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg" color="#000000">
                        <path
                            d="M3 21h18M12.222 5.828L15.05 3 20 7.95l-2.828 2.828m-4.95-4.95l-5.607 5.607a1 1 0 00-.293.707v4.536h4.536a1 1 0 00.707-.293l5.607-5.607m-4.95-4.95l4.95 4.95"
                            stroke="#C99856" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                    </svg>
                </button>
                <button
                    class="h-10 w-10 rounded-md flex items-center justify-center ml-4 deletebtn max-[750px]:ml-0 max-[750px]:mt-2 max-[400px]:mt-0 max-[400px]:mx-4"
                    @click="borrarSeccion(seccione.id)" v-if="seccione.campos.visibilidad_seccion == 1">
                    <svg width="26px" height="26px" viewBox="0 0 24 24" stroke-width="2" fill="none"
                        xmlns="http://www.w3.org/2000/svg" color="#000000">
                        <path
                            d="M20 9l-1.995 11.346A2 2 0 0116.035 22h-8.07a2 2 0 01-1.97-1.654L4 9M21 6h-5.625M3 6h5.625m0 0V4a2 2 0 012-2h2.75a2 2 0 012 2v2m-6.75 0h6.75"
                            stroke="#872727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                    </svg>
                </button>
                <button @click="recuperarUnaSeccion(seccione.id)"
                    class="h-10 w-10 rounded-md flex items-center justify-center ml-4 changebtn max-[750px]:ml-0 max-[750px]:mt-2 max-[400px]:mt-0 max-[400px]:mx-4"
                    v-else>
                    <svg width="24px" height="24px" stroke-width="3" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg" color="#000000">
                        <path d="M21.168 8A10.003 10.003 0 0012 2C6.815 2 2.55 5.947 2.05 11" stroke="#3F4280"
                            stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M17 8h4.4a.6.6 0 00.6-.6V3M2.881 16c1.544 3.532 5.068 6 9.168 6 5.186 0 9.45-3.947 9.951-9"
                            stroke="#3F4280" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                        <path d="M7.05 16h-4.4a.6.6 0 00-.6.6V21" stroke="#3F4280" stroke-width="3" stroke-linecap="round"
                            stroke-linejoin="round"></path>
                    </svg>
                </button>
            </div>
        </div>
    </div>

    <!-- Main modal -->
    <div id="staticModal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-lg max-h-full">
            <!-- Modal content -->
            <div class="relative rounded-lg shadow modal">
                <!-- Modal header -->
                <div class="flex items-start justify-between p-4 rounded-t">
                    <div class="flex-col ml-4 pt-4">
                        <p class="text-3xl font-bold text-gray-100" id="modalText"></p>
                        <p class="text-base font-medium text-gray-400">
                            Sección
                        </p>
                    </div>
                    <button type="button" id="closeModal"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="staticModal">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="p-6 space-y-6 pb-16">
                    <!-- Se le añade un evento submit para evaluar que acción realizara el form -->
                    <form id="formModal" @submit.prevent="submitForm()" class="flex justify-evenly">
                        <div class="flex-col w-64">
                            <!-- Se enlazan todos los inputs usando el v-model a la variable form -->
                            <input type="hidden" id="id_seccion" v-model="form.id_seccion">
                            <div class="relative z-0">
                                <input type="text" v-model="form.titulo_seccion" @input="validarTituloSeccion()"
                                    maxlength="100" id="titulo_seccion" name="titulo_seccion"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" required />
                                <span class="text-xs text-gray-400 absolute bottom-0.5 right-0"> {{
                                    form.titulo_seccion.length
                                }} /100</span>
                                <label for="titulo_seccion"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Titulo
                                    - Seccion<span class="text-sm ml-1"> * </span></label>
                                <!-- Se coloca un if que evalua si la función de validar es false, así se muestra la alerta solo cuando es false -->
                                <div v-if="!validarTituloSeccion()"
                                    class="flex mt-2 mb-0 text-sm text-red-400 bg-transparent" role="alert">
                                    <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                            clip-rule="evenodd"></path>
                                    </svg>

                                </div>
                            </div>
                            <div class="relative z-0 mt-6">
                                <input type="text" v-model="form.subtitulo_seccion" id="subtitulo_seccion"
                                    maxlength="100" name="subtitulo_seccion"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" />
                                <span class="text-xs text-gray-400 absolute bottom-0.5 right-0"
                                    v-if="form.subtitulo_seccion"> {{
                                        form.subtitulo_seccion.length
                                    }} /100</span>
                                <span class="text-xs text-gray-400 absolute bottom-0.5 right-5" v-else> 0 /250</span>
                                <label for="subtitulo_seccion"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Subtitulo
                                    - Seccion</label>
                                <!-- Se coloca un if que evalua si la función de validar es false, así se muestra la alerta solo cuando es false -->
                                <div v-if="!validarSubtituloSeccion()"
                                    class="flex mt-2 mb-0 text-sm text-red-400 bg-transparent" role="alert">
                                    <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <div>
                                        El subtitulo de la sección solo permite caracteres <span class="font-medium">
                                            alfanuméricos y algunos especiales (- / |).</span>
                                    </div>
                                </div>
                            </div>
                            <div class="relative z-0 mt-6">
                                <textarea type="text" v-model="form.descripcion_seccion" id="descripcion_seccion"
                                    maxlength="250" name="descripcion_seccion"
                                    class="block py-2.5 min-h-[3rem] h-[3rem] max-h-[9rem] px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" />
                                <span class="text-xs text-gray-400 absolute bottom-0.5 right-5"
                                    v-if="form.descripcion_seccion"> {{
                                        form.descripcion_seccion.length }} /250</span>
                                <span class="text-xs text-gray-400 absolute bottom-0.5 right-5" v-else> 0 /250</span>
                                <label for="descripcion_seccion"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Descripcion
                                    - Seccion</label>
                            </div>
                            <div class="pt-4 mt-4 flex-col">
                                <label for="" class="absolute text-gray-200">Pagina - Asignada<span class="text-sm ml-1"> *
                                    </span></label>
                                <select id="underline_select" v-model="form.id_pagina"
                                    class="block mt-4 py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                    <option value="0" class="bg-gray-700"> Seleccione una opción </option>
                                    <!-- Se usa el v-for para llenar la información del select, haciendo uso de "paginas" -->
                                    <option v-for="pagina in paginas" :key="pagina.id_pagina" :value="pagina.id_pagina"
                                        class="text-left bg-gray-700">
                                        #{{ pagina.numero_pagina }} || {{ pagina.nombre_pagina }}
                                    </option>
                                </select>
                                <div v-if="form.id_pagina == 0" class="flex mt-2 mb-0 text-sm text-red-400 bg-transparent"
                                    role="alert">
                                    <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <div>
                                        Seleccione <span class="font-medium"> una opción. </span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-col mt-6">
                                <label for="" class="text-gray-200">Visibilidad - Seccion</label>
                                <div class="flex justify-start mt-2">
                                    <label class="relative inline-flex items-center mb-5 cursor-pointer">
                                        <input type="checkbox" value="false" v-model="form.visibilidad_seccion"
                                            class="sr-only peer" />
                                        <div
                                            class="w-9 h-5 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div class="flex-col mt-2">
                                <label for="" class="text-gray-200">Seccion - Editable</label>
                                <div class="flex justify-start mt-2">
                                    <label class="relative inline-flex items-center mb-5 cursor-pointer">
                                        <input type="checkbox" value="false" v-model="form.editable" class="sr-only peer" />
                                        <div
                                            class="w-9 h-5 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div class="modal-buttons mt-6 flex justify-end items-end">
                                <!-- Se le coloca la función para limpiar el form al botón -->
                                <button type="button" id="btnModalClear" @click="limpiarForm()"
                                    class="h-10 w-10 rounded-lg flex justify-center items-center ml-4">
                                    <svg width="22px" height="22px" viewBox="0 0 24 24" stroke-width="2" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" color="#000000">
                                        <path d="M11 21H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v7" stroke="#23B7A0"
                                            stroke-width="2" stroke-linecap="round"></path>
                                        <path
                                            d="M2 7h20M5 5.01l.01-.011M8 5.01l.01-.011M11 5.01l.01-.011M21.666 16.667C21.049 15.097 19.636 14 17.99 14c-1.758 0-3.252 1.255-3.793 3"
                                            stroke="#23B7A0" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round"></path>
                                        <path
                                            d="M19.995 16.772H21.4a.6.6 0 00.6-.6V14.55M14.334 19.333C14.953 20.903 16.366 22 18.01 22c1.758 0 3.252-1.255 3.793-3"
                                            stroke="#23B7A0" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round"></path>
                                        <path d="M16.005 19.228H14.6a.6.6 0 00-.6.6v1.622" stroke="#23B7A0" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>
                                <!-- Se le coloca la función para crear al botón y se evalua que ninguna función de validaciones sea false, si alguna es false el botón se desactiva -->
                                <button id="btnModalAdd" type="submit"
                                    :disabled="!validarTituloSeccion() || !validarSubtituloSeccion() || form.id_pagina == 0"
                                    class="h-10 ml-2 w-10 rounded-lg flex justify-center items-center">
                                    <svg width="22px" height="22px" stroke-width="2" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" color="#000000">
                                        <path
                                            d="M3 19V5a2 2 0 012-2h11.172a2 2 0 011.414.586l2.828 2.828A2 2 0 0121 7.828V19a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                                            stroke="#23B7A0" stroke-width="2"></path>
                                        <path
                                            d="M8.6 9h6.8a.6.6 0 00.6-.6V3.6a.6.6 0 00-.6-.6H8.6a.6.6 0 00-.6.6v4.8a.6.6 0 00.6.6zM6 13.6V21h12v-7.4a.6.6 0 00-.6-.6H6.6a.6.6 0 00-.6.6z"
                                            stroke="#23B7A0" stroke-width="2"></path>
                                    </svg>
                                </button>
                                <!-- Se le coloca la función para actualizar al botón y se evalua que ninguna función de validaciones sea false, si alguna es false el botón se desactiva -->
                                <button id="btnModalUpdate" type="submit"
                                    :disabled="!validarTituloSeccion() || !validarSubtituloSeccion() || form.id_pagina == 0"
                                    class="h-10 ml-2 w-10 rounded-lg flex justify-center items-center">
                                    <svg width="22px" height="22px" stroke-width="2" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" color="#000000">
                                        <path
                                            d="M3 19V5a2 2 0 012-2h11.172a2 2 0 011.414.586l2.828 2.828A2 2 0 0121 7.828V19a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                                            stroke="#23B7A0" stroke-width="2"></path>
                                        <path
                                            d="M8.6 9h6.8a.6.6 0 00.6-.6V3.6a.6.6 0 00-.6-.6H8.6a.6.6 0 00-.6.6v4.8a.6.6 0 00.6.6zM6 13.6V21h12v-7.4a.6.6 0 00-.6-.6H6.6a.6.6 0 00-.6.6z"
                                            stroke="#23B7A0" stroke-width="2"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </form>
                    <pre>
                        {{ form }}
                    </pre>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.data-contained {
    border: 3px solid #1b1c30;
}

.buttons-data .editbtn {
    border: 3px solid #c99856;
}

.buttons-data .deletebtn {
    border: 3px solid #872727;
}

.buttons-data .changebtn {
    border: 3px solid #3F4280;
}

.modal {
    background: linear-gradient(180deg,
            rgba(63, 66, 128, 0.6241) 0%,
            rgba(49, 50, 71, 0.5609) 100%);
    background-color: #1e1e1e;
}

.modal-buttons button {
    background-color: #32345a;
}
</style>
<script setup>
//Importación de archivo de validaciones
import axios from 'axios';
import Swal from 'sweetalert2';
import validaciones from '../../assets/validaciones.js';

const props = defineProps({
    //Prop que se utiliza para cargar los datos de la tabla
    datos_secciones: Array,
    //Prop que recibe la funcion de leerUsuarios, para recargar la tabla, cada vez de finalizar alguna acción
    actualizar_datos: Function,
    paginacion: Number,

});
//Evento para reiniciar el tiempo del componente del timer
const EVENT = new Event('reset-timer');

//Seccion para cargar o modificar el DOM despues de haber cargado todo el template
onMounted(() => {
    //Codigo para abrir el modal, con el boton de crear
    const AGREGAR_BOTON = document.getElementById('btnadd');
    const MODAL_ID = document.getElementById('staticModal');
    const CERRAR_BOTON = document.getElementById('closeModal');
    const TITULO_MODAL = document.getElementById('modalText');
    const OPCIONES_MODAL = {
        backdrop: 'static',
        backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
    };

    if (MODAL_ID) {
        const MODAL = new Modal(MODAL_ID, OPCIONES_MODAL);
        AGREGAR_BOTON.addEventListener('click', function () {
            TITULO_MODAL.textContent = "Registrar";
            document.getElementById('btnModalAdd').classList.remove('hidden');
            document.getElementById('btnModalUpdate').classList.add('hidden');
            accionForm('crear');
            MODAL.show();
        });
        CERRAR_BOTON.addEventListener('click', function () {
            MODAL.hide();
        });
    }
    //Se le asigna un valor a la variable token para poder utilizar el middleware de laravel
    token.value = localStorage.getItem('token');
      //Ejecutamos este metodo, para poder llenar el select del modal con la informacion de los roles
      llenarSelectPagina();
});
//Variable reactiva para almacenar el token del localStorage
const token = ref(null);

//Variable reativa para capturar los roles de los usuarios
var paginas = ref(null);

//Funcion para agregarle el valor de los roles a la variable reactiva
async function llenarSelectPagina() {
    const { data: res } = await axios.get('paginas-select', {
        headers: {
            Authorization: `Bearer ${token.value}`,
        },
    });
    console.log(res);
    paginas.value = res;
}

//Función para limpiar todos los campos del form
function limpiarForm() {
    //Se llama el valor de la variable form y se cambia cada uno de sus elementos a nulo
    form.value.id_seccion = "";
    form.value.titulo_seccion = "";
    form.value.subtitulo_seccion = "";
    form.value.descripcion_seccion = "";
    form.value.id_pagina = 0;
    form.value.visibilidad_seccion = false;
    form.value.editable = false;
}


//Se crea una variable reactiva para manejar la información del modal
const form = ref({
    id_seccion: "",
    titulo_seccion: "",
    subtitulo_seccion: "",
    descripcion_seccion: "",
    id_pagina: 0,
    visibilidad_seccion: false,
    editable: false,
});

//Funciones para manejo del modal
//Toast del sweetalert
const TOAST = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (TOAST) => {
        TOAST.addEventListener("mouseenter", Swal.stopTimer);
        TOAST.addEventListener("mouseleave", Swal.resumeTimer);
    },
});
//Variable para validar que acción se quiere hacer cuando se hace un submit al form
var formAccion = null;

//Función para evaluar que acción se va a hacer al hacer submit en el form
function accionForm(accion) {
    formAccion = accion;
}

//Función para crear/actualizar un registro cuando se ejecuta el submit del form
function submitForm() {
    if (formAccion == "crear") {
        crearSeccion();
    } else {
        actualizarSeccion();
    }
}


//Función para crear una categoria de un grupo
async function crearSeccion() {
    //Se actualiza el valor del token (esto para evitar errores con todos los refresh del token)
    token.value = localStorage.getItem('token');
    if (validarTituloSeccion() && validarSubtituloSeccion() && form.id_pagina != 0) {
        try {
            const FORM_DATA = new FormData();
            FORM_DATA.append("titulo_seccion", form.value.titulo_seccion);
            FORM_DATA.append("subtitulo_seccion", form.value.subtitulo_seccion);
            FORM_DATA.append("descripcion_seccion", form.value.descripcion_seccion);
            FORM_DATA.append("id_pagina", form.value.id_pagina);
            FORM_DATA.append(
                "visibilidad_seccion",
                form.value.visibilidad_seccion ? 1 : 0
            );
            FORM_DATA.append(
                "editable", form.value.editable ? 1 : 0);
            //Se realiza la petición axios mandando la ruta y el formData
            await axios.post("/secciones/", FORM_DATA, {
                headers: {
                    Authorization: `Bearer ${token.value}`,
                },
            }).then(res => {
                //Se reinicia el timer
                window.dispatchEvent(EVENT);
                //Se actualiza el token con la respuesta del axios
                localStorage.setItem('token', res.data.data.token);
                token.value = localStorage.getItem('token');
            });

            //Se leen todas las páginas y en dado caso haya algo escrito en el buscador se filtran los datos
            await props.actualizar_datos();

            document.getElementById('closeModal').click();
            //Se lanza la alerta con el mensaje de éxito
            TOAST.fire({
                icon: 'success',
                title: 'Sección creada exitosamente'
            });
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
}



//Metodo para configurar el modal y enviar el id del usuario
async function estadoActualizar(id) {
    await leerUnaSeccion(id);
    const  MODAL_ID= document.getElementById('staticModal');
    const BOTON_CERRAR = document.getElementById('closeModal');
    const TEXTO_MODAL = document.getElementById('modalText');
    const OPCIONES_MODAL = {
        backdrop: 'static',
        backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
    };
    const modal = new Modal(MODAL_ID, OPCIONES_MODAL);
    TEXTO_MODAL.textContent = "Editar";
    modal.show();
    document.getElementById('btnModalAdd').classList.add('hidden');
    document.getElementById('btnModalUpdate').classList.remove('hidden');
    BOTON_CERRAR.addEventListener('click', function () {
        modal.hide();
        limpiarForm();
    });
}


async function leerUnaSeccion(id) {
    //Se actualiza el valor del token (esto para evitar errores con todos los refresh del token)
    token.value = localStorage.getItem('token')
    try {
        accionForm("actualizar");
        await axios.get('/secciones/' + id, {
            headers: {
                Authorization: `Bearer ${token.value}`,
            },
        }).then(res => {
            console.log(res.data);
            form.value = {
                id_seccion: res.data.data.id,
                titulo_seccion: res.data.data.campos.titulo_seccion,
                subtitulo_seccion: res.data.data.campos.subtitulo_seccion,
                descripcion_seccion: res.data.data.campos.descripcion_seccion,
                id_pagina: res.data.data.campos.id_pagina,
                //Se convierte a true o false en caso de que devuelva 1 o 0, esto por que el input solo acepta true y false
                visibilidad_seccion: res.data.data.campos.visibilidad_seccion ? true : false,
                editable: res.data.data.campos.editable ? true : false,
            };
            //Se reinicia el timer
            window.dispatchEvent(EVENT);
            //Se actualiza el token con la respuesta del axios
            localStorage.setItem('token', res.data.token);
            token.value = localStorage.getItem('token');
        });
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



async function actualizarSeccion() {
    //Se actualiza el valor del token (esto para evitar errores con todos los refresh del token)
    token.value = localStorage.getItem('token');
    if (validarTituloSeccion() && validarSubtituloSeccion() && form.id_pagina != 0) {
        try {
            //Se establece una variable de id con el valor que tiene guardado la variable form
            var id = form.value.id_seccion;

            //Se crea una constante FormData para almacenar los datos del modal
            const FORM_DATA = new FormData();
            FORM_DATA.append("titulo_seccion", form.value.titulo_seccion);
            FORM_DATA.append("subtitulo_seccion", form.value.subtitulo_seccion);
            FORM_DATA.append("descripcion_seccion", form.value.descripcion_seccion);
            FORM_DATA.append("id_pagina", form.value.id_pagina);
            FORM_DATA.append(
                "visibilidad_seccion",
                form.value.visibilidad_seccion ? 1 : 0
            );
            FORM_DATA.append(
                "editable",
                form.value.editable ? 1 : 0
            );
            //Se realiza la petición axios mandando la ruta y el formData
            await axios.post("/secciones_update/" + id, FORM_DATA, {
                headers: {
                    Authorization: `Bearer ${token.value}`,
                },
            }).then(res => {
                //Se reinicia el timer
                window.dispatchEvent(EVENT);
                //Se actualiza el token con la respuesta del axios
                localStorage.setItem('token', res.data.data.token);
                token.value = localStorage.getItem('token');
            });
            //Se manda a llamar la accion para actualizar los datos con las props
            await props.actualizar_datos();

            document.getElementById("closeModal").click();

            //Se lanza la alerta de éxito
            TOAST.fire({
                icon: "success",
                title: "Sección actualizada exitosamente",
            });

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
}


//Codigo para cambiar el estado de la categoria
async function borrarSeccion(id,) {
    console.log(id);
    Swal.fire({
        title: 'Confirmación',
        text: "¿Desea ocultar el registro",
        icon: 'warning',
        reverseButtons: true,
        showCancelButton: true,
        confirmButtonColor: '#3F4280',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar',
        allowOutsideClick: false,
        cancelButtonText: 'Cancelar'
    }).then(async (result) => {
        if (result.isConfirmed) {
            try {
                //Se actualiza el valor del token (esto para evitar errores con todos los refresh del token)
                token.value = localStorage.getItem('token');
                try {
                    //Se realiza la petición axios
                    await axios.delete("/secciones/" + id, {
                        headers: {
                            Authorization: `Bearer ${token.value}`,
                        },
                    }).then(res => {
                        //Se reinicia el timer  
                        window.dispatchEvent(EVENT);
                        //Se actualiza el token con la respuesta del axios
                        localStorage.setItem('token', res.data.data.token);
                        token.value = localStorage.getItem('token');

                        //Se lanza la alerta de éxito
                        TOAST.fire({
                            icon: "success",
                            title: "Sección ocultada exitosamente",
                        });
                    });
                    //Se leen todas las páginas y en dado caso haya algo escrito en el buscador se filtran los datos
                    await props.actualizar_datos();
                } catch (error) {
                    console.log(error);
                }
            }
            catch (error) {
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
    });
}


//Función para cambiar un usuario a activo
async function recuperarUnaSeccion(id) {

Swal.fire({
    title: 'Confirmación',
    text: "¿Desea recuperar el usuario: ",
    icon: 'warning',
    reverseButtons: true,
    showCancelButton: true,
    confirmButtonColor: '#3F4280',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Confirmar',
    cancelButtonText: 'Cancelar',
    allowOutsideClick: false,
}).then(async (result) => {
    if (result.isConfirmed) {
        try {
            //Se actualiza el valor del token (esto para evitar errores con todos los refresh del token)
            token.value = localStorage.getItem('token');
            try {
                //Se realiza la petición axios
                await axios.delete("/secciones/" + id, {
                    headers: {
                        Authorization: `Bearer ${token.value}`,
                    },
                }).then(res => {
                    //Se reinicia el timer
                    window.dispatchEvent(EVENT);
                    //Se actualiza el valor del token con la respuesta del axios
                    localStorage.setItem('token', res.data.data.token);
                    token.value = localStorage.getItem('token');
                });;

                //Se leen todas las páginas y en dado caso haya algo escrito en el buscador se filtran los datos
                await props.actualizar_datos();

                //Se lanza la alerta de éxito
                Toast.fire({
                    icon: "success",
                    title: "Sección recuperada exitosamente",
                });
            } catch (error) {
                console.log(error);
            }
        }
        catch (error) {
            //Se extrae el mensaje de error
            const mensajeError = error.response.data.message;
            //Se extrae el sqlstate (identificador de acciones SQL)
            const sqlState = validaciones.extraerSqlState(mensajeError);
            //Se llama la función de mensajeSqlState para mostrar un mensaje de error relacionado al sqlstate
            const res = validaciones.mensajeSqlState(sqlState);

            //Se cierra el modal
            document.getElementById("closeModal").click();

            //Se muestra un sweetalert con el mensaje
            Swal.fire({
                icon: "error",
                title: "Error",
                text: res,
                confirmButtonColor: "#3F4280",
            });
        }
    }
});
}
//Validaciones

//Función para validar que el titulo de la sección solo lleve letras y números
function validarTituloSeccion() {
    var res = validaciones.validarSoloLetrasYNumeros(form.value.titulo_seccion);
    return res;
}

//Función para validar que el subtitulo de la sección solo lleve letras y números
function validarSubtituloSeccion() {
    var res = validaciones.validarSoloLetrasYNumeros(form.value.subtitulo_seccion);
    return res;
}

</script>