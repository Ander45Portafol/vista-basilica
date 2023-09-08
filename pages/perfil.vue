<template>
    <div v-if="!data_usuario" class="mdcarga h-screen overflow-hidden flex justify-center items-center">
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
    <div v-else class="principal flex-col justify-between items-center mt-6">
        <div class="topprincipal flex justify-between font-semibold text-base mx-6">
            <div class="options flex">
                <NuxtLink to="/principal" class="mr-6">
                    <svg width="28px" height="28px" stroke-width="2" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg" color="#000000">
                        <path
                            d="M16 12H8m0 0l3.5 3.5M8 12l3.5-3.5M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                            stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </NuxtLink>
                <a href="" class="active ml-4 pr-2">Pefil</a>
            </div>
            <div class="endtop flex justify-between w-20">
                <NuxtLink to="/perfil">
                    <svg width="28px" height="28px" stroke-width="2.5" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg" color="#000000">
                        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="#000000" stroke-width="2.5" stroke-linecap="round"
                            stroke-linejoin="round"></path>
                        <path
                            d="M19.622 10.395l-1.097-2.65L20 6l-2-2-1.735 1.483-2.707-1.113L12.935 2h-1.954l-.632 2.401-2.645 1.115L6 4 4 6l1.453 1.789-1.08 2.657L2 11v2l2.401.655L5.516 16.3 4 18l2 2 1.791-1.46 2.606 1.072L11 22h2l.604-2.387 2.651-1.098C16.697 18.831 18 20 18 20l2-2-1.484-1.75 1.098-2.652 2.386-.62V11l-2.378-.605z"
                            stroke="#1B1C30" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </NuxtLink>
                <NuxtLink to="">
                    <svg width="28px" height="28px" stroke-width="2" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg" color="#000000">
                        <path
                            d="M12 11.5v5M12 7.51l.01-.011M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                            stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </NuxtLink>
            </div>
        </div>
        <div class="mdprincipal mt-6 flex-col w-full absolute">
            <img src="/img/f_perfil.svg" alt="cohete_login" class="w-full">
        </div>
        <div class="flex h-screen w-full ml-36 items-center">
            <div class=" h-96 w-1/6 mb-24 bg-space opacity-95 mt-40 rounded-lg p-4 text-white flex-col">
                <div class="flex justify-center relative" @click="seleccionarArchivo" @mouseover="iconoBorrarTrue"
                    @mouseleave="iconoBorrarFalse">
                    <img v-if="imagenPreview" :src="imagenPreview" class="h-44 w-40 rounded-lg" />
                    <input type="file" ref="inputImagen" class="hidden" @change="cambiarImagen" />
                    <div v-if="mostrarIconoBorrar"
                        class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 24 24"
                            style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;">
                            <path
                                d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z">
                            </path>
                        </svg>
                    </div>
                </div>
                <div class="text-white mt-4 text-center">
                    <p class="text-2xl font-bold" id="nombre_usuario"></p>
                    <p id="rol_usuario"></p>
                    <div class="flex justify-center mt-10">
                        <button class="bg-darkSpace flex gap-4 p-2 items-center text-white w-44 h-10 rounded-lg">
                            <svg width="24px" height="24px" stroke-width="2" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" color="#000000">
                                <path d="M21 13V8a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h7" stroke="#FFF"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path clip-rule="evenodd"
                                    d="M20.879 16.917c.494.304.463 1.043-.045 1.101l-2.567.291-1.151 2.312c-.228.459-.933.234-1.05-.334l-1.255-6.116c-.099-.48.333-.782.75-.525l5.318 3.271z"
                                    stroke="#FFF" stroke-width="2"></path>
                                <path d="M12 11.01l.01-.011M16 11.01l.01-.011M8 11.01l.01-.011" stroke="#FFF"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg> Cambiar clave
                        </button>
                    </div>

                </div>
            </div>
            <div class=" h-4/6 w-3/5 mb-12  bg-space opacity-95 mt-40 ml-12 rounded-lg p-6 text-white flex-col">
                <p class="font-bold text-3xl">Perfil</p>
                <p class="text-lg font-extralight">Datos generales</p>
                <form @submit.prevent="actualizarPerfil()" class="flex justify-evenly mt-14">
                    <div class="flex-col w-72">
                        <input type="hidden" v-model="form.id_usuario">
                        <input type="hidden" v-model="form.id_rol_usuario">
                        <input type="hidden" v-model="form.clave_usuario">
                        <div class="relative z-0">
                            <input type="text" id="usuario_nombre" name="nombre_usuario" requierd maxlength="100"
                                @input="validarNombre()"
                                class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                placeholder=" " autocomplete="off" v-model="form.nombre_usuario" />
                            <span class="text-xs text-gray-400 absolute bottom-0.5 right-0" v-if="form.nombre_usuario">
                                {{
                                    form.nombre_usuario.length }} /100</span>
                            <span class="text-xs text-gray-400 absolute bottom-0.5 right-0" v-else> 0 /100</span>
                            <label for="usuario_nombre"
                                class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre
                                - Persona<span class="text-sm ml-1"> * </span></label>
                        </div>
                        <div v-if="!validarNombre()" class="flex mt-2 mb-0 text-sm text-red-400 bg-transparent"
                            role="alert">
                            <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <div>
                                El nombre del usuario solo permite <span class="font-medium">
                                    letras.</span>
                            </div>
                        </div>
                        <div class="pt-4 mt-2 flex-col">
                            <label for="" class="text-sm absolute text-gray-200">Tipo - Documento<span class="text-sm ml-1">
                                    * </span></label>
                            <select id="underline_select" v-model="form.tipo_documento"
                                class="block mt-4 py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                <option value="0" class="text-gray-900">Seleccionar</option>
                                <option value="Cédula" class="text-gray-900">Cédula</option>
                                <option value="Pasaporte" class="text-gray-900">Pasaporte</option>
                                <option value="Otro" class="text-gray-900">Otro...</option>
                            </select>
                            <div v-if="form.tipo_documento == 0" class="flex mt-2 mb-0 text-sm text-red-400 bg-transparent"
                                role="alert">
                                <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <div>
                                    Seleccione <span class="font-medium">
                                        una opción.</span>
                                </div>
                            </div>
                        </div>
                        <div class="relative z-0 mt-6">
                            <input type="text" id="usuario" name="usuario" required maxlength="50" @input="validarUsuario()"
                                class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                placeholder=" " autocomplete="off" v-model="form.usuario" />
                            <span class="text-xs text-gray-400 absolute bottom-0.5 right-0" v-if="form.usuario">
                                {{
                                    form.usuario.length }} /50</span>
                            <span class="text-xs text-gray-400 absolute bottom-0.5 right-0" v-else> 0 /50</span>
                            <label for="usuario"
                                class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Usuario<span class="text-sm ml-1"> * </span></label>
                        </div>
                        <div v-if="!validarUsuario()" class="flex mt-2 mb-0 text-sm text-red-400 bg-transparent"
                            role="alert">
                            <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <div>
                                El usuario ingresado <span class="font-medium">
                                    no tiene un formato correcto.</span>
                            </div>
                        </div>
                        <div class="relative z-0  mt-6">
                            <input type="email" id="correo_usuario" name="correo_usuario" required
                                class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                placeholder=" " autocomplete="off" v-model="form.correo_usuario" />
                            <label for="correo_usuario"
                                class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Correo
                                - Usuario<span class="text-sm ml-1"> * </span></label>
                        </div>
                    </div>
                    <div class="flex-col w-72">
                        <div class="relative z-0">
                            <input type="text" id="apellido_usuario" name="apellido_usuario" required maxlength="100"
                                @input="validarApellido()"
                                class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                placeholder=" " autocomplete="off" v-model="form.apellido_usuario" />
                            <span class="text-xs text-gray-400 absolute bottom-0.5 right-0" v-if="form.apellido_usuario">
                                {{
                                    form.apellido_usuario.length }} /100</span>
                            <span class="text-xs text-gray-400 absolute bottom-0.5 right-0" v-else> 0 /100</span>
                            <label for="apellido_usuario"
                                class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellido
                                - Persona<span class="text-sm ml-1"> * </span></label>
                        </div>
                        <div class="relative z-0 mt-10">
                            <input type="text" id="numero_documento_usuario" name="numero_documento_usuario"
                                @input="validarNumeroDocumento()"
                                class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                placeholder=" " autocomplete="off" v-model="form.numero_documento_usuario" />
                            <span class="text-xs text-gray-400 absolute bottom-0.5 right-0"
                                v-if="form.numero_documento_usuario">
                                {{
                                    form.numero_documento_usuario.length }} /20</span>
                            <span class="text-xs text-gray-400 absolute bottom-0.5 right-0" v-else> 0 /20</span>
                            <label for="numero_documento_usuario"
                                class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">#
                                Documento<span class="text-sm ml-1"> * </span></label>
                        </div>
                        <div v-if="!validarNumeroDocumento()" class="flex mt-2 mb-0 text-sm text-red-400 bg-transparent"
                            role="alert">
                            <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <div>
                                El documento ingresado <span class="font-medium">
                                    no tiene un formato correcto.</span>
                            </div>
                        </div>
                        <div class="relative z-0 mt-6">
                            <input type="text" id="telefono_usuario" name="telefono_usuario" required maxlength="9"
                                @input="validarNumeroTelefono()"
                                class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                placeholder=" " autocomplete="off" v-model="form.telefono_usuario" />
                            <span class="text-xs text-gray-400 absolute bottom-0.5 right-0" v-if="form.telefono_usuario">
                                {{
                                    form.telefono_usuario.length }} /9</span>
                            <span class="text-xs text-gray-400 absolute bottom-0.5 right-0" v-else> 0 /9</span>
                            <label for="telefono_usuario"
                                class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Teléfono
                                - Usuario<span class="text-sm ml-1"> * </span></label>
                        </div>
                        <div v-if="!validarNumeroTelefono()" class="flex mt-2 mb-0 text-sm text-red-400 bg-transparent"
                            role="alert">
                            <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <div>
                                El número de teléfono ingresado <span class="font-medium">
                                    no tiene un formato correcto.</span>
                            </div>
                        </div>
                        <div class="flex items-end  h-44 justify-end w-96">
                            <button type="submit"
                                class="bg-darkSpace absolute bottom-20 w-52 flex items-center h-12 rounded-xl gap-4 justify-center"
                                :disabled="!validarNombre() || form.tipo_documento == 0 || !validarUsuario() || !validarApellido() || !validarNumeroDocumento() || !validarNumeroTelefono()">
                                <svg width="24px" height="24px" stroke-width="2" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" color="#000000">
                                    <path d="M7 12.5l3 3 7-7" stroke="#FFF" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                                        stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                </svg> Actualizar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<style scoped>
