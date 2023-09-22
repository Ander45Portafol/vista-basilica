<template>
    <div class="">
        <div class="principal flex justify-between items-center mt-6 ml-2 pr-8">
            <div class="topprincipal flex justify-between font-semibold text-base">
                <div class="options">
                    <NuxtLink to="/principal" class="ml-4">Inicio</NuxtLink>
                    <NuxtLink to="" class=" active ml-4 ">Gráficas</NuxtLink>
                </div>
            </div>
            <div class="endtop flex justify-between w-20">
                <NuxtLink to="/perfil">
                    <svg width="24px" height="24px" stroke-width="2.5" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg" color="#000000">
                        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="#000000" stroke-width="2.5" stroke-linecap="round"
                            stroke-linejoin="round"></path>
                        <path
                            d="M19.622 10.395l-1.097-2.65L20 6l-2-2-1.735 1.483-2.707-1.113L12.935 2h-1.954l-.632 2.401-2.645 1.115L6 4 4 6l1.453 1.789-1.08 2.657L2 11v2l2.401.655L5.516 16.3 4 18l2 2 1.791-1.46 2.606 1.072L11 22h2l.604-2.387 2.651-1.098C16.697 18.831 18 20 18 20l2-2-1.484-1.75 1.098-2.652 2.386-.62V11l-2.378-.605z"
                            stroke="#1B1C30" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </NuxtLink>
                <button type="button" data-drawer-target="drawer-right-example" data-drawer-show="drawer-right-example"
                    data-drawer-placement="right" aria-controls="drawer-right-example">
                    <svg width="24px" height="24px" stroke-width="2" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg" color="#000000">
                        <path
                            d="M18.134 11C18.715 16.375 21 18 21 18H3s3-2.133 3-9.6c0-1.697.632-3.325 1.757-4.525C8.883 2.675 10.41 2 12 2c.337 0 .672.03 1 .09M19 8a3 3 0 100-6 3 3 0 000 6zM13.73 21a1.999 1.999 0 01-3.46 0"
                            stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
            </div>
        </div>
        <!-- Se valida que las gráficas esten listas para mostrarse, si no estan listas se muestra la pantalla de carga -->
        <div v-if="!data_lista_donaciones && !data_lista_anuncios && !data_lista_n_secciones && !data_lista_usuarios && !data_lista_eventos"
            class="mdcarga h-screen overflow-hidden flex justify-center items-center">
            <svg aria-hidden="true" class="w-20 h-20 mr-2 text-gray-300 animate-spin fill-purpleLogin" viewBox="0 0 100 101"
                fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor" />
                <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill" />
            </svg>
        </div>
        <div v-else class="mdprincipal h-screen overflow-y-scroll flex-col mt-6 pl-6 pr-8 py-10">
            <div class="h-2/3 w-full bg-slate-200 rounded-2xl pl-4">
                <div class="flex-row text-center pt-4">
                    <!-- Título de la gráfica -->
                    <p class="text-2xl font-extrabold mt-5">Donaciones registradas por fecha en la semana actual</p>
                    <p class="text-xl font-bold">Total donado: <span class="text-xl font-normal"
                            v-if="total_suma_donaciones">${{ total_suma_donaciones }}</span><span
                            class="text-xl font-normal" v-else>$0.00</span></p>
                    <div class="grafic h-80 w-full flex justify-center items-center">
                        <!-- Se valida si el gráfico esta listo para mostrarse -->
                        <Line v-if="data_donaciones && data_donaciones.results.length > 0 && data_lista_donaciones"
                            :data="CHART_DONACIONES" :options="OPCIONES_DONACIONES" class="px-10" />
                        <!-- Si no esta listo se muestra un mensaje de que no hay información -->
                        <p v-else-if="data_lista_donaciones">No hay donaciones registradas en esta semana.</p>
                    </div>
                </div>
            </div>
            <div class="flex w-full justify-between mt-10 max-[1000px]:flex-wrap">
                <div
                    class="container-grafics h-96 bg-slate-200 rounded-2xl min-w-[48%] max-[1000px]:min-w-full max-[1000px]:pb-12 min-[1000px]:mr-[2%]">
                    <!-- Título de la gráfica -->
                    <div class="text-left p-4">
                        <p class="text-2xl text-center mt-3 font-bold">Cantidad de secciones por página</p>
                    </div>
                    <div class="grafic h-3/4 w-full flex justify-center items-center max-[950px]:w-full">
                        <!-- Se valida si el gráfico esta listo para mostrarse -->
                        <PolarArea v-if="data_n_secciones && data_n_secciones.results.length > 0 && data_lista_n_secciones"
                            :data="CHART_N_SECCIONES" :options="OPCIONES_N_SECCIONES" />
                        <!-- Si no esta listo se muestra un mensaje de que no hay información -->
                        <p v-else-if="data_lista_n_secciones">No se encontro información.</p>
                    </div>
                </div>
                <div
                    class="container-grafics h-96 bg-slate-200 rounded-2xl min-w-[48%] max-[1000px]:mt-12 max-[1000px]:min-w-full">
                    <!-- Título de la gráfica -->
                    <div class="text-left p-4">
                        <p class="text-2xl text-center mt-3 font-bold">Usuarios registrados por rol</p>
                        <p class="text-xl text-center font-bold">Usuarios totales: <span class="text-xl font-normal"> {{
                            total_usuarios }} </span></p>
                    </div>
                    <div class="grafic h-2/3 w-full flex justify-center items-center">
                        <!-- Se valida si el gráfico esta listo para mostrarse -->
                        <Pie v-if="data_n_usuarios && data_n_usuarios.results.length > 0 && data_lista_usuarios"
                            :data="CHART_N_USUARIOS" :options="OPCIONES_N_USUARIOS" />
                        <!-- Si no esta listo se muestra un mensaje de que no hay información -->
                        <p v-else-if="data_lista_usuarios">No se encontro información.</p>
                    </div>
                </div>
            </div>
            <div class="flex w-full justify-between mt-10 mb-[100px] max-[1000px]:flex-wrap">
                <div
                    class="container-grafics h-96 w-5/12 bg-slate-200 rounded-2xl min-w-[48%] max-[1000px]:min-w-full min-[1000px]:mr-[2%]">
                    <!-- Título de la gráfica -->
                    <div class="text-left p-4">
                        <p class="text-2xl text-center mt-3 font-bold">Cantidad de eventos por fecha en la semana actual</p>
                    </div>
                    <div class="grafic h-2/3 w-full flex justify-center items-center">
                        <!-- Se valida si el gráfico esta listo para mostrarse -->
                        <Bar v-if="data_eventos && data_eventos.length > 0 && data_lista_eventos" :data="CHART_EVENTOS"
                            :options="OPCIONES_EVENTOS" class="px-10" />
                        <!-- Si no esta listo se muestra un mensaje de que no hay información -->
                        <p v-else-if="data_lista_eventos">No se encontro información.</p>
                    </div>
                </div>
                <div
                    class="container-grafics h-96 w-5/12 bg-slate-200 rounded-2xl min-w-[48%] max-[1000px]:mt-12 max-[1000px]:min-w-full">
                    <!-- Título de la gráfica -->
                    <div class="text-left p-4">
                        <p class="text-2xl text-center mt-3 font-bold">Cantidad de anuncios por fecha en el mes actual</p>
                    </div>
                    <div class="grafic h-2/3 w-full flex justify-center items-center">
                        <!-- Se valida si el gráfico esta listo para mostrarse -->
                        <Bar v-if="data_anuncios && data_anuncios.length > 0 && data_lista_anuncios" :data="CHART_ANUNCIOS"
                            :options="OPCIONES_ANUNCIOS" class="px-10" />
                        <!-- Si no esta listo se muestra un mensaje de que no hay información -->
                        <p v-else-if="data_lista_anuncios">No se encontro información.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
