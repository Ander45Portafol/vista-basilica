<template>
    <div class="contained-data flex-col" v-for="donacion in dataDonacion" :key="donacion.id_donacion">
        <div
            class="data-contained flex justify-between mt-4 rounded-xl p-4 max-[400px]:flex-wrap max-[400px]:w-full min-w-[200px]">
            <div class="flex justify-start w-3/4 items-center max-[400px]:w-full">
                <!--Con la implementación de una variable que permite visualizar la información contenida en cada uno-->
                <div
                    class="datainfo flex-col ml-8 max-[400px]:p-0 max-[400px]:w-full max-[400px]:ml-0 max-[400px]:text-center">
                    <p class="font-extrabold text-xl text-salte-900 max-[750px]:text-[18px]">
                        {{ donacion.nombre_donante }} {{ donacion.apellido_donante }} </p>
                    <p class="font-normal text-sm mt-1text-gray-500 max-[750px]:text-[12px]">
                        Fecha: {{ donacion.fecha_donacion }}</p>
                    <p class="font-normal text-sm text-gray-500 max-[750px]:text-[12px]">Cantidad donada:
                        <span>$</span>{{ donacion.cantidad_donada }}
                    </p>
                </div>
            </div>
            <!-- Se les asigna sus funciones respectivas a los botones y se validan dependiendo de la visibilidad del registro -->
            <!-- Al darle clic al evento leerUnaDonacion ejecuta la funcion -->
            <div
                class="buttons-data flex justify-center items-center max-[750px]:flex-col max-[400px]:flex-row max-[400px]:m-auto max-[400px]:mt-2">
                <button v-if="donacion.visibilidad_donacion == 1" @click="estadoActualizar(donacion.id_donacion)"
                    class="h-10 w-10 rounded-md flex items-center justify-center editbtn max-[400px]:mx-4">
                    <svg width="26px" height="26px" stroke-width="2" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg" color="#000000">
                        <path
                            d="M3 21h18M12.222 5.828L15.05 3 20 7.95l-2.828 2.828m-4.95-4.95l-5.607 5.607a1 1 0 00-.293.707v4.536h4.536a1 1 0 00.707-.293l5.607-5.607m-4.95-4.95l4.95 4.95"
                            stroke="#C99856" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
                <!-- Al darle clic al evento borrarDonacion ejecuta la funcion -->
                <button v-if="donacion.visibilidad_donacion == 1" @click="borrarDonacion(donacion.id_donacion)"
                    class="h-10 w-10 rounded-md flex items-center justify-center ml-4 deletebtn max-[750px]:ml-0 max-[750px]:mt-2 max-[400px]:mt-0 max-[400px]:mx-4">
                    <svg width="26px" height="26px" viewBox="0 0 24 24" stroke-width="2" fill="none"
                        xmlns="http://www.w3.org/2000/svg" color="#000000">
                        <path
                            d="M20 9l-1.995 11.346A2 2 0 0116.035 22h-8.07a2 2 0 01-1.97-1.654L4 9M21 6h-5.625M3 6h5.625m0 0V4a2 2 0 012-2h2.75a2 2 0 012 2v2m-6.75 0h6.75"
                            stroke="#872727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
                <!-- Al darle clic al evento recuperarDonacion ejecuta la funcion -->
                <button @click="recuperarDonacion(donacion.id_donacion)"
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
    <!-- Modal principal-->
    <div id="staticModal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-2xl max-h-full">
            <!--Encabezado del modal -->
            <div class="relative rounded-lg shadow modal">
                <!-- Asignamos un id al título del modal para la creación  y actualizacion de texto-->
                <div class="flex items-start justify-between p-4 rounded-t">
                    <div class="flex-col ml-4 pt-4">
                        <p class="text-3xl font-bold text-gray-100" id="modal_text">Editar</p>
                        <p class="text-lg font-medium text-gray-400">Donación</p>
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
                <!-- Cuerpo del modal  -->
                <div class="p-6 space-y-6 pb-10">
                    <form id="modalForm" class="flex justify-evenly" @submit.prevent="actualizarDonacion()">
                        <div class="flex-col w-64">
                            <!-- Se utiliza el modificador @submit.prevent para evitar la recarga de la página al enviar el formulario. En su lugar, se llama a la función submitForm() definida en Vue.js para ejecutar la lógica personalizada del envío del formulario. -->
                            <input type="hidden" id="id_donacion" name="id_donacion" v-model="form.id_donacion">
                            <div class="relative z-0">
                                <!-- Se usa el evento blur para que cada que se salga del input el valor ingresado en el input agarre el formato de los decimales -->
                                <input type="number" @blur="convertirDecimales()" id="cantidad_donada"
                                    name="cantidad_donada" step="0.01" min="1" max="10000" required
                                    v-model="form.cantidad_donada"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" />
                                <label for="cantidad_donacion"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Cantidad
                                    - Donación<span class="text-sm ml-1"> *
                                    </span></label>
                            </div>
                            <!-- Campo de entrada Mensaje - Donación -->
                            <div class="relative z-0 mt-6">
                                <input type="text" id="mensaje_donacion" name="mensaje_donacion"
                                    v-model="form.mensaje_donacion"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" />
                                <label for="mensaje_donacion"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mensaje</label>
                            </div>
                            <!-- Campo de entrada Donante - Donación -->
                            <div class="pt-4 mt-2 flex-col">
                                <label for="" class="absolute text-sm text-gray-200">Donante <span class="text-sm ml-1"> *
                                    </span></label>
                                <select id="underline_select" v-model="form.id_donante"
                                    class="block mt-4 py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                    <option value="0" class="bg-gray-700"> Seleccione una opción </option>
                                    <!-- Se usa el v-for para llenar la información del select, haciendo uso de "paginas" -->
                                    <option v-for="donante in donantes" :key="donante.id_donante"
                                        :value="donante.id_donante" class="text-left bg-gray-700">
                                        {{ donante.nombre_donante }} {{ donante.apellido_donante }}
                                    </option>
                                </select>
                                <!-- Se dispara una alerta si se escoge la opción default -->
                                <div v-if="form.id_donante == 0" class="flex mt-2 mb-0 text-sm text-red-400 bg-transparent"
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
                            <!-- Campo de entrada Visibilidad - Donación -->
                            <div class="flex-col mt-6">
                                <label for="visibilidad_donacion" class="text-sm text-gray-200">Visibilidad -
                                    Donación</label>
                                <div class="flex justify-start mt-2">
                                    <label class="relative inline-flex items-center mb-5 cursor-pointer">
                                        <input type="checkbox" value="false" v-model="form.visibilidad_donacion"
                                            id="visibilidad_donacion" name="visibilidad_donacion" class="sr-only peer" />
                                        <div
                                            class="w-9 h-5 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <!-- Campo de entrada Fecha - Donación -->
                        <div class="flex-col w-64">
                            <div class="relative z-0">
                                <input type="date" id="fecha_donacion" name="fecha_donacion" v-model="form.fecha_donacion"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" />
                                <label for="fecha_donacion"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Fecha
                                    - Donación<span class="text-sm ml-1"> *
                                    </span></label>
                            </div>
                            <!-- Campo de entrada Codigo - Comprobante -->
                            <div class="relative z-0 mt-6">
                                <input type="text" id="codigo_comprobante" name="codigo_comprobante"
                                    v-model="form.codigo_comprobante"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" />
                                <label for="codigo_comprobante"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Codigo
                                    - Comprobante</label>
                            </div>
                            <!-- Campo de entrada Proyecto - Donación -->
                            <div class="pt-4 mt-2 flex-col">
                                <label for="" class="absolute text-sm text-gray-200">Proyecto - Donación<span
                                        class="text-sm ml-1"> *
                                    </span></label>
                                <select id="underline_select" v-model="form.id_proyecto_donacion"
                                    class="block mt-4 py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                    <option value="0" class="bg-gray-700"> Seleccione una opción </option>
                                    <!-- Se usa el v-for para llenar la información del select, haciendo uso de "paginas" -->
                                    <option v-for="proyecto in proyectos" :key="proyecto.id_proyecto_donacion"
                                        :value="proyecto.id_proyecto_donacion" class="text-left bg-gray-700">
                                        {{ proyecto.nombre_proyecto }}
                                    </option>
                                </select>
                                <!-- Se dispara una alerta si se escoge la opción default -->
                                <div v-if="form.id_proyecto_donacion == 0"
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
                            <!-- Botones del modal -->
                            <div class="modal-buttons mt-24 flex justify-end items-end">
                                <button class="h-10 w-10 rounded-lg flex justify-center items-center" id="btnModalClear">
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
                                <!-- Se validan si los select estan llenos para poder realizar el submit -->
                                <button type="submit" class="h-10 w-10 rounded-lg flex justify-center items-center ml-4"
                                    id="btnModalUpdate" :disabled="form.id_donante == 0 || form.id_proyecto_donacion == 0">
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
        <!-- Modal Graficas-->
        <div id="graficsModal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-2xl max-h-full">
            <!--Encabezado del modal -->
            <div class="relative rounded-lg shadow modal">
                <!-- Asignamos un id al título del modal para la creación  y actualizacion de texto-->
                <div class="flex items-start justify-between p-4 rounded-t">
                    <div class="flex-col ml-4 pt-4">
                        <p class="text-3xl font-bold text-gray-100" id="modal_text">Graficar</p>
                        <p class="text-lg font-medium text-gray-400">Donaciones por rangos de fechas</p>
                    </div>
                    <!-- Boton para cerrar el modal -->
                    <button type="button" id="closeModalGrafics"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="staticModal">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <!-- Cuerpo del modal  -->
                <div class="p-6 space-y-6 pb-10">

                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { Modal } from 'flowbite'