.topprincipal .active {
    color: #c99856;
    border-bottom: 3px solid #c99856;
}
</style>
<script setup>
import 'flowbite';
import { onMounted } from 'vue'
import axios from 'axios';
import Swal from 'sweetalert2';
import validaciones from '../assets/validaciones.js';
definePageMeta({
    layout: "perfil",
})

const data_usuario = ref(null);
const token = ref(null);
const id_usuario = ref(0);
const EVENT = new Event('reset-timer');


onMounted(() => {
    //Variable para capturar el id del usuario que se almacena en el localStorage
    id_usuario.value = localStorage.getItem('usuario');
    cargando_datos(id_usuario.value);
});

async function cargando_datos(id_usuario) {
    token.value = localStorage.getItem('token');
    var nombrecompleto = null;
    var rolusuario = null;
    await axios.get('/profile/' + id_usuario, {
        headers: {
            Authorization: `Bearer ${token.value}`,
        },
    }).then(res => {
        form.value = {
            id_usuario: res.data.data.user.id_usuario,
            nombre_usuario: res.data.data.user.nombre_usuario,
            apellido_usuario: res.data.data.user.apellido_usuario,
            clave_usuario: res.data.data.user.clave_usuario,
            tipo_documento: res.data.data.user.tipo_documento,
            numero_documento_usuario: res.data.data.user.numero_documento_usuario,
            usuario: res.data.data.user.usuario,
            idioma: "Español (ES)",
            tema: "Claro",
            telefono_usuario: res.data.data.user.telefono_usuario,
            correo_usuario: res.data.data.user.correo_usuario,
            visibilidad_usuario: true,
            id_rol_usuario: res.data.data.user.roles.id_rol_usuario
        };

        data_usuario.value = res.data.data.user;
        console.log(data_usuario.value);
        if (res.data.data.user.imagen_usuario != null) {
            form.value.imagen_usuario = res.data.data.user.imagen_usuario;
            imagenPreview.value = api_url + form.value.imagen_usuario;
        } else {
            form.value.imagen_usuario = "";
        }
        var cortarnombre = res.data.data.user.nombre_usuario.split(" ");
        var nombrecortado = cortarnombre[0];
        var cortarapellido = res.data.data.user.apellido_usuario.split(" ");
        var apellidocortado = cortarapellido[0];
        nombrecompleto = nombrecortado + " " + apellidocortado;
        rolusuario = res.data.data.user.roles.rol_usuario;

        //Se reinicia el timer
        window.dispatchEvent(EVENT);
        //Se refresca el valor del token con la respuesta del axios
        localStorage.setItem('token', res.data.data.token);
        token.value = localStorage.getItem('token');
    });
    document.getElementById('nombre_usuario').textContent = nombrecompleto;
    document.getElementById('rol_usuario').textContent = rolusuario;

}

