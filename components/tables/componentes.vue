<template>
    <!-- Haciendo uso del v-for se evalua cada registro individualmente para poder llenar todas las cards -->
    <div class="contained-data flex-col" v-for="componente in datos_componentes[paginacion - 1]" :key="componente.id">
        <div
            class="data-contained flex justify-between mt-4 rounded-xl p-4 max-[400px]:flex-wrap max-[400px]:w-full min-w-[200px]">
            <div class="flex justify-start w-3/4 items-center max-[400px]:w-full">
                <!--Con la implementación de una variable que permite visualizar la información contenida en cada uno-->
                <div
                    class="datainfo flex-col ml-8 max-[400px]:p-0 max-[400px]:w-full max-[400px]:ml-0 max-[400px]:text-center">
                    <p class="font-extrabold text-xl text-salte-900 max-[750px]:text-[18px]">
                        {{ componente.campos.nombre_componente }}</p>
                    <p class="font-normal text-sm mt-1text-gray-500 max-[750px]:text-[12px]"> Tipo de componente: <span
                            class="font-semibold |">{{
                                componente.tipos.tipo_componente }}</span></p>
                    <p class="font-normal text-sm text-gray-500 max-[750px]:text-[12px]"> Sección:
                        {{ componente.secciones.titulo_seccion }}
                    </p>
                </div>
            </div>
            <!-- Al darle clic al evento leer ejecuta la funcion -->
            <div
                class="buttons-data flex justify-center items-center max-[750px]:flex-col max-[400px]:flex-row max-[400px]:m-auto max-[400px]:mt-2">
                <button class="h-10 w-10 rounded-md flex items-center justify-center max-[400px]:mx-4 editbtn" id="btnedit"
                    v-if="componente.campos.visibilidad_componente == 1"
                    @click.prevent="abrirModal(componente.id, componente.tipos.tipo_componente)">
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
                    @click="borrarComponente(componente.id)" v-if="componente.campos.visibilidad_componente == 1">
                    <svg width="26px" height="26px" viewBox="0 0 24 24" stroke-width="2" fill="none"
                        xmlns="http://www.w3.org/2000/svg" color="#000000">
                        <path
                            d="M20 9l-1.995 11.346A2 2 0 0116.035 22h-8.07a2 2 0 01-1.97-1.654L4 9M21 6h-5.625M3 6h5.625m0 0V4a2 2 0 012-2h2.75a2 2 0 012 2v2m-6.75 0h6.75"
                            stroke="#872727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                    </svg>
                </button>
                <button @click="recuperarUnComponente(componente.id)"
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
        <!--Show modal-->
        <div id="modal-show" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
            class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative w-full max-w-4xl max-h-full">
                <!-- Modal content -->
                <div class="relative rounded-lg shadow modal">
                    <!-- Modal header -->
                    <div class="flex items-start justify-between p-4 rounded-t">
                        <div class="flex-col ml-4 pt-4">
                            <p class="text-xl font-bold text-gray-100" id="titulo_modal">Slider</p>
                            <p class="text-base font-medium text-gray-400" id="subtitulo_modal">Componente-Lamina</p>
                        </div>
                        <button type="button" class="bg-transparent rounded-lg p-1.5 ml-auto items-center border-none"
                            id="btnclose">
                            <svg width="24px" height="24px" stroke-width="2" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" color="#000000">
                                <path d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
                                    stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <div class=" space-y-6 flex justify-evenly pb-10">
                        <div class="flex-col" id="visualizacion" v-if="pagina_modal == 1">
                            <div v-if="laminas_slider && laminas_slider.length == 0" class="flex">
                                <div class="w-[850px] mx-[25px]">
                                    <div class="relative">
                                        <!-- Carousel wrapper -->
                                        <div class="relative overflow-hidden rounded-lg h-[450px]">
                                            <!-- Item 1 -->
                                            <div id="carousel-item-1"
                                                class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20"
                                                data-carousel-item="">
                                                <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                                                    class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                                    alt="...">
                                                <div class="relative top-[300px] px-4 py-2 opacity-100">
                                                    <p class="text-3xl text-white font-bold text-left ml-24">Título</p>
                                                    <p class="text-xl text-white font-bold text-left ml-24">Subtítulo</p>
                                                </div>
                                            </div>
                                            <!-- Item 1 -->
                                            <div id="carousel-item-2"
                                                class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20"
                                                data-carousel-item="">
                                                <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                                                    class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                                    alt="...">
                                                <div class="relative top-[300px] px-4 py-2 opacity-100">
                                                    <p class="text-3xl text-white font-bold text-left ml-24">Título</p>
                                                    <p class="text-xl text-white font-bold text-left ml-24">Subtítulo</p>
                                                </div>
                                            </div>
                                            <!-- Item 1 -->
                                            <div id="carousel-item-3"
                                                class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20"
                                                data-carousel-item="">
                                                <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                                                    class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                                    alt="...">
                                                <div class="relative top-[300px] px-4 py-2 opacity-100">
                                                    <p class="text-3xl text-white font-bold text-left ml-24">Título</p>
                                                    <p class="text-xl text-white font-bold text-left ml-24">Subtítulo</p>
                                                </div>
                                            </div>
                                            <!-- Item 1 -->
                                            <div id="carousel-item-4"
                                                class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20"
                                                data-carousel-item="">
                                                <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                                                    class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                                    alt="...">
                                                <div class="relative top-[300px] px-4 py-2 opacity-100">
                                                    <p class="text-3xl text-white font-bold text-left ml-24">Título</p>
                                                    <p class="text-xl text-white font-bold text-left ml-24">Subtítulo</p>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Slider indicators -->
                                        <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                                            <button id="carousel-indicator-1" type="button" class="w-3 h-3 rounded-full"
                                                aria-current="true" aria-label="Slide 1"></button>
                                            <button id="carousel-indicator-2" type="button" class="w-3 h-3 rounded-full"
                                                aria-current="false" aria-label="Slide 2"></button>
                                            <button id="carousel-indicator-3" type="button" class="w-3 h-3 rounded-full"
                                                aria-current="false" aria-label="Slide 3"></button>
                                            <button id="carousel-indicator-4" type="button" class="w-3 h-3 rounded-full"
                                                aria-current="false" aria-label="Slide 4"></button>
                                        </div>
                                        <!-- Slider controls -->
                                        <button id="data-carousel-prev" type="button"
                                            class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
                                            <span
                                                class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                                <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none"
                                                    stroke="currentColor" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M15 19l-7-7 7-7"></path>
                                                </svg>
                                                <span class="hidden">Previous</span>
                                            </span>
                                        </button>
                                        <button id="data-carousel-next" type="button"
                                            class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
                                            <span
                                                class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                                <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none"
                                                    stroke="currentColor" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M9 5l7 7-7 7"></path>
                                                </svg>
                                                <span class="hidden">Next</span>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div v-else class="flex">
                                <div class="w-[850px] mx-[25px]">
                                    <div class="relative">
                                        <!-- Carousel wrapper -->
                                        <div class="relative overflow-hidden rounded-lg h-[450px]">
                                            <div v-for="item in laminas_slider">
                                                <div v-if="item.campos.visibilidad_lamina"
                                                    :id="'carouselP-item-' + item.campos.identificador_lamina"
                                                    class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20"
                                                    data-carousel-item="">
                                                    <img :src="RUTA_IMAGENES_LAMINAS + item.campos.archivo_imagen"
                                                        class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                                        alt="...">
                                                    <div class="relative top-[300px] px-4 py-2 opacity-100">
                                                        <p class="text-3xl text-white font-bold text-left ml-24">{{
                                                            item.campos.titulo_lamina }}</p>
                                                        <p class="text-xl text-white font-bold text-left ml-24">{{
                                                            item.campos.subtitulo_lamina }}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Slider indicators -->
                                        <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                                            <div v-for="item in laminas_slider">
                                                <button v-if="item.campos.visibilidad_lamina"
                                                    :id="'carouselP-indicator-' + item.campos.identificador_lamina"
                                                    type="button" class="w-3 h-3 rounded-full" aria-current="true"
                                                    aria-label="Slide 1"></button>
                                            </div>
                                        </div>
                                        <!-- Slider controls -->
                                        <button id="data-carouselP-prev" type="button"
                                            class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
                                            <span
                                                class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                                <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none"
                                                    stroke="currentColor" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M15 19l-7-7 7-7"></path>
                                                </svg>
                                                <span class="hidden">Previous</span>
                                            </span>
                                        </button>
                                        <button id="data-carouselP-next" type="button"
                                            class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
                                            <span
                                                class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                                <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none"
                                                    stroke="currentColor" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M9 5l7 7-7 7"></path>
                                                </svg>
                                                <span class="hidden">Next</span>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <form @submit.prevent="" class="flex mt-4 w-full justify-around items-center">
                                <div class="flex-column">
                                    <div class="flex items-end justify-center">
                                        <div class="relative z-0 mr-10">
                                            <input type="text" maxlength="100" id="nombre_componente"
                                                name="nombre_componente" v-model="form_componente.nombre_componente"
                                                class="block py-2.5 px-0 w-48 text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-lightPurpleLogin peer"
                                                placeholder=" " autocomplete="off" required />
                                            <label for="nombre_componente"
                                                class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre
                                                - Componente<span class="text-sm ml-1"> * </span></label>
                                        </div>
                                        <div class="mt-2 flex-col mr-10">
                                            <label for="" class="text-sm absolute text-gray-200">Escoger sección<span
                                                    class="text-sm ml-1"> * </span></label>
                                            <select id="underline_select" v-model="form_componente.id_seccion"
                                                class="block mt-4 py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                                <option value="0" class="bg-gray-700">Seleccione una opción</option>
                                                <option class="bg-gray-700" v-for="seccion in secciones" :key="seccion.id"
                                                    :value="seccion.id">{{ seccion.campos.titulo_seccion }}</option>
                                            </select>
                                            <div v-if="form_componente.id_seccion == 0"
                                                class="flex mt-2 mb-0 text-sm text-red-400 bg-transparent" role="alert">
                                                <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3"
                                                    fill="currentColor" viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd"
                                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                                <div>
                                                    Seleccione <span class="font-medium">
                                                        una opción.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-start mt-5">
                                        <div class="relative z-0 mr-10">
                                            <input type="number" id="ubicacion_componente" name="ubicacion_componente"
                                                v-model="form_componente.ubicacion_componente"
                                                class="block py-2.5 px-0 w-48 text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-lightPurpleLogin peer"
                                                placeholder=" " autocomplete="off" required min="1" max="99" />
                                            <label for="ubicacion_componente"
                                                class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ubicación
                                                - Componente<span class="text-sm ml-1"> * </span></label>
                                        </div>
                                        <div class="flex-column">
                                            <label for="visibilidad_componente" class="text-sm text-gray-200">Visibilidad -
                                                Componente
                                                <span class="text-sm ml-1"> * </span></label>
                                            <div class="flex justify-start mt-2">
                                                <label class="relative inline-flex items-center mb-5 cursor-pointer">
                                                    <input type="checkbox" value="" class="sr-only peer"
                                                        id="visibilidad_componente" name="visibilidad_componente"
                                                        v-model="form_componente.visibilidad_componente" />
                                                    <div
                                                        class="w-9 h-5 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex items-center justify-center">
                                    <div class="flex-col">
                                        <button
                                            class="bg-space flex justify-around items-center w-48 h-12 rounded-xl mr-6 hover:bg-lightPurpleLogin"
                                            type="submit">
                                            <p class="text-white ml-3">Empezar a editar |</p>
                                            <svg class="mr-3" width="26px" height="26px" viewBox="0 0 24 24"
                                                stroke-width="2" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                color="#000000">
                                                <path d="M3 12h18m0 0l-8.5-8.5M21 12l-8.5 8.5" stroke="#FFF"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </button>
                                        <button
                                            class="bg-space flex justify-around items-center w-48 h-12 rounded-xl mr-6 mt-5 hover:bg-lightPurpleLogin"
                                            type="submit">
                                            <p class="text-white ml-3">Guardar cambios |</p>
                                            <svg class="mr-3" xmlns="http://www.w3.org/2000/svg"
                                                width="26px" height="26px" fill="none" stroke-width="1.5"
                                                viewBox="0 0 24 24" color="#FFFFFF">
                                                <path stroke="#FFFFFF" stroke-width="1.5"
                                                    d="M3 19V5a2 2 0 0 1 2-2h11.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 21 7.828V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z">
                                                </path>
                                                <path stroke="#FFFFFF" stroke-width="1.5"
                                                    d="M8.6 9h6.8a.6.6 0 0 0 .6-.6V3.6a.6.6 0 0 0-.6-.6H8.6a.6.6 0 0 0-.6.6v4.8a.6.6 0 0 0 .6.6ZM6 13.6V21h12v-7.4a.6.6 0 0 0-.6-.6H6.6a.6.6 0 0 0-.6.6Z">
                                                </path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <form @submit.prevent="" class="w-full py-6 px-10" id="s_formulario" v-else>
                            <div class="flex justify-between w-full">
                                <div class="flex-col mt-20">
                                    <button class="bg-space flex justify-center items-center w-16 h-12 rounded-xl mr-6"
                                        @click="paginaAnterior" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" fill="none"
                                            stroke-width="2" viewBox="0 0 24 24" color="#000000">
                                            <path stroke="#FFF" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" d="M21 12H3m0 0 8.5-8.5M3 12l8.5 8.5"></path>
                                        </svg>
                                    </button>
                                </div>
                                <div class="flex-col w-72">
                                    <div class="relative z-0">
                                        <input type="text" id="titulo_lamina" name="titulo_lamina" required maxlength="100"
                                            v-model="form_laminas_slider.titulo_lamina" @input="cambiosGuardados"
                                            class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-lightPurpleLogin peer"
                                            placeholder=" " autocomplete="off" />
                                        <span class="text-xs text-gray-400 absolute bottom-0.5 right-0">
                                            {{ form_laminas_slider.titulo_lamina.length }}/100</span>
                                        <label for="titulo_lamina"
                                            class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Título
                                            - lamina</label>
                                    </div>
                                    <div class="relative z-0 mt-8">
                                        <input type="text" id="subtitulo_lamina" name="subtitulo_lamina" required
                                            v-model="form_laminas_slider.subtitulo_lamina" @input="cambiosGuardados"
                                            maxlength="100"
                                            class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-lightPurpleLogin peer"
                                            placeholder=" " autocomplete="off" />
                                        <span class="text-xs text-gray-400 absolute bottom-0.5 right-0">{{
                                            form_laminas_slider.subtitulo_lamina.length }}/100</span>
                                        <label for="subtitulo_lamina"
                                            class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Subtítulo
                                            - lamina</label>
                                    </div>
                                    <div class="relative z-0 mt-8">
                                        <input type="number" id="identificador_lamina" name="identificador_lamina" required
                                            v-model="form_laminas_slider.identificador_lamina" @input="cambiosGuardados"
                                            min="1" max="99"
                                            class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-lightPurpleLogin peer"
                                            placeholder=" " autocomplete="off" />
                                        <label for="identificador_lamina"
                                            class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Identificador
                                            - lamina</label>
                                    </div>
                                    <div class="flex-col mt-8">
                                        <label for="" class="text-sm text-gray-200">Visibilidad - lamina *</label>
                                        <div class="flex justify-start mt-2">
                                            <label class="relative inline-flex items-center mb-5 cursor-pointer">
                                                <input type="checkbox" value="" class="sr-only peer"
                                                    @click="cambiosGuardados"
                                                    v-model="form_laminas_slider.visibilidad_lamina">
                                                <div
                                                    class="w-9 h-5 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex-col ml-14">
                                    <p class="text-center text-white">Imagen - lamina</p>
                                    <div class="h-52 w-48 border-2 border-slate-900 rounded-lg cursor-pointer relative max-[630px]:m-auto"
                                        @click="SELECCIONAR_ARCHIVO" @mouseover="iconoBorrarTrue"
                                        @mouseleave="iconoBorrarFalse">
                                        <img v-if="imagen_preview" :src="imagen_preview" class="h-52 w-48 rounded-lg" />
                                        <input type="file" ref="input_imagen" class="hidden" @change="cambiarImagen" />
                                        <div v-if="mostrar_icono_borrar"
                                            class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px"
                                                viewBox="0 0 24 24"
                                                style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;">
                                                <path
                                                    d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex-col">
                                    <div class="mt-20 flex justify-end items-end">
                                        <button class="bg-space flex justify-center items-center w-16 h-12 rounded-xl mr-6"
                                            @click="paginaSiguiente" type="button"><svg width="26px" height="26px"
                                                viewBox="0 0 24 24" stroke-width="2" fill="none"
                                                xmlns="http://www.w3.org/2000/svg" color="#000000">
                                                <path d="M3 12h18m0 0l-8.5-8.5M21 12l-8.5 8.5" stroke="#FFF"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg></button>
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-center justify-end">
                                <button type="button" id="btnModalClear" @click="limpiarFormLaminasSlider"
                                    class="h-10 w-10 rounded-lg flex justify-center items-center ml-4 bg-[#32345a]">
                                    <svg width="22px" height="22px" viewBox="0 0 24 24" stroke-width="2" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" color="#000000">
                                        <path d="M11 21H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v7" stroke="#23B7A0"
                                            stroke-width="2" stroke-linecap="round"></path>
                                        <path
                                            d="M2 7h20M5 5.01l.01-.011M8 5.01l.01-.011M11 5.01l.01-.011M21.666 16.667C21.049 15.097 19.636 14 17.99 14c-1.758 0-3.252 1.255-3.793 3"
                                            stroke="#23B7A0" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round">
                                        </path>
                                        <path
                                            d="M19.995 16.772H21.4a.6.6 0 00.6-.6V14.55M14.334 19.333C14.953 20.903 16.366 22 18.01 22c1.758 0 3.252-1.255 3.793-3"
                                            stroke="#23B7A0" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round">
                                        </path>
                                        <path d="M16.005 19.228H14.6a.6.6 0 00-.6.6v1.622" stroke="#23B7A0" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>
                                <!-- Se le coloca la función para crear al botón y se evalua que ninguna función de validaciones sea false, si alguna es false el botón se desactiva -->
                                <button id="btnModalAdd" type="submit"
                                    class="h-10 ml-2 w-10 rounded-lg flex justify-center items-center bg-[#32345a]">
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
                        </form>
                    </div>
                    <div class="flex items-center justify-center">
                        <input type="number" class="mb-10 w-16 text-right" v-model="pagina_modal" min="1">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.buttons-data .changebtn {
    border: 3px solid #3F4280;
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
</style>

<script setup>
//Importación de archivo de validaciones
import axios from 'axios';
import Swal from 'sweetalert2';
import validaciones from '../../assets/validaciones.js'
import VueEasyLightbox from 'vue-easy-lightbox'
import { Modal, Carousel, Accordion } from "flowbite";

const props = defineProps({
    //Prop que se utiliza para cargar los datos de la tabla
    datos_componentes: Array,
    //Prop que recibe la funcion de leerEnlace, para recargar la tabla, cada vez de finalizar alguna acción
    actualizar_datos: Function,
    paginacion: Number,

});

//Evento para reiniciar el tiempo del componente del timer
const EVENT = new Event('reset-timer');

//Seccion para cargar o modificar el DOM despues de haber cargado todo el template
onMounted(async () => {
    //Se le asigna un valor a la variable token para poder utilizar el middleware de laravel
    token.value = localStorage.getItem('token');
    await llenarSelectSecciones();
});

//Variable reactiva para almacenar el token del localStorag
const token = ref(null);

//Funciones para manejo del modal
//Toast del sweetalert
const TOAST = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (TOAST) => {
        TOAST.addEventListener("mouseenter", Swal.stopTimer);
        TOAST.addEventListener("mouseleave", Swal.resumeTimer);
    },
});

