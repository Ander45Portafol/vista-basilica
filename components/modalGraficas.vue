<template>
    <!-- Modal Graficas-->
    <div id="graficsModal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-5xl max-h-full">
            <!--Encabezado del modal -->
            <div class="relative rounded-lg shadow modal">
                <!-- Asignamos un id al título del modal para la creación  y actualizacion de texto-->
                <div class="flex items-start justify-between p-4 rounded-t">
                    <div class="flex-col ml-4 pt-4">
                        <p class="text-3xl font-bold text-gray-100" id="modal_text">Graficar</p>
                        <p class="text-lg font-medium text-gray-400">{{ texto_donaciones }}</p>
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
                <!-- Cuerpo del modal -->
                <div class="p-8 space-y-6 flex-col">
                    <div class="flex justify-between items-center">
                        <p class="text-gray-100">{{ texto_descripcion }} </p>
                        <div class="flex">
                            <div class="flex text-white">
                                <input type="checkbox" id="rango_fecha" checked @click="cambiandoGraficaRango">
                                <label for="" class="mr-4 ml-2">Rangos de fecha</label>
                            </div>
                            <div class="flex text-white">
                                <input type="checkbox" id="anio" @click="cambiandoGraficaAnio">
                                <label for="" class="mr-4 ml-2">Año</label>
                            </div>
                        </div>
                    </div>
                    <div class="h-80 contenedor_graficas w-full flex items-center justify-center">
                        <Line v-if="dataDonaciones && dataDonaciones.results.length > 0 && dataListaDonaciones"
                            :data="chartDonaciones" :options="opcionesDonaciones" />
                        <div id="info_nodatos" v-else-if="dataListaDonaciones"
                            class="flex items-center p-4 mb-4 text-blue-800 border-t-4 border-blue-800 bg-blue-50 dark:text-blue-400 dark:bg-gray-800 dark:border-blue-800"
                            role="alert">
                            <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                            </svg>
                            <div class="ml-3 text-sm font-medium">
                                <p class="font-bold">Información: <span class="font-normal">No existen datos para
                                        mostrar.</span></p>
                            </div>
                        </div>
                    </div>
                    <div v-if="texto_error"
                        class="flex items-center p-4 mb-4 text-sm text-red-300 border border-red-300 rounded-lg bg-transparent dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
                        role="alert">
                        <svg class="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <div>
                            <p class="font-bold">Error: <span class="font-normal">{{ texto_error }}</span></p>
                        </div>
                    </div>
                    <form class="flex justify-between items-center mt-6" @submit.prevent="cargarDatos">
                        <div class="flex">
                            <div class="relative z-0 w-64" id="input_fechai">
                                <input v-model="formFechas.fecha_inicial" @change="validarFechas" type="date"
                                    id="fecha_inicial" :max="formFechas.fecha_final" name="fecha_inicial"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" />
                                <label for="fecha_inicial"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Fecha
                                    inicial</label>
                            </div>
                            <div class="relative z-0 w-64 ml-14" id="input_fechaf">
                                <input v-model="formFechas.fecha_final" @change="validarFechas" type="date" id="fecha_final"
                                    name="fecha_final" :min="formFechas.fecha_inicial"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" />
                                <label for="fecha_final"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Fecha
                                    final</label>
                            </div>
                            <div class="relative z-0 w-64" id="input_anio">
                                <input v-model="anioref" @input="validarAnio" type="text" id="anio_input" name="anio"
                                    maxlength="4"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" />
                                <label for="anio_input"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Año
                                </label>
                            </div>
                        </div>
                        <button type="submit" class="w-32 h-10 bg-space text-white mt-4 rounded-lg" :disabled="texto_error">
                            Generar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.contenedor_graficas {
    border: 3px solid #FFF;
}
</style>
<script setup>
import { Line } from "vue-chartjs";
import axios from 'axios';
//Importación de archivo de validaciones
import validaciones from '../assets/validaciones.js';

onMounted(() => {
    token.value = localStorage.getItem('token');

    function validarCheck() {
        const checkrango = document.getElementById('rango_fecha');
        if (checkrango.checked) {
            document.getElementById('input_anio').classList.add('hidden');
            document.getElementById('input_fechai').classList.remove('hidden');
            document.getElementById('input_fechaf').classList.remove('hidden');
        }
    }
    validarCheck();
});

const token = ref(null);

const texto_donaciones = ref('Donaciones por rangos de fechas');
const texto_descripcion = ref('Ingrese una fecha inicial y una fecha final para enviar como parametro de graficación.');

function cambiandoGraficaAnio() {
    const checkanio = document.getElementById('anio');
    if (checkanio.checked) {
        texto_donaciones.value = 'Donaciones mensuales según su año';
        texto_descripcion.value = 'Ingrese el año por el cuál se filtraran los datos de donación mensual registrada por el sistema.';
        texto_error.value = null;
        document.getElementById('input_anio').classList.remove('hidden');
        document.getElementById('input_fechai').classList.add('hidden');
        document.getElementById('input_fechaf').classList.add('hidden');
        document.getElementById('rango_fecha').checked = false;
    }
    dataDonaciones.value = null;
    dataListaDonaciones.value = false;
    limpiarFormFechas();
}
function cambiandoGraficaRango() {
    const checkrango = document.getElementById('rango_fecha');
    if (checkrango.checked) {
        texto_donaciones.value = 'Donaciones por rangos de fechas';
        texto_descripcion.value = 'Ingrese una fecha inicial y una fecha final para enviar como parametro de graficación.';
        texto_error.value = null;
        document.getElementById('input_anio').classList.add('hidden');
        document.getElementById('input_fechai').classList.remove('hidden');
        document.getElementById('input_fechaf').classList.remove('hidden');
        document.getElementById('anio').checked = false;
    }
    dataDonaciones.value = null;
    dataListaDonaciones.value = false;
    anioref.value = null;
    llenarFechas();
}