const mostrarIconoBorrar = ref(false);

function iconoBorrarTrue() {
    if (imagenPreview.value) {
        mostrarIconoBorrar.value = true;
    }
}

function iconoBorrarFalse() {
    if (imagenPreview.value) {
        mostrarIconoBorrar.value = false;
    }
}

const imagenPreview = ref(null);
const seleccionarArchivo = () => {
    if (mostrarIconoBorrar.value == false) {
        inputImagen.value.click();
    } else {
        limpiarImagen();
    }
};
const inputImagen = ref(null);

const cambiarImagen = () => {
    const input = inputImagen.value;
    const file = input.files;
    if (file && file[0]) {
        form.value.imagen_usuario = file[0];
        console.log(form.value.imagen_usuario);
        const reader = new FileReader();
        reader.onload = (e) => {
            imagenPreview.value = e.target.result;
        };
        reader.readAsDataURL(file[0]);
        return file[0];
    }
};
var api_url = "http://localhost:8000/storage/usuarios/images/";

//Se crea una variable reactiva para manejar la información del modal
const form = ref({
    id_usuario: "",
    nombre_usuario: "",
    apellido_usuario: "",
    usuario: "",
    clave_usuario: "",
    numero_documento_usuario: "",
    tipo_documento: 0,
    correo_usuario: "",
    telefono_usuario: "",
    idioma: "Español (ES)",
    tema: "Claro",
    visibilidad_usuario: true,
    id_rol_usuario: 0,
    imagen_usuario: "",
})
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
})
async function actualizarPerfil() {
    try {
        //Se establece una variable de id con el valor que tiene guardado la variable form
        var id = form.value.id_usuario;
        console.log(id);
        //Se crea una constante para guardar el valor actual que tienen todos los campos del form
        const formData = {
            nombre_usuario: form.value.nombre_usuario,
            apellido_usuario: form.value.apellido_usuario,
            usuario: form.value.usuario,
            clave_usuario: form.value.clave_usuario,
            numero_documento_usuario: form.value.numero_documento_usuario,
            tipo_documento: form.value.tipo_documento,
            correo_usuario: form.value.correo_usuario,
            telefono_usuario: form.value.telefono_usuario,
            tema: form.value.tema,
            idioma: form.value.idioma,
            visibilidad_usuario: form.value.visibilidad_usuario,
            id_rol_usuario: form.value.id_rol_usuario,
        };
        console.log(formData);

        //Se realiza la petición axios mandando la ruta y el formData
        await axios.put("/usuarios/" + id, formData);
        //cargando_datos();
        //Se lanza la alerta de éxito
        Toast.fire({
            icon: 'success',
            title: 'Informacion actualizada exitosamente'
        })

    } catch (error) {
        console.log(error);
    }
}


//Validaciones

function validarNombre() {
    var res = validaciones.validarSoloLetras(form.value.nombre_usuario);
    return res;
}

function validarApellido() {
    var res = validaciones.validarSoloLetras(form.value.apellido_usuario);
    return res;
}

function validarUsuario() {
    var res = validaciones.validarUsuario(form.value.usuario);
    return res;
}

function validarNumeroTelefono() {
    var res = validaciones.validarNumeroTelefono(form.value.telefono_usuario);
    return res;
}

function validarNumeroDocumento() {
    if (form.value.tipo_documento == 0 && form.value.numero_documento_usuario.length == 0) {
        return true;
    } else if (form.value.tipo_documento == 0) {
        return false;
    } else {
        var res = validaciones.validarNumeroDocumento(form.value.numero_documento_usuario, form.value.tipo_documento);
        return res;
    }
}
</script>