//Importación de axios para las peticiones a la API
import axios from 'axios';
//Importaciones de la libreria de chartJS
import { Line, Pie, PolarArea, Bar } from "vue-chartjs";

//Configuración de la página
definePageMeta({
    //Se establece el layout "principal"
    layout: "principal",
})

//onMounted es un hook (en vue los hooks se usan para hacer tareas especificas con los componentes)
onMounted(async () => {
    //Se carga el token del localStorage
    token.value = localStorage.getItem('token');

    //Se realizan las funciones para llenar las gráficas ya cuando el token ya tiene valor
    await leerDonaciones();
    await leerNUsuarios();
    await leerNSecciones();
    await leerEventos();
    await leerAnuncios();
});

//Evento para reiniciar el tiempo del componente del timer
const EVENTO = new Event('reset-timer');

//Constante para el token
const token = ref(null);

//Constante ref para almacenar todos los datos de la gráfica de donaciones
const data_donaciones = ref(null);

//Variable para almacenar el total donado y mostrarlo en el titulo de la gráfica
var total_suma_donaciones = null;

//Constante ref para saber si ya se cargaron los datos de la gráfica
const data_lista_donaciones = ref(false);

//Función para traer los datos con los que llenar la gráfica de donaciones
async function leerDonaciones() {
    token.value = localStorage.getItem('token');
    try {
        //Se realiza la petición axios
        const { data: res } = await axios.get('/donaciones-graf', {
            headers: {
                Authorization: `Bearer ${token.value}`,
            },
        });
        //Se asigna valor a todas las variables
        data_donaciones.value = res;
        total_suma_donaciones = data_donaciones.value.totalSuma;
        data_lista_donaciones.value = true;
        //Se reinicia el timer
        window.dispatchEvent(EVENTO);
        localStorage.setItem('token', res.token);
        token.value = localStorage.getItem('token');
    } catch (error) {
        console.log(error);
    }
}

