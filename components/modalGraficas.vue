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
                        <p class="text-lg font-medium text-gray-400 max-[1200px]:text-md max-[400px]:text-sm">{{
                            texto_donaciones }}</p>
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
                    <div class="flex flex-wrap justify-between items-center max-[1200px]:justify-center">
                        <p
                            class="text-gray-100 max-[1200px]:w-full max-[1200px]:text-sm max-[1200px]:text-justify max-[400px]:mt-[-30px]">
                            {{ texto_descripcion }} </p>
                        <div class="flex max-[1200px]:mt-6 max-[1200px]:text-sm">
                            <div class="flex text-white">
                                <input type="checkbox" id="rango_fecha" checked @click="cambiandoGraficaRango">
                                <label for="" class="mr-4 ml-2">Rango de fecha</label>
                            </div>
                            <div class="flex text-white">
                                <input type="checkbox" id="anio" @click="cambiandoGraficaAnio">
                                <label for="" class="mr-4 ml-2">Año</label>
                            </div>
                        </div>
                    </div>
                    <div class="h-80 contenedor_graficas w-full flex items-center justify-center">
                        <Line v-if="data_donaciones && data_donaciones.results.length > 0 && data_lista_donaciones"
                            :data="CHART_DONACIONES" :options="OPCIONES_CHART" />
                        <div id="info_nodatos" v-else-if="data_lista_donaciones"
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
                    <form class="flex justify-between items-center flex-wrap mt-6" @submit.prevent="cargarDatos">
                        <div class="flex">
                            <div class="relative z-0 w-64 max-[1200px]:w-full" id="input_fechai">
                                <input v-model="form_fechas.fecha_inicial" @change="validarFechas" type="date" min="2023-01-01"
                                    id="fecha_inicial" :max="form_fechas.fecha_final" name="fecha_inicial"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" />
                                <label for="fecha_inicial"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Fecha
                                    inicial</label>
                            </div>
                            <div class="relative z-0 w-64 ml-14 max-[1200px]:w-full" id="input_fechaf">
                                <input v-model="form_fechas.fecha_final" @change="validarFechas" type="date" id="fecha_final" :max="fecha_actual"
                                    name="fecha_final" :min="form_fechas.fecha_inicial"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder="" autocomplete="off" />
                                <label for="fecha_final"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Fecha
                                    final</label>
                            </div>
                            <div class="relative z-0 w-64 inline-block max-[1200px]:w-full" id="input_anio">
                                <input v-model="anio_ref" @input="validarAnio" type="text" id="anio_input" name="anio"
                                    maxlength="4"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" />
                                <label for="anio_input"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Año
                                </label>
                            </div>
                        </div>
                        <button type="submit" class="w-32 h-10 bg-space text-white mt-4 rounded-lg max-[1200px]:w-24 max-[1200px]:text-sm" :disabled="texto_error">
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
//Se importa el grafico a usar de la libreria de chartJS
import { Line } from "vue-chartjs";
//Importación de axios para las peticiones a la API
import axios from 'axios';
//Importación de archivo de validaciones
import validaciones from '../assets/validaciones.js';
//Importación de sweetAlert
import Swal from 'sweetalert2';

//onMounted es un hook (en vue los hooks se usan para hacer tareas especificas con los componentes)
//En este hook se crean todas las funciones que se quieren realizas mientras el componente se crea y se añade al DOM
onMounted(() => {
    //Se asigna el valor al token
    token.value = localStorage.getItem('token');

    //Se agrega un eventListener para que cuando se cierre el modal se vacie la información de este
    window.addEventListener('modal-closed', () => {
        vaciarModal();
    });

    //Función para cargar los inputs dependiendo de la selección del check
    function validarCheck() {
        const CHECK_RANGO = document.getElementById('rango_fecha');
        if (CHECK_RANGO.checked) {
            document.getElementById('input_anio').classList.add('hidden');
            document.getElementById('input_fechai').classList.remove('hidden');
            document.getElementById('input_fechaf').classList.remove('hidden');
        }
    }
    validarCheck();
});

//Constante ref para almacenar el token del usuario
const token = ref(null);

//Constantes para cambiar el titulo del modal dependiendo de la selección del check del usuario
const texto_donaciones = ref('Donaciones por rango de fechas');
const texto_descripcion = ref('Ingrese una fecha inicial y una fecha final para enviar como parametro de graficación.');

//Función para cambiar el diseño del modal cuando se seleccione la opción de "Año"
function cambiandoGraficaAnio() {
    const CHECK_ANIO = document.getElementById('anio');
    if (CHECK_ANIO.checked) {
        texto_donaciones.value = 'Donaciones mensuales según su año';
        texto_descripcion.value = 'Ingrese el año por el cuál se filtraran los datos de donación mensual registrada por el sistema.';
        texto_error.value = null;
        document.getElementById('input_anio').classList.remove('hidden');
        document.getElementById('input_fechai').classList.add('hidden');
        document.getElementById('input_fechaf').classList.add('hidden');
        document.getElementById('rango_fecha').checked = false;
    }
    data_donaciones.value = null;
    data_lista_donaciones.value = false;
    limpiarFormFechas();
}