//Codigo para cambiar el estado del componente a inactivo
async function borrarComponente(id,) {
    console.log(id);
    Swal.fire({
        title: 'Confirmación',
        text: "¿Desea ocultar el registro?",
        icon: 'warning',
        reverseButtons: true,
        showCancelButton: true,
        confirmButtonColor: '#3F4280',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar',
        allowOutsideClick: false,
        cancelButtonText: 'Cancelar'
    }).then(async (result) => {
        if (result.isConfirmed) {
            try {
                //Se actualiza el valor del token (esto para evitar errores con todos los refresh del token)
                token.value = localStorage.getItem('token');
                try {
                    //Se realiza la petición axios
                    await axios.delete("/componentes/" + id, {
                        headers: {
                            Authorization: `Bearer ${token.value}`,
                        },
                    }).then(res => {
                        //Se reinicia el timer  
                        window.dispatchEvent(EVENT);
                        //Se actualiza el token con la respuesta del axios
                        localStorage.setItem('token', res.data.data.token);
                        token.value = localStorage.getItem('token');

                        //Se lanza la alerta de éxito
                        TOAST.fire({
                            icon: "success",
                            title: "Componente ocultado exitosamente",
                        });
                    });
                    //Se leen todas las páginas y en dado caso haya algo escrito en el buscador se filtran los datos
                    await props.actualizar_datos();
                } catch (error) {
                    console.log(error);
                }
            }
            catch (error) {
                console.log(error);
                const MENSAJE_ERROR = error.response.data.message;
                if (error.response.status == 401) {
                    navigateTo('/error_401');
                } else {
                    if (!error.response.data.errors) {
                        //Se extrae el sqlstate (identificador de acciones SQL)
                        const SQL_STATE = validaciones.extraerSqlState(MENSAJE_ERROR);
                        //Se llama la función de mensajeSqlState para mostrar un mensaje de error relacionado al sqlstate
                        const RES = validaciones.mensajeSqlState(SQL_STATE);

                        //Se muestra un sweetalert con el mensaje
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: RES,
                            confirmButtonColor: '#3F4280'
                        });
                    } else {
                        //Se muestra un sweetalert con el mensaje
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: MENSAJE_ERROR,
                            confirmButtonColor: '#3F4280'
                        });
                    }
                }
            }
        }
    });
}

