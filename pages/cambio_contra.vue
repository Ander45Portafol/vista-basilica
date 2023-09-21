z<template>
    <div class="h-screen w-screen flex flex-col justify-center items-center absolute left-0 bg-gradient">
        <div class="flex-col absolute top-12 left-12">
            <div class="flex items-center">
                <svg class="w-6 mr-3" stroke-width="1.5" viewBox="0 0 24 24" fill="#F9F9F9"
                    xmlns="http://www.w3.org/2000/svg" color="#F9F9F9">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#F9F9F9"
                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <svg class="w-6 mr-3" stroke-width="1.5" viewBox="0 0 24 24" fill="#F9F9F9"
                    xmlns="http://www.w3.org/2000/svg" color="#F9F9F9">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#F9F9F9"
                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <svg class="w-6" stroke-width="1.5" viewBox="0 0 24 24" fill="#BEBEBE" xmlns="http://www.w3.org/2000/svg"
                    color="#BEBEBE">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#BEBEBE"
                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </div>
        </div>
        <div class="w-screen absolute top-12">
            <h1
                class="t-roboto mt-[8vh] text-white font-bold text-7xl min-[701px]:ml-12 max-[700px]:ml-0 max-[700px]:text-center max-[400px]:text-5xl">
                Cambiar contraseña</h1>
        </div>
        <div
            class="min-[701px]:flex max-[700px]:flex-wrap items-center justify-center min-[1617px]:mt-[8%] min-[1065px]:mt-[15%] min-[700px]:mt-[25%] max-[700px]:mt-[60%] max-[500px]:mt-[80%] max-[700px]:overflow-y-scroll">
            <div
                class="min-[1201px]:w-1/4 max-[1200px]:w-1/2  max-[1200px]:ml-[4%] min-[1065px]:mr-[10%] max-[700px]:w-[90%] max-[700px]:text-center max-[700px]:flex-col">
                <h3 class="text-white font-bold text-xl mb-2">Nueva contraseña:</h3>
                <p class="text-white mb-5">Si tienes alguna dificultad o necesitas asistencia adicional, no dudes en
                    contactarnos.
                    Estamos aquí para ayudarte a recuperar el acceso a tu cuenta de manera segura.</p>
                <div class="flex p-4 mb-4 text-sm text-black rounded-lg bg-blue-50" role="alert">
                    <div>
                        <span class="font-medium text-base">Para garantizar la seguridad de tu cuenta, te recomendamos tener
                            en cuenta
                            las siguientes sugerencias:</span>
                        <ul class="mt-5 ml-4 list-none">
                            <li :class="errores_contra.clases_longitud">
                                <svg v-if="errores_contra.validar_longitud" class="mr-2 w-6 h-6" stroke-width="1.5"
                                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#198A39">
                                    <path d="M7 12.5l3 3 7-7" stroke="#198A39" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                                        stroke="#198A39" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                </svg>
                                <svg v-else class="mr-2 w-6 h-6" stroke-width="2" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" color="#A61D1D">
                                    <path
                                        d="M9.172 14.828L12.001 12m2.828-2.828L12.001 12m0 0L9.172 9.172M12.001 12l2.828 2.828M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                                        stroke="#A61D1D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                </svg>
                                Longitud de 8 a 72 caracteres.
                            </li>
                            <li :class="errores_contra.clases_minuscula">
                                <svg v-if="errores_contra.validar_minuscula" class="mr-2 w-6 h-6" stroke-width="1.5"
                                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#198A39">
                                    <path d="M7 12.5l3 3 7-7" stroke="#198A39" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                                        stroke="#198A39" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                </svg>
                                <svg v-else class="mr-2 w-6 h-6" stroke-width="2" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" color="#A61D1D">
                                    <path
                                        d="M9.172 14.828L12.001 12m2.828-2.828L12.001 12m0 0L9.172 9.172M12.001 12l2.828 2.828M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                                        stroke="#A61D1D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                </svg>
                                Al menos una letra minúscula.
                            </li>
                            <li :class="errores_contra.clases_mayuscula">
                                <svg v-if="errores_contra.validar_mayuscula" class="mr-2 w-6 h-6" stroke-width="1.5"
                                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#198A39">
                                    <path d="M7 12.5l3 3 7-7" stroke="#198A39" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                                        stroke="#198A39" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                </svg>
                                <svg v-else class="mr-2 w-6 h-6" stroke-width="2" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" color="#A61D1D">
                                    <path
                                        d="M9.172 14.828L12.001 12m2.828-2.828L12.001 12m0 0L9.172 9.172M12.001 12l2.828 2.828M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                                        stroke="#A61D1D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                </svg>
                                Al menos una letra mayúscula.
                            </li>
                            <li :class="errores_contra.clases_numero">
                                <svg v-if="errores_contra.validar_numero" class="mr-2 w-6 h-6" stroke-width="1.5"
                                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#198A39">
                                    <path d="M7 12.5l3 3 7-7" stroke="#198A39" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                                        stroke="#198A39" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                </svg>
                                <svg v-else class="mr-2 w-6 h-6" stroke-width="2" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" color="#A61D1D">
                                    <path
                                        d="M9.172 14.828L12.001 12m2.828-2.828L12.001 12m0 0L9.172 9.172M12.001 12l2.828 2.828M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                                        stroke="#A61D1D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                </svg>
                                Al menos un número.
                            </li>
                            <li :class="errores_contra.clases_especiales">
                                <svg v-if="errores_contra.validar_especiales" class="mr-2 w-6 h-6" stroke-width="1.5"
                                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#198A39">
                                    <path d="M7 12.5l3 3 7-7" stroke="#198A39" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                                        stroke="#198A39" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                </svg>
                                <svg v-else class="mr-2 w-6 h-6" stroke-width="2" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" color="#A61D1D">
                                    <path
                                        d="M9.172 14.828L12.001 12m2.828-2.828L12.001 12m0 0L9.172 9.172M12.001 12l2.828 2.828M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                                        stroke="#A61D1D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                </svg>
                                Al menos un carácter especial, como ! @ # ?
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <form class="min-[1201px]:w-1/4 max-[1200px]:w-1/2 max-[700px]:w-full max-[700px]:mb-24"
                @submit.prevent="cambiarContra">
                <div class="relative z-0 mt-10 mb-4 mx-12">
                    <input type="password" id="nueva_clave" name="nueva_clave" required minlength="8" maxlength="72"
                        v-model="form_contras.nueva_clave" @input="validarContra"
                        class="block py-2.5 px-0 w-full text-sm text-gray-200 border-gray-200 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer focus:border-lightPurpleLogin peer"
                        placeholder=" " autocomplete="off" />
                    <label for="nueva_clave"
                        class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nueva
                        contraseña
                        <span class="text-sm ml-1"> * </span></label>
                </div>
                <div class="relative z-0 mt-10 mb-4 mx-12">
                    <input type="password" id="confirmar_clave" name="confirmar_clave" required minlength="8" maxlength="72"
                        v-model="form_contras.confirmar_clave" @input="validarContra"
                        class="block py-2.5 px-0 w-full text-sm text-gray-200 border-gray-200 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer focus:border-lightPurpleLogin peer"
                        placeholder=" " autocomplete="off" />
                    <label for="confirmar_clave"
                        class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirmar
                        contraseña
                        <span class="text-sm ml-1"> * </span></label>
                </div>
                <div class="mx-12">
                    <button type="submit"
                        class="w-full py-3 mt-10 text-center text-white font-medium text-lg bg-purpleLogin rounded-lg">Cambiar
                        contraseña</button>
                </div>
                <div v-if="mostrar_error_contra"
                    class="mt-10 mx-12 flex items-center justify-center p-4 mb-4 text-sm text-red-300 border border-red-300 rounded-lg"
                    role="alert">
                    <svg class="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor" viewBox="0 0 20 20">
                        <path
                            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <div class="text-center font-medium">
                        {{ mostrar_error_contra }}
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<style scoped>
.bg-gradient {
    background: linear-gradient(180deg, rgba(63, 66, 128, 0.71) 0%, rgba(49, 50, 71, 0.79) 100%);
    background-color: #1E1E1E;
}
</style>
<script setup>
import axios from 'axios';
import Swal from 'sweetalert2';
//Importación de archivo de validaciones
import axiosPlugin from '~/plugins/axiosPlugin';
import validaciones from '../assets/validaciones.js';

