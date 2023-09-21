<template>
    <div class="primer_uso h-screen w-screen overflow-hidden">
        <div class="flex ml-16 h-full w-full">
            <div class="w-3/4 flex-col mt-20">
                <p class="text-white font-semibold text-6xl">Usuario</p>
                <div class="flex mr-20 mt-20 justify-between">
                    <div class="flex-col">
                        <div class="relative z-0 mt-9 w-72">
                            <input type="text" id="nombre_persona" name="nombre_persona" required maxlength="100"
                                v-model="form.nombre_usuario"
                                class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                placeholder=" " autocomplete="off" />
                            <label for="nombre_persona"
                                class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre
                                - Persona<span class="text-sm ml-1"> * </span></label>
                        </div>
                        <div class="relative z-0 mt-16 w-72">
                            <input type="text" id="correo_electronico" name="correo_electronico" required maxlength="100"
                                v-model="form.correo_usuario"
                                class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                placeholder=" " autocomplete="off" />
                            <label for="correo_electronico"
                                class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Correo
                                Eletronico<span class="text-sm ml-1"> * </span></label>
                        </div>
                        <div class="pt-4 mt-12 flex-col w-72">
                            <label for="" class="text-sm absolute text-gray-200">Tipo - Documento<span class="text-sm ml-1">
                                    *
                                </span></label>
                            <select id="underline_select" v-model="form.tipo_documento"
                                class="block mt-4 py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                <option value="0" class="bg-gray-700">Seleccione una opción</option>
                                <option value="Cédula" class="bg-gray-700">Cédula</option>
                                <option value="Pasaporte" class="bg-gray-700">Pasaporte</option>
                                <option value="Otro" class="bg-gray-700">Otro...</option>
                            </select>
                        </div>
                    </div>
                    <div class="flex-col">
                        <div class="relative z-0 mt-9 w-72">
                            <input type="text" id="apellido_persona" name="apellido_persona" required maxlength="100"
                                v-model="form.apellido_usuario"
                                class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                placeholder=" " autocomplete="off" />
                            <label for="apellido_persona"
                                class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellido
                                - Persona<span class="text-sm ml-1"> * </span></label>
                        </div>
                        <div class="relative z-0 mt-16 w-72">
                            <input type="text" id="telefono_persona" name="telefono_persona" required maxlength="10"
                                v-model="form.telefono_usuario"
                                class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                placeholder=" " autocomplete="off" />
                            <label for="telefono_persona"
                                class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Teléfono
                                - Persona<span class="text-sm ml-1"> * </span></label>
                        </div>
                        <div class="relative z-0 mt-20 w-72">
                            <input type="text" id="numero_documento" name="numero_documento" required maxlength="10"
                                v-model="form.numero_documento_usuario"
                                class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                placeholder=" " autocomplete="off" />
                            <label for="numero_documento"
                                class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Documento
                                <span class="text-sm ml-1"> * </span></label>
                        </div>
                    </div>
                    <div class="flex-col">
                        <div class="">
                            <p class="mb-4 text-center text-gray-200">Imagen - Usuario</p>
                            <div class="flex-col m-auto">
                                <div class="h-44 w-40 border-2 border-slate-900 ml-14 rounded-lg cursor-pointer relative max-[630px]:m-auto"
                                    @click="seleccionarArchivo" @mouseover="iconoBorrarTrue" @mouseleave="iconoBorrarFalse">
                                    <img v-if="imagenPreview" :src="imagenPreview" class="h-44 w-40 rounded-lg" />
                                    <input type="file" ref="inputImagen" class="hidden" @change="cambiarImagen" />
                                    <div v-if="mostrarIconoBorrar"
                                        class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px"
                                            viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;">
                                            <path
                                                d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="m-auto max-[630px]:text-center max-[630px]:ml-[-58px]">
                                    <button type="button"
                                        class="w-40 ml-14 py-2 mt-3 bg-white rounded-md hover:bg-slate-300 text-center"
                                        @click="seleccionarArchivo">Seleccionar Imagen</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-start items-end h-56">
                    <div class="flex-col">
                        <p class="font-extralight text-base text-gray-400">Llena los campos establecidos con la información
                            solicitada de acuerdo al usuario que</p>
                        <p class="font-extralight text-base text-gray-400">deseas registrar.</p>
                        <p class="font-extralight text-base text-gray-400 mt-4">Una vez ingresada la información, solo
                            podrás cambiarla
                            dentro del sistema.</p>
                    </div>
                </div>
            </div>
            <div class="h-full flex justify-center items-center w-1/6">
                <div class="botones w-full h-3/5 ml-10 flex items-center">
                    <div class="flex-col ml-2">
                        <button @click.prevent="crearPrimerUsuario"
                            class="h-14 w-64 bg-darkSpace text-white rounded-md text-lg font-semibold flex justify-center items-center">
                            Continuar
                            <svg width="30px" height="30px" stroke-width="2.5" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" color="#000000">
                                <path d="M9 6l6 6-6 6" stroke="#FFF" stroke-width="2.5" stroke-linecap="round"
                                    stroke-linejoin="round">
                                </path>
                            </svg>
                        </button>
                        <NuxtLink to="primer_parroquia"
                            class="bg-transparent h-14 w-64 text-white rounded-lg mt-8 text-lg font-semibold flex justify-center items-center">
                            Volver</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.botones {
    border-left: 1px solid #818181;
}

