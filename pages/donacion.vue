<template>
    <div class="principal mt-4">
        <MenuDonacionDashboard class="mr-8" />
        <div class="mdprincipal flex-col mt-8 px-8 overflow-hidden">
            <div class="h-16 w-full rounded-xl flex justify-between items-center content-buttons max-[450px]:flex-wrap">
                <div class="w-3/4 flex items-center h-full mt-4 max-[500px]:w-full">
                    <!-- Se enlaza el buscador con la variable reactiva y se le coloca el evento buscarSecciones en el keyup -->
                    <input type="text" class="rounded-lg relative w-2/4 h-12 outline-none max-[800px]:w-full min-w-[200px]"
                        placeholder="Buscar... (nombre donante/nombre proyecto)" v-model="buscar.buscador"
                        @keyup="buscarDonaciones()">
                    <div class="flex justify-end items-center">
                        <!-- Se le asigna la función para limpiar el buscador al botón -->
                        <button class="absolute mr-4" @click="limpiarBuscador()"><svg width="20px" height="20px"
                                stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                color="#000000">
                                <path d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
                                    stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <!-- Botones  -->
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
                    <button type="button" id="graficos_modal" class="bg-space w-12 h-10 flex items-center justify-center ml-4 rounded-lg mr-5">
                        <svg width="24px" height="24px" stroke-width="2" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg" color="#000000">
                            <path d="M20 20H4V4" stroke="#FFF" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                            <path d="M4 16.5L12 9l3 3 4.5-4.5" stroke="#FFF" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="line bg-slate-800 h-0.5 mt-4 w-full min-w-[200px]"></div>
            <div class="h-screen">
                <p class="font-extrabold text-slate-900 mt-8 ml-4 max-[425px]:mt-16">{{ donaciones.length }}<span
                        class="text-gray-500 font-normal ml-2">registros
                        encontrados!</span></p>
                <div class="tables overflow-y-scroll h-3/5 pr-4">
                    <TablesDonacion :dataDonacion="donaciones" />
                </div>
                <div class="flex justify-center mt-6">
                    <TailwindPagination
                        :item-classes="['text-gray-500', 'rounded-full', 'border-none', 'ml-1', 'hover:bg-gray-200']"
                        :active-classes="['text-white', 'rounded-full', 'bg-purpleLogin']" :limit="1" :keepLength="true"
                        :data="data" @pagination-change-page="pagina = $event" />
                </div>
            </div>
        </div>
    </div>
</template>
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

.modal {
    background: linear-gradient(180deg,
            rgba(63, 66, 128, 0.6241) 0%,
            rgba(49, 50, 71, 0.5609) 100%);
    background-color: #1e1e1e;
}

.modal-buttons button {
    background-color: #32345a;
}

.tables::-webkit-scrollbar {
    width: 7px;
}

.tables::-webkit-scrollbar-thumb {
    background: #32345A;
}
</style>
<script setup>
import { Modal } from 'flowbite'
//Importación de axios, se utiliza para hacer las peticiones al servidor -> Para mas información vean el axiosPlugin en la carpeta plugins
import axios from 'axios';
import { TailwindPagination } from 'laravel-vue-pagination';
import { onMounted, ref } from 'vue'
//Importación de sweetalert
import Swal from 'sweetalert2';
//Importación de archivo de validaciones
import validaciones from '../assets/validaciones.js';

definePageMeta({
    layout: "principal",
})

//Se usa el onMounted para añadir el max y min del input de fecha al crear el componente
onMounted(() => {
    function validarFechas() {
        var res = validaciones.validarFecha(0, 1, 0);
        document.getElementById('fecha_donacion').min = res.min;
        document.getElementById('fecha_donacion').max = res.max;
    }

    validarFechas();
    const modalElement = document.getElementById('graficsModal');
    const closeButton = document.getElementById('closeModalGrafics');
    const modalOptions = {
        backdrop: 'static',
        backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
    };
    const modal = new Modal(modalElement, modalOptions);
    document.getElementById('graficos_modal').addEventListener('click',()=>{
        modal.show();
    });
    closeButton.addEventListener('click',()=>{
        modal.hide();
    });
});

