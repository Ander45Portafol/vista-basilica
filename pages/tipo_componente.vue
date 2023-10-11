<template>
    <div class="mt-4 principal">
        <MenuTipoComponenteDashboard class="mr-8" />
        <div class="flex mt-10 ml-8">
            <div class="flex-col">
                <h2 class="text-xl font-semibold text-yellow-500">Tipo - Componentes</h2>

                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
                    class="mt-4 bg-purpleLogin text-white hover:bg-lightPurpleLogin focus:ring-4 focus:outline-none focus:ring-gray-200 w-56 font-bold rounded-lg text-base px-4 py-2.5 text-center flex justify-between items-center"
                    type="button">{{ texto_dropdown }} <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg></button>
                <!-- Dropdown menu -->
                <div id="dropdown"
                    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul v-if="select_tipos_categorias" class="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownDefaultButton">
                        <li>
                            <p @click="volverASeleccionar"
                                class="block px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                Seleccionar</p>
                        </li>
                        <li v-for="item in select_tipos_categorias">
                            <p @click="filtrarTiposComponentes(item.categoria_tipo_componente)"
                                class="block px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                {{ item.categoria_tipo_componente }}</p>
                        </li>
                    </ul>
                </div>
                <div v-if="tipos_componentes_filtrados" class="flex-col pr-4 mt-6 overflow-y-scroll tipo_componente h-2/4">
                    <div @click="seleccionarTipoComponente(item.id_tipo_componente)"
                        v-for="item in tipos_componentes_filtrados"
                        class="flex items-center justify-center w-56 mt-6 rounded-lg cursor-pointer hover:bg-slate-200 bg-slate-100 h-52">
                        <div class="text-center flex-column">
                            <img :src="RUTA_IMAGENES + item.icono_tipo_componente" :alt="item.tipo_componente">
                            <p class="mt-3 font-semibold text-purpleLogin">{{ item.tipo_componente }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!--Seccion para mostrar la preview del componente-->
            <div v-if="!seleccionando_componente && informacion_componente_seleccionado"
                class="flex-col w-full h-screen ml-10">
                <div class="relative w-full ml-10 slider_example">
                    <img :src="RUTA_IMAGENES + informacion_componente_seleccionado.preview"
                        :alt="informacion_componente_seleccionado.nombre" class="w-9/12 m-auto rounded-lg">
                </div>
                <div class="flex justify-evenly">
                    <div class="flex-col w-2/4 mt-6 ml-32">
                        <button @click="abrirModal"
                            class="flex items-center justify-around w-40 h-10 mt-2 text-sm text-gray-100 rounded-lg bg-slate-800"
                            type="button" id="btncomponente">Personalizar
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
                        <div class="flex-col w-full h-32 bg-gray-300 rounded-lg">
                            <p class="pt-2 pl-4 text-lg font-semibold text-gray-900">{{
                                informacion_componente_seleccionado.nombre }}</p>
                            <p class="pt-2 pl-4 pr-2 text-sm font-normal text-slate-900">
                                {{ informacion_componente_seleccionado.descripcion }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="flex items-center justify-center w-full h-screen ml-10">
                <div class="text-center flex-column">
                    <div class="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="128px" height="128px" fill="none" stroke-width="1.5"
                            viewBox="0 0 24 24" color="#3F4280">
                            <path stroke="#3F4280" stroke-width="1.5" stroke-linecap="round"
                                d="M14 21H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10"></path>
                            <path stroke="#3F4280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                                d="M2 7h20M5 5.01l.01-.011M8 5.01l.01-.011M11 5.01l.01-.011"></path>
                            <path stroke="#3F4280" stroke-width="1.5"
                                d="M22.082 18.365c.494.304.464 1.043-.045 1.1l-2.566.292-1.152 2.312c-.228.458-.933.234-1.05-.334l-1.255-6.116c-.098-.48.333-.782.75-.525l5.318 3.271Z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <p class="text-purpleLogin font-semibold text-lg mb-[24%]">Por favor, selecciona un tipo de componente
                        para acceder a su información correspondiente.</p>
                </div>
            </div>
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
                    <div class="flex-col pt-4 ml-4">
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
                <div class="flex pb-10 space-y-6 justify-evenly">
                    <div class="flex-col" id="visualizacion" v-if="pagina == 1 || pagina == ''">
                        <div :class="clases_preview_carousel.clases_carousel_vacio">
                            <div class="w-[850px] mx-[25px]">
                                <div class="relative">
                                    <!-- Carousel wrapper -->
                                    <div class="relative overflow-hidden rounded-lg h-[450px]">
                                        <!-- Item 1 -->
                                        <div id="carousel-item-1"
                                            class="absolute inset-0 z-20 transition-all duration-700 ease-in-out transform translate-x-0"
                                            data-carousel-item="">
                                            <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                                                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                                alt="...">
                                            <div class="relative top-[300px] px-4 py-2 opacity-100">
                                                <p class="ml-24 text-3xl font-bold text-left text-white">Título</p>
                                                <p class="ml-24 text-xl font-bold text-left text-white">Subtítulo</p>
                                            </div>
                                        </div>
                                        <!-- Item 1 -->
                                        <div id="carousel-item-2"
                                            class="absolute inset-0 z-20 transition-all duration-700 ease-in-out transform translate-x-0"
                                            data-carousel-item="">
                                            <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                                                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                                alt="...">
                                            <div class="relative top-[300px] px-4 py-2 opacity-100">
                                                <p class="ml-24 text-3xl font-bold text-left text-white">Título</p>
                                                <p class="ml-24 text-xl font-bold text-left text-white">Subtítulo</p>
                                            </div>
                                        </div>
                                        <!-- Item 1 -->
                                        <div id="carousel-item-3"
                                            class="absolute inset-0 z-20 transition-all duration-700 ease-in-out transform translate-x-0"
                                            data-carousel-item="">
                                            <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                                                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                                alt="...">
                                            <div class="relative top-[300px] px-4 py-2 opacity-100">
                                                <p class="ml-24 text-3xl font-bold text-left text-white">Título</p>
                                                <p class="ml-24 text-xl font-bold text-left text-white">Subtítulo</p>
                                            </div>
                                        </div>
                                        <!-- Item 1 -->
                                        <div id="carousel-item-4"
                                            class="absolute inset-0 z-20 transition-all duration-700 ease-in-out transform translate-x-0"
                                            data-carousel-item="">
                                            <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                                                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                                alt="...">
                                            <div class="relative top-[300px] px-4 py-2 opacity-100">
                                                <p class="ml-24 text-3xl font-bold text-left text-white">Título</p>
                                                <p class="ml-24 text-xl font-bold text-left text-white">Subtítulo</p>
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
                        <div :class="clases_preview_carousel.clases_carousel_preview">
                            <div class="w-[850px] mx-[25px]">
                                <div class="relative">
                                    <!-- Carousel wrapper -->
                                    <div class="relative overflow-hidden rounded-lg h-[450px]">
                                        <div v-for="item in laminas_slider">
                                            <div v-if="item.campos.visibilidad_lamina"
                                                :id="'carouselP-item-' + item.campos.identificador_lamina"
                                                class="absolute inset-0 z-20 transition-all duration-700 ease-in-out transform translate-x-0"
                                                data-carousel-item="">
                                                <img :src="RUTA_IMAGENES_LAMINAS + item.campos.archivo_imagen"
                                                    class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                                    alt="...">
                                                <div class="relative top-[300px] px-4 py-2 opacity-100">
                                                    <p class="ml-24 text-3xl font-bold text-left text-white">{{
                                                        item.campos.titulo_lamina }}</p>
                                                    <p class="ml-24 text-xl font-bold text-left text-white">{{
                                                        item.campos.subtitulo_lamina }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Slider indicators -->
                                    <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2">
                                        <div v-for="item in laminas_slider">
                                            <button v-if="item.campos.visibilidad_lamina"
                                                :id="'carouselP-indicator-' + item.campos.identificador_lamina"
                                                type="button" class="w-3 h-3 ml-3 rounded-full"></button>
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
                        <form @submit.prevent="empezarAEditar" class="flex items-center justify-around w-full mt-4">
                            <div class="flex-column">
                                <div class="flex items-end justify-center">
                                    <div class="relative z-0 mr-10">
                                        <input type="text" maxlength="100" id="nombre_componente" name="nombre_componente"
                                            :readonly="read_only" v-model="form_componente.nombre_componente"
                                            class="block py-2.5 px-0 w-48 text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-lightPurpleLogin peer"
                                            placeholder=" " autocomplete="off" required />
                                        <label for="nombre_componente"
                                            class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre
                                            - Componente<span class="ml-1 text-sm"> * </span></label>
                                    </div>
                                    <div class="flex-col mt-2 mr-10">
                                        <label for="" class="absolute text-sm text-gray-200">Escoger sección<span
                                                class="ml-1 text-sm"> * </span></label>
                                        <select id="underline_select" v-model="form_componente.id_seccion"
                                            :disabled="read_only"
                                            class="block mt-4 py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                            <option value="0" class="bg-gray-700">Seleccione una opción</option>
                                            <option class="bg-gray-700" v-for="seccion in secciones" :key="seccion.id"
                                                :value="seccion.id">{{ seccion.campos.titulo_seccion }}</option>
                                        </select>
                                        <div v-if="form_componente.id_seccion == 0"
                                            class="flex mt-2 mb-0 text-sm text-red-400 bg-transparent" role="alert">
                                            <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3"
                                                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
                                            :readonly="read_only" v-model="form_componente.ubicacion_componente"
                                            class="block py-2.5 px-0 w-48 text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-lightPurpleLogin peer"
                                            placeholder=" " autocomplete="off" required min="1" max="99" />
                                        <label for="ubicacion_componente"
                                            class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ubicación
                                            - Componente<span class="ml-1 text-sm"> * </span></label>
                                    </div>
                                    <div class="flex-column">
                                        <label for="visibilidad_componente" class="text-sm text-gray-200">Visibilidad -
                                            Componente
                                            <span class="ml-1 text-sm"> * </span></label>
                                        <div class="flex justify-start mt-2">
                                            <label class="relative inline-flex items-center mb-5 cursor-pointer">
                                                <input type="checkbox" value="" class="sr-only peer" :disabled="read_only"
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
                                <button
                                    class="flex items-center justify-around w-48 h-12 mr-6 bg-space rounded-xl hover:bg-lightPurpleLogin"
                                    type="submit">
                                    <p class="ml-3 text-white">Empezar a editar |</p>
                                    <svg class="mr-3" width="26px" height="26px" viewBox="0 0 24 24" stroke-width="2"
                                        fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                                        <path d="M3 12h18m0 0l-8.5-8.5M21 12l-8.5 8.5" stroke="#FFF" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                    <form @submit.prevent="crearLamina" class="w-full px-10 py-6" id="s_formulario" v-else>
                        <div class="flex justify-between w-full">
                            <div class="flex-col mt-20">
                                <button class="flex items-center justify-center w-16 h-12 mr-6 bg-space rounded-xl"
                                    @click="paginaAnterior" type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" fill="none"
                                        stroke-width="2" viewBox="0 0 24 24" color="#000000">
                                        <path stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                            d="M21 12H3m0 0 8.5-8.5M3 12l8.5 8.5"></path>
                                    </svg>
                                </button>
                            </div>
                            <div class="flex-col w-72">
                                <div class="relative z-0">
                                    <input type="text" id="titulo_lamina" name="titulo_lamina" required maxlength="100"
                                        v-model="form_laminas_slider.titulo_lamina" @input="cambiosGuardados"
                                        :readonly="read_only_laminas"
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
                                        :readonly="read_only_laminas" v-model="form_laminas_slider.subtitulo_lamina"
                                        @input="cambiosGuardados" maxlength="100"
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
                                        :readonly="read_only_laminas" v-model="form_laminas_slider.identificador_lamina"
                                        @input="cambiosGuardados" min="1" max="99"
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
                                            <input type="checkbox" value="" class="sr-only peer" @click="cambiosGuardados"
                                                v-model="form_laminas_slider.visibilidad_lamina"
                                                :disabled="read_only_laminas">
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
                                    <img v-if="imagen_preview" :src="imagen_preview" class="w-48 rounded-lg h-52" />
                                    <input type="file" ref="input_imagen" class="hidden" @change="cambiarImagen" />
                                    <div v-if="mostrar_icono_borrar"
                                        class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px"
                                            viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;">
                                            <path
                                                d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-col">
                                <div class="flex items-end justify-end mt-20">
                                    <button class="flex items-center justify-center w-16 h-12 mr-6 bg-space rounded-xl"
                                        @click="paginaSiguiente" type="button"><svg width="26px" height="26px"
                                            viewBox="0 0 24 24" stroke-width="2" fill="none"
                                            xmlns="http://www.w3.org/2000/svg" color="#000000">
                                            <path d="M3 12h18m0 0l-8.5-8.5M21 12l-8.5 8.5" stroke="#FFF" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg></button>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-end">
                            <button type="button" id="btnModalClear" @click="limpiarFormLaminasSlider"
                                :disabled="read_only_laminas"
                                class="h-10 w-10 rounded-lg flex justify-center items-center ml-4 bg-[#32345a]">
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
                    <input type="number" class="w-16 mb-10 text-right" v-model="pagina" @input="cambiarPaginaInput" min="1">
                </div>
            </div>
        </div>
    </div>
    <!--Show modal-->
    <div id="modal-show-acordeon" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-4xl max-h-full">
            <!-- Modal content -->
            <div class="relative rounded-lg shadow modal">
                <!-- Modal header -->
                <div class="flex items-start justify-between p-4 rounded-t">
                    <div class="flex-col pt-4 ml-4">
                        <p class="text-xl font-bold text-gray-100" id="titulo_modal_acordeon">Acordeón</p>
                        <p class="text-base font-medium text-gray-400" id="subtitulo_modal_acordeon">Componente-Lamina</p>
                    </div>
                    <button type="button" class="bg-transparent rounded-lg p-1.5 ml-auto items-center border-none"
                        id="btnclose-acordeon">
                        <svg width="24px" height="24px" stroke-width="2" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg" color="#000000">
                            <path d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
                                stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="flex pb-10 space-y-6 justify-evenly">
                    <div class="flex-col" id="visualizacion_acordeon" v-if="pagina == 1 || pagina == ''">
                        <div v-if="!laminas_acordeon"
                            class="w-[750px] h-[400px] overflow-y-scroll overflow-x-hidden	flex items-center justify-center">
                            <div id="accordion-color" data-accordion="collapse"
                                data-active-classes="bg-blue-100 text-lightPurpleLogin">
                                <div v-for="number in 5">
                                    <h2 :id="'accordion-color-heading-' + number">
                                        <button type="button"
                                            class="flex items-center justify-between w-[700px] p-5 font-medium text-left text-white border border-b-0 border-white rounded-t-xl focus:ring-4 focus:ring-lightPurpleLogin hover:bg-white hover:text-lightPurpleLogin"
                                            :data-accordion-target="'accordion-color-body-' + number" aria-expanded="true"
                                            :aria-controls="'accordion-color-body-' + number">
                                            <span>Titulo {{ number }}</span>
                                            <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                    stroke-width="2" d="M9 5 5 1 1 5" />
                                            </svg>
                                        </button>
                                    </h2>
                                    <div :id="'accordion-color-body-' + number" class="hidden"
                                        :aria-labelledby="'accordion-color-heading-' + number">
                                        <div class="p-5 w-[700px] border border-b-0 border-lightPurpleLogin">
                                            <p class="mb-2 text-white">Contenido del acordeón.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-else
                            class="w-[750px] h-[400px] overflow-y-scroll overflow-x-hidden	flex items-center justify-center">
                            <div id="accordion-color-preview" data-accordion="collapse"
                                data-active-classes="bg-blue-100 text-lightPurpleLogin">
                                <div v-for="item in laminas_acordeon">
                                    <h2 v-if="item.campos.visibilidad_lamina"
                                        :id="'accordion-preview-heading-' + item.campos.identificador_lamina">
                                        <button type="button"
                                            class="flex items-center justify-between w-[700px] p-5 font-medium text-left text-white border border-b-0 border-white rounded-t-xl focus:ring-4 focus:ring-lightPurpleLogin hover:bg-white hover:text-lightPurpleLogin"
                                            :data-accordion-target="'accordion-preview-body-' + item.campos.identificador_lamina"
                                            aria-expanded="true"
                                            :aria-controls="'accordion-preview-body-' + item.campos.identificador_lamina">
                                            <span>{{ item.campos.titulo_lamina }}</span>
                                            <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                    stroke-width="2" d="M9 5 5 1 1 5" />
                                            </svg>
                                        </button>
                                    </h2>
                                    <div>
                                        <div v-if="item.campos.visibilidad_lamina"
                                            :id="'accordion-preview-body-' + item.campos.identificador_lamina"
                                            class="hidden"
                                            :aria-labelledby="'accordion-preview-heading-' + item.campos.identificador_lamina">
                                            <div class="p-5 w-[700px] border border-b-0 border-lightPurpleLogin">
                                                <p class="mb-2 text-white">{{ item.campos.contenido_lamina }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <form @submit.prevent="empezarAEditar" class="flex items-center justify-around w-full mt-4">
                            <div class="flex-column">
                                <div class="flex items-end justify-center">
                                    <div class="relative z-0 mr-10">
                                        <input type="text" maxlength="100" id="nombre_componente_acordeon"
                                            name="nombre_componente_acordeon" :readonly="read_only"
                                            v-model="form_componente.nombre_componente"
                                            class="block py-2.5 px-0 w-48 text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-lightPurpleLogin peer"
                                            placeholder=" " autocomplete="off" required />
                                        <label for="nombre_componente"
                                            class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre
                                            - Componente<span class="ml-1 text-sm"> * </span></label>
                                    </div>
                                    <div class="flex-col mt-2 mr-10">
                                        <label for="" class="absolute text-sm text-gray-200">Escoger sección<span
                                                class="ml-1 text-sm"> * </span></label>
                                        <select id="underline_select_acordeon" v-model="form_componente.id_seccion"
                                            :disabled="read_only"
                                            class="block mt-4 py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                            <option value="0" class="bg-gray-700">Seleccione una opción</option>
                                            <option class="bg-gray-700" v-for="seccion in secciones" :key="seccion.id"
                                                :value="seccion.id">{{
                                                    seccion.campos.titulo_seccion }}</option>
                                        </select>
                                        <div v-if="form_componente.id_seccion == 0"
                                            class="flex mt-2 mb-0 text-sm text-red-400 bg-transparent" role="alert">
                                            <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3"
                                                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
                                        <input type="number" id="ubicacion_componente_acordeon"
                                            name="ubicacion_componente_acordeon" :readonly="read_only"
                                            v-model="form_componente.ubicacion_componente"
                                            class="block py-2.5 px-0 w-48 text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-lightPurpleLogin peer"
                                            placeholder=" " autocomplete="off" required min="1" max="99" />
                                        <label for="ubicacion_componente"
                                            class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ubicación
                                            - Componente<span class="ml-1 text-sm"> * </span></label>
                                    </div>
                                    <div class="flex-column">
                                        <label for="visibilidad_componente_acordeon"
                                            class="text-sm text-gray-200">Visibilidad -
                                            Componente
                                            <span class="ml-1 text-sm"> * </span></label>
                                        <div class="flex justify-start mt-2">
                                            <label class="relative inline-flex items-center mb-5 cursor-pointer">
                                                <input type="checkbox" value="" class="sr-only peer" :disabled="read_only"
                                                    id="visibilidad_componente_acordeon"
                                                    name="visibilidad_componente_acordeon"
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
                                <button
                                    class="flex items-center justify-around w-48 h-12 mr-6 bg-space rounded-xl hover:bg-lightPurpleLogin"
                                    type="submit">
                                    <p class="ml-3 text-white">Empezar a editar |</p>
                                    <svg class="mr-3" width="26px" height="26px" viewBox="0 0 24 24" stroke-width="2"
                                        fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                                        <path d="M3 12h18m0 0l-8.5-8.5M21 12l-8.5 8.5" stroke="#FFF" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                    <form @submit.prevent="crearLamina" class="w-full px-10 py-6" id="s_formulario_acordeon" v-else>
                        <div class="flex justify-between w-full">
                            <div class="flex-col mt-20">
                                <button class="flex items-center justify-center w-16 h-12 mr-6 bg-space rounded-xl"
                                    @click="paginaAnterior" type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" fill="none"
                                        stroke-width="2" viewBox="0 0 24 24" color="#000000">
                                        <path stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                            d="M21 12H3m0 0 8.5-8.5M3 12l8.5 8.5"></path>
                                    </svg>
                                </button>
                            </div>
                            <div class="flex-col w-2/4">
                                <div class="relative z-0">
                                    <input type="text" id="titulo_lamina_acordeon" name="titulo_lamina_acordeon" required
                                        maxlength="100" v-model="form_laminas_acordeon.titulo_lamina"
                                        @input="cambiosGuardados" :readonly="read_only_laminas"
                                        class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-lightPurpleLogin peer"
                                        placeholder=" " autocomplete="off" />
                                    <span class="text-xs text-gray-400 absolute bottom-0.5 right-0">
                                        {{ form_laminas_acordeon.titulo_lamina.length }}/100</span>
                                    <label for="titulo_lamina"
                                        class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Título
                                        - lamina</label>
                                </div>
                                <div class="relative z-0 mt-8">
                                    <textarea id="contenido_lamina_acordeon" name="contenido_lamina_acordeon" required
                                        :readonly="read_only_laminas" v-model="form_laminas_acordeon.contenido_lamina"
                                        @input="cambiosGuardados" maxlength="1000"
                                        class="block h-12 max-h-64 py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-lightPurpleLogin peer"
                                        placeholder=" " autocomplete="off" />
                                    <span class="text-xs text-gray-400 absolute bottom-0.5 right-3">{{
                                        form_laminas_acordeon.contenido_lamina.length }}/1000</span>
                                    <label for="contenido_lamina_acordeon"
                                        class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contenido
                                        - lamina</label>
                                </div>
                                <div class="relative z-0 mt-8">
                                    <input type="number" id="identificador_lamina_acordeon"
                                        name="identificador_lamina_acordeon" required :readonly="read_only_laminas"
                                        v-model="form_laminas_acordeon.identificador_lamina" @input="cambiosGuardados"
                                        min="1" max="99"
                                        class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-lightPurpleLogin peer"
                                        placeholder=" " autocomplete="off" />
                                    <label for="identificador_lamina_acordeon"
                                        class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Identificador
                                        - lamina</label>
                                </div>
                                <div class="flex-col mt-8">
                                    <label for="" class="text-sm text-gray-200">Visibilidad - lamina *</label>
                                    <div class="flex justify-start mt-2">
                                        <label class="relative inline-flex items-center mb-5 cursor-pointer">
                                            <input type="checkbox" value="" class="sr-only peer" @click="cambiosGuardados"
                                                v-model="form_laminas_acordeon.visibilidad_lamina"
                                                :disabled="read_only_laminas">
                                            <div
                                                class="w-9 h-5 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-col">
                                <div class="flex items-end justify-end mt-20">
                                    <button class="flex items-center justify-center w-16 h-12 mr-6 bg-space rounded-xl"
                                        @click="paginaSiguiente" type="button"><svg width="26px" height="26px"
                                            viewBox="0 0 24 24" stroke-width="2" fill="none"
                                            xmlns="http://www.w3.org/2000/svg" color="#000000">
                                            <path d="M3 12h18m0 0l-8.5-8.5M21 12l-8.5 8.5" stroke="#FFF" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round">
                                            </path>
                                        </svg></button>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-end">
                            <button type="button" id="btnModalClearAcordeon" @click="limpiarFormLaminasAcordeon"
                                :disabled="read_only_laminas"
                                class="h-10 w-10 rounded-lg flex justify-center items-center ml-4 bg-[#32345a]">
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
                            <!-- Se le coloca la función para crear al botón y se evalua que ninguna función de validaciones sea false, si alguna es false el botón se desactiva -->
                            <button id="btnModalAddAcordeon" type="submit"
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
                    <input type="number" class="w-16 mb-10 text-right" v-model="pagina" @input="cambiarPaginaInput" min="1">
                </div>
            </div>
        </div>
    </div>
    <!--end Show modal-->

    <!--Show modal-->
    <div id="modal-show-banner" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-4xl max-h-full">
            <!-- Modal content -->
            <div class="relative rounded-lg shadow modal">
                <!-- Modal header -->
                <div class="flex items-start justify-between p-4 rounded-t">
                    <div class="flex-col pt-4 ml-4">
                        <p class="text-xl font-bold text-gray-100" id="titulo_modal-banner">Banner</p>
                        <p class="text-base font-medium text-gray-400" id="subtitulo_modal-banner">Componente-Lamina</p>
                    </div>
                    <button type="button" class="bg-transparent rounded-lg p-1.5 ml-auto items-center border-none"
                        id="btnclose-banner">
                        <svg width="24px" height="24px" stroke-width="2" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg" color="#000000">
                            <path d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
                                stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="flex pb-10 space-y-6 justify-evenly">
                    <div class="flex-col" id="visualizacion-banner" v-if="pagina == 1 || pagina == ''">
                        <div :class="clases_preview_carousel.clases_carousel_vacio">
                            <div class="w-[850px] mx-[25px]">
                                <div class="relative">
                                    <!-- Carousel wrapper -->
                                    <div class="relative overflow-hidden rounded-lg h-[450px]">
                                        <div class="imagen">
                                            <img class="w-48 rounded-lg h-52" href />
                                            <div class="imagen">
                                                <p class="text-xl font-bold text-gray-100" id="titulo-banner">Titulo</p>
                                                <p class="text-xl font-bold text-gray-100" id="subtutulo-banner">
                                                    dasdasdasdasdadsasdasdasdasddasdasd
                                                    dasdsdasdasdasdasdadssdasdsdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasda
                                                    dasdadsasdaasda
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Slider controls -->
                                    <button id="data-carousel-prev-banner" type="button"
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
                                    <button id="data-carousel-next-banner" type="button"
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
                        <div :class="clases_preview_carousel.clases_carousel_preview">
                            <div class="w-[850px] mx-[25px]">
                                <div class="relative">
                                    <!-- Carousel wrapper -->
                                    <div class="relative overflow-hidden rounded-lg h-[450px]">
                                        <div v-for="item in laminas_slider">
                                            <div v-if="item.campos.visibilidad_lamina"
                                                :id="'Banner-item-' + item.campos.identificador_lamina"
                                                class="absolute inset-0 z-20 transition-all duration-700 ease-in-out transform translate-x-0"
                                                data-carousel-item="">
                                                <img :src="RUTA_IMAGENES_LAMINAS + item.campos.archivo_imagen"
                                                    class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                                    alt="...">
                                                <div class="relative top-[300px] px-4 py-2 opacity-100">
                                                    <p class="ml-24 text-3xl font-bold text-left text-white">{{
                                                        item.campos.titulo_lamina }}</p>
                                                    <p class="ml-24 text-xl font-bold text-left text-white">{{
                                                        item.campos.subtitulo_lamina }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Slider indicators -->
                                    <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2">
                                        <div v-for="item in laminas_slider">
                                            <button v-if="item.campos.visibilidad_lamina"
                                                :id="'Banner-indicator-' + item.campos.identificador_lamina" type="button"
                                                class="w-3 h-3 ml-3 rounded-full"></button>
                                        </div>
                                    </div>
                                    <!-- Slider controls -->
                                    <button id="data-banner-prev" type="button"
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
                                    <button id="data-banner-next" type="button"
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
                        <form @submit.prevent="empezarAEditar" class="flex items-center justify-around w-full mt-4">
                            <div class="flex-column">
                                <div class="flex items-end justify-center">
                                    <div class="relative z-0 mr-10">
                                        <input type="text" maxlength="100" id="nombre_componente_banner"
                                            name="nombre_componente" :readonly="read_only"
                                            v-model="form_componente.nombre_componente"
                                            class="block py-2.5 px-0 w-48 text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-lightPurpleLogin peer"
                                            placeholder=" " autocomplete="off" required />
                                        <label for="nombre_componente"
                                            class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre
                                            - Componente<span class="ml-1 text-sm"> * </span></label>
                                    </div>
                                    <div class="flex-col mt-2 mr-10">
                                        <label for="" class="absolute text-sm text-gray-200">Escoger sección<span
                                                class="ml-1 text-sm"> * </span></label>
                                        <select id="underline_select_banner" v-model="form_componente.id_seccion"
                                            :disabled="read_only"
                                            class="block mt-4 py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                            <option value="0" class="bg-gray-700">Seleccione una opción</option>
                                            <option class="bg-gray-700" v-for="seccion in secciones" :key="seccion.id"
                                                :value="seccion.id">{{ seccion.campos.titulo_seccion }}</option>
                                        </select>
                                        <div v-if="form_componente.id_seccion == 0"
                                            class="flex mt-2 mb-0 text-sm text-red-400 bg-transparent" role="alert">
                                            <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3"
                                                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
                                        <input type="number" id="ubicacion_componente_banner" name="ubicacion_componente"
                                            :readonly="read_only" v-model="form_componente.ubicacion_componente"
                                            class="block py-2.5 px-0 w-48 text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-lightPurpleLogin peer"
                                            placeholder=" " autocomplete="off" required min="1" max="99" />
                                        <label for="ubicacion_componente"
                                            class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ubicación
                                            - Componente<span class="ml-1 text-sm"> * </span></label>
                                    </div>
                                    <div class="flex-column">
                                        <label for="visibilidad_componente" class="text-sm text-gray-200">Visibilidad -
                                            Componente
                                            <span class="ml-1 text-sm"> * </span></label>
                                        <div class="flex justify-start mt-2">
                                            <label class="relative inline-flex items-center mb-5 cursor-pointer">
                                                <input type="checkbox" value="" class="sr-only peer" :disabled="read_only"
                                                    id="visibilidad_componente_banner" name="visibilidad_componente"
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
                                <button
                                    class="flex items-center justify-around w-48 h-12 mr-6 bg-space rounded-xl hover:bg-lightPurpleLogin"
                                    type="submit">
                                    <p class="ml-3 text-white">Empezar a editar |</p>
                                    <svg class="mr-3" width="26px" height="26px" viewBox="0 0 24 24" stroke-width="2"
                                        fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                                        <path d="M3 12h18m0 0l-8.5-8.5M21 12l-8.5 8.5" stroke="#FFF" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                    <form @submit.prevent="crearLamina" class="w-full px-10 py-6" id="s_formulario" v-else>
                        <div class="flex justify-between w-full">
                            <div class="flex-col mt-20">
                                <button class="flex items-center justify-center w-16 h-12 mr-6 bg-space rounded-xl"
                                    @click="paginaAnterior" type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" fill="none"
                                        stroke-width="2" viewBox="0 0 24 24" color="#000000">
                                        <path stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                            d="M21 12H3m0 0 8.5-8.5M3 12l8.5 8.5"></path>
                                    </svg>
                                </button>
                            </div>
                            <div class="flex-col w-72">
                                <div class="relative z-0">
                                    <input type="text" id="titulo_lamina_banner" name="titulo_lamina" required
                                        maxlength="100" v-model="form_laminas_slider.titulo_lamina"
                                        @input="cambiosGuardados" :readonly="read_only_laminas"
                                        class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-lightPurpleLogin peer"
                                        placeholder=" " autocomplete="off" />
                                    <span class="text-xs text-gray-400 absolute bottom-0.5 right-0">
                                        {{ form_laminas_slider.titulo_lamina.length }}/100</span>
                                    <label for="titulo_lamina"
                                        class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Título
                                        - lamina</label>
                                </div>
                                <div class="relative z-0 mt-8">
                                    <input type="text" id="subtitulo_lamina_banner" name="subtitulo_lamina" required
                                        :readonly="read_only_laminas" v-model="form_laminas_slider.subtitulo_lamina"
                                        @input="cambiosGuardados" maxlength="100"
                                        class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-lightPurpleLogin peer"
                                        placeholder=" " autocomplete="off" />
                                    <span class="text-xs text-gray-400 absolute bottom-0.5 right-0">{{
                                        form_laminas_slider.subtitulo_lamina.length }}/100</span>
                                    <label for="subtitulo_lamina"
                                        class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Subtítulo
                                        - lamina</label>
                                </div>
                                <div class="relative z-0 mt-8">
                                    <input type="number" id="identificador_lamina_banner" name="identificador_lamina"
                                        required :readonly="read_only_laminas"
                                        v-model="form_laminas_slider.identificador_lamina" @input="cambiosGuardados" min="1"
                                        max="99"
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
                                            <input type="checkbox" value="" class="sr-only peer" @click="cambiosGuardados"
                                                v-model="form_laminas_slider.visibilidad_lamina"
                                                :disabled="read_only_laminas">
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
                                    <img v-if="imagen_preview" :src="imagen_preview" class="w-48 rounded-lg h-52" />
                                    <input type="file" ref="input_imagen" class="hidden" @change="cambiarImagen" />
                                    <div v-if="mostrar_icono_borrar"
                                        class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px"
                                            viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;">
                                            <path
                                                d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-col">
                                <div class="flex items-end justify-end mt-20">
                                    <button class="flex items-center justify-center w-16 h-12 mr-6 bg-space rounded-xl"
                                        @click="paginaSiguiente" type="button"><svg width="26px" height="26px"
                                            viewBox="0 0 24 24" stroke-width="2" fill="none"
                                            xmlns="http://www.w3.org/2000/svg" color="#000000">
                                            <path d="M3 12h18m0 0l-8.5-8.5M21 12l-8.5 8.5" stroke="#FFF" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg></button>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-end">
                            <button type="button" id="btnModalClearBanner" @click="limpiarFormLaminasSlider"
                                :disabled="read_only_laminas"
                                class="h-10 w-10 rounded-lg flex justify-center items-center ml-4 bg-[#32345a]">
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
                            <!-- Se le coloca la función para crear al botón y se evalua que ninguna función de validaciones sea false, si alguna es false el botón se desactiva -->
                            <button id="btnModalAddBanner" type="submit"
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
                    <input type="number" class="w-16 mb-10 text-right" v-model="pagina" @input="cambiarPaginaInput" min="1">
                </div>
            </div>
        </div>
    </div>
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
}
</style>
<script setup>
import { Modal, Carousel, Accordion } from "flowbite";
import { initDropdowns } from "flowbite";
import axios from "axios";
import Swal from 'sweetalert2';
import validaciones from '../assets/validaciones.js';

definePageMeta({
    layout: "principal",
    //Se le establece un middleware a la página
    middleware: "middleware-paginas"
});
onMounted(async () => {
    initDropdowns();
    token.value = localStorage.getItem('token');
    await cargarSecciones();
    await llenarSelectTiposCategorias();
    await llenarSelectTiposComponentes();

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            pagina.value = 1;
            limpiarFormComponente();
            limpiarFormLaminasSlider();
            limpiarFormLaminasAcordeon();
            id_componente.value = '';
            laminas_slider.value = '';
            laminas_acordeon.value = '';
            cambios_guardados.value = true;
            read_only.value = false;
            read_only_laminas.value = false;
        }
    });
});

const EVENTO = new Event('reset-timer');
const token = ref();
const secciones = ref(null);
async function cargarSecciones() {
    try {
        const { data: res } = await axios.get('/secciones', {
            headers: {
                Authorization: `Bearer ${token.value}`,
            },
        });
        secciones.value = res.data;
        window.dispatchEvent(EVENTO);
        //Se refresca el valor del token con la respuesta del axios
        localStorage.setItem('token', res.token);
        token.value = localStorage.getItem('token');
        console.log(res.token);
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

const select_tipos_categorias = ref();

const select_tipos_componentes = ref();

const RUTA_IMAGENES = "http://localhost:8000/storage/tipos_componentes/";
const RUTA_IMAGENES_LAMINAS = "http://localhost:8000/storage/laminas/images/";

async function llenarSelectTiposCategorias() {
    try {
        const { data: res } = await axios.get('/tipos-categoria-select', {
            headers: {
                Authorization: `Bearer ${token.value}`,
            },
        });
        window.dispatchEvent(EVENTO);
        localStorage.setItem('token', res.token);
        token.value = localStorage.getItem('token');
        select_tipos_categorias.value = res.categorias;
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

async function llenarSelectTiposComponentes() {
    try {
        const { data: res } = await axios.get('/t_componentes-select', {
            headers: {
                Authorization: `Bearer ${token.value}`,
            },
        });
        window.dispatchEvent(EVENTO);
        localStorage.setItem('token', res.token);
        token.value = localStorage.getItem('token');
        select_tipos_componentes.value = res.tipos_comp;
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

const texto_dropdown = ref('Seleccionar');

const tipos_componentes_filtrados = ref();

const seleccionando_componente = ref(true);

const informacion_componente_seleccionado = ref({
    nombre: "",
    descripcion: "",
    preview: "",
})

const form_componente = ref({
    id_componente: "",
    nombre_componente: "",
    ubicacion_componente: "",
    visibilidad_componente: false,
    id_tipo_componente: "",
    id_seccion: "0",
})

function limpiarFormComponente() {
    form_componente.value.id_componente = '';
    form_componente.value.nombre_componente = '';
    form_componente.value.ubicacion_componente = '';
    form_componente.value.visibilidad_componente = false;
    form_componente.value.id_seccion = 0;
}

function filtrarTiposComponentes(tipo) {
    texto_dropdown.value = tipo;
    tipos_componentes_filtrados.value = select_tipos_componentes.value.filter(item =>
        item.categoria_tipo_componente.toLowerCase().includes(tipo.toLowerCase())
    );
}

function volverASeleccionar() {
    texto_dropdown.value = 'Seleccionar';
    seleccionando_componente.value = true;
    tipos_componentes_filtrados.value = '';
    informacion_componente_seleccionado.value.nombre = '';
    informacion_componente_seleccionado.value.descripcion = '';
    informacion_componente_seleccionado.value.preview = '';
    form_componente.value.id_tipo_componente = '';
}

function seleccionarTipoComponente(tipo) {
    seleccionando_componente.value = false;
    form_componente.value.id_tipo_componente = tipo;
    const tipo_seleccionado = ref();
    tipo_seleccionado.value = tipos_componentes_filtrados.value.filter(item => item.id_tipo_componente == tipo);
    informacion_componente_seleccionado.value.nombre = tipo_seleccionado.value[0].tipo_componente;
    informacion_componente_seleccionado.value.descripcion = tipo_seleccionado.value[0].descripcion_tipo_componente;
    informacion_componente_seleccionado.value.preview = tipo_seleccionado.value[0].imagen_tipo_componente;
}


var imagen_banner = null;

async function abrirModal() {
    if (informacion_componente_seleccionado.value.nombre == 'Slider') {
        const MODAL_ID = document.getElementById('modal-show');
        const BOTON_CERRAR = document.getElementById('btnclose');
        const OPCIONES_MODAL = {
            backdrop: 'static',
            backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
        };
        BOTON_CERRAR.addEventListener('click', function () {
            MODAL.hide();
            pagina.value = 1;
            limpiarFormComponente();
            limpiarFormLaminasSlider();
            id_componente.value = '';
            laminas_slider.value = '';
            cambios_guardados.value = true;
            read_only.value = false;
            read_only_laminas.value = false;
        });

        const MODAL = new Modal(MODAL_ID, OPCIONES_MODAL);
        MODAL.show();

        const items = [
            {
                position: 0,
                el: document.getElementById('carousel-item-1')
            },
            {
                position: 1,
                el: document.getElementById('carousel-item-2')
            },
            {
                position: 2,
                el: document.getElementById('carousel-item-3')
            },
            {
                position: 3,
                el: document.getElementById('carousel-item-4')
            },
        ];


        const items_indicators = [
            {
                position: 0,
                el: document.getElementById('carousel-indicator-1')
            },
            {
                position: 1,
                el: document.getElementById('carousel-indicator-2')
            },
            {
                position: 2,
                el: document.getElementById('carousel-indicator-3')
            },
            {
                position: 3,
                el: document.getElementById('carousel-indicator-4')
            },
        ];

        const options = {
            defaultPosition: 1,
            interval: 3000,

            indicators: {
                activeClasses: 'bg-white dark:bg-gray-800',
                inactiveClasses: 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
                items: items_indicators,
            },
        };
        if (document.getElementById('carousel-item-1')) {
            const carousel = new Carousel(items, options);
            carousel.cycle()
            // set event listeners for prev and next buttons
            const prevButton = document.getElementById('data-carousel-prev');
            const nextButton = document.getElementById('data-carousel-next');
            prevButton.addEventListener('click', () => {
                carousel.prev();
            });
            nextButton.addEventListener('click', () => {
                carousel.next();
            });
        }
    } else if (informacion_componente_seleccionado.value.nombre == 'Acordeón') {
        await nextTick();

        const ITEMS_ACORDEON = [];

        for (var i = 1; i < 6; i++) {
            ITEMS_ACORDEON.push({
                id: 'accordion-color-heading-' + i,
                triggerEl: document.querySelector('#accordion-color-heading-' + i),
                targetEl: document.querySelector('#accordion-color-body-' + i),
                active: false
            })
        }

        const ACORDEON_OPTIONS = {
            alwaysOpen: false,
            activeClasses: 'border border-b-0 border-white rounded-t-xl bg-lightPurpleLogin',
        };

        if (document.querySelector('#' + ITEMS_ACORDEON[0].id)) {
            const ACORDEON = new Accordion(ITEMS_ACORDEON, ACORDEON_OPTIONS);
            ACORDEON.open(ITEMS_ACORDEON[0].id);
        }

        const MODAL_ID = document.getElementById('modal-show-acordeon');
        const BOTON_CERRAR = document.getElementById('btnclose-acordeon');
        const OPCIONES_MODAL = {
            backdrop: 'static',
            backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
        };
        BOTON_CERRAR.addEventListener('click', function () {
            MODAL.hide();
            pagina.value = 1;
            limpiarFormComponente();
            limpiarFormLaminasAcordeon();
            id_componente.value = '';
            laminas_acordeon.value = '';
            cambios_guardados.value = true;
            read_only.value = false;
            read_only_laminas.value = false;
        });

        const MODAL = new Modal(MODAL_ID, OPCIONES_MODAL);
        MODAL.show();



    } else if (informacion_componente_seleccionado.value.nombre == 'Imagen - Texto V1' ||
        informacion_componente_seleccionado.value.nombre == 'Imagen - Texto V2') {
        const MODAL_ID = document.getElementById('modal-show-banner');
        const BOTON_CERRAR = document.getElementById('btnclose-banner');
        const OPCIONES_MODAL = {
            backdrop: 'static',
            backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
        };
        BOTON_CERRAR.addEventListener('click', function () {
            MODAL.hide();

        });
        const MODAL = new Modal(MODAL_ID, OPCIONES_MODAL, imagen_banner = "v1",
            imagen_banner = "v2");
        MODAL.show();
    }
}

const pagina = ref(1);

const id_componente = ref();

const read_only = ref(false);

async function empezarAEditar() {
    if (id_componente.value) {
        paginaSiguiente();
    } else if (form_componente.value.id_seccion != 0) {
        token.value = localStorage.getItem('token');
        Swal.fire({
            title: 'Confirmación',
            text: "Una vez seleccionado este tipo de componente, podrá editar la información de su contenido, pero no podrá cambiar su tipo de componente. ¿Desea continuar?",
            icon: 'info',
            reverseButtons: true,
            showCancelButton: true,
            confirmButtonColor: '#3F4280',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Continuar',
            allowOutsideClick: false,
            cancelButtonText: 'Cancelar'
        }).then(async (result) => {
            if (result.isConfirmed) {
                console.log(form_componente.value);

                const FORM_DATA = new FormData();
                FORM_DATA.append('nombre_componente', form_componente.value.nombre_componente);

                console.log(FORM_DATA.get('nombre_componente'));

                FORM_DATA.append('ubicacion_componente', form_componente.value.ubicacion_componente);
                FORM_DATA.append('visibilidad_componente', form_componente.value.visibilidad_componente ? 1 : 0);
                FORM_DATA.append('id_tipo_componente', form_componente.value.id_tipo_componente);
                FORM_DATA.append('id_seccion', form_componente.value.id_seccion);

                try {
                    const res = await axios.post('/componentes', FORM_DATA, {
                        headers: {
                            Authorization: `Bearer ${token.value}`,
                        },
                    });

                    read_only.value = true;

                    window.dispatchEvent(EVENTO);
                    localStorage.setItem('token', res.data.data.token)
                    token.value = localStorage.getItem('token');
                    pagina.value = 2;
                    id_componente.value = res.data.data.id_comp;
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
        });
    }
}

const cambios_guardados = ref(true);

const laminas_slider = ref();

const laminas_acordeon = ref();

const imagen_texto_v = ref();

function cambiosGuardados() {
    if (cambios_guardados.value == true) {
        cambios_guardados.value = false;
    }
}

function paginaSiguiente() {
    if (cambios_guardados.value == false) {
        Swal.fire({
            icon: 'warning',
            title: 'Advertencia',
            text: 'Para poder realizar esta acción, guarda los cambios realizados.',
            confirmButtonColor: '#3F4280'
        });
    } else {
        pagina.value = pagina.value + 1;
        cambiarPaginaInput();
    }
}

async function paginaAnterior() {
    if (cambios_guardados.value == false) {
        Swal.fire({
            icon: 'warning',
            title: 'Advertencia',
            text: 'Para poder realizar esta acción, guarda los cambios realizados.',
            confirmButtonColor: '#3F4280'
        });
    } else {
        pagina.value = pagina.value - 1;
        cambiarPaginaInput();
    }
}

async function cambiarPaginaInput() {
    if (pagina.value != '') {
        if (!id_componente.value) {
            pagina.value = 1;
        }

        if (informacion_componente_seleccionado.value.nombre == 'Slider') {
            if (!laminas_slider.value && pagina.value > 2) {
                pagina.value = 2;
            } else if (laminas_slider.value && pagina.value == 1) {
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
            } else if (laminas_slider.value && pagina.value == laminas_slider.value.length + 2) {
                read_only_laminas.value = false;
                limpiarFormLaminasSlider();
            } else if (laminas_slider.value && pagina.value > (laminas_slider.value.length + 2)) {
                pagina.value = laminas_slider.value.length + 2;
            } else if (laminas_slider.value && pagina.value <= (laminas_slider.value.length + 2) && pagina.value != 1) {
                read_only_laminas.value = true;
                form_laminas_slider.value.archivo_imagen = laminas_slider.value[pagina.value - 2].campos.archivo_imagen;
                imagen_preview.value = RUTA_IMAGENES_LAMINAS + form_laminas_slider.value.archivo_imagen;
                form_laminas_slider.value.titulo_lamina = laminas_slider.value[pagina.value - 2].campos.titulo_lamina;
                form_laminas_slider.value.subtitulo_lamina = laminas_slider.value[pagina.value - 2].campos.subtitulo_lamina;
                form_laminas_slider.value.identificador_lamina = laminas_slider.value[pagina.value - 2].campos.identificador_lamina;
                form_laminas_slider.value.visibilidad_lamina = laminas_slider.value[pagina.value - 2].campos.visibilidad_lamina;
            }
        } else if (informacion_componente_seleccionado.value.nombre == 'Acordeón') {
            if (!laminas_acordeon.value && pagina.value > 2) {
                pagina.value = 2;
            } else if (laminas_acordeon.value && pagina.value == 1) {
                await nextTick();

                const ITEMS_ACORDEON = [];

                laminas_acordeon.value.forEach((element) => {
                    const IDENTIFICADOR_LAMINA = element.campos.identificador_lamina;
                    const VISIBILIDAD_LAMINA = element.campos.visibilidad_lamina;

                    if (VISIBILIDAD_LAMINA == true) {
                        // Agregar un nuevo elemento al arreglo 'items'
                        ITEMS_ACORDEON.push({
                            id: 'accordion-preview-heading-' + IDENTIFICADOR_LAMINA,
                            triggerEl: document.querySelector('#accordion-preview-heading-' + IDENTIFICADOR_LAMINA),
                            targetEl: document.querySelector('#accordion-preview-body-' + IDENTIFICADOR_LAMINA),
                            active: false
                        })
                    }
                });

                const ACORDEON_OPTIONS = {
                    alwaysOpen: false,
                    activeClasses: 'border border-b-0 border-white rounded-t-xl bg-lightPurpleLogin',
                };

                if (document.querySelector('#' + ITEMS_ACORDEON[0].id)) {
                    const ACORDEON = new Accordion(ITEMS_ACORDEON, ACORDEON_OPTIONS);
                    ACORDEON.open(ITEMS_ACORDEON[0].id);
                }

            } else if (laminas_acordeon.value && pagina.value == laminas_acordeon.value.length + 2) {
                read_only_laminas.value = false;
                limpiarFormLaminasAcordeon();
            } else if (laminas_acordeon.value && pagina.value > (laminas_acordeon.value.length + 2)) {
                pagina.value = laminas_acordeon.value.length + 2;
            } else if (laminas_acordeon.value && pagina.value <= (laminas_acordeon.value.length + 2) && pagina.value != 1) {
                read_only_laminas.value = true;
                form_laminas_acordeon.value.titulo_lamina = laminas_acordeon.value[pagina.value - 2].campos.titulo_lamina;
                form_laminas_acordeon.value.contenido_lamina = laminas_acordeon.value[pagina.value - 2].campos.contenido_lamina;
                form_laminas_acordeon.value.identificador_lamina = laminas_acordeon.value[pagina.value - 2].campos.identificador_lamina;
                form_laminas_acordeon.value.visibilidad_lamina = laminas_acordeon.value[pagina.value - 2].campos.visibilidad_lamina;
            }
        }
    }
}

function limpiarFormLaminasSlider() {
    form_laminas_slider.value.titulo_lamina = '';
    form_laminas_slider.value.subtitulo_lamina = '';
    form_laminas_slider.value.identificador_lamina = '';
    form_laminas_slider.value.visibilidad_lamina = false;
    limpiarImagen();
}

const form_laminas_slider = ref({
    id_lamina_componente: '',
    archivo_imagen: '',
    titulo_lamina: '',
    subtitulo_lamina: '',
    identificador_lamina: '',
    visibilidad_lamina: false,
});

const form_laminas_acordeon = ref({
    id_lamina_componente: '',
    titulo_lamina: '',
    contenido_lamina: '',
    identificador_lamina: '',
    visibilidad_lamina: false,
})

function limpiarFormLaminasAcordeon() {
    form_laminas_acordeon.value.titulo_lamina = '';
    form_laminas_acordeon.value.contenido_lamina = '';
    form_laminas_acordeon.value.identificador_lamina = '';
    form_laminas_acordeon.value.visibilidad_lamina = false;
}

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

const read_only_laminas = ref(false);

async function crearLamina() {
    if (read_only_laminas.value == false) {
        token.value = localStorage.getItem('token');

        try {
            if (informacion_componente_seleccionado.value.nombre == 'Slider') {
                const FORM_DATA = new FormData();
                FORM_DATA.append('titulo_lamina', form_laminas_slider.value.titulo_lamina);
                FORM_DATA.append('subtitulo_lamina', form_laminas_slider.value.subtitulo_lamina);
                FORM_DATA.append('identificador_lamina', form_laminas_slider.value.identificador_lamina);
                FORM_DATA.append('visibilidad_lamina', form_laminas_slider.value.visibilidad_lamina ? 1 : 0);
                FORM_DATA.append('archivo_imagen', form_laminas_slider.value.archivo_imagen);
                FORM_DATA.append('id_componente', id_componente.value);

                const res = await axios.post('/laminas', FORM_DATA, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${token.value}`,
                    },
                });

                window.dispatchEvent(EVENTO);
                localStorage.setItem('token', res.data.data.token);
                token.value = localStorage.getItem('token');

                clases_preview_carousel.value.clases_carousel_preview = 'flex';
                clases_preview_carousel.value.clases_carousel_vacio = 'flex hidden';
            } else if (informacion_componente_seleccionado.value.nombre == 'Acordeón') {
                const FORM_DATA = new FormData();
                FORM_DATA.append('titulo_lamina', form_laminas_acordeon.value.titulo_lamina);
                FORM_DATA.append('contenido_lamina', form_laminas_acordeon.value.contenido_lamina);
                FORM_DATA.append('identificador_lamina', form_laminas_acordeon.value.identificador_lamina);
                FORM_DATA.append('visibilidad_lamina', form_laminas_acordeon.value.visibilidad_lamina ? 1 : 0);
                FORM_DATA.append('id_componente', id_componente.value);

                const res = await axios.post('/laminas', FORM_DATA, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${token.value}`,
                    },
                });

                window.dispatchEvent(EVENTO);
                localStorage.setItem('token', res.data.data.token);
                token.value = localStorage.getItem('token');
            }

            TOAST.fire({
                icon: 'success',
                title: 'Lamina creada exitosamente'
            });

            await leerLaminas();
            read_only_laminas.value = true;
            cambios_guardados.value = true;

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
}

async function leerLaminas() {
    token.value = localStorage.getItem('token');
    try {
        const { data: res } = await axios.post('/laminas/' + id_componente.value, null, {
            headers: {
                Authorization: `Bearer ${token.value}`,
            },
        });

        window.dispatchEvent(EVENTO);
        localStorage.setItem('token', res.token);
        token.value = localStorage.getItem('token');
        switch (informacion_componente_seleccionado.value.nombre) {
            case 'Slider':
                laminas_slider.value = res.data;
                console.log(laminas_slider.value);
                break;
            case 'Acordeón':
                laminas_acordeon.value = res.data;
                console.log(laminas_acordeon.value);
                break;
            case 'Imagen - Texto V1':
                imagen_texto_v.value = res.data;
                console.log(imagen_texto_v.value);
                break;
            case 'Imagen - Texto V2':
                imagen_texto_v.value = res.data;
                console.log(imagen_texto_v.value);
                break;
        }
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

const clases_preview_carousel = ref({
    clases_carousel_vacio: 'flex',
    clases_carousel_preview: 'flex hidden',
});

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
    if (input_imagen.value.value) {
        input_imagen.value.value = '';
    }
    form_laminas_slider.value.archivo_imagen = "";
    mostrar_icono_borrar.value = false;
}

</script>