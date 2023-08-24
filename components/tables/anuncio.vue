<!-- SCRUD como componente -->
<template>
    <div class="contained-data flex-col" v-for="anuncio in datosAnuncio" :key="anuncio.id">
        <div
            class="data-contained flex justify-between mt-4 rounded-xl p-4 max-[400px]:flex-wrap max-[400px]:w-full min-w-[200px]">
            <div class="flex justify-start w-3/4 items-center max-[400px]:w-full">
                <div
                    class="datainfo flex-col ml-8 max-[400px]:p-0 max-[400px]:w-full max-[400px]:ml-0 max-[400px]:text-center">
                    <!--Con la implementación de una variable que permite visualizar la información contenida en cada uno-->
                    <p class="font-extrabold text-xl text-salte-900 max-[750px]:text-[18px]"> {{
                        anuncio.campos.titulo_anuncio }} </p>
                    <p class="font-normal text-sm text-gray-500 max-[750px]:text-[12px]"> {{
                        anuncio.campos.enlace_externo }}</p>
                    <p class="font-normal text-sm text-gray-500 max-[750px]:text-[12px]">
                        {{ anuncio.campos.enlace_externo }}
                    </p>
                </div>
            </div>
            <!-- Al darle clic al evento leerUnContacto ejecuta la funcion -->
            <div
                class="buttons-data flex justify-center items-center max-[750px]:flex-col max-[400px]:flex-row max-[400px]:m-auto max-[400px]:mt-2">
                <button v-if="anuncio.campos.visibilidad_anuncio == 1" @click.prevent="estadoActualizar(anuncio.id)"
                    class="h-10 w-10 rounded-md flex items-center justify-center editbtn max-[400px]:mx-4">
                    <svg width="26px" height="26px" stroke-width="2" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg" color="#000000">
                        <path
                            d="M3 21h18M12.222 5.828L15.05 3 20 7.95l-2.828 2.828m-4.95-4.95l-5.607 5.607a1 1 0 00-.293.707v4.536h4.536a1 1 0 00.707-.293l5.607-5.607m-4.95-4.95l4.95 4.95"
                            stroke="#C99856" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                    </svg>
                </button>
                <!-- Al darle clic al evento borrarContacto ejecuta la funcion -->
                <button @click.prevent=" borrarAnuncio(anuncio.id, anuncio.campos.anuncio)"
                    v-if="anuncio.campos.visibilidad_anuncio == 1"
                    class="h-10 w-10 rounded-md flex items-center justify-center ml-4 deletebtn max-[750px]:ml-0 max-[750px]:mt-2 max-[400px]:mt-0 max-[400px]:mx-4">
                    <svg width="26px" height="26px" viewBox="0 0 24 24" stroke-width="2" fill="none"
                        xmlns="http://www.w3.org/2000/svg" color="#000000">
                        <path
                            d="M20 9l-1.995 11.346A2 2 0 0116.035 22h-8.07a2 2 0 01-1.97-1.654L4 9M21 6h-5.625M3 6h5.625m0 0V4a2 2 0 012-2h2.75a2 2 0 012 2v2m-6.75 0h6.75"
                            stroke="#872727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                    </svg>
                </button>
                <!-- Al darle clic al evento recuperarContacto ejecuta la funcion -->
                <button v-else @click="recuperarUnAnuncio(anuncio.id, anuncio.campos.anuncio)"
                    class="h-10 w-10 rounded-md flex items-center justify-center ml-4 changebtn max-[750px]:ml-0 max-[750px]:mt-2 max-[400px]:mt-0 max-[400px]:mx-4">
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
    <!-- Modal principal-->
    <div id="staticModal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-2xl max-h-full">
            <!-- Contenido del modal -->
            <div class="relative rounded-lg shadow modal">
                <!--Encabezado del modal -->
                <div class="flex items-start justify-between p-4 rounded-t">
                    <div class="flex-col ml-4 pt-4">
                        <!-- Asignamos un id al título del modal para la creación  y actualizacion de texto-->
                        <p class="text-3xl font-bold text-gray-100" id="modalText"></p>
                        <p class="text-lg font-medium text-gray-400">Anuncio</p>
                    </div>
                    <!-- Boton para cerrar el modal -->
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
                <!-- Cuerpo del modal -->
                <div class="p-6 space-y-6 pb-10">
                    <form @submit.prevent="submitForm()" class="flex justify-evenly">
                        <div class="flex-col w-64">
                            <!-- Input invisible para reconocer el  registro   -->
                            <input type="hidden" name="id_anuncio" id="id_anuncio" v-model="form.id_anuncio">
                            <div class="relative z-0">
                                <!-- Campo de entrada de texto -->
                                <input type="text" id="title_anuncio" name="titulo_anuncio" v-model="form.titulo_anuncio"
                                    @input="validarTituloAnuncio()" maxlength="100" required
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" />
                                <span class="text-xs text-gray-400 absolute bottom-0.5 right-0" v-if="form.titulo_anuncio">
                                    {{
                                        form.titulo_anuncio.length }} /100</span>
                                <span class="text-xs text-gray-400 absolute bottom-0.5 right-0" v-else> 0 /100</span>
                                <label for="title_anuncio"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Título
                                    - Anuncio<span class="text-sm ml-1"> * </span></label>
                            </div>
                            <div v-if="!validarTituloAnuncio()" class="flex mt-2 mb-0 text-sm text-red-400 bg-transparent"
                                role="alert">
                                <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <div>
                                    El título del anuncio solo permite caracteres <span class="font-medium">
                                        alfanuméricos y algunos especiales (- / |).</span>
                                </div>
                            </div>
                            <div class="relative z-0 mt-6">
                                <!-- Campo de entrada de texto -->
                                <textarea id="contenido_titulo" name="contenido_anuncio" v-model="form.contenido_anuncio"
                                    class="block py-2.5 px-0 w-full min-h-[3rem] h-[3rem] max-h-[12rem] text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" />
                                <span class="text-xs text-gray-400 absolute bottom-0.5 right-5"
                                    v-if="form.contenido_anuncio">
                                    {{
                                        form.contenido_anuncio.length }} /1000</span>
                                <span class="text-xs text-gray-400 absolute bottom-0.5 right-5" v-else> 0 /1000</span>
                                <label for="contenido_anuncio"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contenido
                                    - Anuncio</label>
                            </div>
                            <div class="relative z-0 mt-10">
                                <!-- Campo de entrada de texto -->
                                <input type="date" id="fecha_anuncio" name="fecha_anuncio" v-model="form.fecha_anuncio"
                                    required
                                    class="block py-2.5 px-0 w-full text-xs text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" />
                                <label for="username"
                                    class="absolute text-lg text-gray-200 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Fecha
                                    - Anuncio<span class="text-sm ml-1"> * </span></label>
                            </div>
                            <div class="relative z-0 mt-6">
                                <!-- Campo de entrada de texto -->
                                <input type="text" id="enlace_externo" name="enlace_externo" v-model="form.enlace_externo"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" />
                                <label for="username"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enlace
                                    - Anuncio</label>
                            </div>
                            <!-- Etiqueta para el checkbox para la visibilidad del regisrtro -->
                            <div class="flex-col mt-8">
                                <label for="" class="text-gray-200">Visibilidad - Enlace</label>
                                <div class="flex justify-start mt-2">
                                    <label class="relative inline-flex items-center mb-5 cursor-pointer">
                                        <input type="checkbox" value="" class="sr-only peer" name="visibilidad_anuncio"
                                            v-model="form.visibilidad_anuncio">
                                        <div
                                            class="w-9 h-5 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="flex-col w-64">
                            <div class="flex-col">
                                <p class="mb-4 text-center text-gray-200">Imagen - Anuncio</p>
                                <img src="" class="h-44 w-40 border-2 border-slate-900 ml-14 rounded-lg" />
                            </div>
                            <div class="modal-buttons mt-40 flex justify-end items-end">
                                <button class="h-10 w-10 rounded-lg flex justify-center items-center mr-4" type="button"
                                    @click="limpiarForm()">
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
                                            stroke-linecap="round" stroke-linejoin="round">
                                        </path>
                                    </svg>
                                </button>
                                <!-- Botón para crear un anuncio -->
                                <button class="h-10 w-10 rounded-lg flex justify-center items-center" id="btnModalAdd"
                                    type="submit" :disabled="!validarTituloAnuncio()" @click="accionForm('crear')">
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
                                <!-- Se le coloca la función para actualizar al botón -->
                                <button id="btnModalUpdate" type="submit" :disabled="!validarTituloAnuncio()"
                                    @click="accionForm('actualizar')"
                                    class="h-10 w-10 rounded-lg flex justify-center items-center">
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
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.buttons-data .changebtn {
    border: 3px solid #3F4280;
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
import { Modal } from 'flowbite';
import validaciones from '../../assets/validaciones.js';
//Definimos la prop que traera los datos del componente principál
const props = defineProps({
    datosAnuncio: Array,
    actualizarDatos: Function,
});

//Seccion para cargar o modificar el DOM despues de haber cargado todo el template
onMounted(() => {
    //Codigo para abrir el modal, con el boton de crear
    const buttonElement = document.getElementById('btnadd');
    const modalElement = document.getElementById('staticModal');
    const closeButton = document.getElementById('closeModal');
    const modalText = document.getElementById('modalText');
    const modalOptions = {
        backdrop: 'static',
        backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
    };

    if (modalElement) {
        const modal = new Modal(modalElement, modalOptions);
        buttonElement.addEventListener('click', function () {
            modalText.textContent = "Registrar";
            document.getElementById('btnModalAdd').classList.remove('hidden');
            document.getElementById('btnModalUpdate').classList.add('hidden');
            accionForm('crear');
            modal.show();
        });
        closeButton.addEventListener('click', function () {
            modal.hide();
        });
    }
    //Capturamos el token del localStorage para poder realizar las perticiones protegidas desde la api
    token.value = localStorage.getItem('token');
});

//Variable reactiva para almacenar el token del localStorag
const token = ref(null);


//constante form, para guardar los datos del modal y luego enviarlos a la APÍ
const form = ref({
    id_anuncio: "",
    titulo_anuncio: "",
    contenido_anuncio: "",
    fecha_anuncio: "",
    enlace_externo: "",
    visibilidad_anuncio: false
});

//Función para limpiar todos los campos del form
function limpiarForm() {
    //Se llama el valor de la variable form y se cambia cada uno de sus elementos a nulo
    form.value.id_anuncio = "";
    form.value.titulo_anuncio = "";
    form.value.contenido_anuncio = "";
    form.value.fecha_anuncio = "";
    form.value.enlace_externo = "";
    form.value.visibilidad_anuncio = false;
}

//Con esta variable Toast configuramos el mensaje que nos confirma que un proceso se ha realizado.
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})