//Operaciones SCRUD

/*Se establece una variable reactiva llamada data, se inicia con un valor nulo y se usará 
para almacenar la información que traiga el axios*/
const data = ref(null);

//Se establece una variable reactiva para manejar la paginación de registros, se establece como 1 ya que es la pagina default
const pagina = ref(useRoute().query.donacion || 1);

/*Se crea una variable let (variable de bloque / su alcance se limita a un bloque cercano). Esta variable es reactiva
y se usa para llevar el control de la información que se muestra dependiendo de la pagina*/
let donaciones = computed(() => data.value.data);

/*Se crea un watch (detecta cada que "pagina" cambia) y ejecuta un select a los registros de esa página,
además muestra en la url la página actual*/
watch(pagina, async () => {
    //Se evalua si el buscador tiene algún valor para ver si se realiza el leer o el buscar
    if (buscar.value.buscador != "") {
        //Se ejecuta el buscar página si el buscador tiene un valor (el plugin reinicia el paginado a 1 así que no hay que cambiar el valor de la constante pagina)
        buscarDonaciones();
    } else {
        //Se ejecuta el leer páginas para cargar la tabla, usando la constante pagina también se busca la pagina especifica de registros
        leerDonaciones();
    }
    //Se cambia la url para agregar en que pagina se encuentra el usuario
    useRouter().push({ query: { pagina: pagina.value } })
})

/*Función para leer la información de los registros de la página actual, se hace uso de axios para llamar la ruta junto con 
?page que se usa para ver la paginación de registros, y mediante el valor de la constante de "pagina" se manda a llamar los registros especificos*/
async function leerDonaciones() {
    try {
        /*Se manda la petición axios para leer las paginas (no se manda la ruta completa por al configuración de axios -> Para mas información vean el axiosPlugin en la carpeta plugins),
        además usando el valor de la constante values se filtra la pagina de registros que axios va a traer*/
        const { data: res } = await axios.get(`/donaciones?page=${pagina.value}`);
        //Se asigna el valor de la respuesta de axios a la constante data
        data.value = res;
    } catch (error) {
        console.log(error);
    }
}

//Se ejecuta la funcion para llenar la tabla cuando se carga el DOM
await leerDonaciones();

//Se crea una variable reactiva para el buscador
const buscar = ref({
    buscador: "",
})

//Función para limpiar el buscador
function limpiarBuscador() {
    //Se coloca la constante pagina 1 para que salga la primera pagina de registros
    pagina.value = 1;
    //Se leen todos los donantes
    leerDonaciones();
    //Se coloca el valor del buscador a nulo
    buscar.value.buscador = "";
}

