<template>
    <div class="contained-data flex-col" v-for="proyecto in dataProyectos" :key="proyecto.id_proyecto_donacion">
        <div
            class="data-contained flex justify-between mt-4 rounded-xl p-4 max-[400px]:flex-wrap max-[400px]:w-full min-w-[200px]">
            <div class="flex justify-start w-3/4 items-center max-[400px]:w-full">
                <img src="" class="h-10 w-10 rounded-lg border-2 border-gray-800 max-[400px]:hidden" />
                <div
                    class="datainfo flex-col ml-8 max-[400px]:p-0 max-[400px]:w-full max-[400px]:ml-0 max-[400px]:text-center">
                    <p class="font-extrabold text-xl text-salte-900 max-[750px]:text-[18px]">
                        {{ proyecto.nombre_proyecto }}</p>
                    <p class="font-normal text-sm mt-1text-gray-500 max-[750px]:text-[12px]">
                        <span>$</span>{{ proyecto.meta_monetaria }}
                    </p>
                    <p class="font-normal text-sm text-gray-500 max-[750px]:text-[12px]">
                        {{ proyecto.estado_proyecto }}
                    </p>
                </div>
            </div>
            <div class="buttons-data flex justify-center items-center max-[750px]:flex-col max-[400px]:flex-row max-[400px]:m-auto max-[400px]:mt-2"
                v-if="proyecto.visibilidad_proyecto == 1">
                <button class="h-10 w-10 rounded-md flex items-center justify-center mr-4 imagenbtn max-[750px]:mr-0"
                    @click="modalImages()">
                    <svg width="26px" height="26px" stroke-width="2" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg" color="#000000">
                        <path d="M21 7.6v12.8a.6.6 0 01-.6.6H7.6a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6h12.8a.6.6 0 01.6.6z"
                            stroke="#3F4280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path
                            d="M18 4H4.6a.6.6 0 00-.6.6V18M7 16.8l5.444-1.8L21 18M16.5 13a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
                            stroke="#3F4280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
                <button
                    class="h-10 w-10 rounded-md flex items-center justify-center editbtn max-[400px]:mx-4 max-[750px]:mt-2"
                    @click="estadoActualizar(proyecto.id_proyecto_donacion)" v-if="proyecto.visibilidad_proyecto == 1">
                    <svg width="26px" height="26px" stroke-width="2" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg" color="#000000">
                        <path
                            d="M3 21h18M12.222 5.828L15.05 3 20 7.95l-2.828 2.828m-4.95-4.95l-5.607 5.607a1 1 0 00-.293.707v4.536h4.536a1 1 0 00.707-.293l5.607-5.607m-4.95-4.95l4.95 4.95"
                            stroke="#C99856" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
                <button
                    class="h-10 w-10 rounded-md flex items-center justify-center ml-4 deletebtn max-[750px]:ml-0 max-[750px]:mt-2 max-[400px]:mt-0 max-[400px]:mx-4"
                    @click="borrarProyecto(proyecto.id_proyecto_donacion, proyecto.nombre_proyecto)"
                    v-if="proyecto.visibilidad_proyecto == 1">
                    <svg width="26px" height="26px" viewBox="0 0 24 24" stroke-width="2" fill="none"
                        xmlns="http://www.w3.org/2000/svg" color="#000000">
                        <path
                            d="M20 9l-1.995 11.346A2 2 0 0116.035 22h-8.07a2 2 0 01-1.97-1.654L4 9M21 6h-5.625M3 6h5.625m0 0V4a2 2 0 012-2h2.75a2 2 0 012 2v2m-6.75 0h6.75"
                            stroke="#872727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
            </div>
            <div class="buttons-data flex justify-center items-center max-[750px]:flex-col max-[400px]:flex-row max-[400px]:m-auto max-[400px]:mt-2"
                v-else>
                <button
                    class="h-10 w-10 rounded-md flex items-center justify-center ml-4 changebtn max-[750px]:ml-0 max-[750px]:mt-2 max-[400px]:mt-0 max-[400px]:mx-4"
                    @click="recuperarProyecto(proyecto.id_proyecto_donacion, proyecto.nombre_proyecto)">
                    <svg width="24px" height="24px" stroke-width="3" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg" color="#000000">
                        <path d="M21.168 8A10.003 10.003 0 0012 2C6.815 2 2.55 5.947 2.05 11" stroke="#3F4280"
                            stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M17 8h4.4a.6.6 0 00.6-.6V3M2.881 16c1.544 3.532 5.068 6 9.168 6 5.186 0 9.45-3.947 9.951-9"
                            stroke="#3F4280" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M7.05 16h-4.4a.6.6 0 00-.6.6V21" stroke="#3F4280" stroke-width="3" stroke-linecap="round"
                            stroke-linejoin="round"></path>
                    </svg>
                </button>
            </div>
        </div>
    </div>
    <!-- Proyet modal -->
    <div id="staticModal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-5xl max-h-full">
            <!-- Modal content -->
            <div class="relative rounded-lg shadow modal">
                <!-- Modal header -->
                <div class="flex items-start justify-between p-4 rounded-t">
                    <div class="flex-col ml-4 pt-4">
                        <p class="text-3xl font-bold text-gray-100" id="modalText"></p>
                        <p class="text-lg font-medium text-gray-400">Proyecto</p>
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
                <div class="p-6 space-y-6 pb-10">
                    <form @submit.prevent="submitForm()" class="flex justify-evenly">
                        <div class="flex-col w-64">
                            <!-- Se enlazan todos los inputs usando el v-model a la variable form -->
                            <input type="hidden" v-model="form.id_proyecto_donacion">
                            <div class="relative z-0">
                                <input type="text" id="nombre_proyecto" name="nombre_proyecto" maxlength="100" required
                                    @input="validarNombreProyecto()" v-model="form.nombre_proyecto"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" />
                                <span class="text-xs text-gray-400 absolute bottom-0.5 right-0" v-if="form.nombre_proyecto">
                                    {{ form.nombre_proyecto.length }} /100</span>
                                <span class="text-xs text-gray-400 absolute bottom-0.5 right-0" v-else> 0 /100</span>
                                <label for="nombre_proyecto"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre
                                    - Proyecto<span class="text-sm ml-1"> *
                                    </span></label>
                            </div>
                            <div v-if="!validarNombreProyecto()" class="flex mt-2 mb-0 text-sm text-red-400 bg-transparent"
                                role="alert">
                                <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <div>
                                    El nombre de la página solo permite caracteres <span class="font-medium">
                                        alfanuméricos y algunos especiales (- / |).</span>
                                </div>
                            </div>
                            <div class="relative z-0 mt-6">
                                <textarea id="descripcion_proyecto" name="descripcion_proyecto" required maxlength="1000"
                                    v-model="form.descripcion_proyecto"
                                    class="block py-2.5 px-0 min-h-[3rem] h-[3rem] max-h-[12rem] w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" />
                                <span class="text-xs text-gray-400 absolute bottom-0.5 right-5"
                                    v-if="form.descripcion_proyecto">
                                    {{ form.descripcion_proyecto.length }} /1000</span>
                                <span class="text-xs text-gray-400 absolute bottom-0.5 right-5" v-else> 0 /1000</span>
                                <label for="descripcion_proyecto"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Descripción
                                    - Proyecto<span class="text-sm ml-1"> *
                                    </span></label>
                            </div>
                            <div class="pt-4 mt-2 flex-col">
                                <label for="" class="absolute text-gray-200 text-sm">Estado - Proyecto</label>
                                <select id="underline_select" v-model="form.estado_proyecto"
                                    class="block mt-4 py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                    <option value="0" class="bg-gray-700">Selecciona una opción</option>
                                    <option value="En curso" class="bg-gray-700">En curso</option>
                                    <option value="Finalizado" class="bg-gray-700">Finalizado</option>
                                    <option value="Cerrado" class="bg-gray-700">Cerrado</option>
                                </select>
                                <!-- Se dispara una alerta si se escoge la opción default -->
                                <div v-if="form.estado_proyecto == 0"
                                    class="flex mt-2 mb-0 text-sm text-red-400 bg-transparent" role="alert">
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
                        </div>
                        <div class="flex-col w-64">
                            <div class="relative z-0">
                                <input type="number" id="meta_monetaria" name="meta_monetaria" v-model="form.meta_monetaria"
                                    @blur="convertirDecimales()" step="0.01" min="1" max="10000" required
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" />
                                <label for="meta_monetaria"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Meta
                                    - Monetaria<span class="text-sm ml-1"> *
                                    </span></label>
                            </div>

                            <div class="relative z-0 mt-6">
                                <label for="username" class=" text-sm text-gray-200">Icono
                                    - Proyecto</label>
                                <img src="" class="h-10 w-10 border-2 border-white rounded-lg" />
                            </div>
                            <div class="flex-col mt-6">
                                <label for="" class="text-gray-200">Visibilidad - Proyecto</label>
                                <div class="flex justify-start mt-2">
                                    <label class="relative inline-flex items-center mb-5 cursor-pointer">
                                        <input type="checkbox" value="" class="sr-only peer" id="visibilidad_proyecto "
                                            name="visibilidad_proyecto " v-model="form.visibilidad_proyecto">
                                        <div
                                            class="w-9 h-5 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="flex-col w-64">
                            <div class="">
                                <p class="mb-4 text-center text-gray-200">Imagen - Proyecto</p>
                                <img src="" class="h-44 w-40 border-2 border-slate-900 ml-12 rounded-lg" />
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
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>
                                <button class="h-10 w-10 rounded-lg flex justify-center items-center" id="btnModalAdd"
                                    type="submit" @click="accionForm('crear')">
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
                                    :disabled="!validarNombreProyecto() || form.estado_proyecto == 0"
                                    class="h-10 w-10 rounded-lg flex justify-center items-center"
                                    @click="accionForm('actualizar')">
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

    <!-- Images modal -->
    <div id="imagemodal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-4xl max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 modal">
                <!-- Modal header -->
                <div class="flex items-start justify-between p-4 rounded-t">
                    <div class="flex-col ml-4 pt-4">
                        <p class="text-3xl font-bold text-gray-100" id="modalText">Proyectos</p>
                        <p class="text-lg font-medium text-gray-400">Imagenes referentes a proyectos</p>
                    </div>
                    <button type="button"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        id="imageclose">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="p-8 space-y-6 flex-col">
                    <div class="flex justify-between items-center">
                        <p class="text-gray-100">Ingrese las imagenes que desee mostrar para sus proyectos publicos</p>
                        <button class="bg-space h-10 w-14 flex justify-center items-center rounded-lg">
                            <svg width="26px" height="26px" stroke-width="2" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" color="#000000">
                                <path d="M13 21H3.6a.6.6 0 01-.6-.6V3.6a.6.6 0 01.6-.6h16.8a.6.6 0 01.6.6V13"
                                    stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M3 16l7-3 5.5 2.5M16 10a2 2 0 110-4 2 2 0 010 4zM16 19h3m3 0h-3m0 0v-3m0 3v3"
                                    stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="h-72 w-full image-container"></div>
                    <div class="flex justify-between items-center mt-6">
                        <div class="relative z-0 w-64">
                            <input type="text" id="proyecto" name="proyecto" required maxlength="100"
                                class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                placeholder=" " autocomplete="off" />
                            <label for="proyecto"
                                class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Proyecto</label>
                        </div>
                        <button class="w-32 h-10 bg-space text-white mt-4 rounded-lg">
                            Guardar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import axios from 'axios';
