<template>
    <div class="h-screen overflow-y-scroll pr-4">
        <div class="principal flex justify-between items-center mt-6 ml-2">
            <div class="topprincipal flex justify-between font-semibold text-base">
                <div class="options">
                    <NuxtLink to="/principal" class="ml-4">Inicio</NuxtLink>
                    <NuxtLink to="" class=" active ml-4 ">Graficas</NuxtLink>
                    <NuxtLink to="" class="ml-4 ">Reportes</NuxtLink>
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
        <div class="mdprincipal flex-col mt-6 px-8 overflow-hidden py-10">
            <div class="h-2/3 w-full bg-slate-200 rounded-2xl pl-4">
                <div class="flex-col text-center pt-4">
                    <p class="text-2xl font-extrabold ">Donaciones registradas en la semana actual</p>
                    <p class="text-xl font-bold">Total donado: <span class="text-xl font-normal"
                            v-if="totalSumaDonaciones">${{ totalSumaDonaciones }}</span><span class="text-xl font-normal"
                            v-else>$0.00</span></p>
                    <div class="grafic h-80 w-full flex justify-center items-center">
                        <Line v-if="dataDonaciones && dataDonaciones.results?.length > 0 && dataListaDonaciones"
                            :data="chartDonaciones" :options="opcionesDonaciones" />
                        <p v-else-if="dataListaDonaciones">No hay donaciones registradas en esta semana.</p>
                    </div>
                </div>
            </div>
            <div class="flex w-full justify-between mt-10">
                <div class="h-96 w-5/12 bg-slate-200 rounded-2xl">
                    <div class="text-left p-4">
                        <p class="text-2xl font-bold">Página - Secciones</p>
                        <p class="text-xl font-normal">Existentes</p>
                    </div>
                    <div class="grafic">
                        <PolarArea v-if="dataNSecciones" :data="chartNSecciones" :options="opcionesNSecciones" />
                    </div>
                </div>
                <div class="h- w-5/12 bg-slate-200 rounded-2xl">
                    <div class="text-left p-4">
                        <p class="text-2xl font-bold">Usuarios - Registrados</p>
                        <p class="text-2xl font-bold">Usuarios totales: <span> {{ totalUsuarios }} </span></p>
                    </div>
                    <div class="grafic h-2/3">
                        <Pie v-if="dataNUsuarios" :data="chartNUsuarios" :options="opcionesNUsuarios" />
                    </div>
                </div>
            </div>
            <div class="flex w-full justify-between mt-10">
                <div class="container-grafics h-96 w-5/12 bg-slate-200 rounded-2xl">
                    <div class="text-left p-4">
                        <p class="text-2xl font-bold">Eventos - Semanales</p>
                    </div>
                    <div class="grafic h-2/3">
                        <Bar v-if="dataEventos" :data="chartEventos" :options="opcionesEventos" />
                    </div>
                </div>
                <div class="container-grafics h-96 w-5/12 bg-slate-200 rounded-2xl">
                    <div class="text-left p-4">
                        <p class="text-2xl font-bold">Anuncios - Mensuales</p>
                    </div>
                    <div class="grafic h-2/3">
                        <Bar v-if="dataAnuncios" :data="chartAnuncios" :options="opcionesAnuncios" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import axios from 'axios';
import { Line, Pie, PolarArea, Bar } from "vue-chartjs";

definePageMeta({
    layout: "principal",
})

onMounted(() => {
    leerDonaciones();
    leerNUsuarios();
    leerNSecciones();
    leerEventos();
    leerAnuncios();
});

const dataDonaciones = ref(null);

var totalSumaDonaciones = null;

const dataListaDonaciones = ref(false);

async function leerDonaciones() {
    try {
        const { data: res } = await axios.get('/donaciones-graf');
        dataDonaciones.value = res;
        totalSumaDonaciones = dataDonaciones.value.totalSuma;
        dataListaDonaciones.value = true;
    } catch (error) {
        console.log(error);
    }
}