definePageMeta({
    layout: "",
    //Se le establece un middleware a la página
    middleware: "middleware-recuperacion"
});

//Constante ref para guardar la información necesaria para el cambio de contraseña
const form_contras = ref({
    nueva_clave: '',
    confirmar_clave: '',
})

//Constante ref para mostrar la guía en la validación de la contraseña nueva
const errores_contra = ref({
    validar_longitud: false,
    clases_longitud: 'mb-2 flex items-center text-[#A61D1D] font-semibold',
    validar_minuscula: false,
    clases_minuscula: 'mb-2 flex items-center text-[#A61D1D] font-semibold',
    validar_mayuscula: false,
    clases_mayuscula: 'mb-2 flex items-center text-[#A61D1D] font-semibold',
    validar_numero: false,
    clases_numero: 'mb-2 flex items-center text-[#A61D1D] font-semibold',
    validar_especiales: false,
    clases_especiales: 'mb-2 flex items-center text-[#A61D1D] font-semibold',
})

//Constante para mostrar errores en la validación de la contraseña nueva
const mostrar_error_contra = ref('');

//Función para validar la contraseña
function validarContra() {
    //Se evalua los cada aspecto de la guía para crear una contraseña y se mira si ya se cumplió, si se cumplió cambia el texto y el icono a verde 
    errores_contra.value.validar_longitud = validaciones.validarContraLongitud(form_contras.value.nueva_clave);
    if (errores_contra.value.validar_longitud) {
        errores_contra.value.clases_longitud = 'mb-2 flex items-center text-[#198A39] font-semibold';
    } else {
        errores_contra.value.clases_longitud = 'mb-2 flex items-center text-[#A61D1D] font-semibold';
    }

    errores_contra.value.validar_minuscula = validaciones.validarContraLetraMinuscula(form_contras.value.nueva_clave);
    if (errores_contra.value.validar_minuscula) {
        errores_contra.value.clases_minuscula = 'mb-2 flex items-center text-[#198A39] font-semibold';
    } else {
        errores_contra.value.clases_minuscula = 'mb-2 flex items-center text-[#A61D1D] font-semibold';
    }

    errores_contra.value.validar_mayuscula = validaciones.validarContraLetraMayuscula(form_contras.value.nueva_clave);
    if (errores_contra.value.validar_mayuscula) {
        errores_contra.value.clases_mayuscula = 'mb-2 flex items-center text-[#198A39] font-semibold';
    } else {
        errores_contra.value.clases_mayuscula = 'mb-2 flex items-center text-[#A61D1D] font-semibold';
    }

    errores_contra.value.validar_especiales = validaciones.validarContraEspeciales(form_contras.value.nueva_clave);
    if (errores_contra.value.validar_especiales) {
        errores_contra.value.clases_especiales = 'mb-2 flex items-center text-[#198A39] font-semibold';
    } else {
        errores_contra.value.clases_especiales = 'mb-2 flex items-center text-[#A61D1D] font-semibold';
    }

    errores_contra.value.validar_numero = validaciones.validarContraNumeros(form_contras.value.nueva_clave);
    if (errores_contra.value.validar_numero) {
        errores_contra.value.clases_numero = 'mb-2 flex items-center text-[#198A39] font-semibold';
    } else {
        errores_contra.value.clases_numero = 'mb-2 flex items-center text-[#A61D1D] font-semibold';
    }

    //Se evaluan si alguna parte de la guía de contraseñas no se ha cumplido y se muestra un error de formato
    if (!errores_contra.value.validar_numero || !errores_contra.value.validar_especiales || !errores_contra.value.validar_minuscula || !errores_contra.value.validar_mayuscula || !errores_contra.value.validar_longitud) {
        mostrar_error_contra.value = 'Formato de contraseña incorrecto.'
        //Se evalua si la contraseña nueva y la del input de confirmar contraseña coinciden, si no se muestra un error
    } else if (form_contras.value.nueva_clave != form_contras.value.confirmar_clave) {
        mostrar_error_contra.value = 'Las contraseñas no coinciden.'
        //Si todo es correcto, no se muestra ningún error
    } else {
        mostrar_error_contra.value = '';
    }

    //Se quitan los errores si los campos estan vacios
    if (form_contras.value.nueva_clave == '' && form_contras.value.confirmar_clave == '') {
        mostrar_error_contra.value = '';
    }
}