//Función para cambiar un enlace a activo
async function recuperarUnComponente(id) {

    Swal.fire({
        title: 'Confirmación',
        text: "¿¿Desea recuperar el registro?",
        icon: 'warning',
        reverseButtons: true,
        showCancelButton: true,
        confirmButtonColor: '#3F4280',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
        allowOutsideClick: false,
    }).then(async (result) => {
        if (result.isConfirmed) {
            try {
                //Se actualiza el valor del token (esto para evitar errores con todos los refresh del token)
                token.value = localStorage.getItem('token');
                try {
                    //Se realiza la petición axios
                    await axios.delete("/componentes/" + id, {
                        headers: {
                            Authorization: `Bearer ${token.value}`,
                        },
                    }).then(res => {
                        //Se reinicia el timer
                        window.dispatchEvent(EVENT);
                        //Se actualiza el valor del token con la respuesta del axios
                        localStorage.setItem('token', res.data.data.token);
                        token.value = localStorage.getItem('token');
                    });;

                    //Se leen todas las páginas y en dado caso haya algo escrito en el buscador se filtran los datos
                    await props.actualizar_datos();

                    //Se lanza la alerta de éxito
                    TOAST.fire({
                        icon: "success",
                        title: "Componente recuperado exitosamente",
                    });
                } catch (error) {
                    console.log(error);
                }
            }
            catch (error) {
                console.log(error);
                const MENSAJE_ERROR = error.response.data.message;
                if (error.response.status == 401) {
                    navigateTo('/error_401');
                } else {
                    if (!error.response.data.errors) {
                        //Se extrae el sqlstate (identificador de acciones SQL)
                        const SQL_STATE = validaciones.extraerSqlState(MENSAJE_ERROR);
                        //Se llama la función de mensajeSqlState para mostrar un mensaje de error relacionado al sqlstate
                        const RES = validaciones.mensajeSqlState(SQL_STATE);

                        //Se muestra un sweetalert con el mensaje
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: RES,
                            confirmButtonColor: '#3F4280'
                        });
                    } else {
                        //Se muestra un sweetalert con el mensaje
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: MENSAJE_ERROR,
                            confirmButtonColor: '#3F4280'
                        });
                    }
                }
            }
        }
    });
}

