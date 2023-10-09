<template>
    <div class="principal mt-4">
        <MenuTipoComponenteDashboard class="mr-8" />
        <div class="flex mt-10 ml-8">
            <div class="flex-col">
                <h2 class="text-yellow-500 text-xl font-semibold">Tipo - Componentes</h2>

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
                <div v-if="tipos_componentes_filtrados" class=" flex-col mt-6 tipo_componente pr-4 overflow-y-scroll h-2/4">
                    <div @click="seleccionarTipoComponente(item.id_tipo_componente)"
                        v-for="item in tipos_componentes_filtrados"
                        class="flex justify-center items-center cursor-pointer hover:bg-slate-200 bg-slate-100 w-56 h-52 rounded-lg mt-6">
                        <div class="flex-column text-center">
                            <img :src="RUTA_IMAGENES + item.icono_tipo_componente" :alt="item.tipo_componente">
                            <p class="mt-3 font-semibold text-purpleLogin">{{ item.tipo_componente }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!--Seccion para mostrar la preview del componente-->
            <div v-if="!seleccionando_componente && informacion_componente_seleccionado"
                class="flex-col ml-10 w-full h-screen">
                <div class="slider_example relative ml-10 w-full">
                    <img :src="RUTA_IMAGENES + informacion_componente_seleccionado.preview"
                        :alt="informacion_componente_seleccionado.nombre" class="w-9/12 rounded-lg m-auto">
                </div>
                <div class="flex justify-evenly">
                    <div class="w-2/4 flex-col mt-6 ml-32">
                        <button @click="abrirModal"
                            class="w-40 h-10 bg-slate-800 text-gray-100 rounded-lg mt-2 flex text-sm justify-around items-center"
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
                        <div class="bg-gray-300 rounded-lg w-full h-32 flex-col">
                            <p class="text-gray-900 text-lg font-semibold pl-4 pt-2">{{
                                informacion_componente_seleccionado.nombre }}</p>
                            <p class="pl-4 pt-2 pr-2 text-slate-900 text-sm font-normal">
                                {{ informacion_componente_seleccionado.descripcion }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="flex items-center justify-center ml-10 w-full h-screen">
                <div class="flex-column text-center">
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
                    <div class="flex-col" id="visualizacion" v-if="pagina == 1">
                        <div :class="clases_preview_carousel.clases_carousel_vacio">
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
                        <div :class="clases_preview_carousel.clases_carousel_preview">
                            <div class="w-[850px] mx-[25px]">
                                <div class="relative">
                                    <!-- Carousel wrapper -->
                                    <div class="relative overflow-hidden rounded-lg h-[450px]">
                                        <!-- Item 1 -->
                                        <div v-for="item in laminas_slider"
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
                                    <!-- Slider indicators -->
                                    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                                        <button v-for="item in laminas_slider"
                                            :id="'carouselP-indicator-' + item.campos.identificador_lamina" type="button"
                                            class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1"></button>
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
                        <form @submit.prevent="empezarAEditar" class="flex mt-4 w-full justify-around items-center">
                            <div class="flex-column">
                                <div class="flex items-end justify-center">
                                    <div class="relative z-0 mr-10">
                                        <input type="text" maxlength="100" id="nombre_componente" name="nombre_componente"
                                            :readonly="read_only" v-model="form_componente.nombre_componente"
                                            class="block py-2.5 px-0 w-48 text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                            placeholder=" " autocomplete="off" required />
                                        <label for="nombre_componente"
                                            class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre
                                            - Componente<span class="text-sm ml-1"> * </span></label>
                                    </div>
                                    <div class="mt-2 flex-col mr-10">
                                        <label for="" class="text-sm absolute text-gray-200">Escoger sección<span
                                                class="text-sm ml-1"> * </span></label>
                                        <select id="underline_select" v-model="form_componente.id_seccion"
                                            :readonly="read_only"
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
                                            class="block py-2.5 px-0 w-48 text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
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
                                                <input type="checkbox" value="" class="sr-only peer" :readonly="read_only"
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
                                <button class="bg-space flex justify-around items-center w-48 h-12 rounded-xl mr-6"
                                    type="submit">
                                    <p class="text-white ml-3">Empezar a editar |</p>
                                    <svg class="mr-3" width="26px" height="26px" viewBox="0 0 24 24" stroke-width="2"
                                        fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                                        <path d="M3 12h18m0 0l-8.5-8.5M21 12l-8.5 8.5" stroke="#FFF" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                    <form @submit.prevent="crearLaminaSlider" class="w-full py-6 px-10" id="s_formulario" v-else>
                        <div class="flex justify-between w-full">
                            <div class="flex-col mt-20">
                                <button class="bg-space flex justify-center items-center w-16 h-12 rounded-xl mr-6"
                                    @click="paginaAnteriorSlider" type="button">
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
                                        class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                        placeholder=" " autocomplete="off" />
                                    <span class="text-xs text-gray-400 absolute bottom-0.5 right-0"></span>
                                    <span class="text-xs text-gray-400 absolute bottom-0.5 right-0"> 0 /100</span>
                                    <label for="titulo_lamina"
                                        class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Título
                                        - lamina<span class="text-sm ml-1"> * </span></label>
                                </div>
                                <div class="relative z-0 mt-8">
                                    <input type="text" id="subtitulo_lamina" name="subtitulo_lamina" required
                                        v-model="form_laminas_slider.subtitulo_lamina" @input="cambiosGuardados"
                                        maxlength="100"
                                        class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                        placeholder=" " autocomplete="off" />
                                    <span class="text-xs text-gray-400 absolute bottom-0.5 right-0"></span>
                                    <span class="text-xs text-gray-400 absolute bottom-0.5 right-0"> 0 /100</span>
                                    <label for="subtitulo_lamina"
                                        class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Subtítulo
                                        - lamina<span class="text-sm ml-1"> * </span></label>
                                </div>
                                <div class="relative z-0 mt-8">
                                    <input type="number" id="identificador_lamina" name="identificador_lamina" required
                                        v-model="form_laminas_slider.identificador_lamina" @input="cambiosGuardados" min="1"
                                        max="99"
                                        class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                        placeholder=" " autocomplete="off" />
                                    <span class="text-xs text-gray-400 absolute bottom-0.5 right-0"></span>
                                    <label for="identificador_lamina"
                                        class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Identificador
                                        - lamina<span class="text-sm ml-1"> * </span></label>
                                </div>
                                <div class="flex-col mt-8">
                                    <label for="" class="text-sm text-gray-200">Visibilidad</label>
                                    <div class="flex justify-start mt-2">
                                        <label class="relative inline-flex items-center mb-5 cursor-pointer">
                                            <input type="checkbox" value="" class="sr-only peer" @click="cambiosGuardados"
                                                v-model="form_laminas_slider.visibilidad_lamina">
                                            <div
                                                class="w-9 h-5 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-col">
                                <p class="text-center text-white">Imagen</p>
                                <div class="h-52 w-48 border-2 border-slate-900 ml-14 rounded-lg cursor-pointer relative max-[630px]:m-auto"
                                    @click="SELECCIONAR_ARCHIVO" @mouseover="iconoBorrarTrue"
                                    @mouseleave="iconoBorrarFalse">
                                    <img v-if="imagen_preview" :src="imagen_preview" class="h-52 w-48 rounded-lg" />
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
                                <div class="mt-20 flex justify-end items-end">
                                    <button class="bg-space flex justify-center items-center w-16 h-12 rounded-xl mr-6"
                                        @click="paginaSiguienteSlider" type="button"><svg width="26px" height="26px"
                                            viewBox="0 0 24 24" stroke-width="2" fill="none"
                                            xmlns="http://www.w3.org/2000/svg" color="#000000">
                                            <path d="M3 12h18m0 0l-8.5-8.5M21 12l-8.5 8.5" stroke="#FFF" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg></button>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-end">
                            <button type="button" id="btnModalClear"
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
                    <input type="number" class="mb-10 w-16 text-right" v-model="pagina" @input="cambiarPaginaInput" min="1">
                </div>
                <pre>
                    {{ form_laminas_slider }}
                </pre>
            </div>
        </div>
    </div>
    <!--end Show modal-->
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
import { Modal, Carousel } from "flowbite";
import { initDropdowns } from "flowbite";
import axios from "axios";
import Swal from 'sweetalert2';

definePageMeta({
    layout: "principal",
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
        }
    });
});
const form = ref({
    id_seccion: 0,
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
    }
}

