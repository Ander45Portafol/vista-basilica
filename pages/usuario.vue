<template>
    <div class="principal mt-6">
        <!--Componente para cargar el menu superior del formulario-->
        <MenuUsuarioDashboard class="mr-8" />
        <div class="mdprincipal flex-col mt-8 px-8 overflow-hidden">
            <div class="h-16 w-full rounded-xl flex justify-between items-center content-buttons max-[450px]:flex-wrap">
                <form action="" class="w-3/4 flex items-center h-full mt-4 max-[500px]:w-full">
                    <input type="text" class="rounded-lg relative w-2/4 h-12 outline-none max-[800px]:w-full min-w-[200px]"
                        placeholder="Buscar... (usuario/correo)" v-model="buscar.buscador" @keyup="buscarUsuarios()">
                    <div class="flex justify-end items-center">
                        <button class="absolute mr-4"><svg width="20px" height="20px" stroke-width="2" viewBox="0 0 24 24"
                                fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                                <path d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
                                    stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                            </svg>
                        </button>
                    </div>
                </form>
                <div
                    class="buttons flex mt-4 mr-[-15px] max-[800px]:mt-4 min-w-[100px] max-[450px]:m-auto max-[450px]:mt-3">
                    <button @click="generarReporte"
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
                    <button @click="visibilidadRegistros" type="button"
                        class="w-12 h-10 flex items-center justify-center ml-4 rounded-lg max-[800px]:w-8 max-[800px]:h-8 max-[800px]:ml-2 max-[450px]:mx-8">
                        <!-- Cambia el icono del botón según los registros que se quieren mostrar -->
                        <svg v-if="registros_visibles" width="28px" height="28px" stroke-width="2.5" viewBox="0 0 24 24"
                            fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                            <path d="M12 14a2 2 0 100-4 2 2 0 000 4z" stroke="#000000" stroke-width="2.5"
                                stroke-linecap="round" stroke-linejoin="round"></path>
                            <path
                                d="M21 12c-1.889 2.991-5.282 6-9 6s-7.111-3.009-9-6c2.299-2.842 4.992-6 9-6s6.701 3.158 9 6z"
                                stroke="#000000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <svg v-else width="28px" height="28px" stroke-width="2.5" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg" color="#000000">
                            <path d="M3 3l18 18M10.5 10.677a2 2 0 002.823 2.823" stroke="#000000" stroke-width="2.5"
                                stroke-linecap="round" stroke-linejoin="round"></path>
                            <path
                                d="M7.362 7.561C5.68 8.74 4.279 10.42 3 12c1.889 2.991 5.282 6 9 6 1.55 0 3.043-.523 4.395-1.35M12 6c4.008 0 6.701 3.158 9 6a15.66 15.66 0 01-1.078 1.5"
                                stroke="#000000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </button>
                    <button id="btnadd" type="button"
                        class="w-20 h-10 flex items-center justify-center mx-4 font-bold rounded-lg max-[800px]:w-8 max-[800px]:h-8 max-[800px]:ml-2 max-[450px]:ml-0">
                        <svg width="24px" height="24px" stroke-width="2.5" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg" color="#FFFFFF">
                            <path
                                d="M8 12h4m4 0h-4m0 0V8m0 4v4M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                                stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
            <p class="text-black text-lg"></p>
            <div class="line bg-slate-800 h-0.5 mt-4 w-full min-w-[200px]"></div>
            <div class="h-screen">
                <p class="font-extrabold text-slate-900 mt-8 ml-4 max-[425px]:mt-16">{{ usuarios.length }}<span
                        class="text-gray-500 font-normal ml-2">registro encontrado!</span></p>
                <div class="tables overflow-y-scroll h-4/6 pr-4">
                    <TablesUsuarios :dataUsers="usuarios" />
                    <div class="flex justify-center mt-6">
                        <TailwindPagination
                            :item-classes="['text-gray-500', 'rounded-full', 'border-none', 'ml-1', 'hover:bg-gray-200']"
                            :active-classes="['text-white', 'rounded-full', 'bg-purpleLogin']" :limit="1" :keepLength="true"
                            :data="data" @pagination-change-page="pagina = $event" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
