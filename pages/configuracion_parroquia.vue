<template>
    <div class="principal mt-6">
        <div class="topprincipal flex justify-between font-semibold text-base ml-4">
            <div class="options">
                <NuxtLink to="/enlace_amigo" class="ml-4">Enlaces Amigos</NuxtLink>
                <NuxtLink to="/misa" class="ml-4">Misas Online</NuxtLink>
                <NuxtLink class="ml-4" to="/grupos_parroquiales">Grupos</NuxtLink>
                <NuxtLink to="/configuracion_parroquia" class="active ml-4">Configuracion</NuxtLink>
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
        <div class="">
            <!-- Formulario -->
            <form action=""
                class="flex pt-20 justify-evenly max-[700px]:flex-col max-[700px]:items-center max-[700px]:text-2xl">
                <div class="flex-col w-80">
                    <!-- Campo de entrada oculto -->
                    <input type="hidden" v-model="form.id_configuracion_parroquia">
                    <!-- Campo de entrada Nombre - Parroquia -->
                    <div class="relative z-0">
                        <input type="text" id="floating_standard"
                            class="block py-2.5 px-0 w-full text-sm text-slate-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                            placeholder=" " autocomplete="off" v-model="form.nombre_parroquia" />
                        <label for="floating_standard"
                            class="absolute text-base text-slate-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-900  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre
                            - Parroquia</label>
                    </div>
                    <!-- Campo de entrada  RUC - Parroquia -->
                    <div class="relative z-0 mt-12">
                        <input type="text" id="floating_standard"
                            class="block py-2.5 px-0 w-full text-sm text-slate-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                            placeholder=" " autocomplete="off" v-model="form.ruc_parroquia" />
                        <label for="floating_standard"
                            class="absolute text-base text-slate-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">RUC
                            - Parroquia</label>
                    </div>
                    <!-- Campo de texto Dirección - Parroquia -->
                    <div class="relative z-0 mt-12">
                        <textarea id="floating_standard"
                            class="block py-2.5 px-0 min-h-[3rem] h-[3rem] max-h-[12rem] w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                            placeholder=" " autocomplete="off" v-model=form.direccion_parroquia />
                        <label for="floating_standard"
                            class="absolute text-base text-slate-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Dirección
                            - Parroquia</label>
                    </div>
                    <!-- Campo de entrada  Nombre - Representante -->
                    <div class="relative z-0 mt-12">
                        <input type="text" id="floating_standard"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                            placeholder=" " autocomplete="off" v-model="form.nombre_representante" />
                        <label for="floating_standard"
                            class="absolute text-base text-slate-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre
                            - Representante</label>
                    </div>

                    <div class="pt-4 mt-2 flex-col">
                        <!-- Etiqueta: Tipo - Documento -->
                        <label for="" class="text-sm absolute text-slate-900">Tipo - Documento</label>
                        <!-- Selección desplegable -->
                        <select id="underline_select" v-model="form.tipo_documento_representante"
                            class="block mt-4 py-2.5 px-0 w-full text-sm text-slate-900 bg-transparent border-0 border-b-2 border-salte-900 appearance-none focus:outline-none focus:ring-0 focus:border-slate-900 peer">
                            <!-- Opción predeterminada -->
                            <option value="0" class="bg-white text-slate-900"> Seleccione una opción </option>
                            <option value="Cédula">Cédula</option>
                            <option value="Pasaporte">Pasaporte</option>
                            <option value="Otro">Otro...</option>
                        </select>
                    </div>
                </div>
                <!-- Campo de entrada  >Página web - Parroquia -->
                <div class="flex-col w-80 max-[700px]:mt-10">
                    <div class="relative z-0">
                        <input type="text" id="floating_standard"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                            placeholder=" " autocomplete="off" v-model="form.pagina_web" />
                        <label for="floating_standard"
                            class="absolute text-base text-slate-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Página
                            web - Parroquia</label>
                    </div>
                    <!-- Campo de entrada  >Idetificador - Parroquia -->
                    <div class="relative z-0 mt-12">
                        <input type="text" id="floating_standard"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                            placeholder=" " autocomplete="off" v-model="form.identificador_parroquia" />
                        <label for="floating_standard"
                            class="absolute text-base text-slate-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Identificador
                            - Parroquia</label>
                    </div>
                    <!-- Campo de entrada  >Apellido- Representante -->
                    <div class="relative z-0 mt-12">
                        <input type="text" id="floating_standard"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none  focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                            placeholder=" " autocomplete="off" v-model="form.apellido_representante" />
                        <label for="floating_standard"
                            class="absolute text-base text-slate-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellido
                            - Representante</label>
                    </div>
                    <!-- Campo de entrada  >Teléfono- Parroquia -->
                    <div class="relative z-0 mt-12">
                        <input type="text" id="floating_standard"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none  focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                            placeholder=" " autocomplete="off" v-model="form.telefono_parroquia" />
                        <label for="floating_standard"
                            class="absolute text-base text-slate-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Teléfono
                            - Parroquia</label>
                    </div>
                    <!-- Campo de entrada  >Documento- Representante -->
                    <div class="relative z-0 mt-10">
                        <input type="text" id="floating_standard"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                            placeholder=" " autocomplete="off" v-model="form.documento_representante" />
                        <label for="floating_standard"
                            class="absolute text-base text-slate-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">#
                            Documento
                            - Representante</label>
                    </div>
                </div>
                <div class="flex-col h-96 max-[700px]:mt-10">
                    <div class="h-1/2">
                        <p class="mb-4 text-center">Logo Parroquia</p>
                        <img class="h-44 w-40 border-2 border-slate-900 ml-2">
                    </div>
                    <div class="flex items-end justify-end h-full mt-[-60px] w-44 ">
                        <!-- Se le coloca la función para actualizar al botón -->
                        <button class="border-2 border-space w-10 h-10 flex justify-center items-center"
                            @click.prevent="actualizarParroquia()">
                            <svg width="24px" height="24px" stroke-width="2" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" color="#000000">
                                <path
                                    d="M3 21h18M12.222 5.828L15.05 3 20 7.95l-2.828 2.828m-4.95-4.95l-5.607 5.607a1 1 0 00-.293.707v4.536h4.536a1 1 0 00.707-.293l5.607-5.607m-4.95-4.95l4.95 4.95"
                                    stroke="#C99856" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                        <button class="border-2 ml-4 border-space w-10 h-10 flex justify-center items-center">
                            <svg width="24px" height="24px" viewBox="0 0 24 24" stroke-width="2" fill="none"
                                xmlns="http://www.w3.org/2000/svg" color="#000000">
                                <path d="M11 21H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v7" stroke="#45A0B4"
                                    stroke-width="2" stroke-linecap="round"></path>
                                <path
                                    d="M2 7h20M5 5.01l.01-.011M8 5.01l.01-.011M11 5.01l.01-.011M21.666 16.667C21.049 15.097 19.636 14 17.99 14c-1.758 0-3.252 1.255-3.793 3"
                                    stroke="#45A0B4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path
                                    d="M19.995 16.772H21.4a.6.6 0 00.6-.6V14.55M14.334 19.333C14.953 20.903 16.366 22 18.01 22c1.758 0 3.252-1.255 3.793-3"
                                    stroke="#45A0B4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M16.005 19.228H14.6a.6.6 0 00-.6.6v1.622" stroke="#45A0B4" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </form>
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
//Importación de axios, se utiliza para hacer las peticiones al servidor -> Para mas información vean el axiosPlugin en la carpeta plugins
import axios from 'axios';
import { ref } from 'vue'
//Importación de sweetalert
import Swal from 'sweetalert2';
definePageMeta({
    layout: "principal",
})