const form_componente = ref({
    id_componente: "",
    nombre_componente: "",
    ubicacion_componente: "",
    visibilidad_componente: false,
    id_tipo_componente: "",
    id_seccion: "0",
});

function limpiarFormComponente() {
    form_componente.value.id_componente = '';
    form_componente.value.nombre_componente = '';
    form_componente.value.ubicacion_componente = '';
    form_componente.value.visibilidad_componente = false;
    form_componente.value.id_seccion = 0;
}

const laminas_slider = ref();
const laminas_acordeon = ref();

const RUTA_IMAGENES = "http://localhost:8000/storage/tipos_componentes/";
const RUTA_IMAGENES_LAMINAS = "http://localhost:8000/storage/laminas/images/";

async function leerInfoComponentes(id, tipo) {
    token.value = localStorage.getItem('token');
    const { data: res } = await axios.get('/componentes/' + id, {
        headers: {
            Authorization: `Bearer ${token.value}`,
        },
    });

    window.dispatchEvent(EVENT);
    localStorage.setItem('token', res.token);
    token.value = localStorage.getItem('token');

    if (res.data) {
        form_componente.value.id_componente = res.data.id;
        form_componente.value.nombre_componente = res.data.campos.nombre_componente;
        form_componente.value.ubicacion_componente = res.data.campos.ubicacion_componente;
        form_componente.value.visibilidad_componente = res.data.campos.visibilidad_componente;
        form_componente.value.id_tipo_componente = res.data.campos.id_tipo_componente;
        form_componente.value.id_seccion = res.data.campos.id_seccion;
    }

    const { data: res2 } = await axios.post('/laminas/' + id, null, {
        headers: {
            Authorization: `Bearer ${token.value}`,
        },
    });

    window.dispatchEvent(EVENT);
    localStorage.setItem('token', res.token);
    token.value = localStorage.getItem('token');

    switch (tipo) {
        case 'Slider':
            laminas_slider.value = res2.data;
            console.log(laminas_slider.value);
            break;
        case 'Acordeón':
            laminas_acordeon.value = res2.data;
            console.log(laminas_acordeon.value);
            break;
    }
}