//Función para cambiar el diseño del modal cuando se seleccione la opción de "Rango de fecha"
function cambiandoGraficaRango() {
    const CHECK_RANGO = document.getElementById('rango_fecha');
    if (CHECK_RANGO.checked) {
        texto_donaciones.value = 'Donaciones por rango de fechas';
        texto_descripcion.value = 'Ingrese una fecha inicial y una fecha final para enviar como parametro de graficación.';
        texto_error.value = null;
        document.getElementById('input_anio').classList.add('hidden');
        document.getElementById('input_fechai').classList.remove('hidden');
        document.getElementById('input_fechaf').classList.remove('hidden');
        document.getElementById('anio').checked = false;
    }
    data_donaciones.value = null;
    data_lista_donaciones.value = false;
    anio_ref.value = null;
    llenarFechas();
}

//Constante ref para almacenar la fecha inicial y final del rango de fecha
const form_fechas = ref({
    fecha_inicial: "",
    fecha_final: "",
});

//Constante ref para almacenar el año seleccionado por el usuario (cuando el check esta en la opción de "Año")
const anio_ref = ref(null);

//Constante ref para guardar la fecha actual y usarla para validaciones
const fecha_actual = ref(null);

//Función para limpiar las fechas cuando se cierra el modal
function limpiarFormFechas() {
    form_fechas.value.fecha_final = "";
    form_fechas.value.fecha_inicial = "";
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
    fecha_actual.value = FECHA_CON_FORMATO;
    form_fechas.value.fecha_final = FECHA_CON_FORMATO;
    form_fechas.value.fecha_inicial = FECHA_CON_FORMATO;
    anio_ref.value = ANIO;
}

//Se ejecuta la función en el setup (Antes que se cargue el DOM)
llenarFechas();

//Constante ref para almacenar los registros de la gráfica
const data_donaciones = ref(null);
//Constante ref para almacenar la suma de donaciones que se mostrará en el título de la gráfica
const suma_donaciones = ref(null);
//Constante ref para saber si la gráfica esta lista para montarse
const data_lista_donaciones = ref(false);

