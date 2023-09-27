<template>
    <div class="principal mt-4">
        <MenuTipoComponenteDashboard class="mr-8"/>
        <div class="flex mt-10 ml-8">
            <div class="flex-col">
                <h2 class="text-yellow-500 text-xl font-semibold">Tipo - Componentes</h2>

                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
                    class="mt-4 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-200 w-56 font-bold rounded-lg text-base px-4 py-2.5 text-center flex justify-between items-center text-slate-900"
                    type="button">Seleccionar <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg></button>
                <!-- Dropdown menu -->
                <div id="dropdown"
                    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                        <li>
                            <a href="#"
                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                        </li>
                        <li>
                            <a href="#"
                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                        </li>
                        <li>
                            <a href="#"
                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                        </li>
                        <li>
                            <a href="#"
                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign
                                out</a>
                        </li>
                    </ul>
                </div>
                <div class=" flex-col mt-6 tipo_componente overflow-y-scroll h-3/4">
                    <div class="bg-gray-200 w-56 h-96 rounded-lg flex justify-center items-start">
                        <div class="bg-slate-700 h-28 w-48 mt-4 flex items-end rounded-lg">
                            <div class="flex-col mb-4 ml-4">
                                <div class="bg-yellow-500 h-2 w-28"></div>
                                <div class="bg-yellow-500 h-2 w-20 mt-4"></div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-200 w-56 h-52 rounded-lg mt-6"></div>
                </div>
            </div>
            <!--Seccion para mostrar la preview del componente-->
            <div class="flex-col ml-20 w-full">
                <div class="slider_example relative ml-10 w-full">
                    <img src="/img/example_db.png" alt="cohete_login" class="w-9/12 rounded-lg m-auto">
                    <h1 class="absolute text-gray-50 bottom-36 font-semibold text-4xl ml-48">DON BOSCO</h1>
                    <h4 class="absolute text-gray-50 bottom-28 font-normal text-lg ml-48">El valdocco de Centroamérica</h4>
                </div>
                <div class="flex justify-evenly">
                    <div class="w-2/4 flex-col mt-6 ml-32">
                        <button
                            class="w-40 h-10 bg-gray-300 text-slate-800 rounded-lg flex text-sm justify-around items-center">Escoger
                            sección<svg width="20px" height="20px" viewBox="0 0 24 24" stroke-width="2" fill="none"
                                xmlns="http://www.w3.org/2000/svg" color="#000000">
                                <path d="M14 21H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10" stroke="#32345A"
                                    stroke-width="2" stroke-linecap="round"></path>
                                <path d="M2 7h20M5 5.01l.01-.011M8 5.01l.01-.011M11 5.01l.01-.011" stroke="#32345A"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path clip-rule="evenodd"
                                    d="M22.082 18.365c.494.304.464 1.043-.045 1.1l-2.566.292-1.152 2.312c-.228.458-.933.234-1.05-.334l-1.255-6.116c-.098-.48.333-.782.75-.525l5.318 3.271z"
                                    stroke="#32345A" stroke-width="2"></path>
                            </svg></button>
                        <button
                            class="w-40 h-10 bg-slate-800 text-gray-100 rounded-lg mt-2 flex text-sm justify-around items-center"
                            type="button" @click="abrirModal()">Personalizar
                            <svg width="20px" height="20px" viewBox="0 0 24 24" stroke-width="2" fill="none"
                                xmlns="http://www.w3.org/2000/svg" color="#000000">
                                <path
                                    d="M4.998 2H2v2.998h2.998V2zM4.999 3.501h14M3.5 4.999V19M20.498 5v14.002M4.999 20.501h14M4.998 19H2v2.998h2.998V19zM21.997 2.002H19V5h2.998V2.002zM21.997 19.002H19V22h2.998v-2.998z"
                                    stroke="#FFF" stroke-width="2" stroke-miterlimit="1.5" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                                <path clip-rule="evenodd" d="M10.997 15.002l-3-7 7 3-2.998.999-1.002 3.001z" stroke="#FFF"
                                    stroke-width="2" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                                <path clip-rule="evenodd" d="M11.999 12.002l2.998 3-2.998-3z" stroke="#FFF" stroke-width="2"
                                    stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="w-2/4 px-10 mt-4">
                        <div class="bg-gray-300 rounded-lg w-full h-32 flex-col">
                            <p class="text-gray-900 text-lg font-semibold pl-4 pt-2">Imagen - Texto</p>
                            <p class="pl-4 pt-2 pr-2 text-slate-900 text-sm font-normal">
                                Slider perfecto para establecer imágenes de fondo
                                que cubran la pantalla completa.
                            </p>
                            <p class="pl-4 pb-4 pr-2 text-slate-900 text-sm font-normal">
                                Puedes establecer las imágenes que necesites
                                al momento de crear tu sección en la pagina.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--Show modal-->
    <div id="modal-show" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-3xl max-h-full">
            <!-- Modal content -->
            <div class="relative rounded-lg shadow modal">
                <!-- Modal header -->
                <div class="flex items-start justify-between p-4 rounded-t">
                    <div class="flex-col ml-4 pt-4">
                        <p class="text-xl font-bold text-gray-100">
                            Visualización
                        </p>
                        <p class="text-base font-medium text-gray-400">Componente</p>
                    </div>
                    <button type="button" class="bg-transparent rounded-lg p-1.5 ml-auto items-center border-none"
                        data-modal-hide="modal-show" @click="cerrarModal()" id="btn_close">
                        <svg width="24px" height="24px" stroke-width="2" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg" color="#000000">
                            <path d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
                                stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </button>
                </div>
                <!-- Modal body -->
                <div class=" space-y-6 flex justify-evenly pb-10">
                    <div class="flex-col">
                        <div class="flex">
                            <div class="relative ml-28">
                                <img src="/img/example_db.png" alt="cohete_login" class="w-2/3 m-auto">
                                <h1 class="absolute text-gray-50 bottom-14 font-semibold text-xl ml-28">DON BOSCO</h1>
                                <h4 class="absolute text-gray-50 bottom-10 font-normal text-sm ml-28">El valdocco de
                                    Centroamérica</h4>
                            </div>
                            <div class="flex justify-end items-center">
                                <button class="bg-space flex justify-center items-center w-16 h-12 rounded-xl mr-6"
                                    type="button" data-modal-target="modal-data_show" data-modal-toggle="modal-data_show"
                                    @click="abrirModal2()"><svg width="26px" height="26px" viewBox="0 0 24 24"
                                        stroke-width="2" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                                        <path d="M3 12h18m0 0l-8.5-8.5M21 12l-8.5 8.5" stroke="#FFF" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg></button>
                            </div>
                        </div>
                        <div class="flex mt-4 w-full justify-center items-center">
                            <button
                                class="w-40 h-10 bg-gray-300 text-slate-800 rounded-lg flex text-sm justify-around items-center">Escoger
                                sección<svg width="20px" height="20px" viewBox="0 0 24 24" stroke-width="2" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" color="#000000">
                                    <path d="M14 21H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10" stroke="#32345A"
                                        stroke-width="2" stroke-linecap="round"></path>
                                    <path d="M2 7h20M5 5.01l.01-.011M8 5.01l.01-.011M11 5.01l.01-.011" stroke="#32345A"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path clip-rule="evenodd"
                                        d="M22.082 18.365c.494.304.464 1.043-.045 1.1l-2.566.292-1.152 2.312c-.228.458-.933.234-1.05-.334l-1.255-6.116c-.098-.48.333-.782.75-.525l5.318 3.271z"
                                        stroke="#32345A" stroke-width="2"></path>
                                </svg></button>
                            <button class="w-16 h-10 bg-space rounded-lg flex justify-center items-center ml-6"><svg
                                    width="28px" height="28px" stroke-width="2" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" color="#000000">
                                    <path d="M12 14a2 2 0 100-4 2 2 0 000 4z" stroke="#FFF" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path
                                        d="M21 12c-1.889 2.991-5.282 6-9 6s-7.111-3.009-9-6c2.299-2.842 4.992-6 9-6s6.701 3.158 9 6z"
                                        stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                </svg></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--end Show modal-->
    <!--second modal-->
    <div id="modal-data_show" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-4xl max-h-full">
            <!-- Modal content -->
            <div class="relative rounded-lg shadow modal">
                <!-- Modal header -->
                <div class="flex items-start justify-between p-4 rounded-t">
                    <div class="flex-col ml-4 pt-4">
                        <p class="text-xl font-bold text-gray-100">
                            Información
                        </p>
                        <p class="text-base font-medium text-gray-400">Componente - lamina</p>
                    </div>
                    <button type="button" class="bg-transparent rounded-lg p-1.5 ml-auto items-center border-none"
                        @click="cerrarModal2()">
                        <svg width="24px" height="24px" stroke-width="2" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg" color="#000000">
                            <path d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
                                stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </button>
                </div>
                <!-- Modal body -->
                <div class=" space-y-6 pb-14">
                    <div id="animation-carousel" class="relative w-full" data-carousel="static">
                        <!-- Carousel wrapper -->
                        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                            <!-- Item 1 -->
                            <div class="hidden duration-200 ease-linear" data-carousel-item>
                                <form action="" class="flex justify-evenly">
                                    <div class="flex-col w-72">
                                        <div class="relative z-0 mt-6 w-full">
                                            <input type="text" id="username" name="username"
                                                class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                                placeholder=" " autocomplete="off" />
                                            <label for="username"
                                                class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Titulo
                                                - Lamina</label>
                                        </div>
                                        <div class="relative z-0 mt-6">
                                            <input type="text" id="username" name="username"
                                                class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                                placeholder=" " autocomplete="off" />
                                            <label for="username"
                                                class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Subtitulo
                                                - Lamina</label>
                                        </div>
                                        <div class="relative z-0 mt-6">
                                            <input type="text" id="username" name="username"
                                                class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                                placeholder=" " autocomplete="off" />
                                            <label for="username"
                                                class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Descripción
                                                - Lamina</label>
                                        </div>
                                        <div class="flex-col mt-6">
                                            <label for="" class="text-gray-200">Visibilidad</label>
                                            <div class="flex justify-start mt-2">
                                                <label class="relative inline-flex items-center mb-5 cursor-pointer">
                                                    <input type="checkbox" value="" class="sr-only peer">
                                                    <div
                                                        class="w-9 h-5 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex-col ml-16">
                                        <div class="flex-col text-center">
                                            <p class="mb-4 text-center text-gray-200">Imagen</p>
                                            <img src="" class="h-44 w-40 border-2 border-slate-900 ml-2 rounded-lg" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <!-- Item 2 -->
                            <div class="hidden duration-200 ease-linear" data-carousel-item>
                                <form action="" class="flex justify-evenly">
                                    <div class="flex-col w-72">
                                        <div class="relative z-0 mt-6 w-full">
                                            <input type="text" id="username" name="username"
                                                class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                                placeholder=" " autocomplete="off" />
                                            <label for="username"
                                                class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Titulo
                                                - Lamina</label>
                                        </div>
                                        <div class="relative z-0 mt-6">
                                            <input type="text" id="username" name="username"
                                                class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                                placeholder=" " autocomplete="off" />
                                            <label for="username"
                                                class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Subtitulo
                                                - Lamina</label>
                                        </div>
                                        <div class="relative z-0 mt-6">
                                            <input type="text" id="username" name="username"
                                                class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                                placeholder=" " autocomplete="off" />
                                            <label for="username"
                                                class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Descripción
                                                - Lamina</label>
                                        </div>
                                        <div class="flex-col mt-6">
                                            <label for="" class="text-gray-200">Visibilidad</label>
                                            <div class="flex justify-start mt-2">
                                                <label class="relative inline-flex items-center mb-5 cursor-pointer">
                                                    <input type="checkbox" value="" class="sr-only peer">
                                                    <div
                                                        class="w-9 h-5 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex-col ml-16">
                                        <div class="flex-col text-center">
                                            <p class="mb-4 text-center text-gray-200">Imagen</p>
                                            <img src="" class="h-44 w-40 border-2 border-slate-900 ml-2 rounded-lg" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <!-- Item 3 -->

                        </div>
                        <!-- Slider controls -->
                        <button type="button"
                            class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                            data-carousel-prev>
                            <span
                                class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-space group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 19l-7-7 7-7"></path>
                                </svg>
                                <span class="sr-only">Previous</span>
                            </span>
                        </button>
                        <button type="button"
                            class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                            data-carousel-next>
                            <span
                                class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-space group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7">
                                    </path>
                                </svg>
                                <span class="sr-only">Next</span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--end second modal-->