// const menuOptions = () => {
//     const options = document.getElementsByClassName('menu');
//     if (options.length >= 3) {
//         // Se imprime un logo de 3 barras, dependiendo de la resolucion y el numero de opciones del menu
//     }
// }
//Operaciones SCRUD

/*Se establece una variable reactiva llamada data, se inicia con un valor nulo y se usará 
para almacenar la información que traiga el axios*/
const data = ref(null);

//Se crea una variable reactiva para manejar la información del modal
const form = ref({
    id_configuracion_parroquia: "",
    nombre_parroquia: "",
    pagina_web: "",
    ruc_parroquia: "",
    direccion_parroquia: "",
    nombre_representante: "",
    apellido_representante: "",
    documento_representante: "",
    tipo_documento_representante: 0,
    telefono_parroquia: "",
    identificador_parroquia: "",
})
let parroquias = computed(() => data.value.data);

/*Función para leer la información de los registros de la página actual, se hace uso de axios para llamar la ruta junto con 
?page que se usa para ver la paginación de registros, y mediante el valor de la constante de "pagina" se manda a llamar los registros especificos*/
async function leerParroquia() {
    try {
        /*Se manda la petición axios para leer las paginas (no se manda la ruta completa por al configuración de axios -> Para mas información vean el axiosPlugin en la carpeta plugins),
        además usando el valor de la constante values se filtra la pagina de registros que axios va a traer*/
        const { data: res } = await axios.get(`/parroquia`);
        //Se asigna el valor de la respuesta de axios a la constante data
        data.value = res;
        //Se ejecuta la funcion 
        leerUnaParroquia();
    } catch (error) {
        console.log(error);
        const mensajeError = error.response.data.message;
        if (!error.response.data.errors) {
            //Se extrae el sqlstate (identificador de acciones SQL)
            const sqlState = validaciones.extraerSqlState(mensajeError);
            //Se llama la función de mensajeSqlState para mostrar un mensaje de error relacionado al sqlstate
            const res = validaciones.mensajeSqlState(sqlState);

            //Se cierra el modal
            document.getElementById('closeModal').click();

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
//Se ejecuta la funcion 
leerParroquia();

//Función para traer los datos de un registro en específico, estableciendo como parámetro el id del registro
async function leerUnaParroquia() {
    var id = 1;
    try {
        //Se hace la petición axios y se evalua la respuesta
        await axios.get('/parroquia/' + id).then(res => {
            console.log(res);
            //Llenamos los inputs del modal con su respectiva informacion
            form.value = {
                id_configuracion_parroquia: res.data.id_configuracion_parroquia,
                nombre_parroquia: res.data.nombre_parroquia,
                pagina_web: res.data.pagina_web,
                ruc_parroquia: res.data.ruc_parroquia,
                identificador_parroquia: res.data.identificador_parroquia,
                direccion_parroquia: res.data.direccion_parroquia,
                apellido_representante: res.data.apellido_representante,
                nombre_representante: res.data.nombre_representante,
                telefono_parroquia: res.data.telefono_parroquia,
                documento_representante: res.data.documento_representante,
                tipo_documento_representante: res.data.tipo_documento_representante
            }
        })
    } catch (error) {
        console.log(error);
        const mensajeError = error.response.data.message;
        if (!error.response.data.errors) {
            //Se extrae el sqlstate (identificador de acciones SQL)
            const sqlState = validaciones.extraerSqlState(mensajeError);
            //Se llama la función de mensajeSqlState para mostrar un mensaje de error relacionado al sqlstate
            const res = validaciones.mensajeSqlState(sqlState);

            //Se cierra el modal
            document.getElementById('closeModal').click();

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

//Función para traer los datos de un registro en específico, estableciendo como parámetro el id del registro
async function actualizarParroquia() {

    try {
        //Se establece una variable de id con el valor que tiene guardado la variable form
        var id = form.value.id_configuracion_parroquia;
        //Se crea una constante para guardar el valor actual que tienen todos los campos del form
        const formData = {
            nombre_parroquia: form.value.nombre_parroquia,
            pagina_web: form.value.pagina_web,
            ruc_parroquia: form.value.ruc_parroquia,
            identificador_parroquia: form.value.identificador_parroquia,
            direccion_parroquia: form.value.direccion_parroquia,
            apellido_representante: form.value.apellido_representante,
            nombre_representante: form.value.nombre_representante,
            documento_representante: form.value.documento_representante,
            tipo_documento_representante: form.value.tipo_documento_representante,
            telefono_parroquia: form.value.telefono_parroquia
        };
        //Se realiza la petición axios mandando la ruta y el formData
        await axios.put("/parroquia/" + id, formData);
        // //Se carga la parroquia y se cierra el modal
        leerParroquia();

        //Se lanza la alerta de éxito
        Toast.fire({
            icon: 'success',
            title: 'Configuracion de la parroquia actualizada exitosamente'
        })

    } catch (error) {
        console.log(error);
        const mensajeError = error.response.data.message;
        if (!error.response.data.errors) {
            //Se extrae el sqlstate (identificador de acciones SQL)
            const sqlState = validaciones.extraerSqlState(mensajeError);
            //Se llama la función de mensajeSqlState para mostrar un mensaje de error relacionado al sqlstate
            const res = validaciones.mensajeSqlState(sqlState);

            //Se cierra el modal
            document.getElementById('closeModal').click();

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
    };
}
</script>