const formFechas = ref({
    fecha_inicial: "",
    fecha_final: "",
})

const anioref = ref(null);

function limpiarFormFechas() {
    formFechas.value.fecha_inicial = "";
    formFechas.value.fecha_final = "";
}

function llenarFechas() {
    const fecha_actual = new Date();

    const dia = fecha_actual.getDate().toString().padStart(2, '0');
    const mes = (fecha_actual.getMonth() + 1).toString().padStart(2, '0');
    const anio = fecha_actual.getFullYear();

    const fechaConFormato = anio + '-' + mes + '-' + dia;

    formFechas.value.fecha_final = fechaConFormato;
    formFechas.value.fecha_inicial = fechaConFormato;
    anioref.value = anio;
}

llenarFechas();

const dataDonaciones = ref(null);
const suma_donaciones = ref(null);
const dataListaDonaciones = ref(false);

async function cargarDatos() {
    if (!texto_error.value) {
        try {
            if (formFechas.value.fecha_inicial && formFechas.value.fecha_final) {
                const { data: res } = await axios.get('/donaciones-pfechas-graf/' + formFechas.value.fecha_inicial + '/' + formFechas.value.fecha_final, {
                    headers: {
                        Authorization: `Bearer ${token.value}`,
                    },
                });
                dataDonaciones.value = res;
                dataListaDonaciones.value = true;
                suma_donaciones.value = res.totalDonaciones;
                opcionesDonaciones.plugins.title.text = 'Total de donaciones: ' + suma_donaciones.value;
            } else if (anioref.value) {
                const { data: res } = await axios.get('/donaciones-panio-graf/' + anioref.value, {
                    headers: {
                        Authorization: `Bearer ${token.value}`,
                    },
                });
                dataDonaciones.value = res;
                dataListaDonaciones.value = true;
                suma_donaciones.value = res.totalDonaciones;
                opcionesDonaciones.plugins.title.text = 'Total donado en el año ' + anioref.value + ': ' + '$' + suma_donaciones.value;
            }
        } catch (error) {
            console.log(error);
        }
    }
}

const chartDonaciones = computed(() => {
    if (formFechas.value.fecha_inicial && formFechas.value.fecha_final) {
        return {
            labels: dataDonaciones.value.results.map(item => item.fecha_donacion),
            datasets: [
                {
                    label: "Cantidad de donaciones",
                    pointRadius: 8,
                    pointHoverRadius: 15,
                    borderColor: 'rgba(255,255,255,0)',
                    backgroundColor: (ctx) => {
                        const canvas = ctx.chart.ctx;
                        const gradient = canvas.createLinearGradient(0, 0, 0, 500);

                        gradient.addColorStop(1, 'rgba(28,37,219,1)');
                        gradient.addColorStop(0, 'rgba(251,148,123,1)');
                        return gradient;
                    },

                    pointBackgroundColor: 'rgba(255, 202, 81, 1)',
                    fill: true,
                    tension: 0,
                    data: dataDonaciones.value.results.map(item => item.cantidad_donaciones),
                },
            ],
        };
    } else if (anioref.value) {
        return {
            labels: dataDonaciones.value.results.map(item => item.mes),
            datasets: [
                {
                    label: "Cantidad donada",
                    pointRadius: 8,
                    pointHoverRadius: 15,
                    borderColor: 'rgba(255,255,255,0)',
                    backgroundColor: (ctx) => {
                        const canvas = ctx.chart.ctx;
                        const gradient = canvas.createLinearGradient(0, 0, 0, 500);

                        gradient.addColorStop(1, 'rgba(28,37,219,1)');
                        gradient.addColorStop(0, 'rgba(251,148,123,1)');
                        return gradient;
                    },

                    pointBackgroundColor: 'rgba(255, 202, 81, 1)',
                    fill: true,
                    tension: 0,
                    data: dataDonaciones.value.results.map(item => item.cantidad_mensual),
                },
            ],
        };
    }
});

const opcionesDonaciones = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            beginAtZero: true,
            grid: {
                color: 'white'
            },
            ticks: {
                color: 'white'
            }
        },
        x: {
            grid: {
                color: 'white'
            },
            ticks: {
                color: 'white'
            }
        }
    },
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: true,
            color: 'white',
            font: {
                family: 'Roboto',
                size: '16',
                weight: 'bold'
            }
        }
    }
}

//Validaciones

function validarAnio() {
    const resultado = ref(null);
    if (anioref.value) {
        resultado.value = validaciones.validarAnio(anioref.value);
    } else {
        resultado.value = false;
    }

    if (resultado.value == false) {
        texto_error.value = 'Formato de año incorrecto.';
    } else {
        texto_error.value = null;
    }

    return resultado;
}

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