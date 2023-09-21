<template>
    <div class="primer_uso h-screen w-screen overflow-hidden">
        <form class="flex ml-16 h-full w-full" @submit.prevent="crearPrimerParroquia">
            <div class="w-3/4 flex-col mt-20">
                <p class="text-white font-semibold text-6xl">Parroquia</p>
                <div class="flex mr-8 mt-20 justify-between items-start">
                    <div class="flex-col">
                        <input type="hidden" v-model="form.id_configuracion_parroquia">
                        <div class="relative z-0 mt-6 w-64">
                            <input type="text" id="nombre_parroquia" name="nombre_parroquia" required maxlength="150"
                                @input="validarNombreParroquia()" v-model="form.nombre_parroquia"
                                class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                placeholder=" " autocomplete="off" />
                            <label for="nombre_parroquia"
                                class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre
                                - Parroquia<span class="text-sm ml-1"> * </span></label>
                        </div>
                        <div v-if="!validarNombreParroquia()"
                            class="flex w-64 mt-2 mb-0 text-sm text-red-400 bg-transparent" role="alert">
                            <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <div>
                                <div class="flex-col">
                                    El nombre de la parroquia solo permite <span class="font-medium">
                                        letras.</span>
                                </div>
                            </div>
                        </div>
                        <div class="relative z-0 mt-12 w-64">
                            <textarea type="text" id="direccion_parroquia" name="direccion_parroquia" required
                                maxlength="250" v-model="form.direccion_parroquia"
                                class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                placeholder=" " autocomplete="off" />
                            <label for="direccion_parroquia"
                                class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Direccion
                                - Parroquia<span class="text-sm ml-1"> * </span></label>
                        </div>
                        <div class="relative z-0 mt-16 w-64">
                            <input type="text" id="nombre_representante" name="nombre_representante" required
                                maxlength="100" @input="validarNombreRepresentante()" v-model="form.nombre_representante"
                                class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                placeholder=" " autocomplete="off" />
                            <label for="nombre_representante"
                                class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombres
                                - Representante<span class="text-sm ml-1"> * </span></label>
                        </div>
                        <div v-if="!validarNombreRepresentante()"
                            class="flex mt-2 w-64 mb-0 text-sm text-red-400 bg-transparent" role="alert">
                            <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <div>
                                <div class="flex-col">
                                    El nombre del representante solo permite <span class="font-medium">
                                        letras.</span>
                                </div>
                            </div>
                        </div>
                        <div class="relative z-0 mt-16 w-64">
                            <input type="text" id="documento_representante" name="documento_representante" required
                                maxlength="10" @input="validarDocumentoRepresentante()"
                                v-model="form.documento_representante"
                                class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                placeholder=" " autocomplete="off" />
                            <label for="documento_representante"
                                class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Documento
                                - Representante<span class="text-sm ml-1"> * </span></label>
                        </div>
                        <div v-if="!validarDocumentoRepresentante()"
                            class="flex mt-2 mb-0 w-64 text-sm text-red-400 bg-transparent" role="alert">
                            <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <div>
                                <div class="flex-col">
                                    El documento ingresado <span class="font-medium">
                                        no tiene un formato correcto.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex-col">
                        <div class="relative z-0 mt-6 w-64">
                            <input type="text" id="pagina_web" name="pagina_web" required maxlength="250"
                                v-model="form.pagina_web"
                                class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                placeholder=" " autocomplete="off" />
                            <label for="pagina_web"
                                class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Pagina
                                web
                                - Parroquia<span class="text-sm ml-1"> * </span></label>
                        </div>
                        <div class="relative z-0 mt-16 w-64">
                            <input type="text" id="telefono_parroquia" name="telefono_parroquia" required maxlength="9"
                                @input="validarTelefonoParroquia()" v-model="form.telefono_parroquia"
                                class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                placeholder=" " autocomplete="off" />
                            <label for="telefono_parroquia"
                                class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Telefono
                                - Parroquia<span class="text-sm ml-1"> * </span></label>
                        </div>
                        <div v-if="!validarTelefonoParroquia()"
                            class="flex w-64 mt-2 mb-0 text-sm text-red-400 bg-transparent" role="alert">
                            <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <div>
                                <div class="flex-col">
                                    El número de teléfono ingresado <span class="font-medium">
                                        no tiene un formato correcto.</span>
                                </div>
                            </div>
                        </div>
                        <div class="relative z-0 mt-16 w-64">
                            <input type="text" id="apellido_representante" name="apellido_representante" required
                                maxlength="100" @input="validarApellidoRepresentante()"
                                v-model="form.apellido_representante"
                                class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                placeholder=" " autocomplete="off" />
                            <label for="apellido_representante"
                                class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellidos
                                - Representante<span class="text-sm ml-1"> * </span></label>
                        </div>
                        <div v-if="!validarApellidoRepresentante()"
                            class="flex mt-2 w-64 mb-0 text-sm text-red-400 bg-transparent" role="alert">
                            <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <div>
                                <div class="flex-col">
                                    El apellido del representante solo permite <span class="font-medium">
                                        letras.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex-col">
                        <div class="relative z-0 mt-6 w-64">
                            <input type="text" id="ruc_parroquia" name="ruc_parroquia" required maxlength="13"
                                @input="validarRucParroquia()" v-model="form.ruc_parroquia"
                                class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                placeholder=" " autocomplete="off" />
                            <label for="ruc_parroquia"
                                class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">RUC
                                - Parroquia<span class="text-sm ml-1"> * </span></label>
                        </div>
                        <div v-if="!validarRucParroquia()" class="flex w-64 mt-1 mb-0 text-sm text-red-400 bg-transparent"
                            role="alert">
                            <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <div>
                                <div class="flex-col">
                                    El RUC de la parroquia solo permite <span class="font-medium">
                                        numeros.</span>
                                </div>
                            </div>
                        </div>
                        <div class="relative z-0 mt-16 w-64">
                            <input type="text" id="telefono_usuario" name="telefono_usuario" required maxlength="100"
                                @input="validarIdentificador()" v-model="form.identificador_parroquia"
                                class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                placeholder=" " autocomplete="off" />
                            <label for="telefono_usuario"
                                class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Identificador
                                - Parroquia<span class="text-sm ml-1"> * </span></label>
                        </div>
                        <div v-if="!validarIdentificador()" class="flex mt-2 w-64 mb-0 text-sm text-red-400 bg-transparent"
                            role="alert">
                            <!-- El Código de identificador<span class="font-medium">
                                solo permite letras y números</span> -->
                            <div class="flex-col">
                                El código de identificador <span class="font-medium">
                                    solo permite letras y números.</span>
                            </div>
                        </div>
                        <div class="pt-4 mt-8 flex-col">
                            <label for="" class="text-sm absolute text-gray-200">Tipo - Documento<span class="text-sm ml-1">
                                    *
                                </span></label>
                            <select id="underline_select" v-model="form.tipo_documento"
                                class="block mt-4 py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                <option value="0" class="bg-gray-700">Seleccione una opción</option>
                                <option value="Cédula" class="bg-gray-700">Cédula</option>
                                <option value="Pasaporte" class="bg-gray-700">Pasaporte</option>
                                <option value="Otro" class="bg-gray-700">Otro...</option>
                            </select>
                            <div v-if="form.tipo_documento == 0" class="flex mt-2 mb-0 text-sm text-red-400 bg-transparent"
                                role="alert">
                                <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <div>
                                    Seleccione <span class="font-medium">
                                        una opción.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex-col">
                        <div class="">
                            <p class="mb-4 text-center text-gray-200">Imagen - Usuario</p>
                            <div class="flex-col m-auto">
                                <div class="h-44 w-40 border-2 border-slate-900 ml-14 rounded-lg cursor-pointer relative max-[630px]:m-auto"
                                    @click="seleccionarArchivo" @mouseover="iconoBorrarTrue" @mouseleave="iconoBorrarFalse">
                                    <img v-if="imagenPreview" :src="imagenPreview" class="h-44 w-40 rounded-lg" />
                                    <input type="file" ref="inputImagen" class="hidden" @change="cambiarImagen" />
                                    <div v-if="mostrarIconoBorrar"
                                        class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px"
                                            viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;">
                                            <path
                                                d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="m-auto max-[630px]:text-center max-[630px]:ml-[-58px]">
                                    <button type="button"
                                        class="w-40 ml-14 py-2 mt-3 bg-white rounded-md hover:bg-slate-300 text-center"
                                        @click="seleccionarArchivo">Seleccionar Imagen</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-start items-end h-44">
                    <div class="flex-col">
                        <p class="font-extralight text-base text-gray-400">Llena los campos establecidos con la información
                            solicitada
                            de acuerdo a la parroquia que</p>
                        <p class="font-extralight text-base text-gray-400">deseas registrar.</p>
                        <p class="font-extralight text-base text-gray-400 mt-4">Una vez ingresada la información, solo
                            podrás
                            cambiarla
                            dentro del sistema.</p>
                    </div>
                </div>
            </div>
            <div class="h-full flex justify-center items-center w-1/6">
                <div class="botones w-full h-3/5 ml-10 flex items-center">
                    <div class="flex-col ml-2">
                        <button to="primer_usuario" type="submit" :disbale="!validarNombreParroquia()||!validarRucParroquia()||!validarNombreRepresentante()||!validarApellidoRepresentante()
                        ||!validarDocumentoRepresentante()||!validarTelefonoParroquia()||!validarIdentificador()"
                            class="h-14 w-64 bg-darkSpace text-white rounded-md text-lg font-semibold flex justify-center items-center">
                            Continuar
                            <svg width="30px" height="30px" stroke-width="2.5" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" color="#000000">
                                <path d="M9 6l6 6-6 6" stroke="#FFF" stroke-width="2.5" stroke-linecap="round"
                                    stroke-linejoin="round">
                                </path>
                            </svg>
                        </button>
                        <NuxtLink to="/"
                            class="bg-transparent h-14 w-64 text-white rounded-lg mt-8 text-lg font-semibold flex justify-center items-center">
                            Volver</NuxtLink>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<style scoped>
