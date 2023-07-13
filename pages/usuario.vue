<template>
    <div class="principal mt-6">
        <!--Componente para cargar el menu superior del formulario-->
        <MenuUsuarioDashboard />
        <div class="mdprincipal flex-col mt-8 px-8 overflow-hidden">
            <div class="h-16 w-full rounded-xl flex justify-between items-center content-buttons max-[450px]:flex-wrap">
                <form action="" class="w-3/4 flex items-center h-full mt-4 max-[500px]:w-full">
                    <input type="text" class="rounded-lg relative w-2/4 h-12 outline-none max-[800px]:w-full min-w-[200px]"
                        placeholder="Buscar... (usuario/correo)" v-model="buscar.buscador" @keyup="buscarUsuarios()">
                    <div class="flex justify-end items-center">
                        <button class="absolute mr-4"><svg width="20px" height="20px" stroke-width="2" viewBox="0 0 24 24"
                                fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                                <path d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
                                    stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                    </div>
                </form>
                <div
                    class="buttons flex mt-4 mr-[-15px] max-[800px]:mt-4 min-w-[100px] max-[450px]:m-auto max-[450px]:mt-3">
                    <button
                        class="w-12 h-10 flex items-center justify-center ml-4 rounded-lg max-[800px]:w-8 max-[800px]:h-8 max-[800px]:ml-2">
                        <svg width="28px" height="28px" stroke-width="2.5" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg" color="#000000">
                            <path
                                d="M3 17h18M6 10V3.6a.6.6 0 01.6-.6h10.8a.6.6 0 01.6.6V10m3 10.4V14a4 4 0 00-4-4H7a4 4 0 00-4 4v6.4a.6.6 0 00.6.6h16.8a.6.6 0 00.6-.6z"
                                stroke="#1B1C30" stroke-width="2.5"></path>
                            <path d="M17 13.01l.01-.011" stroke="#1B1C30" stroke-width="2.5" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                        </svg>
                    </button>
                    <button
                        class="w-12 h-10 flex items-center justify-center ml-4 rounded-lg max-[800px]:w-8 max-[800px]:h-8 max-[800px]:ml-2 max-[450px]:mx-8">
                        <svg width="24px" height="24px" stroke-width="2.5" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg" color="#000000">
                            <path d="M7 6h10M7 9h10M9 17h6" stroke="#1B1C30" stroke-width="2.5" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                            <path
                                d="M3 12h-.4a.6.6 0 00-.6.6v8.8a.6.6 0 00.6.6h18.8a.6.6 0 00.6-.6v-8.8a.6.6 0 00-.6-.6H21M3 12V2.6a.6.6 0 01.6-.6h16.8a.6.6 0 01.6.6V12M3 12h18"
                                stroke="#1B1C30" stroke-width="2.5"></path>
                        </svg>
                    </button>
                    <button id="btnadd" type="button"
                        class="w-20 h-10 flex items-center justify-center mx-4 font-bold rounded-lg max-[800px]:w-8 max-[800px]:h-8 max-[800px]:ml-2 max-[450px]:ml-0">
                        <svg width="24px" height="24px" stroke-width="2.5" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg" color="#FFFFFF">
                            <path
                                d="M8 12h4m4 0h-4m0 0V8m0 4v4M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                                stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <p class="text-black text-lg"></p>
            <div class="line bg-slate-800 h-0.5 mt-4 w-full min-w-[200px]"></div>
            <TablesUsuarios :data="dataUsuario" />
            <div class="flex justify-center mt-6">
                <TailwindPagination
                    :item-classes="['text-gray-500', 'rounded-full', 'border-none', 'ml-1', 'hover:bg-gray-200']"
                    :active-classes="['text-white', 'rounded-full', 'bg-purpleLogin']" :limit="1" :keepLength="true"
                    :data="data" @pagination-change-page="usuario = $event" />
            </div>
        </div>
    </div>
