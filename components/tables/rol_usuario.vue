<template>
    <div class="contained-data flex-col" v-for="rolusuario in datos_rol_usuario[paginacion - 1]" :key="rolusuario.id">
        <div
            class="data-contained flex justify-between mt-4 rounded-xl p-4 max-[400px]:flex-wrap max-[400px]:w-full min-w-[200px]">
            <div class="flex justify-start w-3/4 items-center max-[400px]:w-full">
                <div
                    class="datainfo flex-col ml-8 max-[400px]:p-0 max-[400px]:w-full max-[400px]:ml-0 max-[400px]:text-center">
                    <!--Con la implementación de una variable que permite visualizar la información contenida en cada uno-->
                    <p class="font-extrabold text-xl text-salte-900 max-[750px]:text-[18px]"> {{
                        rolusuario.campos.rol_usuario }} </p>

                </div>
            </div>
            <div
                class="buttons-data flex justify-center items-center max-[750px]:flex-col max-[400px]:flex-row max-[400px]:m-auto max-[400px]:mt-2">
                <button class="h-10 w-10 rounded-md flex items-center justify-center reportbtn"
                    @click="generarReporteRol(rolusuario.id_rol_usuario)"
                    v-if="rolusuario.campos.visibilidad_rol_usuario == 1">
                    <svg width="26px" height="26px" viewBox="0 0 24 24" stroke-width="2" fill="none"
                        xmlns="http://www.w3.org/2000/svg" color="#000000">
                        <path
                            d="M4 21.4V2.6a.6.6 0 01.6-.6h11.652a.6.6 0 01.424.176l3.148 3.148A.6.6 0 0120 5.75V21.4a.6.6 0 01-.6.6H4.6a.6.6 0 01-.6-.6zM8 10h8M8 18h8M8 14h4"
                            stroke="#7AAB97" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M16 2v3.4a.6.6 0 00.6.6H20" stroke="#7AAB97" stroke-width="2.5" stroke-linecap="round"
                            stroke-linejoin="round"></path>
                    </svg>
                </button>
                <button v-if="rolusuario.campos.visibilidad_rol_usuario == 1" @click.prevent="estadoActualizar(contacto.id)"
                    class="h-10 w-10 rounded-md flex items-center ml-4 justify-center editbtn max-[400px]:mx-4">
                    <svg width="26px" height="26px" stroke-width="2" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg" color="#000000">
                        <path
                            d="M3 21h18M12.222 5.828L15.05 3 20 7.95l-2.828 2.828m-4.95-4.95l-5.607 5.607a1 1 0 00-.293.707v4.536h4.536a1 1 0 00.707-.293l5.607-5.607m-4.95-4.95l4.95 4.95"
                            stroke="#C99856" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                    </svg>
                </button>
                <button
                    class="h-10 w-10 rounded-md flex items-center justify-center ml-4 deletebtn max-[750px]:ml-0 max-[750px]:mt-2 max-[400px]:mt-0 max-[400px]:mx-4"
                    @click="borrarContacto(contacto.id)" v-if="rolusuario.campos.visibilidad_rol_usuario == 1">
                    <svg width="26px" height="26px" viewBox="0 0 24 24" stroke-width="2" fill="none"
                        xmlns="http://www.w3.org/2000/svg" color="#000000">
                        <path
                            d="M20 9l-1.995 11.346A2 2 0 0116.035 22h-8.07a2 2 0 01-1.97-1.654L4 9M21 6h-5.625M3 6h5.625m0 0V4a2 2 0 012-2h2.75a2 2 0 012 2v2m-6.75 0h6.75"
                            stroke="#872727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                    </svg>
                </button>
                <button @click="recuperarUnContacto(contacto.id)"
                    class="h-10 w-10 rounded-md flex items-center justify-center ml-4 changebtn max-[750px]:ml-0 max-[750px]:mt-2 max-[400px]:mt-0 max-[400px]:mx-4"
                    v-else>
                    <svg width="24px" height="24px" stroke-width="3" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg" color="#000000">
                        <path d="M21.168 8A10.003 10.003 0 0012 2C6.815 2 2.55 5.947 2.05 11" stroke="#3F4280"
                            stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M17 8h4.4a.6.6 0 00.6-.6V3M2.881 16c1.544 3.532 5.068 6 9.168 6 5.186 0 9.45-3.947 9.951-9"
                            stroke="#3F4280" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                        <path d="M7.05 16h-4.4a.6.6 0 00-.6.6V21" stroke="#3F4280" stroke-width="3" stroke-linecap="round"
                            stroke-linejoin="round"></path>
                    </svg>
                </button>
            </div>
        </div>
    </div>

    <!-- Main modal -->
    <div id="staticModal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-lg max-h-full">
            <!-- Modal content -->
            <div class="relative rounded-lg shadow modal">
                <!-- Modal header -->
                <div class="flex items-start justify-between p-4 rounded-t">
                    <div class="flex-col ml-4 pt-4">
                        <p class="text-3xl font-bold text-gray-100" id="modalText">Rol - Usuario</p>
                    </div>
                    <button type="button" id="closeModal"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="staticModal">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="p-6 space-y-4 pb-10">
                    <div class="flex justify-center w-full">
                        <div class="relative z-0 mt-6 w-64">
                            <input type="text" id="telefono_usuario" name="telefono_usuario" required maxlength="9"
                                class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                placeholder=" " autocomplete="off" />
                            <label for="telefono_usuario"
                                class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre
                                - Rol<span class="text-sm ml-1"> * </span></label>
                        </div>
                    </div>
                    <div class="flex m-10 justify-evenly">
                        <div class="flex-col mt-6">
                            <div class="flex text-white">
                                <input id="acceso_parroquia" type="checkbox" value=""
                                    class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="acceso_parroquia" class="ml-2 text-sm font-medium text-white">Parroquia</label>
                            </div>
                            <div class="flex text-white mt-4">
                                <input id="acceso_usuarios" type="checkbox" value=""
                                    class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="acceso_usuarios" class="ml-2 text-sm font-medium text-white">Usuarios</label>
                            </div>
                            <div class="flex text-white mt-4">
                                <input id="acceso_navegabilidad" type="checkbox" value=""
                                    class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="acceso_navegabiildad"
                                    class="ml-2 text-sm font-medium text-white">Navegabilidad</label>
                            </div>
                            <div class="flex text-white mt-4">
                                <input id="acceso_anuncios" type="checkbox" value=""
                                    class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="acceso_anuncios" class="ml-2 text-sm font-medium text-white">Anunios</label>
                            </div>
                            <div class="flex text-white mt-4">
                                <input id="acceso_mensajes" type="checkbox" value=""
                                    class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="acceso_mensajes" class="ml-2 text-sm font-medium text-white">Mensajes</label>
                            </div>
                        </div>
                        <div class="flex-col mt-6">
                            <div class="flex text-white">
                                <input id="acceso_donaciones" type="checkbox" value=""
                                    class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="acceso_donaciones"
                                    class="ml-2 text-sm font-medium text-white">Donacionees</label>
                            </div>
                            <div class="flex text-white mt-4">
                                <input id="acceso_donantes" type="checkbox" value=""
                                    class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="acceso_donantes" class="ml-2 text-sm font-medium text-white">Donantes</label>
                            </div>
                            <div class="flex text-white mt-4">
                                <input id="acceso_calendario" type="checkbox" value=""
                                    class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="acceso_calendario"
                                    class="ml-2 text-sm font-medium text-white">Calendario</label>
                            </div>
                            <div class="flex text-white mt-4">
                                <input id="acceso_personal" type="checkbox" value=""
                                    class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="acceso_personal" class="ml-2 text-sm font-medium text-white">Personal</label>
                            </div>
                            <div class="flex-col mt-4">
                                <label for="" class="text-sm text-gray-200">Visibilidad - rol</label>
                                <div class="flex justify-start mt-2">
                                    <label class="relative inline-flex items-center mb-5 cursor-pointer">
                                        <input type="checkbox" value="" class="sr-only peer">
                                        <div
                                            class="w-11 h-6 bg-gray-500 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600">
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex w-full">
                        <div class="flex justify-start w-3/4">
                            <div class="flex-col text-gray-400 font-normal text-sm">
                                <p>Define el rol que deseas, y los </p>
                                <p>accesos que tendra disponibles </p>
                                <p>dicho rol.</p>
                            </div>
                        </div>
                        <div class="flex w-1/4 justify-end items-end">
                            <button class="h-10 w-10 rounded-lg flex justify-center items-center bg-space" id="btnModalAdd"
                                type="submit">
                                <svg width="22px" height="22px" stroke-width="2" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" color="#000000">
                                    <path
                                        d="M3 19V5a2 2 0 012-2h11.172a2 2 0 011.414.586l2.828 2.828A2 2 0 0121 7.828V19a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                                        stroke="#23B7A0" stroke-width="2"></path>
                                    <path
                                        d="M8.6 9h6.8a.6.6 0 00.6-.6V3.6a.6.6 0 00-.6-.6H8.6a.6.6 0 00-.6.6v4.8a.6.6 0 00.6.6zM6 13.6V21h12v-7.4a.6.6 0 00-.6-.6H6.6a.6.6 0 00-.6.6z"
                                        stroke="#23B7A0" stroke-width="2"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.reportbtn {
    border: 3px solid #7AAB97;
}
</style>