//Constante con la que se crea el gráfico de donaciones, es computed para que cada que el valor cambie también cambie el gráfico
const CHART_DONACIONES = computed(() => {
    return {
        //Se establecen los labels que son los textos que se muestran abajo del eje x, además se usa el map para evaluar cada registro indivualmente
        labels: data_donaciones.value.results.map(item => item.fecha_donacion),
        //Se configuran los dataset de la gráfica que se mostrarán cuando hayan datos
        datasets: [
            {
                //Se le agrega un prefijo personalizado a los labels, que además muestran el valor de la data para ese registro individual
                label: "Cantidad donada",
                //Estilo para los puntos de la gráfica
                pointBackgroundColor: '#1B1C30',
                pointRadius: 8,
                //El hover es mayor para que el punto se haga mas grande al tener el mouse encima
                pointHoverRadius: 15,
                //Estilo para la linea de la gráfica
                borderColor: 'rgba(255,255,255,0)', //Color de la línea, se pone blanco con opacidad 0 para que sea invisible y solo se vea el gradient
                //Estilo para el color de la gráfica
                backgroundColor: (ctx) => {
                    const canvas = ctx.chart.ctx;
                    const gradient = canvas.createLinearGradient(0, 0, 0, 500);

                    gradient.addColorStop(1, 'rgba(28,37,219,0.7)');
                    gradient.addColorStop(0, 'rgba(251,148,123,0.7)');
                    return gradient;
                },

                //Se establece fill para poder aplicarle el backgroundColor a la línea de la gráfica
                fill: true,
                //Se establece tension 0 para que la gráfica no tenga curvas, solo lineas rectas
                tension: 0,
                //Se establece la data de la grafica con un map de los registros
                data: data_donaciones.value.results.map(item => item.cantidad_donada),
            },
        ],
    };
});

//Constante para configurar el canvas del gráfico
const OPCIONES_DONACIONES = {
    //Opciones para que el gráfico se acomode al div donde esta dentro
    responsive: true,
    maintainAspectRatio: false,

    //Se configura el eje y para que siempre empiece desde 0
    scales: {
        y: {
            beginAtZero: true
        }
    },

    //Se desactiva la leyenda de los datasets (cuadritos que salen encima de los graficos)
    plugins: {
        legend: {
            display: false
        }
    }
}

//Constante ref para almacenar todos los datos de la gráfica de usuarios
const data_n_usuarios = ref(null);

//Constante ref para saber si ya se cargaron los datos de la gráfica
const data_lista_usuarios = ref(false);

//Variable para almacenar el total de usuarios y mostrarlo en el titulo de la gráfica
var total_usuarios = null;