//Importación de axios, se utiliza para hacer las peticiones al servidor -> Para mas información vean el axiosPlugin en la carpeta plugins
import axios from 'axios';
//Importación de sweetalert
import Swal from 'sweetalert2';
//Importación de archivo de validaciones
import validaciones from '../../assets/validaciones.js';
const props = defineProps({
    dataDonacion: Array,
});
const form = ref({
    id_donacion: "",
    cantidad_donada: "",
    fecha_donacion: "",
    mensaje_donacion: "",
    codigo_comprobante: "",
    visibilidad_donacion: false,
    id_proyecto_donacion: "",
    id_donante: ""
});
//Metodo para configurar el modal y enviar el id del usuario
function estadoActualizar(id) {
    const modalElement = document.getElementById('staticModal');
    const closeButton = document.getElementById('closeModal');
    const modalOptions = {
        backdrop: 'static',
        backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
    };
    const modal = new Modal(modalElement, modalOptions);
    modal.show();
    closeButton.addEventListener('click', function () {
        modal.hide();
    });
    leerUnaDonacion(id);
}

async function leerUnaDonacion(id_donacion) {
    try {
        await axios.get('/donaciones/' + id_donacion).then(res => {
            console.log(res.data);
            form.value = {
                id_donacion: res.data.id_donacion,
                cantidad_donada: res.data.cantidad_donada,
                fecha_donacion: res.data.fecha_donacion,
                mensaje_donacion: res.data.mensaje_donacion,
                codigo_comprobante: res.data.codigo_comprobante,
                visibilidad_donacion: res.data.visibilidad_donacion,
                id_proyecto_donacion: res.data.id_proyecto_donacion,
                id_donante: res.data.id_donante,
            };
        });
    } catch (error) {
        console.log(error);
    }
}
const donantes = ref(null);
async function llenarSelectDonantes() {
    try {
        //Se realiza la petición axios
        const { data: res } = await axios.get('/donantes-select');
        //Lo que devuelve la petición axios se le asigna a "paginas"
        donantes.value = res;
    } catch (error) {
        //Se extrae el mensaje de error
        const mensajeError = error.response.data.message;
        //Se extrae el sqlstate (identificador de acciones SQL)
        const sqlState = validaciones.extraerSqlState(mensajeError);
        //Se llama la función de mensajeSqlState para mostrar un mensaje de error relacionado al sqlstate
        const res = validaciones.mensajeSqlState(sqlState);

        //Se muestra un sweetalert con el mensaje
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: res,
            confirmButtonColor: '#3F4280'
        });
    }
}

llenarSelectDonantes();

//Variable reactiva para llenar el select
const proyectos = ref(null);

//Función para llenar el select
async function llenarSelectProyectos() {
    try {
        //Se realiza la petición axios
        const { data: res } = await axios.get('/p_donaciones-select');
        //Lo que devuelve la petición axios se le asigna a "paginas"
        proyectos.value = res;
    } catch (error) {
        //Se extrae el mensaje de error
        const mensajeError = error.response.data.message;
        //Se extrae el sqlstate (identificador de acciones SQL)
        const sqlState = validaciones.extraerSqlState(mensajeError);
        //Se llama la función de mensajeSqlState para mostrar un mensaje de error relacionado al sqlstate
        const res = validaciones.mensajeSqlState(sqlState);

        //Se muestra un sweetalert con el mensaje
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: res,
            confirmButtonColor: '#3F4280'
        });
    }
}

llenarSelectProyectos();
</script>
<style scoped></style>