.primer_uso {
    background: linear-gradient(180deg,
            rgba(63, 66, 128, 0.6241) 0%,
            rgba(49, 50, 71, 0.5609) 100%);
    background-color: #1e1e1e;
    font-family: 'Poppins', sans-serif;
}
</style>
<script setup>
import axios from 'axios';
import Swal from 'sweetalert2';
definePageMeta({
    layout: false,
});


const capturar_parroquia = ref(null);
const capturar_usuario = ref(null);


async function validarPantalla() {
    const res = await axios.get('/primer_uso');
    capturar_parroquia.value = res.data.parroquias;
    capturar_usuario.value = res.data.usuarios;
    if (capturar_parroquia.value == true && capturar_usuario.value == false) {
        navigateTo('primer_usuario')
    } else if (capturar_parroquia.value == true && capturar_usuario.value == true) {
        navigateTo('/')
    }
}
onMounted(() => {
    validarPantalla();
})

//Variable reactiva para verificar si mostrar o no el boton para borrar alguna imagen
const mostrarIconoBorrar = ref(false);
//Metodo para hacer visible el icono de borrar una imagen
function iconoBorrarTrue() {
    if (imagenPreview.value) {
        mostrarIconoBorrar.value = true;
    }
}
//Metodo para no mostrar el icono de borrar una imagen
function iconoBorrarFalse() {
    if (imagenPreview.value) {
        mostrarIconoBorrar.value = false;
    }
}
//Variable reactiva para mostrar la imagen capturada
const imagenPreview = ref(null);
//Metodo para seleccionar una imagen para el registro
const seleccionarArchivo = () => {
    if (mostrarIconoBorrar.value == false) {
        inputImagen.value.click();
    } else {
        limpiarImagen();
    }
};
//Variable reactiva para caputar el valor de la imagen
const inputImagen = ref(null);
//Metodo para cambiar la imagen de un registro
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

const form = ref({
    id_usuario: "",
    nombre_usuario: "",
    apellido_usuario: "",
    usuario: "",
    imagen_usuario: "",
    numero_documento_usuario: "",
    tipo_documento: 0,
    correo_usuario: "",
    telefono_usuario: "",
    idioma: "Español (ES)",
    tema: "Claro",
    fecha_cambio: "",
    fecha_bloqueo: "",
    autenticable: "",
    visibilidad_usuario: true,
    id_rol_usuario: 'fcef4da2-9aa2-431a-903d-f8a6ce4e597e',
})

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

async function crearPrimerUsuario() {
    form.value.usuario = form.value.nombre_usuario + "" + form.value.apellido_usuario;
    try {
        const FORMDATA = new FormData();
        FORMDATA.append("nombre_usuario", form.value.nombre_usuario);
        FORMDATA.append("apellido_usuario", form.value.apellido_usuario);
        FORMDATA.append("usuario", form.value.usuario);
        FORMDATA.append("numero_documento_usuario", form.value.numero_documento_usuario);
        FORMDATA.append("tipo_documento", form.value.tipo_documento);
        FORMDATA.append("correo_usuario", form.value.correo_usuario);
        FORMDATA.append("telefono_usuario", form.value.telefono_usuario);
        FORMDATA.append("tema", form.value.tema);
        FORMDATA.append("idioma", form.value.idioma);
        FORMDATA.append("visibilidad_usuario", form.value.visibilidad_usuario ? 1 : 0);
        FORMDATA.append(
            "id_rol_usuario",
            form.value.id_rol_usuario
        );
        FORMDATA.append("imagen_usuario", form.value.imagen_usuario);

        await axios.post('/primer_usuario', FORMDATA).then(() => {
            Toast.fire({
                icon: 'success',
                title: 'Usuario creado exitosamente'
            });
            navigateTo('/primer_uso');
        });
    } catch (error) {
        console.log(error);
        const mensajeError = error.response.data.message;
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