//Variable para validar que acción se quiere hacer cuando se hace un submit al form
var formAccion = null;

//Función para evaluar que acción se va a hacer al hacer submit en el form
function accionForm(accion) {
    formAccion = accion;
}

//Función para crear/actualizar un registro cuando se ejecuta el submit del form
function submitForm() {
    if (formAccion == "crear") {
        crearAnuncio();
    } else {
        actualizarAnuncio();
    }
}

//Función para crear un anuncio
async function crearAnuncio() {
    try {
        const formData = new FormData();
        formData.append("titulo_anuncio", form.value.titulo_anuncio);
        formData.append("contenido_anuncio", form.value.contenido_anuncio);
        formData.append("fecha_anuncio", form.value.fecha_anuncio);
        formData.append("enlace_externo", form.value.enlace_externo);
        formData.append(
            "visibilidad_anuncio",
            form.value.visibilidad_anuncio ? 1 : 0
        );
        //Se realiza la petición axios mandando la ruta y el formData
        await axios.post("/anuncios/", formData, {
            headers: {
                Authorization: `Bearer ${token.value}`,
            },
        });
        document.getElementById('closeModal').click();
        //Se lanza la alerta con el mensaje de éxito
        props.actualizarDatos();
        Toast.fire({
            icon: 'success',
            title: 'Anuncio creado exitosamente'
        });
    } catch (error) {
        console.log(error);
        const mensajeError = error.response.data.message;
        if (!error.response.data.errors) {
            const sqlState = validaciones.extraerSqlState(mensajeError);
            const res = validaciones.mensajeSqlState(sqlState);
            //Se muestra un sweetalert con el mensaje
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: res,
                confirmButtonColor: '#3F4280'
            });
        } else {
            //Se muestra un sweetalert con el mensaje
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: mensajeError,
                confirmButtonColor: '#3F4280'
            });
        }
    }
}