</template>
<script setup>
import { TailwindPagination } from 'laravel-vue-pagination';
//Importación de axios, se utiliza para hacer las peticiones al servidor -> Para mas información vean el axiosPlugin en la carpeta plugins
import axios from 'axios';
import { onMounted, ref } from 'vue'
import validaciones from '../assets/validaciones.js';
//Importación de sweetalert
import Swal from 'sweetalert2';
definePageMeta({
    layout: "principal",
})
onMounted(() => {
    //Constantes para manejar el modal
    //Constante para el botón de agregar un registro
    const buttonElement = document.getElementById('btnadd');
    const buttonEdit=document.getElementById('btnedit');
    //Constante para el modal
    const modalElement = document.getElementById('staticModal');
    //Constante para el botón de cerrar en el modal
    const closeButton = document.getElementById('closeModal');
    //Constante para el titulo del modal
    const modalText = document.getElementById('modalText');
    //Constante para el boton de actualizar dentro del modal
    const modalBtnUpdate = document.getElementById('btnModalUpdate');
    //Constante para el boton de agregar dentro del modal
    const modalBtnAdd = document.getElementById('btnModalAdd');
    const updateState = ref(false);

    /*Constante para manejar el comportamiento del modal, el 'static' se usa para que el modal no se cierre 
    aunque se de click fuera de el y el backdropClasses se usa para cambiar el fondo al abrir el modal*/
    const modalOptions = {
        backdrop: 'static',
        backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
    };

    //Se evalua si existe un modal y en caso de que si se ejecuta todo lo relacionado a su funcionamiento
    if (modalElement) {
        //Se crea el objeto del modal con el id de la etiqueta del modal + las opciones de modalOptions
        const modal = new Modal(modalElement, modalOptions);

        /*Se le añade un evento click al botón de agregar registro para abrir el modal, a su vez cambia el titulo
        del modal y oculta el boton de actualizar que se encuentra dentro del modal*/
        buttonElement.addEventListener('click', function () {
            accionForm('crear');
            modalBtnAdd.classList.remove('hidden');
            modalText.textContent = "Registrar";
            modalBtnUpdate.classList.add('hidden');
            modal.show();
        });
        //Se le añade un evento click al botón de cerrar que se encuentra en el modal, esto para poder cerrar el modal después de abrirlo
        closeButton.addEventListener('click', function () {
            modal.hide();
            //limpiarForm();
        });
    }
});
const data = ref(null);
const usuario = ref(useRoute().query.usuario || 1);
let dataUsuario;
await leerUsuarios();
async function leerUsuarios() {
    try {
        /*Se manda la petición axios para leer las paginas (no se manda la ruta completa por al configuración de axios -> Para mas información vean el axiosPlugin en la carpeta plugins),
        además usando el valor de la constante values se filtra la pagina de registros que axios va a traer*/
        const { data: res } = await axios.get(`/usuarios?page=${usuario.value}`);
        //Se asigna el valor de la respuesta de axios a la constante data
        data.value = res;
        dataUsuario=data.value.data;
    } catch (error) {
        console.log(error);
    }
}
//Se crea una variable reactiva para el buscador
const buscar = ref({
    buscador: "",
})

//Se ejecuta la funcion para llenar la tabla cuando se carga el DO

//Se crea una variable reactiva para manejar la información del modal
// const form = ref({
//     id_usuario: "",
//     nombre_usuario: "",
//     apellido_usuario: "",
//     usuario: "",
//     numero_documento_usuario: "",
//     tipo_documento: 0,
//     correo_usuario: "",
//     telefono_usuario: "",
//     idioma: "Español (ES)",
//     tema: "Claro",
//     visibilidad_usuario: false,
//     id_rol_usuario: 0,
// })

/*Función para leer la información de los registros de la página actual, se hace uso de axios para llamar la ruta junto con 
?page que se usa para ver la paginación de registros, y mediante el valor de la constante de "pagina" se manda a llamar los registros especificos*/
//Función para limpiar todos los campos del form

//codigo para llenar un select
// var roles = ref(null);
// async function llenarRolUsuario() {
//     const { data: res } = await axios.get('roles-select');
//     roles.value = res;
// }
// llenarRolUsuario();

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
//Variable para validar que acción se quiere hacer cuando se hace un submit al form
var formAccion = null;

//Función para evaluar que acción se va a hacer al hacer submit en el form
function accionForm(accion) {
    formAccion = accion;
}

//Función para crear/actualizar un registro cuando se ejecuta el submit del form
function submitForm() {
    if (formAccion == "crear") {
        crearUsuario();
    } else {
        actualizarUsuarios();
    }
}