//Seccion para importar librerias o extensiones
import { Modal } from 'flowbite'
import { TailwindPagination } from 'laravel-vue-pagination';
import { onMounted } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';
definePageMeta({
    layout: "principal",
});
//Seccion para cargar o modificar el DOM despues de haber cargado todo el template
onMounted(() => {
    const buttonElement = document.getElementById('btnadd');
    const modalElement = document.getElementById('staticModal');
    const closeButton = document.getElementById('closeModal');
    const modalText = document.getElementById('modalText');
    const modalOptions = {
        backdrop: 'static',
        backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
    };

    if (modalElement) {
        const modal = new Modal(modalElement, modalOptions);
        buttonElement.addEventListener('click', function () {
            modalText.textContent = "Registrar";
            document.getElementById('btnModalAdd').classList.remove('hidden');
            document.getElementById('btnModalUpdate').classList.add('hidden');
            modal.show();
        });
        closeButton.addEventListener('click', function () {
            modal.hide();
        });
    }
});
async function generarReporte() {
    try {
        const response = await axios.get('/usuario_reporte', {
            responseType: 'arraybuffer', // Configurar el tipo de respuesta como arraybuffer
        });
        // Crear un Blob a partir del arraybuffer recibido
        const blob = new Blob([response.data], { type: 'application/pdf' });

        // Crear un enlace para mostrar el archivo PDF en el navegador
        const pdfUrl = URL.createObjectURL(blob);
        window.open(pdfUrl, '_blank');

        // Liberar el recurso URL
        URL.revokeObjectURL(pdfUrl);
    }
    catch (error) {
        console.log(error);
    }
}
const registros_visibles = ref(true);
//Función para evaluar registros según la visibilidad que quiera el usuario
function visibilidadRegistros() {
    //Se establece el valor de la variable registros_visibles a su opuesto
    registros_visibles.value = !registros_visibles.value;
    //Se evalua el buscador para realizar leerPaginas o buscarPaginas 
    if (buscar.value.buscador) {
        buscarUsuarios();
    } else {
        leerUsuarios();
    }
}
//Seccion para establecer variables
const data = ref(null);
const pagina = ref(useRoute().query.pagina || 1);
let usuarios = computed(() => data.value.data);
const buscar = ref({
    buscador: "",
})
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
//Seccion para establecer funciones y utilizar las constantes
async function leerUsuarios() {
    try {
        if (registros_visibles.value) {
            const { data: res } = await axios.get(`/usuarios?page=${pagina.value}`);
            return data.value = res;
        } else {
            const { data: res } = await axios.get(`/usuarios_ocultos?page=${pagina.value}`);
            return data.value = res;
        }
    } catch (error) {
        console.log(error);
    }
}
await leerUsuarios();
watch(pagina, async () => {
    //Se evalua si el buscador tiene algún valor para ver si se realiza el leer o el buscar
    if (buscar.value.buscador != "") {
        //Se ejecuta el buscar página si el buscador tiene un valor (el plugin reinicia el paginado a 1 así que no hay que cambiar el valor de la constante pagina)
        buscarUsuarios();
    } else {
        //Se ejecuta el leer páginas para cargar la tabla, usando la constante pagina también se busca la pagina especifica de registros
        leerUsuarios();
    }
    //Se cambia la url para agregar en que pagina se encuentra el usuario
    useRouter().push({ query: { pagina: pagina.value } })
})
async function buscarUsuarios() {
    try {
        //Se evalua que el buscador no este vacio
        if (buscar.value.buscador != "") {
            if (registros_visibles.value) {
                const { data: res } = await axios.get(`/usuarios_search?page=${pagina.value}`);
                return data.value = res;
            } else {
                const { data: res } = await axios.get(`/usuarios_search_ocultos?page=${pagina.value}`);
                return data.value = res;
            }
            // Actualiza la URL con el parámetro de página
            useRouter().push({ query: { pagina: pagina.value } });
        } else {
            //Se regresa a la página 1 y se cargan todos los registros
            pagina.value = 1;
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

.tables::-webkit-scrollbar {
    width: 7px;
}

.tables::-webkit-scrollbar-thumb {
    background: #32345A;
}
</style>