const secciones = ref();

async function llenarSelectSecciones() {
    try {
        token.value = localStorage.getItem('token');
        const { data: res } = await axios.get('/secciones', {
            headers: {
                Authorization: `Bearer ${token.value}`,
            },
        });
        secciones.value = res.data;
        window.dispatchEvent(EVENT);
        //Se refresca el valor del token con la respuesta del axios
        localStorage.setItem('token', res.token);
        token.value = localStorage.getItem('token');
        console.log(secciones.value);
    } catch (error) {
        console.log(error);
        const MENSAJE_ERROR = error.response.data.message;
        if (error.response.status == 401) {
            navigateTo('/error_401');
        } else {
            if (!error.response.data.errors) {
                //Se extrae el sqlstate (identificador de acciones SQL)
                const SQL_STATE = validaciones.extraerSqlState(MENSAJE_ERROR);
                //Se llama la función de mensajeSqlState para mostrar un mensaje de error relacionado al sqlstate
                const RES = validaciones.mensajeSqlState(SQL_STATE);

                //Se muestra un sweetalert con el mensaje
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: RES,
                    confirmButtonColor: '#3F4280'
                });
            } else {
                //Se muestra un sweetalert con el mensaje
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: MENSAJE_ERROR,
                    confirmButtonColor: '#3F4280'
                });
            }
        }
    }
}