async function actualizarUsuarios() {
    if (validarNombre() && form.tipo_documento != 0 && validarUsuario() && form.id_rol_usuario != 0 && validarApellido() && validarNumeroDocumento() && validarNumeroTelefono()) {
        try {
            //Se establece una variable de id con el valor que tiene guardado la variable form
            var id = form.value.id_usuario;
            console.log(id);
            //Se crea una constante para guardar el valor actual que tienen todos los campos del form
            const formData = {
                nombre_usuario: form.value.nombre_usuario,
                apellido_usuario: form.value.apellido_usuario,
                usuario: form.value.usuario,
                numero_documento_usuario: form.value.numero_documento_usuario,
                tipo_documento: form.value.tipo_documento,
                correo_usuario: form.value.correo_usuario,
                telefono_usuario: form.value.telefono_usuario,
                tema: form.value.tema,
                idioma: form.value.idioma,
                visibilidad_usuario: form.value.visibilidad_usuario,
                id_rol_usuario: form.value.id_rol_usuario,
            };

            //Se realiza la petición axios mandando la ruta y el formData
            await axios.put("/usuarios/" + id, formData);

            //Se cargan todas las páginas y se cierra el modal
            leerUsuarios();
            document.getElementById('closeModal').click();

            //Se lanza la alerta de éxito
            Toast.fire({
                icon: 'success',
                title: 'Usuario actualizado exitosamente'
            })

        } catch (error) {
            console.log(error);
        }
    }
}

//Función para cambiar la visibilidad de una página
async function borrarUsuario(id) {
    //Se lanza una alerta de confirmación
    Swal.fire({
        title: 'Confirmación',
        text: "¿Desea ocultar el registro?",
        icon: 'warning',
        reverseButtons: true,
        showCancelButton: true,
        confirmButtonColor: '#3F4280',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar'
        //Se evalua la respuesta de la alerta
    }).then(async (result) => {
        //Si el usuario selecciono "Confirmar"
        if (result.isConfirmed) {
            try {
                //Se realiza la petición axios
                await axios.delete('/usuarios/' + id);

                //Se cargan todas las páginas
                leerUsuarios();

                //Se lanza la alerta de éxito
                Toast.fire({
                    icon: 'success',
                    title: 'Usuario desactivado exitosamente'
                })
            } catch (error) {
                console.log(error);
            }
        }
    });
}
//Función para cambiar la visibilidad de una página
async function changeVisible(id) {
    //Se lanza una alerta de confirmación
    Swal.fire({
        title: 'Confirmación',
        text: "¿Desea hacer activar el usuario?",
        icon: 'warning',
        reverseButtons: true,
        showCancelButton: true,
        confirmButtonColor: '#3F4280',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar'
        //Se evalua la respuesta de la alerta
    }).then(async (result) => {
        //Si el usuario selecciono "Confirmar"
        if (result.isConfirmed) {
            try {
                //Se realiza la petición axios
                await axios.delete('/usuarios/' + id);

                //Se cargan todas las páginas
                leerUsuarios();

                //Se lanza la alerta de éxito
                Toast.fire({
                    icon: 'success',
                    title: 'Usuario recuperado exitosamente'
                })
            } catch (error) {
                console.log(error);
            }
        }
    });
}

//Función para buscar registros dependiendo del valor del buscador
async function buscarUsuarios() {
    try {
        //Se evalua que el buscador no este vacio
        if (buscar.value.buscador != "") {
            // Realiza la petición axios para llamar a la ruta de búsqueda
            const { data: res } = await axios.get(`/usuarios_search?page=${usuario.value}&buscador=${buscar.value.buscador}`);
            // Actualiza los datos en la constante data
            data.value = res;
            // Actualiza la URL con el parámetro de página
            useRouter().push({ query: { pagina: usuario.value } });
        } else {
            //Se regresa a la página 1 y se cargan todos los registros
            usuario.value = 1;
            leerUsuarios();
        }
    } catch (error) {
        //Se extrae el mensaje de error
        const mensajeError = error.response.data.message;
        //Se extrae el sqlstate (identificador de acciones SQL)
        const sqlState = validaciones.extraerSqlState(mensajeError);
        //Se llama la función de mensajeSqlState para mostrar un mensaje de error relacionado al sqlstate
        const res = validaciones.mensajeSqlState(sqlState);

        //Se muestra un sweetalert con el mensaje
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: res,
            confirmButtonColor: '#3F4280'
        });
    }
}

// Validaciones

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

function validarUsuario() {
    var res = validaciones.validarUsuario(form.value.usuario);
    return res;
}

function validarNumeroTelefono() {
    var res = validaciones.validarNumeroTelefono(form.value.telefono_usuario);
    return res;
}

</script>
<style scoped>
.content-buttons input {
    border: 3px solid #1b1c30;
}

.buttons button {
    border: 3px solid #1b1c30;
}

#btnadd {
    background-color: #1b1c30;
}
</style>