const chartDonaciones = computed(() => {
    return {
        labels: dataDonaciones.value.results.map(item => item.fecha_donacion),
        datasets: [
            {
                label: "Cantidad donada",
                pointRadius: 8,
                pointHoverRadius: 15,
                borderColor: 'rgba(255,255,255,0)',
                backgroundColor: (ctx) => {
                    const canvas = ctx.chart.ctx;
                    const gradient = canvas.createLinearGradient(0, 0, 0, 500);

                    gradient.addColorStop(1, 'rgba(28,37,219,0.7)');
                    gradient.addColorStop(0, 'rgba(251,148,123,0.7)');
                    return gradient;
                },

                pointBackgroundColor: '#1B1C30',
                fill: true,
                tension: 0,
                data: dataDonaciones.value.results.map(item => item.cantidad_donada),
            },
        ],
    };
});

const opcionesDonaciones = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
}

const dataNUsuarios = ref(null);

const dataListaNUsuarios = ref(false);

var totalUsuarios = null;

async function leerNUsuarios() {
    try {
        const { data: res } = await axios.get('/usuarios-graf');
        dataNUsuarios.value = res;
        totalUsuarios = dataNUsuarios.value.totalUsuarios;
        dataListaNUsuarios.value = true;
    } catch (error) {
        console.log(error);
    }
}

const chartNUsuarios = computed(() => {
    return {
        labels: dataNUsuarios.value.results.map(item => item.rol_usuario),
        datasets: [
            {
                label: "N° de usuarios: ",
                data: dataNUsuarios.value.results.map(item => item.n_usuarios),
                backgroundColor: ["#7A78B4", "#565587"],
            },
        ],
    };
});

const opcionesNUsuarios = {
    responsive: true,
    maintainAspectRatio: false,
}


const dataNSecciones = ref(null);

const dataListaNSecciones = ref(false);

async function leerNSecciones() {
    try {
        const { data: res } = await axios.get('/secciones-graf');
        dataNSecciones.value = res;
        dataListaNSecciones.value = true;
    } catch (error) {
        console.log(error);
    }
}

const chartNSecciones = computed(() => {
    return {
        labels: dataNSecciones.value.map(item => item.nombre_pagina),
        datasets: [
            {
                label: "N° de secciones: ",
                data: dataNSecciones.value.map(item => item.n_secciones),
                backgroundColor: ["rgba(255, 202, 81, 0.5)", "rgba(192, 161, 255, 0.5)"],
                borderColor: ["rgba(255, 202, 81, 1)", "rgba(138, 80, 255, 1)"]
            },
        ],
    };
});

const opcionesNSecciones = {
    responsive: true,
    maintainAspectRatio: false,
}

const dataEventos = ref(null);

const dataListaEventos = ref(false);

async function leerEventos() {
    try {
        const { data: res } = await axios.get('/eventos-graf');
        dataEventos.value = res;
        dataListaEventos.value = true;
    } catch (error) {
        console.log(error);
    }
}

const chartEventos = computed(() => {
    return {
        labels: dataEventos.value.map(item => item.fecha_evento),
        datasets: [
            {
                label: "N° de eventos:",
                data: dataEventos.value.map(item => item.cantidad_eventos),
                barPercentage: 0.5,
                backgroundColor: ["#9497DF", "#565587", "#47497A", "#6C6BA9", "#565587"],
            },
        ],
    };
});

const opcionesEventos = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false
        }
    }
}

const dataAnuncios = ref(null);

const dataListaAnuncios = ref(false);

async function leerAnuncios() {
    try {
        const { data: res } = await axios.get('/anuncios-graf');
        dataAnuncios.value = res;
        dataListaAnuncios.value = true;
    } catch (error) {
        console.log(error);
    }
}

const chartAnuncios = computed(() => {
    return {
        labels: dataAnuncios.value.map(item => item.fecha),
        datasets: [
            {
                label: "N° de anuncios:",
                data: dataAnuncios.value.map(item => item.cantidad_anuncios),
                barPercentage: 0.5,
                backgroundColor: ["rgba(255, 202, 81, 1)", "rgba(192, 161, 255, 1)"],
            },
        ],
    };
});

const opcionesAnuncios = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
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
/* #scroll_pages{
    overflow-y: scroll;
} */
</style>