const pagina_modal = ref(1);
const preview_acordeon = ref(false);
const preview_slider = ref(false);

function paginaSiguiente() {
    pagina_modal.value = pagina_modal.value + 1;
    //cambiarPaginaInput();
}

function paginaAnterior() {
    pagina_modal.value = pagina_modal.value - 1;
    //cambiarPaginaInput();
}

async function abrirModal(id, tipo) {
    pagina_modal.value = 1;
    limpiarFormComponente();
    limpiarFormLaminasSlider();
    limpiarFormLaminasAcordeon();
    laminas_slider.value = '';
    laminas_acordeon.value = '';
    await leerInfoComponentes(id, tipo);

    switch (tipo) {
        case 'Slider':
            const MODAL_ID = document.getElementById('modal-show');
            const BOTON_CERRAR = document.getElementById('btnclose');
            const OPCIONES_MODAL = {
                backdrop: 'static',
                backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
            };
            BOTON_CERRAR.addEventListener('click', function () {
                MODAL.hide();
            });

            const MODAL = new Modal(MODAL_ID, OPCIONES_MODAL);
            MODAL.show();

            await nextTick();

            const ITEMS = [];
            const ITEMS_INDICADORES = [];
            var posicion = 0;

            laminas_slider.value.forEach((element) => {
                const IDENTIFICADOR_LAMINA = element.campos.identificador_lamina;
                const VISIBILIDAD_LAMINA = element.campos.visibilidad_lamina;

                if (VISIBILIDAD_LAMINA == true) {
                    // Agregar un nuevo elemento al arreglo 'items'
                    ITEMS.push({
                        position: posicion,
                        el: document.getElementById('carouselP-item-' + IDENTIFICADOR_LAMINA),
                    })

                    ITEMS_INDICADORES.push({
                        position: posicion,
                        el: document.getElementById('carouselP-indicator-' + IDENTIFICADOR_LAMINA),
                    })

                    posicion = posicion + 1;
                }
            });

            const OPTIONS = {
                defaultPosition: 1,
                interval: 3000,

                indicators: {
                    activeClasses: 'bg-blue-100 text-lightPurpleLogin',
                    inactiveClasses: 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
                    items: ITEMS_INDICADORES,
                },
            };
            if (document.getElementById('carouselP-item-1')) {
                const CAROUSEL = new Carousel(ITEMS, OPTIONS);
                CAROUSEL.cycle()
                // set event listeners for prev and next buttons
                const prevButton = document.getElementById('data-carouselP-prev');
                const nextButton = document.getElementById('data-carouselP-next');
                prevButton.addEventListener('click', () => {
                    CAROUSEL.prev();
                });
                nextButton.addEventListener('click', () => {
                    CAROUSEL.next();
                });
            }

            break;
        case 'Acordeón':

            break;
    }
}