function estadoActualizar(id) {
//Constante para el modal
const modalElement = document.getElementById("staticModal");
            //Constante que contiene las caracteristicas del modal
            const modalOptions = {
                backdrop: "static",
                backdropClasses:
                    "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
            };
            //Instanciamos el boton para cerrar el modal
            const closeButton = document.getElementById("closeModal");
            //Constante para el titulo del modal
            const modalText = document.getElementById("modalText");
            //Constante para el boton de actualizar dentro del modal
            const modalBtnUpdate = document.getElementById("btnModalUpdate");
            //Instanciamos el modal
            const modal = new Modal(modalElement, modalOptions);
            //Le modificamos el texto del header al modal
            modalText.textContent = "Editar";
            //Colocamos visibilidad al botón de actualizar en el modal
            modalBtnUpdate.classList.remove("hidden");
            //Abrimos el modal
            modal.show();
            //Creamos el evento click para cuando se cierre el modal y te cierre la instancia antes creada
            closeButton.addEventListener("click", function () {
                //Ocultamos el modal
                modal.hide();
                //Limpiamos el modal
                limpiarForm();
            });
    //se llama la funcion  para poder acapturar los datos
    leerUnAnuncio(id);
}





//Función para traer los datos de un registro en específico, estableciendo como parámetro el id del registro
async function leerUnAnuncio(id) {
    try {
        accionForm("actualizar");
        //Se hace la petición axios y se evalua la respuesta
        await axios.get("/anuncios/" + id, {
            headers: {
                Authorization: `Bearer ${token.value}`,
            },
        }).then((res) => {
            //Constante para el modal
            const modalElement = document.getElementById("staticModal");
            //Constante que contiene las caracteristicas del modal
            const modalOptions = {
                backdrop: "static",
                backdropClasses:
                    "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
            };
            //Instanciamos el boton para cerrar el modal
            const closeButton = document.getElementById("closeModal");
            //Constante para el titulo del modal
            const modalText = document.getElementById("modalText");
            //Constante para el boton de agregar dentro del modal
            const modalBtnAdd = document.getElementById("btnModalAdd");
            //Constante para el boton de actualizar dentro del modal
            const modalBtnUpdate = document.getElementById("btnModalUpdate");
            //Instanciamos el modal
            const modal = new Modal(modalElement, modalOptions);
            //Le modificamos el texto del header al modal
            modalText.textContent = "Editar";
            //Colocamos visibilidad al botón de actualizar en el modal
            modalBtnUpdate.classList.remove("hidden");
            //Ocultamos el botón de agregar en el modal
            modalBtnAdd.classList.add("hidden");
            //Abrimos el modal
            modal.show();
            //Creamos el evento click para cuando se cierre el modal y te cierre la instancia antes creada
            closeButton.addEventListener("click", function () {
                //Ocultamos el modal
                modal.hide();
                //Limpiamos el modal
                limpiarForm();
            });
            //Llenamos los inputs del modal con su respectiva informacion
            form.value = {
                id_anuncio: res.data.data.id,
                titulo_anuncio: res.data.data.campos.titulo_anuncio,
                contenido_anuncio: res.data.data.campos.contenido_anuncio,
                fecha_anuncio: res.data.data.campos.fecha_anuncio,
                enlace_externo: res.data.data.campos.enlace_externo,
                //Se convierte a true o false en caso de que devuelva 1 o 0, esto por que el input solo acepta true y false
                visibilidad_anuncio: res.data.data.campos.visibilidad_anuncio ? true : false
            };
        });
    } catch (error) {
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


async function actualizarAnuncio() {
    if (validarTituloAnuncio()) {
        try {
            //Se establece una variable de id con el valor que tiene guardado la variable form
            var id = form.value.id_anuncio;

            //Se crea una constante FormData para almacenar los datos del modal
            const formData = new FormData();
            formData.append("titulo_anuncio", form.value.titulo_anuncio);
            formData.append("contenido_anuncio", form.value.contenido_anuncio);
            formData.append("fecha_anuncio", form.value.fecha_anuncio);
            formData.append("enlace_externo", form.value.enlace_externo);
            formData.append(
                "visibilidad_anuncio",
                form.value.visibilidad_anuncio ? 1 : 0
            );

            //Se realiza la petición axios mandando la ruta y el formData
            await axios.post("/anuncios_update/" + id, formData, {
                headers: {
                    Authorization: `Bearer ${token.value}`,
                },
            }),
               //Se manda a llamar la accion para actualizar los datos con las props
                    props.actualizarDatos();

            document.getElementById("closeModal").click();

            //Se lanza la alerta de éxito
            Toast.fire({
                icon: "success",
                title: "Anuncio actualizado exitosamente",
            });

            //Se evalua el buscador para realizar leerContactos o buscarContactos
            // if (buscar.value.buscador) {
            //     buscarContactos();
            // } else {
            //     leerContactos();
            // }
            //Se cierra el modal

        } catch (error) {
            console.log(error);
            const mensajeError = error.response.data.message;
            if (!error.response.data.errors) {
                //Se extrae el sqlstate (identificador de acciones SQL)
                const sqlState = validaciones.extraerSqlState(mensajeError);
                //Se llama la función de mensajeSqlState para mostrar un mensaje de error relacionado al sqlstate
                const res = validaciones.mensajeSqlState(sqlState);

                //Se cierra el modal
                document.getElementById('closeModal').click();

                //Se muestra un sweetalert con el mensaje
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: res,
                    confirmButtonColor: '#3F4280'
                });
            } else {
                //Se muestra un sweetalert con el mensaje
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: mensajeError,
                    confirmButtonColor: '#3F4280'
                });
            }
        }
    }
}

