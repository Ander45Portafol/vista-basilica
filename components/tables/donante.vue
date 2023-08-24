<template>
    <div class="contained-data flex-col" v-for="donante in dataDonante" :key="donante.id">
        <div
            class="data-contained flex justify-between mt-4 rounded-xl p-4 max-[400px]:flex-wrap max-[400px]:w-full min-w-[200px]">
            <div class="flex justify-start w-3/4 items-center max-[400px]:w-full">
                <img src="" class="h-10 w-10 rounded-lg border-2 border-gray-800 max-[400px]:hidden" />
                <!--Con la implementación de una variable que permite visualizar la información contenida en cada uno-->
                <div
                    class="datainfo flex-col ml-8 max-[400px]:p-0 max-[400px]:w-full max-[400px]:ml-0 max-[400px]:text-center">
                    <p class="font-extrabold text-xl text-salte-900 max-[750px]:text-[18px]">
                        {{ donante.campos.nombre_donante }} {{ donante.campos.apellido_donante }}</p>
                    <p class="font-normal text-sm mt-1text-gray-500 max-[750px]:text-[12px]">
                        {{ donante.campos.correo_donante }}</p>
                    <p class="font-normal text-sm text-gray-500 max-[750px]:text-[12px]">{{
                        donante.campos.usuario_donante
                    }}
                    </p>
                </div>
            </div>
            <!-- Al darle clic al evento borrarDonante ejecuta la funcion -->
            <div class="buttons-data flex justify-center items-center max-[750px]:flex-col max-[400px]:flex-row max-[400px]:m-auto max-[400px]:mt-2"
                v-if="donante.campos.visibilidad_donante == 1">
                <button id="graphbtn" @click="abrirModalGrafica(donante.id)"
                    class="h-10 w-10 rounded-md flex items-center justify-center ml-4 graphbtn max-[750px]:ml-0 max-[750px]:mt-2 max-[400px]:mt-0 max-[400px]:mx-4">
                    <svg width="64px" height="64px" stroke-width="1.5" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg" color="#45a0b4">
                        <path d="M8 16V8M12 16v-5M16 16v-3" stroke="#45a0b4" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round"></path>
                    </svg>
                </button>
                <button
                    class="h-10 w-10 rounded-md flex items-center justify-center ml-4 deletebtn max-[750px]:ml-0 max-[750px]:mt-2 max-[400px]:mt-0 max-[400px]:mx-4"
                    @click="borrarDonante(donante.id)">
                    <svg width="26px" height="26px" viewBox="0 0 24 24" stroke-width="2" fill="none"
                        xmlns="http://www.w3.org/2000/svg" color="#000000">
                        <path
                            d="M20 9l-1.995 11.346A2 2 0 0116.035 22h-8.07a2 2 0 01-1.97-1.654L4 9M21 6h-5.625M3 6h5.625m0 0V4a2 2 0 012-2h2.75a2 2 0 012 2v2m-6.75 0h6.75"
                            stroke="#872727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
            </div>
            <!-- Al darle clic al evento recuperarDonante ejecuta la funcion -->
            <div class="buttons-data flex justify-center items-center max-[750px]:flex-col max-[400px]:flex-row max-[400px]:m-auto max-[400px]:mt-2"
                v-else>
                <button
                    class="h-10 w-10 rounded-md flex items-center justify-center ml-4 changebtn max-[750px]:ml-0 max-[750px]:mt-2 max-[400px]:mt-0 max-[400px]:mx-4"
                    @click="recuperarDonante(donante.id)">
                    <svg width="24px" height="24px" stroke-width="3" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg" color="#000000">
                        <path d="M21.168 8A10.003 10.003 0 0012 2C6.815 2 2.55 5.947 2.05 11" stroke="#3F4280"
                            stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M17 8h4.4a.6.6 0 00.6-.6V3M2.881 16c1.544 3.532 5.068 6 9.168 6 5.186 0 9.45-3.947 9.951-9"
                            stroke="#3F4280" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
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
        <div class="relative w-full max-w-5xl max-h-full">
            <!-- Modal content -->
            <div class="relative rounded-lg shadow modal">
                <!-- Modal header -->
                <div class="flex items-start justify-between p-4 rounded-t">
                    <div class="flex-col ml-4 pt-4">
                        <p class="text-3xl font-bold text-gray-100" id="modalText">Graficar</p>
                        <p class="text-lg font-medium text-gray-400">Donaciones según su donante (Últimas 6 donaciones realizadas)</p>
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
                <div class="p-8 space-y-6">
                    <div class="flex-col">
                        <div class="h-80 contenedor_graficas w-full flex items-center justify-center">
                            <Bar v-if="dataGrafica && dataGrafica.data.results.length > 0 && dataListaGrafica"
                                :data="chartDonante" :options="opcionesChart" />
                            <div id="info_nodatos" v-else-if="dataListaGrafica"
                                class="flex items-center p-4 mb-4 text-blue-800 border-t-4 border-blue-800 bg-blue-50 dark:text-blue-400 dark:bg-gray-800 dark:border-blue-800"
                                role="alert">
                                <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                </svg>
                                <div class="ml-3 text-sm font-medium">
                                    <p class="font-bold">Información: <span class="font-normal">No existen datos para
                                            mostrar.</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-between mt-6">
                            <div class="relative z-0 w-64" id="nombre_donante">
                                <input v-model="formGrafica.nombre_completo_donante" type="text" id="nombre_donante"
                                    name="nombre_donante" readonly maxlength="200"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" />
                                <label for="nombre_donante"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre
                                    Donante</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    dataDonante: Array,
});
import axios from 'axios';
import Swal from 'sweetalert2';
import { Modal } from 'flowbite';
import validaciones from "../../assets/validaciones.js";
import { Bar } from "vue-chartjs";