.botones {
    border-left: 1px solid #818181;
}

.primer_uso {
    background: linear-gradient(180deg,
            rgba(63, 66, 128, 0.6241) 0%,
            rgba(49, 50, 71, 0.5609) 100%);
    background-color: #1e1e1e;
    font-family: 'Poppins', sans-serif;
}
</style>
<script setup>
import axios from 'axios';
import Swal from 'sweetalert2';
import validaciones from '../assets/validaciones.js';
definePageMeta({
    layout: false,
});

const capturar_parroquia = ref(null);
const capturar_usuario = ref(null);


async function validarPantalla() {
    const res = await axios.get('/primer_uso');
    capturar_parroquia.value = res.data.parroquias;
    capturar_usuario.value = res.data.usuarios;
    if (capturar_parroquia.value == true && capturar_usuario.value == false) {
        navigateTo('primer_usuario')
    } else     if (capturar_parroquia.value == true && capturar_usuario.value == true) {
        navigateTo('/')
    }
}
onMounted(() => {
    validarPantalla();
})


//Variable reactiva para verificar si mostrar o no el boton para borrar alguna imagen
const mostrarIconoBorrar = ref(false);
//Metodo para hacer visible el icono de borrar una imagen
function iconoBorrarTrue() {
    if (imagenPreview.value) {
        mostrarIconoBorrar.value = true;
    }
}
//Metodo para no mostrar el icono de borrar una imagen
function iconoBorrarFalse() {
    if (imagenPreview.value) {
        mostrarIconoBorrar.value = false;
    }
}
//Variable reactiva para mostrar la imagen capturada
const imagenPreview = ref(null);
//Metodo para seleccionar una imagen para el registro
const seleccionarArchivo = () => {
    if (mostrarIconoBorrar.value == false) {
        inputImagen.value.click();
    } else {
        limpiarImagen();
    }
};
//Variable reactiva para caputar el valor de la imagen
const inputImagen = ref(null);
//Metodo para cambiar la imagen de un registro
const cambiarImagen = () => {
    const input = inputImagen.value;
    const file = input.files;
    if (file && file[0]) {
        form.value.logo_parroquia = file[0];
        console.log(form.value.logo_parroquia);
        const reader = new FileReader();
        reader.onload = (e) => {
            imagenPreview.value = e.target.result;
        };
        reader.readAsDataURL(file[0]);
        return file[0];
    }
};