//Función para cambiar la visibilidad de una página para ocultarla
//Codigo para cambiar el estado del usuarios a inactivo
async function borrarAnuncio(id) {
    console.log(id);
    Swal.fire({
        title: 'Confirmación',
        text: "¿Desea ocultar el registro? ",
        icon: 'warning',
        reverseButtons: true,
        showCancelButton: true,
        confirmButtonColor: '#3F4280',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar'
    }).then(async (result) => {
        if (result.isConfirmed) {
            try {
                await axios.delete('/anuncios/' + id, {
                    headers: {
                        Authorization: `Bearer ${token.value}`,
                    }
                }),
                    //Se manda a llamar la accion para actualizar los datos con las props
                    props.actualizarDatos();
                //Se lanza la alerta de éxito
                Toast.fire({
                    icon: "success",
                    title: "Anuncio desactivado exitosamente",
                });
            } catch (error) {
                console.log(error);
            }
        }
    });
}

//Función para cambiar la visibilidad de una página para recuperarla
async function recuperarUnAnuncio(id) {
    //Se lanza una alerta de confirmación
    Swal.fire({
        title: "Confirmación",
        text: "¿Desea recuperar el registro?",
        icon: "warning",
        reverseButtons: true,
        showCancelButton: true,
        confirmButtonColor: "#3F4280",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirmar",
        cancelButtonText: "Cancelar",
        //Se evalua la respuesta de la alerta
    }).then(async (result) => {
        //Si el usuario selecciono "Confirmar"
        if (result.isConfirmed) {
            try {
                //Se realiza la petición axios
                await axios.delete("/anuncios/" + id, {
                    headers: {
                        Authorization: `Bearer ${token.value}`,
                    },
                }),
                    //Se manda a llamar la accion para actualizar los datos con las props
                    props.actualizarDatos();
                //Se lanza la alerta de éxito
                Toast.fire({
                    icon: "success",
                    title: "Anuncio recuperado exitosamente",
                });

                //Se evalua el buscador para realizar leerContactos o buscarContactos 
                // if (buscar.value.buscador) {
                //     buscarContactos();
                // } else {
                //     leerContactos();
                // } 

                //Se lanza la alerta de éxito

            } catch (error) {
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
function validarTituloAnuncio() {
    var res = validaciones.validarSoloLetrasYNumeros(form.value.titulo_anuncio);
    return res;
}

</script>
<style>
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
</style>