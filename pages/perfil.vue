<template>
    <div class="principal flex-col justify-between items-center mt-6">
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
                <div class="flex justify-center">
                    <img src="/img/db_perfil.png" alt="imagen_db">
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
                <form class="flex justify-evenly mt-14">
                    <div class="flex-col w-72">
                        <input type="hidden" v-model="form.id_usuario">
                        <input type="hidden" v-model="form.id_rol_usuario">
                        <input type="hidden" v-model="form.clave_usuario">
                        <div class="relative z-0">
                            <input type="text" id="username" name="name"
                                class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                placeholder=" " autocomplete="off" v-model="form.nombre_usuario" />
                            <label for="username"
                                class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre
                                - Persona</label>
                        </div>
                        <div class="pt-4 mt-2 flex-col">
                            <label for="" class="absolute text-gray-200">Tipo - Documento</label>
                            <select id="underline_select" v-model="form.tipo_documento"
                                class="block mt-4 py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                <option value="0" class="text-gray-900">Seleccionar</option>
                                <option value="Cédula" class="text-gray-900">Cédula</option>
                                <option value="Pasaporte" class="text-gray-900">Pasaporte</option>
                                <option value="Otro" class="text-gray-900">Otro...</option>
                            </select>
                        </div>
                        <div class="relative z-0 mt-6">
                            <input type="text" id="username" name="name"
                                class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                placeholder=" " autocomplete="off" v-model="form.usuario" />
                            <label for="username"
                                class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre
                                - Usuario</label>
                        </div>
                        <div class="relative z-0  mt-6">
                            <input type="text" id="username" name="name"
                                class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                placeholder=" " autocomplete="off" v-model="form.correo_usuario" />
                            <label for="username"
                                class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Correo
                                - Usuario</label>
                        </div>
                    </div>
                    <div class="flex-col w-72">
                        <div class="relative z-0">
                            <input type="text" id="username" name="name"
                                class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                placeholder=" " autocomplete="off" v-model="form.apellido_usuario" />
                            <label for="username"
                                class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellido
                                - Persona</label>
                        </div>
                        <div class="relative z-0 mt-10">
                            <input type="text" id="username" name="name"
                                class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                placeholder=" " autocomplete="off" v-model="form.numero_documento_usuario" />
                            <label for="username"
                                class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Documento
                            </label>
                        </div>
                        <div class="relative z-0 mt-6">
                            <input type="text" id="username" name="name"
                                class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                placeholder=" " autocomplete="off" v-model="form.telefono_usuario" />
                            <label for="username"
                                class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Telefono
                                - Usuario</label>
                        </div>
                        <div class="flex items-end  h-44 justify-end w-96">
                            <button class="bg-darkSpace w-52 flex items-center h-12 rounded-xl gap-4 justify-center"
                                @click.prevent="actualizarPerfil()">
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
import Iconoir from 'iconoir/icons/iconoir.svg'
definePageMeta({
    layout: "perfil",
})
onMounted(() => {
    //Variable para capturar el id del usuario que se almacena en el localStorage
    var id_usuario;
    const data = ref(null);
    //Se valida si hay un token en el localStorage y si no te regresa al login
    function validarToken() {
        if (!localStorage.getItem('token')) {
            navigateTo('/');
        } else {
            console.log(localStorage.getItem('token'));
            id_usuario = localStorage.getItem('usuario');
        }
    }
    cargando_datos();

    async function cargando_datos() {
        validarToken();
        const { data: res } = await axios.post('/profile/' + id_usuario).then(res => {
            form.value = {
                id_usuario: res.data.id_usuario,
                nombre_usuario: res.data.nombre_usuario,
                apellido_usuario: res.data.apellido_usuario,
                clave_usuario: res.data.clave_usuario,
                tipo_documento: res.data.tipo_documento,
                numero_documento_usuario: res.data.numero_documento_usuario,
                usuario: res.data.usuario,
                idioma: "Español (ES)",
                tema: "Claro",
                telefono_usuario: res.data.telefono_usuario,
                correo_usuario: res.data.correo_usuario,
                visibilidad_usuario: true,
                id_rol_usuario: res.data.roles.id_rol_usuario
            }
            var cortarnombre=res.data.nombre_usuario.split(" ");
            var nombrecortado=cortarnombre[0];
            var cortarapellido=res.data.apellido_usuario.split(" ");
            var apellidocortado=cortarapellido[0];
            var nombrecompleto=nombrecortado+" "+apellidocortado;
            document.getElementById('nombre_usuario').textContent=nombrecompleto;
            document.getElementById('rol_usuario').textContent=res.data.roles.rol_usuario;
        });
    }

});
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
</script>