//Metodo para mostrar las alertas
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

const form = ref({
    id_configuracion_parroquia: 1,
    nombre_parroquia: "",
    pagina_web: "",
    ruc_parroquia: "",
    direccion_parroquia: "",
    nombre_representante: "",
    apellido_representante: "",
    documento_representante: "",
    tipo_documento: 0,
    telefono_parroquia: "",
    identificador_parroquia: "",
    logo_parroquia: ""
})

async function crearPrimerParroquia() {
    try {
        const FORMDATA = new FormData();
        FORMDATA.append('id_configuracion_parroquia', form.value.id_configuracion_parroquia);
        FORMDATA.append("nombre_parroquia", form.value.nombre_parroquia);
        FORMDATA.append("pagina_web", form.value.pagina_web);
        FORMDATA.append("ruc_parroquia", form.value.ruc_parroquia);
        FORMDATA.append("direccion_parroquia", form.value.direccion_parroquia);
        FORMDATA.append("nombre_representante", form.value.nombre_representante);
        FORMDATA.append("apellido_representante", form.value.apellido_representante);
        FORMDATA.append("documento_representante", form.value.documento_representante);
        FORMDATA.append("tipo_documento", form.value.tipo_documento);
        FORMDATA.append("telefono_parroquia", form.value.telefono_parroquia);
        FORMDATA.append("identificador_parroquia", form.value.identificador_parroquia);
        FORMDATA.append("logo_parroquia", form.value.logo_parroquia);

        await axios.post('/primer_parroquia', FORMDATA).then(() => {
            Toast.fire({
                icon: 'success',
                title: 'Parroquia creada exitosamente'
            });
            navigateTo('/primer_usuario');
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
//Validaciones
function validarNombreParroquia() {
    var res = validaciones.validarSoloLetras(form.value.nombre_parroquia);
    return res;
}
function validarRucParroquia() {
    var res = validaciones.validarSoloNumero(form.value.ruc_parroquia);
    return res;
}
function validarNombreRepresentante() {
    var res = validaciones.validarSoloLetras(form.value.nombre_representante);
    return res;
}
function validarApellidoRepresentante() {
    var res = validaciones.validarSoloLetras(form.value.apellido_representante);
    return res;
}
function validarDocumentoRepresentante() {
    if (form.value.tipo_documento == 0 && form.value.documento_representante.length == 0) {
        return true;
    } else if (form.value.tipo_documento == 0) {
        return false;
    } else {
        var res = validaciones.validarNumeroDocumento(form.value.documento_representante, form.value.tipo_documento);
        return res;
    }
}
function validarTelefonoParroquia() {
    var res = validaciones.validarNumeroTelefono(form.value.telefono_parroquia);
    return res;
}
function validarIdentificador() {
    var res = validaciones.validarSoloLetrasYNumeros(form.value.identificador_parroquia);
    return res;
}
</script>