onMounted(() => {

    //Se le asigna un valor a la variable token para poder utilizar el middleware de laravel
    token.value = localStorage.getItem('token');

});

const token = ref(null);

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
//Función para cambiar la visibilidad de un donante
async function borrarDonante(id) {
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
                await axios.delete('/donantes/' + id, {
                    headers: {
                        Authorization: `Bearer ${token.value}`,
                    },
                });

                //Se lanza la alerta de éxito
                Toast.fire({
                    icon: 'success',
                    title: 'Donante ocultado exitosamente'
                })
            } catch (error) {
                console.log(error);
            }
        }
    });
}
//Función para cambiar la visibilidad de una página
async function recuperarDonante(id) {
    //Se lanza una alerta de confirmación
    Swal.fire({
        title: 'Confirmación',
        text: "¿Desea hacer visible el donante?",
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
                await axios.delete('/donantes/' + id, {
                    headers: {
                        Authorization: `Bearer ${token.value}`,
                    },
                });

                //Se lanza la alerta de éxito
                Toast.fire({
                    icon: 'success',
                    title: 'Proceso finalizado'
                })
            } catch (error) {
                console.log(error);
            }
        }
    });
}

const formGrafica = ref({
    nombre_completo_donante: "",
    suma_donaciones: "",
});

function limpiarGrafica() {
    formGrafica.value.nombre_completo_donante = "";
    formGrafica.value.suma_donaciones = "";
    dataListaGrafica.value = false;
    dataGrafica.value = null;
}

const dataGrafica = ref(null);

const dataListaGrafica = ref(false);

async function abrirModalGrafica(id) {
    try {
        //Se hace la petición axios y se evalua la respuesta
        await axios.get("/donantes-p-graf/" + id, {
            headers: {
                Authorization: `Bearer ${token.value}`,
            },
        }).then((res) => {
            const modalElement = document.getElementById('staticModal');
            const closeButton = document.getElementById('closeModal');
            const modalOptions = {
                backdrop: 'static',
                backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
            };
            const modal = new Modal(modalElement, modalOptions);
            modal.show();
            //Creamos el evento click para cuando se cierre el modal y te cierre la instancia antes creada
            closeButton.addEventListener("click", function () {
                //Ocultamos el modal
                modal.hide();
                limpiarGrafica();
            });
            dataGrafica.value = res;
            dataListaGrafica.value = true;
            formGrafica.value.nombre_completo_donante = dataGrafica.value.data.nombreDonante;
            formGrafica.value.suma_donaciones = dataGrafica.value.data.totalDonaciones;
            opcionesChart.plugins.title.text = 'Total donado a lo largo del tiempo: $' + formGrafica.value.suma_donaciones;
        });
    } catch (error) {
        console.log(error);
        //Se extrae el mensaje de error
        const mensajeError = error.response.data.message;
        //Se extrae el sqlstate (identificador de acciones SQL)
        const sqlState = validaciones.extraerSqlState(mensajeError);
        //Se llama la función de mensajeSqlState para mostrar un mensaje de error relacionado al sqlstate
        const res = validaciones.mensajeSqlState(sqlState);

        //Se cierra el modal
        document.getElementById("closeModal").click();

        //Se muestra un sweetalert con el mensaje
        Swal.fire({
            icon: "error",
            title: "Error",
            text: res,
            confirmButtonColor: "#3F4280",
        });
    }
}

const chartDonante = computed(() => {
    return {
        labels: dataGrafica.value.data.results.map(item => item.fecha_donacion),
        datasets: [
            {
                label: "Cantidad donada",
                data: dataGrafica.value.data.results.map(item => item.cantidad_donada),
                barPercentage: 0.5,
                backgroundColor: ["#FFCA51"],
            },
        ],
    };
});

const opcionesChart = {
    responsive: true,
    scales: {
        y: {
            grid: {
                color: 'white'
            },
            ticks: {
                color: 'white'
            }
        },
        x: {
            grid: {
                color: 'white'
            },
            ticks: {
                color: 'white'
            }
        }
    },
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: true,
            color: 'white',
            font: {
                family: 'Roboto',
                size: '16',
                weight: 'bold'
            }
        }
    }
}

</script>
<style scoped>
.data-contained {
    border: 3px solid #1b1c30;
}

.buttons-data .editbtn {
    border: 3px solid #c99856;
}

.buttons-data .deletebtn {
    border: 3px solid #872727;
}

.buttons-data .changebtn {
    border: 3px solid #3f4280;
}

.buttons-data .graphbtn {
    border: 3px solid #45A0B4;
}

.contenedor_graficas {
    border: 3px solid #FFF;
}
</style>