</template>
<style scoped>
.tipo_componente::-webkit-scrollbar {
    width: 7px;
}

.tipo_componente::-webkit-scrollbar-thumb {
    background: #32345A;
}
.modal {
    background: linear-gradient(180deg,
            rgba(63, 66, 128, 0.6241) 0%,
            rgba(49, 50, 71, 0.5609) 100%);
    background-color: #1e1e1e;
}</style>
<script setup>
import { Modal } from "flowbite";
definePageMeta({
    layout: "principal",
});
function abrirModal() {
    const modalElement = document.getElementById("modal-show");
    const modalOptions = {
        //backdrop nos ayuda a colocar si queremos estatico el modal o dinamico
        backdrop: "static",
        backdropClasses:
            "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
    };

    const modal = new Modal(modalElement, modalOptions);
    // programatically show
    modal.show();
}
function cerrarModal() {
    const modalElement = document.getElementById("modal-show");
    const modal = new Modal(modalElement);
    // programatically show
    modal.hide();
}
function abrirModal2() {
    const $modalElement = document.querySelector("#modal-data_show");
    const modalOptions = {
        //backdrop nos ayuda a colocar si queremos estatico el modal o dinamico
        backdrop: "static",
        backdropClasses:
            "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
    };

    if ($modalElement) {
        const modal = new Modal($modalElement, modalOptions);
        // programatically show
        modal.show();
    }
}
function cerrarModal2() {
    const $modalElement = document.querySelector("#modal-data_show");
    if ($modalElement) {
        const modal = new Modal($modalElement);
        // programatically show
        modal.hide();
    }
}
</script>