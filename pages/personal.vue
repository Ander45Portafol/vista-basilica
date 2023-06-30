<template>
    <div class="principal mt-6">
        <div class="topprincipal flex justify-between font-semibold text-base ml-4">
            <div class="options">
                <a href="" class="active ml-4">Personal</a>
                <a href="/tipo_personal" class="ml-4">Tipo - Personal</a>
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
        <div class="mdprincipal flex-col mt-8 px-8 overflow-hidden">
            <div class="h-16 w-full rounded-xl flex justify-between items-center content-buttons max-[450px]:flex-wrap">
                <form action="" class="w-3/4 flex items-center h-full mt-4 max-[500px]:w-full">
                    <input type="text" class="rounded-lg relative w-2/4 h-12 outline-none max-[800px]:w-full min-w-[200px]"
                        placeholder="Buscar ...">
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
            <div class="line bg-slate-800 h-0.5 mt-4 w-full min-w-[200px]"></div>
            <p class="font-extrabold text-slate-900 mt-8 ml-4 max-[425px]:mt-16">{{ personales.length }}<span
                    class="text-gray-500 font-normal ml-2">registro
                    encontrado!</span></p>
            <div class="contained-data flex-col" v-for="personal in personales" :key="personal.id_personal">
                <div
                    class="data-contained flex justify-between mt-4 rounded-xl p-4 max-[400px]:flex-wrap max-[400px]:w-full min-w-[200px]">
                    <div class="flex justify-start w-3/4 items-center max-[400px]:w-full">
                        <img src="" class="h-10 w-10 rounded-lg border-2 border-gray-800 max-[400px]:hidden" />
                        <div
                            class="datainfo flex-col ml-8 max-[400px]:p-0 max-[400px]:w-full max-[400px]:ml-0 max-[400px]:text-center">
                            <p class="font-extrabold text-xl text-salte-900 max-[750px]:text-[18px]">
                                {{ personal.nombre_personal }} {{ personal.apellido_personal }}</p>
                            <p class="font-normal text-sm mt-1text-gray-500 max-[750px]:text-[12px]">
                                {{ personal.correo_personal }}</p>
                            <p class="font-normal text-sm text-gray-500 max-[750px]:text-[12px]">
                                {{ personal.telefono_personal }}
                            </p>
                        </div>
                    </div>
                    <div
                        class="buttons-data flex justify-center items-center max-[750px]:flex-col max-[400px]:flex-row max-[400px]:m-auto max-[400px]:mt-2">
                        <button class="h-10 w-10 rounded-md flex items-center justify-center editbtn max-[400px]:mx-4">
                            <svg width="26px" height="26px" stroke-width="2" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" color="#000000">
                                <path
                                    d="M3 21h18M12.222 5.828L15.05 3 20 7.95l-2.828 2.828m-4.95-4.95l-5.607 5.607a1 1 0 00-.293.707v4.536h4.536a1 1 0 00.707-.293l5.607-5.607m-4.95-4.95l4.95 4.95"
                                    stroke="#C99856" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                        <button
                            class="h-10 w-10 rounded-md flex items-center justify-center ml-4 deletebtn max-[750px]:ml-0 max-[750px]:mt-2 max-[400px]:mt-0 max-[400px]:mx-4">
                            <svg width="26px" height="26px" viewBox="0 0 24 24" stroke-width="2" fill="none"
                                xmlns="http://www.w3.org/2000/svg" color="#000000">
                                <path
                                    d="M20 9l-1.995 11.346A2 2 0 0116.035 22h-8.07a2 2 0 01-1.97-1.654L4 9M21 6h-5.625M3 6h5.625m0 0V4a2 2 0 012-2h2.75a2 2 0 012 2v2m-6.75 0h6.75"
                                    stroke="#872727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <!-- Se crea el componente de tailwind pagination para manejar los registros, se le enlaza a la constante data. Además, se le crea el evento de pagination change page y
            este se enlaza a la variable pagina para evaluar a que página se esta moviendo el usuario -->
            <div class="flex justify-center mt-6">
                <TailwindPagination
                    :item-classes="['text-gray-500', 'rounded-full', 'border-none', 'ml-1', 'hover:bg-gray-200']"
                    :active-classes="['text-white', 'rounded-full', 'bg-purpleLogin']" :limit="1" :keepLength="true"
                    :data="data" @pagination-change-page="personal = $event" />
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div id="staticModal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-3xl max-h-full">
            <!-- Modal content -->
            <div class="relative rounded-lg shadow modal">
                <!-- Modal header -->
                <div class="flex items-start justify-between p-4 rounded-t">
                    <div class="flex-col ml-4 pt-4">
                        <p class="text-3xl font-bold text-gray-100" id="modalText"></p>
                        <p class="text-base font-medium text-gray-400">Personal</p>
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
                <!-- Cuerpo de  -->
                <div class="p-6 space-y-6 pb-10">
                    <form action="" id="formModal" @submit.prevent="submitForm()" class="flex justify-evenly">
                        <div class="flex-col w-64">
                            <input type="hidden" id="id_personal" v-model="form.id_personal">
                            <div class="relative z-0">
                                <input type="text" v-model="form.nombre_personal" id="nombre_personal"
                                    name="nombre_personal"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" />
                                <label for="nombre_personal"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre
                                    - Personal</label>
                            </div>
                            <div class="relative z-0 mt-6">
                                <input type="number" v-model="form.telefono_personal" id="telefono_personal"
                                    name="telefono_personal"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" />
                                <label for="telefono_personal"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Telefono
                                    - Personal</label>
                            </div>
                            <div class="relative z-0 mt-6">
                                <input type="text" v-model="form.correo_personal" id="correo_personal"
                                    name="correo_personal"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" />
                                <label for="correo_personal"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Correo
                                    - Personal</label>
                            </div>
                            <div class="pt-4 mt-2 flex-col">
                                <label for="" class="absolute text-gray-200">Tipo - Personal</label>
                                <select id="underline_select"
                                    class="block mt-4 py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                    <option value="">Seleccione una opcion</option>
                                    <option v-for="tipo in tipo_personal" :key="tipo.id_tipo_personal"
                                        :value="tipo.id_tipo_personal">{{ tipo.tipo_personal }}</option>
                                </select>
                            </div>
                        </div>
                        <div class="flex-col w-64">
                            <div class="relative z-0">
                                <input type="text" v-model="form.apellido_personal" id="apellido_personal"
                                    name="apellido_personal"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" />
                                <label for="apellido_personal"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellido
                                    - Personal</label>
                            </div>
                        </div>
                        <div class="pt-4 mt-2 flex-col">
                            <label for="" class="absolute text-gray-200">Tipo - Personal</label>
                            <select id="underline_select"
                                class="block mt-4 py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                <option value="">Seleccione una opcion</option>
                                <!-- Se usa v-for para manejar la variable tipo_personal y llenar el select -->
                                <option v-for="tipo_personal in tipos_personales" :key="tipo_personal.id_tipo_personal"
                                    :value="tipo_personal.id_tipo_personal" class="text-left bg-gray-700">
                                    {{ tipo_personal.tipo_personal }}
                                </option>
                            </select>
                        </div>
                        <div class="relative z-0 mt-6">
                            <input type="text" id="username" name="username"
                                class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                placeholder=" " autocomplete="off" />
                            <label for="username"
                                class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Correo
                                - Personal</label>
                        </div>
                        <div class="flex-col mt-8">
                            <label for="" class="text-gray-200">Visibilidad - Personal</label>
                            <div class="flex justify-start mt-2">
                                <label class="relative inline-flex items-center mb-5 cursor-pointer">
                                    <input type="checkbox" value="" class="sr-only peer"
                                        v-model="form.visibilidad_tipo_personal">
                                    <div
                                        class="w-9 h-5 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div class="flex-col mt-6">
                            <label for="" class="text-gray-200">Visibilidad - Personal</label>
                            <div class="flex justify-start mt-2">
                                <label class="relative inline-flex items-center mb-5 cursor-pointer">
                                    <input type="checkbox" value="false" v-model="form.visibilidad_personal"
                                        class="sr-only peer" />
                                    <div
                                        class="w-9 h-5 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div class="modal-buttons mt-24 flex justify-end items-end">
                            <button id="btnModalAdd" type="sumbit" value="crear" @click="accionForm('crear')"
                                class="h-10 w-10 rounded-lg flex justify-center items-center">
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
                            <button id="btnModalUpdate" type="submit" @click="accionForm('actualizar')"
                                class="h-10 w-10 rounded-lg flex justify-center items-center ml-4">
                                <svg width="22px" height="22px" viewBox="0 0 24 24" stroke-width="2" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" color="#000000">
                                    <path d="M11 21H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v7" stroke="#23B7A0"
                                        stroke-width="2" stroke-linecap="round"></path>
                                    <path
                                        d="M2 7h20M5 5.01l.01-.011M8 5.01l.01-.011M11 5.01l.01-.011M21.666 16.667C21.049 15.097 19.636 14 17.99 14c-1.758 0-3.252 1.255-3.793 3"
                                        stroke="#23B7A0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                    <path
                                        d="M19.995 16.772H21.4a.6.6 0 00.6-.6V14.55M14.334 19.333C14.953 20.903 16.366 22 18.01 22c1.758 0 3.252-1.255 3.793-3"
                                        stroke="#23B7A0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                    <path d="M16.005 19.228H14.6a.6.6 0 00-.6.6v1.622" stroke="#23B7A0" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.topprincipal .active {
    color: #c99856;
    border-bottom: 3px solid #c99856;
}

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