//Función para traer los datos con los que llenar la gráfica de usuarios
async function leerNUsuarios() {
    token.value = localStorage.getItem('token');
    try {
        //Se realiza la petición axios
        const { data: res } = await axios.get('/usuarios-graf', {
            headers: {
                Authorization: `Bearer ${token.value}`,
            },
        });
        //Se asigna valor a todas las variables
        data_n_usuarios.value = res;
        total_usuarios = data_n_usuarios.value.totalUsuarios;
        data_lista_usuarios.value = true;
        //Se reinicia el timer
        window.dispatchEvent(EVENTO);
        localStorage.setItem('token', res.token);
        token.value = localStorage.getItem('token');
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

//Constante con la que se crea el gráfico de usuarios, es computed para que cada que el valor cambie también cambie el gráfico
const CHART_N_USUARIOS = computed(() => {
    return {
        //Se establecen los labels que son los textos que se muestran abajo del eje x, además se usa el map para evaluar cada registro indivualmente
        labels: data_n_usuarios.value.results.map(item => item.rol_usuario),
        //Se configuran los dataset de la gráfica que se mostrarán cuando hayan datos
        datasets: [
            {
                //Se le agrega un prefijo personalizado a los labels, que además muestran el valor de la data para ese registro individual
                label: "N° de usuarios",
                //Se establece la data de la grafica con un map de los registros
                data: data_n_usuarios.value.results.map(item => item.n_usuarios),
                //Se establecen todos los colores posibles para los datasets con el backgroundColor
                backgroundColor: ["#9497DF", "#565587", "#47497A", "#6C6BA9", "#565587"],
            },
        ],
    };
});

const OPCIONES_N_USUARIOS = {
    //Opciones para que el gráfico se acomode al div donde esta dentro
    responsive: true,
    maintainAspectRatio: false,
}

//Constante ref para almacenar todos los datos de la gráfica de secciones
const data_n_secciones = ref(null);

//Constante ref para saber si ya se cargaron los datos de la gráfica
const data_lista_n_secciones = ref(false);

//Función para traer los datos con los que llenar la gráfica de secciones
async function leerNSecciones() {
    token.value = localStorage.getItem('token');
    try {
        //Se realiza la petición axios
        const { data: res } = await axios.get('/secciones-graf', {
            headers: {
                Authorization: `Bearer ${token.value}`,
            },
        });
        //Se asigna valor a todas las variables
        data_n_secciones.value = res;
        data_lista_n_secciones.value = true;
        //Se reinicia el timer
        window.dispatchEvent(EVENTO);
        localStorage.setItem('token', res.token);
        token.value = localStorage.getItem('token');
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

//Constante con la que se crea el gráfico de secciones, es computed para que cada que el valor cambie también cambie el gráfico
const CHART_N_SECCIONES = computed(() => {
    return {
        //Se establecen los labels que son los textos que se muestran abajo del eje x, además se usa el map para evaluar cada registro indivualmente
        labels: data_n_secciones.value.results.map(item => item.nombre_pagina),
        //Se configuran los dataset de la gráfica que se mostrarán cuando hayan datos
        datasets: [
            {
                //Se le agrega un prefijo personalizado a los labels, que además muestran el valor de la data para ese registro individual
                label: "N° de secciones",
                //Se establece la data de la grafica con un map de los registros
                data: data_n_secciones.value.results.map(item => item.n_secciones),
                //Se establecen todos los colores posibles para los datasets con el backgroundColor
                backgroundColor: ["rgba(255, 202, 81, 0.5)", "rgba(192, 161, 255, 0.5)"],
                //Se establecen todos los colores posibles para los bordes con el borderColor
                borderColor: ["rgba(255, 202, 81, 1)", "rgba(138, 80, 255, 1)"]
            },
        ],
    };
});

const OPCIONES_N_SECCIONES = {
    //Opciones para que el gráfico se acomode al div donde esta dentro
    responsive: true,
    maintainAspectRatio: false,
}

//Función para traer los datos con los que llenar la gráfica de eventos
const data_eventos = ref(null);

//Constante ref para saber si ya se cargaron los datos de la gráfica
const data_lista_eventos = ref(false);

//Función para traer los datos con los que llenar la gráfica de eventos
async function leerEventos() {
    token.value = localStorage.getItem('token');
    try {
        //Se realiza la petición axios
        const { data: res } = await axios.get('/eventos-graf', {
            headers: {
                Authorization: `Bearer ${token.value}`,
            },
        });
        //Se asigna valor a todas las variables
        data_eventos.value = res;
        data_lista_eventos.value = true;
        //Se reinicia el timer
        window.dispatchEvent(EVENTO);
        localStorage.setItem('token', res.token);
        token.value = localStorage.getItem('token');
    } catch (error) {
        console.log(error);
    }
}

//Constante con la que se crea el gráfico de eventos, es computed para que cada que el valor cambie también cambie el gráfico
const CHART_EVENTOS = computed(() => {
    return {
        //Se establecen los labels que son los textos que se muestran abajo del eje x, además se usa el map para evaluar cada registro indivualmente
        labels: data_eventos.value.map(item => item.fecha_evento),
        //Se configuran los dataset de la gráfica que se mostrarán cuando hayan datos
        datasets: [
            {
                //Se le agrega un prefijo personalizado a los labels, que además muestran el valor de la data para ese registro individual
                label: "N° de eventos",
                //Se establece la data de la grafica con un map de los registros
                data: data_eventos.value.map(item => item.cantidad_eventos),
                //Se pone el porcentaje de la barra a 0.5 para que se vean mas delgadas y no ocupen el cuadro completo
                barPercentage: 0.5,
                //Se establecen todos los colores posibles para los datasets con el backgroundColor
                backgroundColor: ["#9497DF", "#565587", "#47497A", "#6C6BA9", "#565587"],
            },
        ],
    };
});

const OPCIONES_EVENTOS = {
    //Opciones para que el gráfico se acomode al div donde esta dentro
    responsive: true,
    maintainAspectRatio: false,

    //Se desactiva la leyenda de los datasets (cuadritos que salen encima de los graficos)
    plugins: {
        legend: {
            display: false
        }
    }
}

//Constante ref para almacenar todos los datos de la gráfica de anuncios
const data_anuncios = ref(null);

//Constante ref para saber si ya se cargaron los datos de la gráfica
const data_lista_anuncios = ref(false);

//Función para traer los datos con los que llenar la gráfica de anuncios
async function leerAnuncios() {
    token.value = localStorage.getItem('token');
    try {
        //Se realiza la petición axios
        const { data: res } = await axios.get('/anuncios-graf', {
            headers: {
                Authorization: `Bearer ${token.value}`,
            },
        });
        //Se asigna valor a todas las variables
        data_anuncios.value = res;
        data_lista_anuncios.value = true;
        //Se reinicia el timer
        window.dispatchEvent(EVENTO);
        localStorage.setItem('token', res.token);
        token.value = localStorage.getItem('token');
    } catch (error) {
        console.log(error);
    }
}

//Constante con la que se crea el gráfico de anuncios, es computed para que cada que el valor cambie también cambie el gráfico
const CHART_ANUNCIOS = computed(() => {
    return {
        //Se establecen los labels que son los textos que se muestran abajo del eje x, además se usa el map para evaluar cada registro indivualmente
        labels: data_anuncios.value.map(item => item.fecha),
        //Se configuran los dataset de la gráfica que se mostrarán cuando hayan datos
        datasets: [
            {
                //Se le agrega un prefijo personalizado a los labels, que además muestran el valor de la data para ese registro individual
                label: "N° de anuncios",
                //Se establece la data de la grafica con un map de los registros
                data: data_anuncios.value.map(item => item.cantidad_anuncios),
                //Se pone el porcentaje de la barra a 0.5 para que se vean mas delgadas y no ocupen el cuadro completo
                barPercentage: 0.5,
                //Se establecen los colores posibles para las barritas con el backgroundColor
                backgroundColor: ["rgba(255, 202, 81, 1)", "rgba(192, 161, 255, 1)"],
            },
        ],
    };
});

const OPCIONES_ANUNCIOS = {
    //Se establece el indexAxis en y para que el gráfico sea horizontal
    indexAxis: 'y',

    //Opciones para que el gráfico se acomode al div donde esta dentro
    responsive: true,
    maintainAspectRatio: false,

    //Se desactiva la leyenda de los datasets (cuadritos que salen encima de los graficos)
    plugins: {
        legend: {
            display: false
        }
    }
}

</script>
<style scoped>
.topprincipal .active {
    color: #c99856;
    border-bottom: 3px solid #c99856;
}

.container-grafics {
    width: 680px;
}

.mdprincipal::-webkit-scrollbar {
    width: 5px;
}
</style>