const form_laminas_slider = ref({
    id_lamina_componente: '',
    archivo_imagen: '',
    titulo_lamina: '',
    subtitulo_lamina: '',
    identificador_lamina: '',
    visibilidad_lamina: false,
});

function limpiarFormLaminasSlider() {
    form_laminas_slider.value.titulo_lamina = '';
    form_laminas_slider.value.subtitulo_lamina = '';
    form_laminas_slider.value.identificador_lamina = '';
    form_laminas_slider.value.visibilidad_lamina = false;
    limpiarImagen();
}

const form_laminas_acordeon = ref({
    id_lamina_componente: '',
    titulo_lamina: '',
    contenido_lamina: '',
    identificador_lamina: '',
    visibilidad_lamina: false,
});

function limpiarFormLaminasAcordeon() {
    form_laminas_acordeon.value.titulo_lamina = '';
    form_laminas_acordeon.value.contenido_lamina = '';
    form_laminas_acordeon.value.identificador_lamina = '';
    form_laminas_acordeon.value.visibilidad_lamina = false;
}

//Variable reactiva para verificar si mostrar o no el boton para borrar alguna imagen
const mostrar_icono_borrar = ref(false);
//Metodo para hacer visible el icono de borrar una imagen
function iconoBorrarTrue() {
    if (imagen_preview.value) {
        mostrar_icono_borrar.value = true;
    }
}
//Metodo para no mostrar el icono de borrar una imagen
function iconoBorrarFalse() {
    if (imagen_preview.value) {
        mostrar_icono_borrar.value = false;
    }
}
//Variable reactiva para mostrar la imagen capturada
const imagen_preview = ref(null);
//Metodo para seleccionar una imagen para el registro
const SELECCIONAR_ARCHIVO = () => {
    if (mostrar_icono_borrar.value == false) {
        input_imagen.value.click();
    } else {
        limpiarImagen();
    }
};
//Variable reactiva para caputar el valor de la imagen
const input_imagen = ref(null);
//Metodo para cambiar la imagen de un registro
const cambiarImagen = () => {
    const INPUT = input_imagen.value;
    const ARCHIVO = INPUT.files;
    if (ARCHIVO && ARCHIVO[0]) {
        form_laminas_slider.value.archivo_imagen = ARCHIVO[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            imagen_preview.value = e.target.result;
        };
        reader.readAsDataURL(ARCHIVO[0]);
        return ARCHIVO[0];
    }
};

//Metodo para limpiar el campo de la imagen
function limpiarImagen() {
    //Limpiar imagen
    imagen_preview.value = '';
    form_laminas_slider.value.archivo_imagen = "";
    mostrar_icono_borrar.value = false;
}

</script>