.modal {
    background: linear-gradient(180deg,
            rgba(63, 66, 128, 0.6241) 0%,
            rgba(49, 50, 71, 0.5609) 100%);
    background-color: #1e1e1e;
}

.modal-buttons button {
    background-color: #32345a;
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
definePageMeta({
    layout: "principal",
})

onMounted(() => {
    //Constantes para manejar el modal
    //Constante para el botón de agregar un registro
    const buttonElement = document.getElementById('btnadd');
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
            //Se limpia el form al abrir el modal de agregar
            limpiarForm();
            modalBtnAdd.classList.remove('hidden');
            modalText.textContent = "Registrar";
            modalBtnUpdate.classList.add('hidden');
            modal.show();
        });

        //Se le añade un evento click al botón de cerrar que se encuentra en el modal, esto para poder cerrar el modal después de abrirlo
        closeButton.addEventListener('click', function () {
            modal.hide();
            limpiarForm();
        });
    }
});

//Operaciones SCRUD

// Variable reactiva para llenar el select
const tipos_personales = ref(null);

//Funcion para llenar el select de tipos_personal
async function llenarSelectTipo_Personal() {
    try {
        // Se hacen las peticiones con axios
        const { data: res } = await axios.get('/t_personal-select');
        // Se asignan los valores devueltos a tipo_personal
        tipos_personales.value = res;
    } catch (error) {
        // Se extrae el mensaje de error
        const mensajeError = error.response.data.message;
        // Se extrae el sqlstate (Identificador de acciones sql)
        const sqlState = validaciones.extraerSqlState(mensajeError);
        // Se llama la funcion de mensajeSqlState para mostrar un mensaje de error relacionado a sqlState
        const res = validaciones.mensajeSqlState(sqlState);

        // Se muestra un sweetalert con el mensaje correspondiente
        Swal.fire({
            icon: 'error',
            title: "Error",
            text: res,
            confirmButtonColor: '#3F4280'
        });
    }
}