const select_tipos_categorias = ref();

const select_tipos_componentes = ref();

const RUTA_IMAGENES = "http://localhost:8000/storage/tipos_componentes/";
const RUTA_IMAGENES_LAMINAS = "http://localhost:8000/storage/laminas/images/";

async function llenarSelectTiposCategorias() {
    const { data: res } = await axios.get('/tipos-categoria-select', {
        headers: {
            Authorization: `Bearer ${token.value}`,
        },
    });
    window.dispatchEvent(EVENTO);
    localStorage.setItem('token', res.token);
    token.value = localStorage.getItem('token');
    select_tipos_categorias.value = res.categorias;
}

async function llenarSelectTiposComponentes() {
    const { data: res } = await axios.get('/t_componentes-select', {
        headers: {
            Authorization: `Bearer ${token.value}`,
        },
    });
    window.dispatchEvent(EVENTO);
    localStorage.setItem('token', res.token);
    token.value = localStorage.getItem('token');
    select_tipos_componentes.value = res.tipos_comp;
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

function abrirModal() {
    if (informacion_componente_seleccionado.value.nombre == 'Slider') {
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
    }
}

const pagina = ref(1);

const id_componente = ref();

const read_only = ref(false);

async function empezarAEditar() {
    if (id_componente.value) {
        pagina.value = 2;
    } else if (form_componente.value.id_seccion != 0) {
        token.value = localStorage.getItem('token');
        console.log(token.value);
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

                const res = await axios.post('/componentes', FORM_DATA, {
                    headers: {
                        Authorization: `Bearer ${token.value}`,
                    },
                });

                read_only.value = true;

                localStorage.setItem('token', res.data.data.token)
                token.value = localStorage.getItem('token');
                pagina.value = 2;
                id_componente.value = res.data.data.id_comp;
                console.log(id_componente.value);

            }
        });
    }
}

