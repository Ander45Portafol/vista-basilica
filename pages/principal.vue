<script setup>
import 'flowbite';
import Iconoir from 'iconoir/icons/iconoir.svg'

definePageMeta({
    layout: "principal",
})

// Aqui ira la condicion de si existen mas de 3 optiones dentro del menu de navegacion, entonces mostrar el icono de barra de navegacion
// function perfil(){
//     navigateTo('/perfil');
// }
//Funcion para generar un reporte
onMounted(() => {
    token.value = localStorage.getItem('token');
    id.value = localStorage.getItem('usuario');
});
const token = ref(null);
const id = ref(null);
async function generarReporteUsuario() {
    //Constante donde se almacena la respuesta que retorna de la api
    const RUTA = new URL(`http://127.0.0.1:8000/api/usuario_reporte`);
    //Le añadimos el token en la ruta del reporte
    RUTA.searchParams.append('token', token.value);
    //Le añadimos el id del usuario que ha iniciado sesion, se captura mediante el token
    RUTA.searchParams.append('id', id.value);
    // Se abre el reporte en una nueva pestaña del navegador web.
    window.open(RUTA.href);
}
//Funcion para generar un reporte
async function generarReporteDonacion() {
    //Constante donde se almacena la respuesta que retorna de la api
    const RUTA = new URL(`http://127.0.0.1:8000/api/donacion_reporte`);
    //Le añadimos el token en la ruta del reporte
    RUTA.searchParams.append('token', token.value);
    //Le añadimos el id del usuario que ha iniciado sesion, se captura mediante el token
    RUTA.searchParams.append('id', id.value);
    // Se abre el reporte en una nueva pestaña del navegador web.
    window.open(RUTA.href);
}
//Funcion para generar un reporte
async function generarReporteEvento() {
    //Constante donde se almacena la respuesta que retorna de la api
    const RUTA = new URL(`http://127.0.0.1:8000/api/evento_reporte`);
    //Le añadimos el token en la ruta del reporte
    RUTA.searchParams.append('token', token.value);
    //Le añadimos el id del usuario que ha iniciado sesion, se captura mediante el token
    RUTA.searchParams.append('id', id.value);
    // Se abre el reporte en una nueva pestaña del navegador web.
    window.open(RUTA.href);
}
//Funcion para generar un reporte
async function generarReporteGrupos() {
    //Constante donde se almacena la respuesta que retorna de la api
    const RUTA = new URL(`http://127.0.0.1:8000/api/grupo_reporte`);
    //Le añadimos el token en la ruta del reporte
    RUTA.searchParams.append('token', token.value);
    //Le añadimos el id del usuario que ha iniciado sesion, se captura mediante el token
    RUTA.searchParams.append('id', id.value);
    // Se abre el reporte en una nueva pestaña del navegador web.
    window.open(RUTA.href);
}
//Funcion para generar un reporte
async function generarReportePersonal() {
    //Constante donde se almacena la respuesta que retorna de la api
    const RUTA = new URL(`http://127.0.0.1:8000/api/personal_reporte`);
    //Le añadimos el token en la ruta del reporte
    RUTA.searchParams.append('token', token.value);
    //Le añadimos el id del usuario que ha iniciado sesion, se captura mediante el token
    RUTA.searchParams.append('id', id.value);
    // Se abre el reporte en una nueva pestaña del navegador web.
    window.open(RUTA.href);
}
</script>
<template>
    <div class="mr-8">
        <MenuDashboardMenu class="mt-4" />
        <div class="flex flex-wrap my-8 justify-around">
            <div class="text-white sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4 min-w-[200px] max-[1400px]:max-w-[30%] max-[550px]:max-w-full"
                id="usuarios">
                <div class="top flex justify-between">
                    <div class="text">
                        <p class="titule text-2xl font-extrabold mb-0 max-[720px]:text-[16px]">Usuarios</p>
                        <p class="subtitule  font-semibold mt-0 pt-0 max-[720px]:text-[13px]">En Línea</p>
                    </div>
                    <svg width="38px" height="38px" stroke-width="2.5" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg" color="#000000">
                        <path d="M3 16V8a5 5 0 015-5h8a5 5 0 015 5v8a5 5 0 01-5 5H8a5 5 0 01-5-5z" stroke="#fff"
                            stroke-width="2.5"></path>
                        <path d="M16.5 14.5s-1.5 2-4.5 2-4.5-2-4.5-2" stroke="#fff" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M8.5 10a.5.5 0 110-1 .5.5 0 010 1zM15.5 10a.5.5 0 110-1 .5.5 0 010 1z" fill="#000000"
                            stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </div>
                <div class="number h-20 flex items-end">
                    <p class="text-white font-extrabold text-4xl max-[720px]:text-[28px]">122</p>
                </div>
            </div>
            <div class="text-white sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4 min-w-[200px] max-[1400px]:max-w-[30%] max-[550px]:max-w-full max-[550px]:my-2"
                id="citas">
                <div class="top flex justify-between">
                    <div class="text">
                        <p class="titule text-2xl font-extrabold mb-0 max-[720px]:text-[16px]">Citas</p>
                        <p class="subtitule font-semibold mt-0 pt-0 max-[720px]:text-[13px]">Pendientes</p>
                    </div>
                    <svg width="38px" height="38px" viewBox="0 0 24 24" stroke-width="2.5" fill="none"
                        xmlns="http://www.w3.org/2000/svg" color="#000000">
                        <path d="M9 6h11M5 6.01l.01-.011M5 12.01l.01-.011M3.8 17.8l.8.8 2-2M9 12h11M9 18h11" stroke="#fff"
                            stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                    </svg>
                </div>
                <div class="number h-20 flex items-end">
                    <p class="text-white font-extrabold text-4xl max-[720px]:text-[28px]">12</p>
                </div>
            </div>
            <div class="text-white sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4 min-w-[200px] max-[1400px]:max-w-[30%] max-[550px]:max-w-full"
                id="proyectos">
                <div class="top flex justify-between">
                    <div class="text">
                        <p class="titule text-2xl font-extrabold mb-0 max-[720px]:text-[16px]">Proyectos</p>
                        <p class="subtitule font-semibold mt-0 pt-0 max-[720px]:text-[13px]">Publicados</p>
                    </div>
                    <svg width="38px" height="38px" stroke-width="2.5" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg" color="#000000">
                        <path
                            d="M16 6.28a2.28 2.28 0 01-.662 1.606c-.976.984-1.923 2.01-2.936 2.958a.597.597 0 01-.822-.017l-2.918-2.94a2.281 2.281 0 010-3.214 2.277 2.277 0 013.232 0L12 4.78l.106-.107A2.276 2.276 0 0116 6.28z"
                            stroke="#fff" stroke-width="2.5" stroke-linejoin="round"></path>
                        <path d="M18 20l3.824-3.824a.6.6 0 00.176-.424V10.5A1.5 1.5 0 0020.5 9v0a1.5 1.5 0 00-1.5 1.5V15"
                            stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                        <path
                            d="M18 16l.858-.858a.484.484 0 00.142-.343v0a.485.485 0 00-.268-.433l-.443-.221a2 2 0 00-2.308.374l-.895.895a2 2 0 00-.586 1.414V20M6 20l-3.824-3.824A.6.6 0 012 15.752V10.5A1.5 1.5 0 013.5 9v0A1.5 1.5 0 015 10.5V15"
                            stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                        <path
                            d="M6 16l-.858-.858A.485.485 0 015 14.799v0c0-.183.104-.35.268-.433l.443-.221a2 2 0 012.308.374l.895.895a2 2 0 01.586 1.414V20"
                            stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                    </svg>
                </div>
                <div class="number h-20 flex items-end">
                    <p class="text-white font-extrabold text-4xl max-[720px]:text-[28px]">15</p>
                </div>
            </div>
        </div>
        <div class="endprincipal ml-4 flex flex-col justify-around max-[450px]:text-[13px] max-[315px]:text-[10px]">
            <p class="text-xl font-extrabold max-[450px]:text-center">Reportes generales</p>
            <div class="interac_general flex-col mt-4 p-0 ml-0">
                <div class="interraccion flex justify-between w-full h-16 mb-4 rounded-2xl min-w-[150px]">
                    <div class="left flex items-center ml-6 w-3/4">
                        <div
                            class="icon absolute bg-slate-800 flex justify-center items-center w-10 h-10 rounded-full max-[450px]:w-8 max-[450px]:h-8">
                            <svg width="24px" height="24px" stroke-width="2.5" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" color="#000000">
                                <path
                                    d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM7 7h10M7 12h10M7 17h6"
                                    stroke="#FFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                            </svg>
                        </div>
                        <div class="textinterac flex-col ml-16">
                            <p class="titule_interac font-semibold">Usuarios</p>
                            <p class="section_change font-normal">Listado general de usuarios y sus respectivos roles.</p>
                        </div>
                    </div>
                    <button class="right flex justify-center items-center mr-4 max-[400px]:hidden"
                        @click="generarReporteUsuario">
                        <svg width="32px" height="32px" stroke-width="2.5" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg" color="#000000">
                            <path
                                d="M9 17h6M12 6v7m0 0l3.5-3.5M12 13L8.5 9.5M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                                stroke="#1B1C30" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </button>
                </div>
                <div class="interraccion flex justify-between w-full h-16 mb-4 rounded-2xl">
                    <div class="left flex items-center ml-6 w-3/4">
                        <div class="icon absolute bg-slate-800 flex justify-center items-center w-10 h-10 rounded-full">
                            <svg width="24px" height="24px" stroke-width="2.5" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" color="#000000">
                                <path
                                    d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM7 7h10M7 12h10M7 17h6"
                                    stroke="#FFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                            </svg>
                        </div>
                        <div class="textinterac flex-col ml-16">
                            <p class="titule_interac font-semibold">Donaciones</p>
                            <p class="section_change font-normal">Listado general de donaciones realizadas por proyecto publicado.</p>
                        </div>
                    </div>
                    <button class="right flex justify-center items-center mr-4 max-[400px]:hidden"
                        @click="generarReporteDonacion">
                        <svg width="32px" height="32px" stroke-width="2.5" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg" color="#000000">
                            <path
                                d="M9 17h6M12 6v7m0 0l3.5-3.5M12 13L8.5 9.5M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                                stroke="#1B1C30" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </button>
                </div>
                <div class="interraccion flex justify-between w-full h-16 mb-4 rounded-2xl">
                    <div class="left flex items-center ml-6 w-3/4">
                        <div class="icon absolute bg-slate-800 flex justify-center items-center w-10 h-10 rounded-full">
                            <svg width="24px" height="24px" stroke-width="2.5" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" color="#000000">
                                <path
                                    d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM7 7h10M7 12h10M7 17h6"
                                    stroke="#FFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                            </svg>
                        </div>
                        <div class="textinterac flex-col ml-16">
                            <p class="titule_interac font-semibold">Eventos</p>
                            <p class="section_change font-normal">Listado general de eventos agendados y zonas de desarrollo correspondientes.</p>
                        </div>
                    </div>
                    <button class="right flex justify-center items-center mr-4 max-[400px]:hidden" @click="generarReporteEvento">
                        <svg width="32px" height="32px" stroke-width="2.5"
                            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                            <path
                                d="M9 17h6M12 6v7m0 0l3.5-3.5M12 13L8.5 9.5M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                                stroke="#1B1C30" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </button>
                </div>
                <div class="interraccion flex justify-between w-full h-16 mb-4 rounded-2xl">
                    <div class="left flex items-center ml-6 w-3/4">
                        <div class="icon absolute bg-slate-800 flex justify-center items-center w-10 h-10 rounded-full">
                            <svg width="24px" height="24px" stroke-width="2.5" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" color="#000000">
                                <path
                                    d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM7 7h10M7 12h10M7 17h6"
                                    stroke="#FFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                            </svg>
                        </div>
                        <div class="textinterac flex-col ml-16">
                            <p class="titule_interac font-semibold">Personal</p>
                            <p class="section_change font-normal">Listado general del personal y el respectivo cargo que desempeñan.</p>
                        </div>
                    </div>
                    <button class="right flex justify-center items-center mr-4 max-[400px]:hidden" @click="generarReportePersonal">
                        <svg width="32px" height="32px" stroke-width="2.5"
                            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                            <path
                                d="M9 17h6M12 6v7m0 0l3.5-3.5M12 13L8.5 9.5M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                                stroke="#1B1C30" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </button>
                </div>
                <div class="interraccion flex justify-between w-full h-16 mb-4 rounded-2xl">
                    <div class="left flex items-center ml-6 w-3/4">
                        <div class="icon absolute bg-slate-800 flex justify-center items-center w-10 h-10 rounded-full">
                            <svg width="24px" height="24px" stroke-width="2.5" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" color="#000000">
                                <path
                                    d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM7 7h10M7 12h10M7 17h6"
                                    stroke="#FFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                            </svg>
                        </div>
                        <div class="textinterac flex-col ml-16">
                            <p class="titule_interac font-semibold">Grupos parroquiales</p>
                            <p class="section_change font-normal">Listado general de grupos parroquiales separados por categorías.</p>
                        </div>
                    </div>
                    <button class="right flex justify-center items-center mr-4 max-[400px]:hidden" @click="generarReporteGrupos">
                        <svg width="32px" height="32px" stroke-width="2.5"
                            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                            <path
                                d="M9 17h6M12 6v7m0 0l3.5-3.5M12 13L8.5 9.5M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                                stroke="#1B1C30" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
body {
    overflow-y: scroll;
}

.topprincipal .active {
    color: #c99856;
    border-bottom: 3px solid #c99856;
}

#usuarios {
    background-color: #51459f;
    height: 175px;
    width: 425px;
    border-radius: 1.2rem;
}

#citas {
    background-color: #f7886d;
    height: 175px;
    width: 425px;
    border-radius: 1.2rem;
}

#proyectos {
    background-color: #b33630;
    height: 175px;
    width: 425px;
    border-radius: 1.2rem;
}

.interraccion {
    background: #ebeff8;
}</style>