// Llamamos la funcion para llenar el select automaticamente
llenarSelectTipo_Personal();

/*Se establece una variable reactiva llamada data, se inicia con un valor nulo y se usará 
para almacenar la información que traiga el axios*/
const data = ref(null);
var tipo_personal = ref(null);

//Se establece una variable reactiva para manejar la paginación de registros, se establece como 1 ya que es la pagina default
const personal = ref(useRoute().query.personal || 1);

//Se crea una variable reactiva para manejar la información del modal
const form = ref({
    id_personal: "",
    nombre_personal: "",
    apellido_personal: "",
    telefono_personal: "",
    correo_personal: "",
    visibilidad_personal: false,
    id_tipo_personal: ""
})

/*Se crea una variable let (variable de bloque / su alcance se limita a un bloque cercano). Esta variable es reactiva
y se usa para llevar el control de la información que se muestra dependiendo de la pagina*/
let personales = computed(() => data.value.data);

/*Se crea un watch (detecta cada que "pagina" cambia) y ejecuta un select a los registros de esa página,
además muestra en la url la página actual*/
watch(personal, async () => {
    //Se evalua si el buscador tiene algún valor para ver si se realiza el leer o el buscar
    if (buscar.value.buscador != "") {
        //Se ejecuta el buscar página si el buscador tiene un valor (el plugin reinicia el paginado a 1 así que no hay que cambiar el valor de la constante pagina)
        //buscarAnuncios();
    } else {
        //Se ejecuta el leer páginas para cargar la tabla, usando la constante pagina también se busca la pagina especifica de registros
        leerPersonales();
    }
    //Se cambia la url para agregar en que pagina se encuentra el usuario
    useRouter().push({ query: { personal: personal.value } })
})