const token = ref(useRoute().query.token);

async function cambiarContra() {
    try {
        const FORM_DATA = new FormData();
        FORM_DATA.append('nueva_clave', form_contras.value.nueva_clave);
        FORM_DATA.append('nueva_clave_confirmation', form_contras.value.confirmar_clave);

        await axios.post('/recuperacion_contra/' + token.value, FORM_DATA);

        Swal.fire({
            title: '¡Exito!',
            text: "Proceso completado, ahora puedes iniciar sesión con tus nuevas credenciales",
            icon: 'info',
            reverseButtons: true,
            confirmButtonColor: '#3F4280',
            cancelButtonColor: '#d33',
            confirmButtonText: 'OK',
            allowOutsideClick: false,
        }).then(() => {
            navigateTo('/');
        });

    } catch (error) {
        console.log(error);
        errores_contra.value.validar_numero = false;
        errores_contra.value.validar_especiales = false;
        errores_contra.value.validar_mayuscula = false;
        errores_contra.value.validar_minuscula = false;
        errores_contra.value.validar_longitud = false;
        errores_contra.value.clases_numero = 'mb-2 flex items-center text-[#A61D1D] font-semibold';
        errores_contra.value.clases_especiales = 'mb-2 flex items-center text-[#A61D1D] font-semibold';
        errores_contra.value.clases_mayuscula = 'mb-2 flex items-center text-[#A61D1D] font-semibold';
        errores_contra.value.clases_minuscula = 'mb-2 flex items-center text-[#A61D1D] font-semibold';
        errores_contra.value.clases_longitud = 'mb-2 flex items-center text-[#A61D1D] font-semibold';
        form_contras.value.nueva_clave = '';
        form_contras.value.confirmar_clave = '';

        if (!error.response.data.errors && !error.response.data.error) {
            const sqlState = validaciones.extraerSqlState(error.response.data.message);
            if (sqlState != null) {
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
                    text: error.response.data.message,
                    confirmButtonColor: '#3F4280'
                });
            }
        } else {
            //Se muestra un sweetalert con el mensaje
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.response.data.error,
                confirmButtonColor: '#3F4280'
            });
        }
    }
}

</script>