//Función para buscar registros dependiendo del valor del buscador
async function buscarDonaciones() {
    try {
        //Se evalua que el buscador no este vacio
        if (buscar.value.buscador != "") {
            // Realiza la petición axios para llamar a la ruta de búsqueda
            const { data: res } = await axios.get(`/donaciones_search?page=${pagina.value}&buscador=${buscar.value.buscador}`);
            // Actualiza los datos en la constante data
            data.value = res;
            // Actualiza la URL con el parámetro de página
            useRouter().push({ query: { pagina: pagina.value } });
        } else {
            //Se regresa a la página 1 y se cargan todos los registros
            pagina.value = 1;
            leerDonaciones();
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

//Se crea una variable reactiva para manejar la información del modal
const form = ref({
    id_donacion: "",
    cantidad_donada: "",
    fecha_donacion: "",
    mensaje_donacion: "",
    codigo_comprobante: "",
    visibilidad_donacion: false,
    id_proyecto_donacion: "",
    id_donante: ""
})

//Función para limpiar todos los campos del form
function limpiarForm() {
    //Se llama el valor de la variable form y se cambia cada uno de sus elementos a nulo
    form.value.id_donacion = "";
    form.value.cantidad_donada = "";
    form.value.fecha_donacion = "";
    form.value.mensaje_donacion = "";
    form.value.codigo_comprobante = "";
    form.value.visibilidad_donacion = false;
    form.value.id_proyecto_donacion = 0;
    form.value.id_donante = 0;
}

//Función para traer los datos de un registro en específico, estableciendo como parámetro el id del registro 
async function leerUnaDonacion(id) {
    try {
        //Se hace la petición axios y se evalua la respuesta
        await axios.get('/donaciones/' + id).then(res => {
            //Constante para el modal
            const modalElement = document.getElementById('staticModal');
            //Constante que contiene las caracteristicas del modal
            const modalOptions = {
                backdrop: 'static',
                backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
            };
            //Instanciamos el boton para cerrar el modal
            const closeButton = document.getElementById('closeModal');
            //Instanciamos el modal
            const modal = new Modal(modalElement, modalOptions);
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
                id_donacion: res.data.id_donacion,
                cantidad_donada: res.data.cantidad_donada,
                fecha_donacion: res.data.fecha_donacion,
                mensaje_donacion: res.data.mensaje_donacion,
                codigo_comprobante: res.data.codigo_comprobante,
                id_proyecto_donacion: res.data.id_proyecto_donacion,
                id_donante: res.data.id_donante,
                //Se convierte a true o false en caso de que devuelva 1 o 0, esto por que el input solo acepta true y false
                visibilidad_donacion: res.data.visibilidad_donacion ? true : false,
            }
        })
    } catch (error) {
        //Se extrae el mensaje de error
        const mensajeError = error.response.data.message;
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
    }
}

//Función para actualizar un registro
async function actualizarDonacion() {
    //Se usan las mismas validaciones que en el botón submit para no realizar la actualización si los selects no estan llenos
    if (form.value.id_donante != 0 && form.value.id_donacion != 0) {
        try {
            //Se establece una variable de id con el valor que tiene guardado la variable form
            var id = form.value.id_donacion;
            //Se crea una constante para guardar el valor actual que tienen todos los campos del form
            const formData = {
                cantidad_donada: form.value.cantidad_donada,
                fecha_donacion: form.value.fecha_donacion,
                mensaje_donacion: form.value.mensaje_donacion,
                codigo_comprobante: form.value.codigo_comprobante,
                id_proyecto_donacion: form.value.id_proyecto_donacion,
                id_donante: form.value.id_donante,
                visibilidad_donacion: form.value.visibilidad_donacion
            };

            //Se realiza la petición axios mandando la ruta y el formData
            await axios.put("/donaciones/" + id, formData);

            //Se cargan todas las donaciones y se cierra el modal
            leerDonaciones();
            document.getElementById('closeModal').click();

            //Se lanza la alerta de éxito
            Toast.fire({
                icon: 'success',
                title: 'Donación actualizada exitosamente'
            })

        } catch (error) {
            //Se extrae el mensaje de error
            const mensajeError = error.response.data.message;
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
        }
    }
}

//Función para cambiar la visibilidad de un registro para ocultarlo
async function borrarDonacion(id) {
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
                await axios.delete('/donaciones/' + id);

                //Se cargan todos los registros
                leerDonaciones();

                //Se lanza la alerta de éxito
                Toast.fire({
                    icon: 'success',
                    title: 'Donación ocultada exitosamente'
                })
            } catch (error) {
                //Se extrae el mensaje de error
                const mensajeError = error.response.data.message;
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
            }
        }
    });
}

//Función para cambiar la visibilidad de un registro para recuperarlo
async function recuperarDonacion(id) {
    //Se lanza una alerta de confirmación
    Swal.fire({
        title: 'Confirmación',
        text: "¿Desea recuperar el registro?",
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
                await axios.delete('/donaciones/' + id);

                //Se cargan todos los registros
                leerDonaciones();

                //Se lanza la alerta de éxito
                Toast.fire({
                    icon: 'success',
                    title: 'Donación recuperada exitosamente'
                })
            } catch (error) {
                //Se extrae el mensaje de error
                const mensajeError = error.response.data.message;
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
            }
        }
    });
}

//Validaciones

function convertirDecimales() {
    if (form.value.cantidad_donada != null) {
        var res = validaciones.convertirDecimales(form.value.cantidad_donada, 2);
        if (res != false) {
            form.value.cantidad_donada = res;
        }
    }
}
</script>