//Función para cargar los datos del chart
async function cargarDatos() {
    //Se evalua que los datos ingresados sean validos
    if (!texto_error.value) {
        try {
            //Se evalua si los inputs de las fechas tienen valor para saber que gráfico es el que se mostrará, si los inputs no tienen valor entonces el gráfico que se mostrará es el del año
            if (form_fechas.value.fecha_inicial && form_fechas.value.fecha_final) {
                //Se realiza la petición axios
                const { data: res } = await axios.get('/donaciones-pfechas-graf/' + form_fechas.value.fecha_inicial + '/' + form_fechas.value.fecha_final, {
                    headers: {
                        Authorization: `Bearer ${token.value}`,
                    },
                });
                //Se carga la información en las variables
                data_donaciones.value = res;
                data_lista_donaciones.value = true;
                suma_donaciones.value = res.totalDonaciones;
                //Se cambia el título del chart con la información que se acaba de traer
                OPCIONES_CHART.plugins.title.text = 'Total de donaciones: ' + suma_donaciones.value;
            } else if (anio_ref.value) {
                //Se realiza la petición axios
                const { data: res } = await axios.get('/donaciones-panio-graf/' + anio_ref.value, {
                    headers: {
                        Authorization: `Bearer ${token.value}`,
                    },
                });
                //Se carga la información en las variables
                data_donaciones.value = res;
                data_lista_donaciones.value = true;
                suma_donaciones.value = res.totalDonaciones;
                //Se cambia el título del chart con la información que se acaba de traer
                OPCIONES_CHART.plugins.title.text = 'Total donado en el año ' + anio_ref.value + ': ' + '$' + suma_donaciones.value;
            }
        } catch (error) {
            console.log(error);
            const MENSAJE_ERROR = error.response.data.message
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

//Constante para manejar la instancia de la gráfica, es computed para que cada que el valor cambie también cambie el gráfico
const CHART_DONACIONES = computed(() => {
    //Se evalua que gráfica se va a mostrar
    if (form_fechas.value.fecha_inicial && form_fechas.value.fecha_final) {
        return {
            //Se establecen los labels que son los textos que se muestran abajo del eje x, además se usa el map para evaluar cada registro indivualmente
            labels: data_donaciones.value.results.map(item => item.fecha_donacion),
            //Se configuran los dataset de la gráfica que se mostrarán cuando hayan datos
            datasets: [
                {
                    //Se le agrega un prefijo personalizado a los labels, que además muestran el valor de la data para ese registro individual
                    label: "Cantidad de donaciones",
                    //Estilo para los puntitos que salen en la gráfica
                    pointRadius: 8, //Tamaño del circulo
                    pointHoverRadius: 15, //Aumenta el tamaño en el hover
                    pointBackgroundColor: 'rgba(255, 202, 81, 1)', //Color de los puntitos

                    borderColor: 'rgba(255,255,255,0)', //Color de la línea, se pone blanco con opacidad 0 para que sea invisible y solo se vea el gradient
                    backgroundColor: (ctx) => {
                        const canvas = ctx.chart.ctx;
                        const gradient = canvas.createLinearGradient(0, 0, 0, 500);

                        gradient.addColorStop(1, 'rgba(28,37,219,1)');
                        gradient.addColorStop(0, 'rgba(251,148,123,1)');
                        return gradient;
                    },

                    fill: true, //Se pone la propiedad fill como true para que el gráfico se llene y no solo sea la línea
                    tension: 0, //Se establece tension 0 para que la gráfica no tenga curvas, solo lineas rectas
                    data: data_donaciones.value.results.map(item => item.cantidad_donaciones), //Se establece la data de la grafica con un map de los registros
                },
            ],
        };
    } else if (anio_ref.value) {
        return {
            //Se establecen los labels que son los textos que se muestran abajo del eje x, además se usa el map para evaluar cada registro indivualmente
            labels: data_donaciones.value.results.map(item => item.mes),
            //Se configuran los dataset de la gráfica que se mostrarán cuando hayan datos
            datasets: [
                {
                    //Se le agrega un prefijo personalizado a los labels, que además muestran el valor de la data para ese registro individual
                    label: "Cantidad donada",
                    //Estilo para los puntitos que salen en la gráfica
                    pointRadius: 8, //Tamaño del circulo
                    pointHoverRadius: 15, //Aumenta el tamaño en el hover
                    pointBackgroundColor: 'rgba(255, 202, 81, 1)', //Color de los puntitos

                    borderColor: 'rgba(255,255,255,0)', //Color de la línea, se pone blanco con opacidad 0 para que sea invisible y solo se vea el gradient
                    backgroundColor: (ctx) => { //Color de fondo del gráfico es el gradient
                        const canvas = ctx.chart.ctx;
                        const gradient = canvas.createLinearGradient(0, 0, 0, 500);

                        gradient.addColorStop(1, 'rgba(28,37,219,1)');
                        gradient.addColorStop(0, 'rgba(251,148,123,1)');
                        return gradient;
                    },

                    fill: true, //Se pone la propiedad fill como true para que el gráfico se llene y no solo sea la línea
                    tension: 0, //Se establece tension 0 para que la gráfica no tenga curvas, solo lineas rectas
                    data: data_donaciones.value.results.map(item => item.cantidad_mensual), //Se establece la data de la grafica con un map de los registros
                },
            ],
        };
    }
});

//Constante para manejar la configuración de la gráfica
const OPCIONES_CHART = {
    //Opciones para que el gráfico se acomode al div donde esta dentro
    responsive: true,
    maintainAspectRatio: false,

    //Opciones de configuración para la cuadricula del canvas
    scales: {
        //Eje Y
        y: {
            //Se configura para que siempre empiece desde 0
            beginAtZero: true,
            //Se cambia el color de la cuadricula a blanco
            grid: {
                color: 'white'
            },
            //Se cambia el color de los números que dan valor al eje Y
            ticks: {
                color: 'white'
            }
        },
        x: {
            //Se cambia el color de la cuadricula a blanco
            grid: {
                color: 'white'
            },
            //Se cambia el color del texto de los labels a blanco
            ticks: {
                color: 'white'
            }
        }
    },
    //Plugins
    plugins: {
        //Se desactiva las leyendas (cuadritos que salen encima de los graficos)
        legend: {
            display: false
        },
        //Se configura el título
        title: {
            //Display true para mostrar el título
            display: true,
            //Se cambia el color de la letra a blanco
            color: 'white',
            //Se configura la fuente
            font: {
                family: 'Roboto',
                size: '16',
                weight: 'bold'
            }
        }
    }
}

//Validaciones

//Constante ref para mostrar mensajes de error
const texto_error = ref(null);

//Función para validar el año ingresado por el usuario
function validarAnio() {
    //Se ejecuta la función de la validación
    const resultado = ref(null);
    if (anio_ref.value) {
        resultado.value = validaciones.validarAnio(anio_ref.value);
    } else {
        resultado.value = false;
    }

    //Si el resultado es false se le da valor a texto_error, si es true significa que el dato ingresado es correcto y se deja el valor como null
    if (resultado.value == false) {
        texto_error.value = 'Formato de año incorrecto.';
    } else {
        texto_error.value = null;
    }

    //Se retorna el resultado
    return resultado;
}

//Función para validar las fechas ingresadas por el usuario
function validarFechas() {
    //Se ejecuta la función de la validación
    const resultado = ref(null);
    if (form_fechas.value.fecha_final != '' && form_fechas.value.fecha_inicial != '') {
        resultado.value = true;
    } else {
        resultado.value = false;
    }

    //Si el resultado es false se le da valor a texto_error, si es true significa que el dato ingresado es correcto y se deja el valor como null
    if (resultado.value == false) {
        texto_error.value = 'Datos ingresados incompletos.';
    } else {
        texto_error.value = null;
    }

    //Se retorna el resultado
    return resultado;
}

//Función para cuando se cierra el modal
function vaciarModal() {
    //Vacia el gráfico y reinicia las fechas
    data_donaciones.value = null;
    llenarFechas();
    data_lista_donaciones.value = false;
}

</script>