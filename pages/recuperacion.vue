<template>
    <div class="contained h-screen w-screen flex overflow-hidden flex-col">
        <div class="flex justify-start ml-10 mt-8"> 
            <NuxtLink to="/" class="bg-darkSpace h-14 w-44 rounded-2xl flex justify-center items-center text-white gap-3 text-2xl font-bold">
                <svg width="30px" height="30px" stroke-width="2" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg" color="#FFF">
                    <path
                        d="M16 12H8m0 0l3.5 3.5M8 12l3.5-3.5M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                        stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>Volver
            </NuxtLink>
        </div>
        <div class="w-full h-5/6 mt-4 ml-10 flex-col">
            <h1 class="text-white font-extrabold text-5xl text-center">¡Recupera tu contraseña!</h1>
            <div class="w-full h-full flex justify-center">
                <form class="card bg-space h-3/4 w-2/4 mt-10 rounded-3xl" id="cardUsuario"
                    @submit.prevent="validarCredenciales">
                    <div class="flex-col w-full">
                        <div class="flex justify-center text-center">
                            <div class="flex-col text-white p-8 w-3/4">
                                <p class="font-bold text-2xl mt-4">Datos del usuario: </p>
                                <p class="font-normal text-base mt-4">El usuario que desea recuperar su clave
                                    necesita brindar primero sus datos para
                                    verificar y garantizar que el restablecimiento
                                    esta siendo solicitado por el.</p>
                            </div>
                        </div>
                        <div class="flex justify-center ml-20">
                            <div class="flex-col mr-20 w-96">
                                <div class="relative z-0 mt-8">
                                    <input type="text" id="nombre_usuario" name="nombre_usuario" required maxlength="100"
                                        v-model="form.nombre_usuario"
                                        class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                        placeholder=" " autocomplete="off" />
                                    <label for="nombre_usuario"
                                        class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre
                                        - Usuario<span class="text-sm ml-1"> * </span></label>
                                </div>
                                <div class="relative z-0 mt-8">
                                    <input type="email" id="correo_usuario" name="correo_usuario" required maxlength="100"
                                        v-model="form.correo_usuario"
                                        class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                        placeholder=" " autocomplete="off" />
                                    <label for="correo_usuario"
                                        class="absolute text-sm text-gray-200 duration-300 transform-translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Correo
                                        - Usuario</label>
                                </div>
                                <div class="flex justify-center items-end h-28">
                                    <button type="submit"
                                        class="w-48 h-12 bg-darkSpace text-white flex items-center justify-center gap-4 mt-8 rounded-xl text-xl">
                                        <svg width="28px" height="28px" stroke-width="2" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg" color="#000000">
                                            <path d="M7 12.5l3 3 7-7" stroke="#FFF" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round"></path>
                                            <path
                                                d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                                                stroke="#FFF" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round">
                                            </path>
                                        </svg>Verificar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Roboto:wght@100;400;500;700&display=swap');

.contained {
    background: linear-gradient(180deg,
            rgba(63, 66, 128, 0.6241) 0%,
            rgba(49, 50, 71, 0.5609) 100%);
    background-color: #1e1e1e;
    font-family: 'Roboto', sans-serif;
}

.card {
    box-shadow: 7px 7px 7px 7px #1e1e1e;
}
</style>
<script setup>
import axios from 'axios';
import validaciones from '../assets/validaciones.js';
import Swal from 'sweetalert2';
definePageMeta({
    layout: false,
});
onMounted(() => {

});

const form = ref({
    nombre_usuario: "",
    correo_usuario: "",
    nueva_clave: "",
    confirmar_clave: ""
});
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
async function validarCredenciales() {
    try {
        const FORMDATA = new FormData();
        FORMDATA.append('usuario', form.value.nombre_usuario);
        FORMDATA.append('correo_usuario', form.value.correo_usuario);
        await axios.post('/check_data', FORMDATA);
        Toast.fire({
            icon: 'success',
            title: 'Correo enviado exitosamente'
        });
    } catch (error) {
        console.log(error);
        const mensajeError = error.response.data.error;
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
</script>