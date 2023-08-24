<template>
    <!-- Modal  -->
    <div id="modalReport" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-xl max-h-full">
            <!-- Contenido del modal -->
            <div class="relative rounded-lg shadow modal">
                <!-- Modal header -->
                <div class="flex items-start justify-between p-4 rounded-t">
                    <div class="flex-col ml-4 pt-4">
                        <!-- Asignamos un id al título del modal para la creación  y actualizacion de texto-->
                        <p class="text-3xl font-bold text-gray-100">Reporte </p>
                        <p class="text-base font-medium text-gray-400">Anuncios por rango de fechas</p>
                    </div>
                    <!-- Boton para cerrar el modal -->
                    <button type="button" id="closeModalReport"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="modalReport">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <!-- Cuerpo del modal -->
                <div class="p-6 mt-6 space-y-6 pb-20">
                    <form class="flex-col flex-wrap" @submit.prevent="cargarReport">
                        <div class="flex">
                            <div class="relative z-0 w-64 max-[1200px]:w-full" id="input_fechai">
                                <input v-model="formFechas.fecha_inicial" @change="validarFechas" type="date"
                                    id="fecha_inicial" :max="formFechas.fecha_final" name="fecha_inicial"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" />
                                <label for="fecha_inicial"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Fecha
                                    inicial</label>
                            </div>
                            <div class="relative z-0 w-64 ml-14 max-[1200px]:w-full" id="input_fechaf">
                                <input v-model="formFechas.fecha_final" @change="validarFechas" type="date" id="fecha_final"
                                    name="fecha_final" :min="formFechas.fecha_inicial"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder="" autocomplete="off" />
                                <label for="fecha_final"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Fecha
                                    final</label>
                            </div>
                        </div>
                        <div v-if="texto_error"
                            class="mt-10 flex items-center p-4 mb-4 text-sm text-red-300 border border-red-300 rounded-lg bg-transparent dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
                            role="alert">
                            <svg class="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                            </svg>
                            <div>
                                <p class="font-bold">Error: <span class="font-normal">{{ texto_error }}</span></p>
                            </div>
                        </div>
                        <div class="flex mt-4 justify-center items-center8">
                            <button type="submit"
                                class="w-32 h-10 bg-space text-white mt-4 rounded-lg max-[1200px]:w-24 max-[1200px]:text-sm"
                                :disabled="texto_error">
                                Generar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>
<script setup>
import axios from 'axios';
//Importación de archivo de validaciones
import validaciones from '../assets/validaciones.js';
import { Modal } from 'flowbite';
onMounted(() => {
    const modalElement = document.getElementById('modalReport');
    const closeButton = document.getElementById('closeModalReport');
    const modalOptions = {
        backdrop: 'static',
        backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
    };

    if (modalElement) {
        const modal = new Modal(modalElement, modalOptions);
        document.getElementById('report').addEventListener('click', function () {
            modal.show();
        });
        closeButton.addEventListener('click', function () {
            modal.hide();
        });
    }
    token.value = localStorage.getItem('token');
    id.value = localStorage.getItem('usuario');
});
const token = ref(null);
const id = ref(null);
const formFechas = ref({
    fecha_inicial: "",
    fecha_final: "",
})
async function cargarReport() {
    var fecha_i = formFechas.value.fecha_inicial;
    var fecha_f = formFechas.value.fecha_final;
    //Constante donde se almacena la respuesta que retorna de la api
    const ruta = new URL(`http://127.0.0.1:8000/api/anuncio_reporte/` + fecha_i + '/' + fecha_f);
    //Le añadimos el token en la ruta del reporte
    ruta.searchParams.append('token', token.value);
    //Le añadimos el id del usuario que ha iniciado sesion, se captura mediante el token
    ruta.searchParams.append('id', id.value);
    // Se abre el reporte en una nueva pestaña del navegador web.
    window.open(ruta.href);
    document.getElementById('closeModalReport').click();
    llenarFechas();
}

//Función para llenar las fechas y el año con la información de la fecha actual
function llenarFechas() {
    const FECHA_ACTUAL = new Date();

    //Se carga la fecha actual y se le da formato
    const DIA = FECHA_ACTUAL.getDate().toString().padStart(2, '0');
    const MES = (FECHA_ACTUAL.getMonth() + 1).toString().padStart(2, '0');
    const ANIO = FECHA_ACTUAL.getFullYear();

    const FECHA_CON_FORMATO = ANIO + '-' + MES + '-' + DIA;

    //Se llenan los inputs
    formFechas.value.fecha_final = FECHA_CON_FORMATO;
    formFechas.value.fecha_inicial = FECHA_CON_FORMATO;
}

//Se ejecuta la función en el setup (Antes que se cargue el DOM)
llenarFechas();

function limpiarFormFechas() {
    formFechas.value.fecha_inicial = "";
    formFechas.value.fecha_final = "";
}
//Validaciones
function validarFechas() {
    const resultado = ref(null);
    if (formFechas.value.fecha_final != '' && formFechas.value.fecha_inicial != '') {
        resultado.value = true;
    } else {
        resultado.value = false;
    }

    if (resultado.value == false) {
        texto_error.value = 'Datos ingresados incompletos.';
    } else {
        texto_error.value = null;
    }

    return resultado;
}

const texto_error = ref(null);
</script>