<script setup>
import { Modal } from 'flowbite'
//Importación de axios, se utiliza para hacer las peticiones al servidor -> Para mas información vean el axiosPlugin en la carpeta plugins
import axios from 'axios';
import { onMounted } from 'vue'
//Importación de sweetalert
import Swal from 'sweetalert2';
//Importación de archivo de validaciones
import validaciones from '../../assets/validaciones.js';

const props = defineProps({
    //Prop que se utiliza para cargar los datos de la tabla
    datos_rol_usuario: Array,
    //Prop que recibe la funcion de leerUsuarios, para recargar la tabla, cada vez de finalizar alguna acción
    actualizar_datos: Function,
    paginacion: Number,
});
console.log(props.datos_rol_usuario);
onMounted(() => {
    token.value = localStorage.getItem('token');
    id.value = localStorage.getItem('usuario');

    //Capturando datos para abrir el modal, con el boton de crear
    const AGREGAR_BOTON = document.getElementById('btnadd');
    const MODAL_ID = document.getElementById('staticModal');
    const CERRAR_BOTON = document.getElementById('closeModal');
    const OPCIONES_MODAL = {
        backdrop: 'static',
        backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
    };

    if (MODAL_ID) {
        const MODAL = new Modal(MODAL_ID, OPCIONES_MODAL);
        //programando el evento click del boton para abrir el modal
        AGREGAR_BOTON.addEventListener('click', function () {
            // document.getElementById('btnModalAdd').classList.remove('hidden');
            // document.getElementById('btnModalUpdate').classList.add('hidden');
            //Codigo para espeficiar que al darle click con este boton, se ejecute la funcion de crear
            // accionForm('crear');
            MODAL.show();
        });
        //Programando evento click del boton de cerrar modal
        CERRAR_BOTON.addEventListener('click', function () {
            MODAL.hide();
        });
    }
});
const token = ref(null);
const id = ref(null);
//Funcion para generar un reporte
async function generarReporteRol(id_rol) {
    //Constante donde se almacena la respuesta que retorna de la api
    const ruta = new URL(`http://127.0.0.1:8000/api/rol_reporte/` + id_rol);
    //Le añadimos el token en la ruta del reporte
    ruta.searchParams.append('token', token.value);
    //Le añadimos el id del usuario que ha iniciado sesion, se captura mediante el token
    ruta.searchParams.append('id', id.value);
    // Se abre el reporte en una nueva pestaña del navegador web.
    window.open(ruta.href);




    //Se crea una variable reactiva para manejar la información del modal
    const form = ref({
        id_rol_usuario: "",
        rol_usuario: "",
        visibilidad_rol_usuario: false
    })
    //Función para limpiar todos los campos del form
    function limpiarForm() {
        //Se llama el valor de la variable form y se cambia cada uno de sus elementos a nulo
        form.value.id_rol_usuario = "";
        form.value.rol_usuario = "";
        form.value.visibilidad_rol_usuario = false;
    }

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
            crearRolUsuario();
        } else {
            actualizarRolUsuario();
        }
    }

    //Función para crear una página
    async function crearRolUsuario() {
        try {
            //Se crea una constante para guardar el valor actual que tienen todos los campos del form
            const formData = {
                rol_usuario: form.value.rol_usuario,
                visibilidad_rol_usuario: form.value.visibilidad_rol_usuario,
            };
            //Se realiza la petición axios mandando la ruta y el formData
            await axios.post("/roles_usuarios/", formData);

            //Se lanza la alerta con el mensaje de éxito
            Toast.fire({
                icon: 'success',
                title: 'Rol de usuario creado exitosamente'
            })
            //Se cargan todas las páginas y se cierra el modal
            leerRolesUsuarios();
            document.getElementById('closeModal').click();

        } catch (error) {
            console.log(error);
        }
    }

    //Función para traer los datos de un registro en específico, estableciendo como parámetro el id del registro 
    async function leerUnRol(id) {
        if (validarRolUsuario()) {
            try {
                accionForm('actualizar');
                //Se hace la petición axios y se evalua la respuesta
                await axios.get('/roles_usuarios/' + id).then(res => {
                    //Constante para el modal
                    const modalElement = document.getElementById('staticModal');
                    //Constante que contiene las caracteristicas del modal
                    const modalOptions = {
                        backdrop: 'static',
                        backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
                    };
                    //Instanciamos el boton para cerrar el modal
                    const closeButton = document.getElementById('closeModal');
                    //Constante para el titulo del modal
                    const modalText = document.getElementById('modalText');
                    //Constante para el boton de agregar dentro del modal
                    const modalBtnAdd = document.getElementById('btnModalAdd');
                    //Constante para el boton de actualizar dentro del modal
                    const modalBtnUpdate = document.getElementById('btnModalUpdate');
                    //Instanciamos el modal
                    const modal = new Modal(modalElement, modalOptions);
                    //Le modificamos el texto del header al modal
                    modalText.textContent = 'Editar';
                    //Colocamos visibilidad al botón de actualizar en el modal
                    modalBtnUpdate.classList.remove('hidden');
                    //Ocultamos el botón de agregar en el modal
                    modalBtnAdd.classList.add('hidden');
                    //Abrimos el modal
                    modal.show();
                    //Creamos el evento click para cuando se cierre el modal y te cierre la instancia antes creada
                    closeButton.addEventListener('click', function () {
                        //Ocultamos el modal
                        modal.hide();
                        //Limpiamos el modal
                        limpiarForm();
                    })
                    //Llenamos los inputs del modal con su respectiva informacion
                    form.value = {
                        id_rol_usuario: res.data.id_rol_usuario,
                        rol_usuario: res.data.rol_usuario,
                        //Se convierte a true o false en caso de que devuelva 1 o 0, esto por que el input solo acepta true y false
                        visibilidad_rol_usuario: res.data.visibilidad_rol_usuario ? true : false
                    }
                    console.log(form.value);
                })
            } catch (error) {
                console.log(error);
            }
        }
    }

    async function actualizarRolUsuario() {
        if (validarRolUsuario()) {
            try {
                //Se establece una variable de id con el valor que tiene guardado la variable form
                var id = form.value.id_rol_usuario;
                //Se crea una constante para guardar el valor actual que tienen todos los campos del form
                const formData = {
                    rol_usuario: form.value.rol_usuario,
                    visibilidad_rol_usuario: form.value.visibilidad_rol_usuario
                };

                //Se realiza la petición axios mandando la ruta y el formData
                await axios.put("/roles_usuarios/" + id, formData);

                //Se cargan todas las páginas y se cierra el modal
                leerRolesUsuarios();
                document.getElementById('closeModal').click();

                //Se lanza la alerta de éxito
                Toast.fire({
                    icon: 'success',
                    title: 'Rol de usuario actualizado exitosamente'
                })

            } catch (error) {
                console.log(error);
            }
        }
    }
    //Función para cambiar la visibilidad de una página
    async function borrarRol(id) {
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
                    await axios.delete('/roles_usuarios/' + id);

                    //Se cargan todas las páginas
                    leerRolesUsuarios();

                    //Se lanza la alerta de éxito
                    Toast.fire({
                        icon: 'success',
                        title: 'Rol de usuario ocultado exitosamente'
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
            text: "¿Desea hacer visible el rol?",
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
                    await axios.delete('/roles_usuarios/' + id);

                    //Se cargan todas las páginas
                    leerRolesUsuarios();

                    //Se lanza la alerta de éxito
                    Toast.fire({
                        icon: 'success',
                        title: 'Rol de usuario recuperado exitosamente'
                    })
                } catch (error) {
                    console.log(error);
                }
            }
        });
    }



    //Validaciones

    function validarRolUsuario() {
        var res = validaciones.validarSoloLetrasYNumeros(form.value.rol_usuario);
        return res;
    }
}
</script>
