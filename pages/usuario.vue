<template>
    <div class="mr-4">
        <div class="principal mt-6">
            <!--Componente para cargar el menu superior del formulario-->
            <MenuUsuarioDashboard />
            <div class="mdprincipal flex-col mt-8 px-8 overflow-hidden">
                <div class="h-16 w-full rounded-xl flex justify-between items-center content-buttons max-[450px]:flex-wrap">
                    <form action="" class="w-3/4 flex items-center h-full mt-4 max-[500px]:w-full">
                        <input type="text"
                            class="rounded-lg relative w-2/4 h-12 outline-none max-[800px]:w-full min-w-[200px]"
                            placeholder="Buscar... (usuario/correo)" v-model="buscar.buscador" @keyup="buscarUsuarios()">
                        <div class="flex justify-end items-center">
                            <button class="absolute mr-4"><svg width="20px" height="20px" stroke-width="2"
                                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                                    <path
                                        d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
                                        stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
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
                                    stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
                <p class="text-black text-lg"></p>
                <div class="line bg-slate-800 h-0.5 mt-4 w-full min-w-[200px]"></div>
                <div>
                    <p class="font-extrabold text-slate-900 mt-8 ml-4 max-[425px]:mt-16">{{ usuarios.length }}<span
                            class="text-gray-500 font-normal ml-2">registro encontrado!</span></p>
                    <div class="contained-data flex-col" v-for="usuario in usuarios" :key="usuario.id_usuario">
                        <div
                            class="data-contained flex justify-between mt-4 rounded-xl p-4 max-[400px]:flex-wrap max-[400px]:w-full min-w-[200px]">
                            <div class="flex justify-start w-3/4 items-center max-[400px]:w-full">
                                <div
                                    class="datainfo flex-col ml-8 max-[400px]:p-0 max-[400px]:w-full max-[400px]:ml-0 max-[400px]:text-center">
                                    <p class="font-extrabold text-xl text-salte-900 max-[750px]:text-[18px]">{{
                                        usuario.nombre_usuario }}</p>
                                    <p class="font-normal text-sm mt-1 text-gray-500 max-[750px]:text-[12px]"> {{
                                        usuario.usuario }}
                                    </p>
                                    <p class="font-normal text-sm text-gray-500 max-[750px]:text-[12px]">{{
                                        usuario.correo_usuario }}
                                    </p>
                                </div>
                            </div>
                            <div
                                class="buttons-data flex justify-center items-center max-[750px]:flex-col max-[400px]:flex-row max-[400px]:m-auto max-[400px]:mt-2">
                                <button
                                    class="h-10 w-10 rounded-md flex items-center justify-center max-[400px]:mx-4 editbtn"
                                    id="btnedit" @click="cambiandoEstado(usuario.id_usuario)"
                                    v-if="usuario.visibilidad_usuario == 1">
                                    <svg width="26px" height="26px" stroke-width="2" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" color="#000000">
                                        <path
                                            d="M3 21h18M12.222 5.828L15.05 3 20 7.95l-2.828 2.828m-4.95-4.95l-5.607 5.607a1 1 0 00-.293.707v4.536h4.536a1 1 0 00.707-.293l5.607-5.607m-4.95-4.95l4.95 4.95"
                                            stroke="#C99856" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round">
                                        </path>
                                    </svg>
                                </button>
                                <button
                                    class="h-10 w-10 rounded-md flex items-center justify-center ml-4 deletebtn max-[750px]:ml-0 max-[750px]:mt-2 max-[400px]:mt-0 max-[400px]:mx-4"
                                    @click="borrarUsuario(usuario.id_usuario)" v-if="usuario.visibilidad_usuario == 1">
                                    <svg width="26px" height="26px" viewBox="0 0 24 24" stroke-width="2" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" color="#000000">
                                        <path
                                            d="M20 9l-1.995 11.346A2 2 0 0116.035 22h-8.07a2 2 0 01-1.97-1.654L4 9M21 6h-5.625M3 6h5.625m0 0V4a2 2 0 012-2h2.75a2 2 0 012 2v2m-6.75 0h6.75"
                                            stroke="#872727" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round">
                                        </path>
                                    </svg>
                                </button>
                                <button @click="recuperarUsuario(usuario.id_usuario, usuario.nombre_usuario+' '+usuario.apellido_usuario)"
                                    class="h-10 w-10 rounded-md flex items-center justify-center ml-4 changebtn max-[750px]:ml-0 max-[750px]:mt-2 max-[400px]:mt-0 max-[400px]:mx-4"
                                    v-else>
                                    <svg width="24px" height="24px" stroke-width="3" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" color="#000000">
                                        <path d="M21.168 8A10.003 10.003 0 0012 2C6.815 2 2.55 5.947 2.05 11"
                                            stroke="#3F4280" stroke-width="3" stroke-linecap="round"
                                            stroke-linejoin="round"></path>
                                        <path
                                            d="M17 8h4.4a.6.6 0 00.6-.6V3M2.881 16c1.544 3.532 5.068 6 9.168 6 5.186 0 9.45-3.947 9.951-9"
                                            stroke="#3F4280" stroke-width="3" stroke-linecap="round"
                                            stroke-linejoin="round">
                                        </path>
                                        <path d="M7.05 16h-4.4a.6.6 0 00-.6.6V21" stroke="#3F4280" stroke-width="3"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
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
    <ModalUsuarios :estado_modal="estado_modal" :id_usuario="id"/>
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
})
//Seccion para cargar o modificar el DOM despues de haber cargado todo el template
onMounted(() => {
    const buttonElement = document.getElementById('btnadd');
    const modalElement = document.getElementById('staticModal');
    const closeButton = document.getElementById('closeModal');
    const modalText = document.getElementById('modalText');
    const modalBtnUpdate = document.getElementById('btnModalUpdate');
    const modalBtnAdd = document.getElementById('btnModalAdd');
    const modalOptions = {
        backdrop: 'static',
        backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
    };

    if (modalElement) {
        const modal = new Modal(modalElement, modalOptions);
        buttonElement.addEventListener('click', function () {
            modalText.textContent = "Registrar";
            modal.show();
        });
        closeButton.addEventListener('click', function () {
            modal.hide();
        });
    }
});
//Seccion para establecer variables
const data = ref(null);
const pagina = ref(useRoute().query.pagina || 1);
let usuarios = computed(() => data.value.data);
const estado_modal = ref(false);
const id=ref(null);
const buscar = ref({
    buscador: "",
})
//Seccion para establecer funciones y utilizar las constantes
async function leerUsuarios() {
    try {
        const { data: res } = await axios.get(`/usuarios?page=${pagina.value}`);
        data.value = res;
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}
await leerUsuarios();
watch(pagina, async () => {
    //Se evalua si el buscador tiene algún valor para ver si se realiza el leer o el buscar
    if (buscar.value.buscador != "") {
        //Se ejecuta el buscar página si el buscador tiene un valor (el plugin reinicia el paginado a 1 así que no hay que cambiar el valor de la constante pagina)
        //buscarEnlaces();
    } else {
        //Se ejecuta el leer páginas para cargar la tabla, usando la constante pagina también se busca la pagina especifica de registros
        leerUsuarios();
    }
    //Se cambia la url para agregar en que pagina se encuentra el usuario
    useRouter().push({ query: { pagina: pagina.value } })
})

function cambiandoEstado(id_usuario) {
    estado_modal.value = true;
    id.value = id_usuario;
    const modalElement = document.getElementById('staticModal');
    const closeButton = document.getElementById('closeModal');
    const modalText = document.getElementById('modalText');
    const modalOptions = {
        backdrop: 'static',
        backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
    };
    const modal = new Modal(modalElement, modalOptions);
    modalText.textContent = 'Editar';
    modal.show();
    closeButton.addEventListener('click', function () {
        estado_modal.value=false;
        modal.hide();
    });
}
//Codigo para cambiar el estado del usuarios a inactivo
async function borrarUsuario(id) {
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
    }).then(async (result) => {
        if (result.isConfirmed) {
            try {
                await axios.delete('/usuarios/' + id);
                leerUsuarios();
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
//Función para cambiar un usuario a activo
async function recuperarUsuario(id, nombre_completo) {

    Swal.fire({
        title: 'Confirmación',
        text: "¿Desea hacer activar a "+nombre_completo+"?",
        icon: 'warning',
        reverseButtons: true,
        showCancelButton: true,
        confirmButtonColor: '#3F4280',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar'
    }).then(async (result) => {
        if (result.isConfirmed) {
            try {
                await axios.delete('/usuarios/' + id);
                leerUsuarios();
                Toast.fire({
                    icon: 'success',
                    title: 'Usuario activo'
                })
            } catch (error) {
                console.log(error);
            }
        }
    });
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
    border: 3px solid #3F4280;
}
</style>