const cambios_guardados = ref(true);

const laminas_slider = ref();

function cambiosGuardados() {
    if (cambios_guardados.value == true) {
        cambios_guardados.value = false;
    }
}

function paginaSiguienteSlider() {
    if (cambios_guardados.value == false) {
        Swal.fire({
            icon: 'warning',
            title: 'Advertencia',
            text: 'Para poder realizar esta acción, guarda los cambios realizados.',
            confirmButtonColor: '#3F4280'
        });
    }
}

async function paginaAnteriorSlider() {
    if (cambios_guardados.value == false) {
        Swal.fire({
            icon: 'warning',
            title: 'Advertencia',
            text: 'Para poder realizar esta acción, guarda los cambios realizados.',
            confirmButtonColor: '#3F4280'
        });
    } else if (pagina.value > 1) {
        pagina.value = pagina.value - 1;

        if (pagina.value == 1) {

            await nextTick();

            const ITEMS = [];
            const ITEMS_INDICADORES = [];

            laminas_slider.value.forEach((element) => {
                const IDENTIFICADOR_LAMINA = element.campos.identificador_lamina;

                // Agregar un nuevo elemento al arreglo 'items'
                ITEMS.push({
                    position: IDENTIFICADOR_LAMINA - 1,
                    el: document.getElementById('carouselP-item-' + IDENTIFICADOR_LAMINA),
                })

                ITEMS_INDICADORES.push({
                    position: IDENTIFICADOR_LAMINA - 1,
                    el: document.getElementById('carouselP-indicator-' + IDENTIFICADOR_LAMINA),
                })
            });

            console.log(ITEMS);
            console.log(ITEMS_INDICADORES);

            const OPTIONS = {
                defaultPosition: 1,
                interval: 3000,

                indicators: {
                    activeClasses: 'bg-white dark:bg-gray-800',
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
        }
    }
}

function cambiarPaginaInput() {
    if (!id_componente.value) {
        pagina.value = 1;
    }

    if (!laminas_slider.value && pagina.value > 2) {
        pagina.value = 2;
    } else if (laminas_slider.value && pagina.value > laminas_slider.value.length) {
        pagina.value = laminas_slider.value.length;
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

async function crearLaminaSlider() {
    token.value = localStorage.getItem('token');

    try {
        const FORM_DATA = new FormData();
        FORM_DATA.append('titulo_lamina', form_laminas_slider.value.titulo_lamina);
        FORM_DATA.append('subtitulo_lamina', form_laminas_slider.value.subtitulo_lamina);
        FORM_DATA.append('identificador_lamina', form_laminas_slider.value.identificador_lamina);
        FORM_DATA.append('visibilidad_lamina', form_laminas_slider.value.visibilidad_lamina ? 1 : 0);
        FORM_DATA.append('archivo_imagen', form_laminas_slider.value.archivo_imagen);
        FORM_DATA.append('id_componente', id_componente.value);

        console.log(token.value);

        const res = await axios.post('/laminas', FORM_DATA, {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token.value}`,
            },
        });

        localStorage.setItem('token', res.data.data.token);
        token.value = localStorage.getItem('token');

        cambios_guardados.value = true;

        await leerLaminas();

        clases_preview_carousel.value.clases_carousel_preview = 'flex';
        clases_preview_carousel.value.clases_carousel_vacio = 'flex hidden';
    } catch (error) {
        console.log(error);
    }
}

async function leerLaminas() {
    token.value = localStorage.getItem('token');
    const { data: res } = await axios.post('/laminas/' + id_componente.value, null, {
        headers: {
            Authorization: `Bearer ${token.value}`,
        },
    });

    localStorage.setItem('token', res.token);
    token.value = localStorage.getItem('token');

    laminas_slider.value = res.data;
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
    input_imagen.value.value = '';
    imagen_preview.value = null;
    form_laminas_slider.value.archivo_imagen = "";
    mostrar_icono_borrar.value = false;
}

</script>