/*Función para leer la información de los registros de la página actual, se hace uso de axios para llamar la ruta junto con 
?page que se usa para ver la paginación de registros, y mediante el valor de la constante de "pagina" se manda a llamar los registros especificos*/
async function leerPersonales() {
    try {
        /*Se manda la petición axios para leer las paginas (no se manda la ruta completa por al configuración de axios -> Para mas información vean el axiosPlugin en la carpeta plugins),
        además usando el valor de la constante values se filtra la pagina de registros que axios va a traer*/
        const { data: res } = await axios.get(`/personal?page=${personal.value}`);
        //Se asigna el valor de la respuesta de axios a la constante data
        data.value = res;
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

//Funcion para limpiar el buscador
function limpiarBuscador() {
    //Se coloca la constante pagina 1 para que salga la primera pagina de registros
    personal.value = 1;
    //Se leen todos los registros
    leerPersonales();
    //Se coloca el valor del buscador a nulo
    buscar.value.buscador = "";
}

async function llenarTipoPersonal() {
    const { data: res } = await axios.get('t_personal-select');
    tipo_personal.value = res;
    console.log(tipo_personal.value)
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

//Función para evaluar que acción se va a hacer al hacer submit en el form
function accionForm(accion) {
    formAccion = accion;
}

//Variable para validar que acción se quiere hacer cuando se hace un submit al form
var formAccion = null;

//Función para crear/actualizar un registro cuando se ejecuta el submit del form
function submitForm() {
    if (formAccion == 'crear') {
        crearPersonal();
    } else {
        actualizarPersonal();
    }
}

//Función para limpiar todos los campos del form
function limpiarForm() {
    //Se llama el valor de la variable form y se cambia cada uno de sus elementos a nulo

}

//Funcion para crear un Personal
async function crearPersonal() {
    try {
        //Se crea una constante para guardar el valor actual que tienen todos los campos del form
        const formData = {
            nombre_personal: form.value.nombre_personal,
            apellido_personal: form.value.apellido_personal,
            telefono_personal: form.value.telefono_personal,
            correo_personal: form.value.correo_personal,
            visibilidad_personal: form.value.visibilidad_personal,
            id_tipo_personal: form.value.id_tipo_personal,
        }

        //Se realiza la peticion de axios hacia la base
        await axios.post('/personal/', formData);
        //Cargamos todos los personales para recargar la tabla
        leerPersonales();
        document.getElementById('closemodal').click();
        //Llamamos el mensaje de exito
        Toast.fire({
            icon: 'success',
            title: 'Personal ha sido creado correctamente'
        })

    } catch (error) {
        //Se extrae el mensaje de error
        const mensajeError = error.response.data.message;
        //Se extrae el sqlstate (identificador de acciones SQL)
        const sqlState = validaciones.extraerSqlState(mensajeError);
        //Se llama la función de mensajeSqlState para mostrar un mensaje de error relacionado al sqlstate
        const res = validaciones.mensajeSqlState(sqlState);

        //Cerramos el modal
        document.getElementById('closemodal').click();

        //Se muestra un sweetalert con el mensaje sin exito
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: res,
            confirmButtonColor: '#3F4280'
        });
    }
}

async function leerUnPersonal(id) {
    try {
        //Se hace la peticion axios y se evalua la respuesta
        await axios.get('/personal/' + id)
            .then(res => {
                //constante para el modal
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
                //Llenamos los inputs del modal con su respectiv info
                form.value = {
                    id_personal: res.data.id_personal,
                    nombre_personal: res.data.nombre_personal,
                    apellido_personal: res.data.apellido_personal,
                    telefono_personal: res.data.telefono_personal,
                    correo_personal: res.data.correo_personal,
                    visibilidad_personal: res.data.visibilidad_personal ? true : false,
                    id_tipo_personal: res.data.id_tipo_personal,
                }
            });
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

//Funcion para actualizar el personal
const actualizarSeccion = async () => {
    try {
        //Se establece una variable de id con el valor que tiene guardado la variable form
        var id = form.value.id_personal;
        //Se crea otra variable para guardar el valor de los campos de contiene el form
        const formData = {
            nombre_personal: form.value.nombre_personal,
            apellido_personal: form.value.apellido_personal,
            telefono_personal: form.value.telefono_personal,
            correo_personal: form.value.correo_personal,
            visibilidad_personal: form.value.visibilidad_personal,
            id_tipo_personal: form.value.id_tipo_personal,
        }

        //Se hace la peticion axios con la ruta y el id respectivo
        await axios.put(`/personal/${id}`, formData);

        //Se cargan nuevamente las paginas para mostrar las actualizaciones y cerramos el modal
        leerPersonales();
        document.getElementById('closeModal').click();

        //Se lanza la alerta de éxito
        Toast.fire({
            icon: 'success',
            title: 'Sección actualizada exitosamente'
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

const borrarPersonal = async (id) => {
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
    })
        .then(async (result) => {
            if (result.isConfirmed) {
                try {
                    //Se hace la peticion axios
                    await apiAxios.delete(`/personal/${id}`);

                    //Se cargan los registros
                    leerPersonales();

                    //Se lanza la alerta de éxito
                    Toast.fire({
                        icon: 'success',
                        title: 'Personal ocultado exitosamente'
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
        })
}

//Funcion para cambiar el estado de visibilidad de un registro para recuperarlo
const recuperarPersonal = async (id) => {
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
    })
        .then(async (result) => {
            if (result.isConfirmed) {
                try {
                    //Se hace la peticion axios
                    await apiAxios.delete(`/personal/${id}`);

                    //Se cargan los registros
                    leerPersonales();

                    //Se lanza la alerta de éxito
                    Toast.fire({
                        icon: 'success',
                        title: 'Personal recuperado exitosamente'
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
        })
}

// Validaciones
</script>