import Swal from 'sweetalert2';
import { Modal } from 'flowbite'
import validaciones from '../../assets/validaciones.js';
const props = defineProps({
    dataProyectos: Array,
});
//Toast del sweetalert
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
});
const form = ref({
    id_proyecto_donacion: "",
    nombre_proyecto: "",
    descripcion_proyecto: "",
    meta_monetaria: "",
    estado_proyecto: "",
    visibilidad_proyecto: false,
});
function limpiarForm() {
    form.value.id_proyecto_donacion = "";
    form.value.nombre_proyecto = "";
    form.value.descripcion_proyecto = "";
    form.value.meta_monetaria = "";
    form.value.estado_proyecto = 0;
    form.value.visibilidad_proyecto = false;
}
function modalImages() {
    const modalElement = document.getElementById('imagemodal');
    const modalOptions = {
        backdrop: 'static',
        backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
    };
    const modal = new Modal(modalElement, modalOptions);
    modal.show();
    const closeImagesButton = document.getElementById('imageclose');
    closeImagesButton.addEventListener('click', function () {
        modal.hide();
    });
}
//Procesos del CRUD
var formAccion = null;

function accionForm(accion) {
    formAccion = accion;
}

function submitForm() {
    if (formAccion == "crear") {
        crearProyecto();
    } else {
        actualizarProyecto();
    }
}
//Funcion para crear un proyecto
async function crearProyecto() {
    if (validarNombreProyecto() && form.estado_proyecto != 0) {
        try {
            //Se crea una constante para guardar el valor actual que tienen  todos los campos del form
            const formData = {
                nombre_proyecto: form.value.nombre_proyecto,
                descripcion_proyecto: form.value.descripcion_proyecto,
                meta_monetaria: form.value.meta_monetaria,
                estado_proyecto: form.value.estado_proyecto,
                visibilidad_proyecto: form.value.visibilidad_proyecto,
            };

            //Se realiza la petición axios mandando la ruta y el formData
            await axios.post("/proyectos", formData);

            //Se cargan todas las páginas y se cierra el modal
            document.getElementById('closeModal').click();

            //Se lanza la alerta con el mensaje de éxito
            Toast.fire({
                icon: 'success',
                title: 'Proyecto creado exitosamente'
            }).then((result) => {
                if (result.dismiss === Toast.DismissReason.timer) {
                    location.reload();
                }
            });

        } catch (error) {
            console.log(error);
            //Se extrae el mensaje de error
            const mensajeError = error.response.data.message;
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
        }
    }
}
function estadoActualizar(id) {
    const modalElement = document.getElementById('staticModal');
    const closeButton = document.getElementById('closeModal');
    const modalText = document.getElementById('modalText');
    const modalOptions = {
        backdrop: 'static',
        backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
    };
    const modal = new Modal(modalElement, modalOptions);
    modalText.textContent = "Editar";
    modal.show();
    document.getElementById('btnModalAdd').classList.add('hidden');
    document.getElementById('btnModalUpdate').classList.remove('hidden');
    closeButton.addEventListener('click', function () {
        modal.hide();
    });
    leerUnProyecto(id);
}
async function leerUnProyecto(id_proyecto) {
    try {
        await axios.get('/proyectos/' + id_proyecto).then(res => {
            console.log(res.data);
            form.value = {
                id_proyecto_donacion: res.data.id_proyecto_donacion,
                nombre_proyecto: res.data.nombre_proyecto,
                descripcion_proyecto: res.data.descripcion_proyecto,
                meta_monetaria: res.data.meta_monetaria,
                estado_proyecto: res.data.estado_proyecto,
                visibilidad_proyecto: res.data.visibilidad_proyecto,
            }
        });
    } catch (error) {
        //Se extrae el mensaje de error
        const mensajeError = error.response.data.message;
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
    }
}
async function actualizarProyecto() {
    var id = form.value.id_proyecto_donacion;
    try {
        const formData = {
            nombre_proyecto: form.value.nombre_proyecto,
            descripcion_proyecto: form.value.descripcion_proyecto,
            meta_monetaria: form.value.meta_monetaria,
            estado_proyecto: form.value.estado_proyecto,
            visibilidad_proyecto: form.value.visibilidad_proyecto,
        };
        await axios.post("/proyectos_update/" + id, formData);
        document.getElementById('closeModal').click();
        Toast.fire({
            icon: 'success',
            title: 'Proyecto actualizado exitosamente'
        }).then((result) => {
            if (result.dismiss === Toast.DismissReason.timer) {
                location.reload();
            }
        });
    }
    catch (error) {
        console.log(error);
    }
}
//Codigo para cambiar el estado del proyecto a inactivo
async function borrarProyecto(id, nombre_proyecto) {
    Swal.fire({
        title: 'Confirmación',
        text: "¿Desea ocultar el proyecto " + nombre_proyecto + "?",
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
                await axios.delete('/proyectos/' + id).then(
                    Toast.fire({
                        icon: 'success',
                        title: 'Proyecto desactivado exitosamente'
                    }).then((result) => {
                        if (result.dismiss === Toast.DismissReason.timer) {
                            location.reload();
                        }
                    }));
            } catch (error) {
                console.log(error);
            }
        }
    });
}
//Función para cambiar un proyecto a activo
async function recuperarProyecto(id, nombre_proyecto) {

    Swal.fire({
        title: 'Confirmación',
        text: "¿Desea hacer activar el proyecto " + nombre_proyecto + "?",
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
                await axios.delete('/proyectos/' + id);
                Toast.fire({
                    icon: 'success',
                    title: 'Proyecto activo'
                }).then((result) => {
                    if (result.dismiss === Toast.DismissReason.timer) {
                        location.reload();
                    }
                });
            } catch (error) {
                console.log(error);
            }
        }
    });
}
//Validaciones
//Función para validar que la meta monetaria lleve 2 decimales
function convertirDecimales() {
    if (form.value.meta_monetaria != null) {
        var res = validaciones.convertirDecimales(form.value.meta_monetaria, 2);
        if (res != false) {
            form.value.meta_monetaria = res;
        }
    }
}
//Función para validar que el nombre de página solo lleve letras y números
function validarNombreProyecto() {
    var res = validaciones.validarSoloLetrasYNumeros(form.value.nombre_proyecto);
    return res;
} 
</script>
<style scoped>
.data-contained {
    border: 3px solid #1b1c30;
}

.modal-buttons button {
    background-color: #32345a;
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

.buttons-data .imagenbtn {
    border: 3px solid #3F4280;
}

.modal {
    background: linear-gradient(180deg,
            rgba(63, 66, 128, 0.6241) 0%,
            rgba(49, 50, 71, 0.5609) 100%);
    background-color: #1e1e1e;
}

.image-container {
    border: 3px solid #FFF;
}
</style>