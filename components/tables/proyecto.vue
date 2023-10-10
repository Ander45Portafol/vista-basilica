<template>
    <div class="contained-data flex-col" v-for="proyecto in datos_proyectos[paginacion - 1]" :key="proyecto.id">
        <div
            class="data-contained flex justify-between mt-4 rounded-xl p-4 max-[400px]:flex-wrap max-[400px]:w-full min-w-[200px]">
            <div class="flex justify-start w-3/4 items-center max-[400px]:w-full">
                <img :src="iconos_url + proyecto.campos.icono_proyecto"
                    @click="mostrarLightBox(iconos_url + proyecto.campos.icono_proyecto)"
                    class="h-10 w-10 cursor-pointer rounded-lg border-2 border-gray-800 max-[400px]:hidden" />
                <div
                    class="datainfo flex-col ml-8 max-[400px]:p-0 max-[400px]:w-full max-[400px]:ml-0 max-[400px]:text-center">
                    <p class="font-extrabold text-xl text-salte-900 max-[750px]:text-[18px]">
                        {{ proyecto.campos.nombre_proyecto }}</p>
                    <p class="font-bold text-sm mt-1text-gray-500 max-[750px]:text-[12px]">
                        Meta monetaria:
                        <span class="font-normal text-sm mt-1text-gray-500 max-[750px]:text-[12px]">${{
                            proyecto.campos.meta_monetaria }}</span>
                    </p>
                    <p class="font-bold text-sm text-gray-500 max-[750px]:text-[12px]">
                        Estado: <span class="font-normal text-sm text-gray-500 max-[750px]:text-[12px]">{{
                            proyecto.campos.estado_proyecto }}</span>
                    </p>
                </div>
            </div>
            <div class="buttons-data flex justify-center flex-row items-center max-[750px]:flex-col max-[400px]:flex-row max-[400px]:m-auto max-[400px]:mt-2 max-[400px]:flex-wrap"
                v-if="proyecto.campos.visibilidad_proyecto == 1">
                <div class="flex max-[400px]:mr-2">
                    <button
                        class="h-10 w-10 rounded-md flex items-center justify-center mr-4 imagenbtn max-[750px]:mr-0 max-[750px]:mt-2"
                        @click="modalImagenes(proyecto.id)">
                        <svg width="26px" height="26px" stroke-width="2" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg" color="#000000">
                            <path d="M21 7.6v12.8a.6.6 0 01-.6.6H7.6a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6h12.8a.6.6 0 01.6.6z"
                                stroke="#3F4280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path
                                d="M18 4H4.6a.6.6 0 00-.6.6V18M7 16.8l5.444-1.8L21 18M16.5 13a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
                                stroke="#3F4280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </button>
                    <button
                        class="h-10 w-10 rounded-md flex items-center justify-center mr-4 reportbtn max-[750px]:mt-2 max-[750px]:m-0 max-[400px]:ml-2"
                        v-if="proyecto.campos.visibilidad_proyecto == 1" @click="generarReporteProyecto(proyecto.id)">
                        <svg width="26px" height="26px" viewBox="0 0 24 24" stroke-width="2" fill="none"
                            xmlns="http://www.w3.org/2000/svg" color="#000000">
                            <path
                                d="M4 21.4V2.6a.6.6 0 01.6-.6h11.652a.6.6 0 01.424.176l3.148 3.148A.6.6 0 0120 5.75V21.4a.6.6 0 01-.6.6H4.6a.6.6 0 01-.6-.6zM8 10h8M8 18h8M8 14h4"
                                stroke="#7AAB97" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M16 2v3.4a.6.6 0 00.6.6H20" stroke="#7AAB97" stroke-width="2.5" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                        </svg>
                    </button>
                </div>
                <div class="flex max-[400px]:mr-2">
                    <button class="h-10 w-10 rounded-md flex items-center justify-center editbtn max-[750px]:mt-2"
                        @click="estadoActualizar(proyecto.id)" v-if="proyecto.campos.visibilidad_proyecto == 1">
                        <svg width="26px" height="26px" stroke-width="2" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg" color="#000000">
                            <path
                                d="M3 21h18M12.222 5.828L15.05 3 20 7.95l-2.828 2.828m-4.95-4.95l-5.607 5.607a1 1 0 00-.293.707v4.536h4.536a1 1 0 00.707-.293l5.607-5.607m-4.95-4.95l4.95 4.95"
                                stroke="#C99856" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </button>
                    <button
                        class="h-10 w-10 rounded-md flex items-center justify-center ml-4 deletebtn max-[750px]:ml-0 max-[750px]:mt-2 max-[400px]:ml-2"
                        @click="borrarProyecto(proyecto.id)" v-if="proyecto.campos.visibilidad_proyecto == 1">
                        <svg width="26px" height="26px" viewBox="0 0 24 24" stroke-width="2" fill="none"
                            xmlns="http://www.w3.org/2000/svg" color="#000000">
                            <path
                                d="M20 9l-1.995 11.346A2 2 0 0116.035 22h-8.07a2 2 0 01-1.97-1.654L4 9M21 6h-5.625M3 6h5.625m0 0V4a2 2 0 012-2h2.75a2 2 0 012 2v2m-6.75 0h6.75"
                                stroke="#872727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="buttons-data flex justify-center items-center max-[750px]:flex-col max-[400px]:flex-row max-[400px]:m-auto max-[400px]:mt-2"
                v-else>
                <button
                    class="h-10 w-10 rounded-md flex items-center justify-center ml-4 changebtn max-[750px]:ml-0 max-[750px]:mt-2 max-[400px]:mt-0 max-[400px]:mx-4"
                    @click="recuperarProyecto(proyecto.id, proyecto.campos.nombre_proyecto)">
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
    <vue-easy-lightbox :visible="visible_ref" :imgs="imgs_ref" :index="index_ref"
        @hide="esconderLightBox"></vue-easy-lightbox>
    <!-- Proyet modal -->
    <div id="staticModal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-5xl max-h-full">
            <!-- Modal content -->
            <div class="relative rounded-lg shadow modal">
                <!-- Modal header -->
                <div class="flex items-start justify-between p-4 rounded-t">
                    <div class="flex-col ml-4 pt-4">
                        <p class="text-3xl font-bold text-gray-100" id="modalText"></p>
                        <p class="text-lg font-medium text-gray-400">Proyecto</p>
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
                <div class="p-6 space-y-6 pb-10">
                    <form @submit.prevent="submitForm()" class="flex-col">
                        <div class="flex justify-evenly w-full flex-wrap">
                            <div class="flex-col w-64">
                                <!-- Se enlazan todos los inputs usando el v-model a la variable form -->
                                <input type="hidden" v-model="form.id_proyecto_donacion">
                                <div class="relative z-0">
                                    <input type="text" id="nombre_proyecto" name="nombre_proyecto" maxlength="100" required
                                        @input="validarNombreProyecto()" v-model="form.nombre_proyecto"
                                        class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                        placeholder=" " autocomplete="off" />
                                    <span class="text-xs text-gray-400 absolute bottom-0.5 right-0"
                                        v-if="form.nombre_proyecto">
                                        {{ form.nombre_proyecto.length }} /100</span>
                                    <span class="text-xs text-gray-400 absolute bottom-0.5 right-0" v-else> 0
                                        /100</span>
                                    <label for="nombre_proyecto"
                                        class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre
                                        - Proyecto<span class="text-sm ml-1"> *
                                        </span></label>
                                </div>
                                <div v-if="!validarNombreProyecto()"
                                    class="flex mt-2 mb-0 text-sm text-red-400 bg-transparent" role="alert">
                                    <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <div>
                                        El nombre de la página solo permite caracteres <span class="font-medium">
                                            alfanuméricos y algunos especiales (- / |).</span>
                                    </div>
                                </div>
                                <div class="relative z-0 mt-6">
                                    <textarea id="descripcion_proyecto" name="descripcion_proyecto" required
                                        maxlength="1000" v-model="form.descripcion_proyecto"
                                        class="block py-2.5 px-0 min-h-[3rem] h-[3rem] max-h-[12rem] w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                        placeholder=" " autocomplete="off" />
                                    <span class="text-xs text-gray-400 absolute bottom-0.5 right-5"
                                        v-if="form.descripcion_proyecto">
                                        {{ form.descripcion_proyecto.length }} /1000</span>
                                    <span class="text-xs text-gray-400 absolute bottom-0.5 right-5" v-else> 0
                                        /1000</span>
                                    <label for="descripcion_proyecto"
                                        class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Descripción
                                        - Proyecto<span class="text-sm ml-1"> *
                                        </span></label>
                                </div>
                                <div class="relative z-0 mt-6">
                                    <label for="" class="text-gray-200 text-sm">Visibilidad - Proyecto</label>
                                    <div class="flex justify-start mt-2">
                                        <label class="relative inline-flex items-center mb-5 cursor-pointer">
                                            <input type="checkbox" value="" class="sr-only peer" id="visibilidad_proyecto "
                                                name="visibilidad_proyecto " v-model="form.visibilidad_proyecto">
                                            <div
                                                class="w-9 h-5 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-col w-64">
                                <div class="relative z-0">
                                    <input type="number" id="meta_monetaria" name="meta_monetaria"
                                        v-model="form.meta_monetaria" @blur="convertirDecimales()" step="0.01" min="1"
                                        max="10000" required
                                        class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                        placeholder=" " autocomplete="off" />
                                    <label for="meta_monetaria"
                                        class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Meta
                                        - Monetaria<span class="text-sm ml-1"> *
                                        </span></label>
                                </div>
                                <div class="pt-4 mt-2 flex-col">
                                    <label for="" class="absolute text-gray-200 text-sm">Estado - Proyecto</label>
                                    <select id="underline_select" v-model="form.estado_proyecto"
                                        class="block mt-4 py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                        <option value="0" class="bg-gray-700">Selecciona una opción</option>
                                        <option value="En curso" class="bg-gray-700">En curso</option>
                                        <option value="Finalizado" class="bg-gray-700">Finalizado</option>
                                        <option value="Cerrado" class="bg-gray-700">Cerrado</option>
                                    </select>
                                    <!-- Se dispara una alerta si se escoge la opción default -->
                                    <div v-if="form.estado_proyecto == 0"
                                        class="flex mt-2 mb-0 text-sm text-red-400 bg-transparent" role="alert">
                                        <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3"
                                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                        <div>
                                            Seleccione <span class="font-medium"> una opción. </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="h-42 ml-32 mt-6 progressbar rounded-xl text-center min-w-[75%]">
                                <p class="mb-4 mt-2 text-base text-white">Porcentaje de logro actual registrado</p>
                                <div class="flex items-center justify-center text-white">
                                    <p class="mr-4">$0.00</p>
                                    <div class="w-2/4 bg-gray-200 h-12 rounded-2xl dark:bg-gray-700"
                                        data-tooltip-target="tooltip-porcentaje" data-tooltip-placement="bottom">
                                        <div v-if="formPorcentaje.porcentaje_logro > 0"
                                            class="bg-blueProgressBar text-xs h-12 font-medium text-blue-100 text-center p-0.5 leading-none rounded-2xl flex justify-center items items-center"
                                            :style="{ width: formPorcentaje.porcentaje_logro + '%' }"></div>
                                    </div>
                                    <p class="ml-4">${{ formPorcentaje.meta_monetaria_porcentaje }}</p>
                                </div>
                                <div id="tooltip-porcentaje" role="tooltip"
                                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-purpleToolTip transition-opacity duration-300 rounded-lg shadow-sm opacity-0 tooltip">
                                    Cantidad total: ${{ formPorcentaje.cantidad_total }}
                                    <div class="tooltip-arrow" data-popper-arrow></div>
                                </div>
                                <p class="text-white text-base mt-2">{{ formPorcentaje.porcentaje_logro }}%</p>
                            </div>
                            <div class="flex flex-wrap w-64 mt-12 mb-24">
                                <div class="flex ml-[-100px]">
                                    <div class="flex-row">
                                        <p class="mb-4 ml-12 text-center text-gray-200">Icono - Proyecto</p>
                                        <div class="ml-16 h-32 w-32 border-2 border-slate-900 rounded-lg cursor-pointer relative"
                                            @click="seleccionarArchivoIcono" @mouseover="trueIconoBorrarIcono"
                                            @mouseleave="falseIconoBorrarIcono">
                                            <img v-if="iconoPreview" :src="iconoPreview" class="h-32 w-32 rounded-lg" />
                                            <input type="file" ref="inputIcono" class="hidden" @change="cambiarIcono" />
                                            <div v-if="mostrarIconoBorrarIcono && iconoPreview"
                                                class="absolute inset-0 h-32 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
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
                                        <p class="mb-4 ml-12 text-center text-gray-200">Imagen - Principal</p>
                                        <div class="ml-16 h-32 w-32 border-2 border-slate-900 rounded-lg cursor-pointer relative"
                                            @click="seleccionarArchivoImagenPrincipal"
                                            @mouseover="trueIconoBorrarImagenPrincipal"
                                            @mouseleave="falseIconoBorrarImagenPrincipal">
                                            <img v-if="imagenPrincipalPreview" :src="imagenPrincipalPreview"
                                                class="h-32 w-32 rounded-lg" />
                                            <input type="file" ref="inputImagenPrincipal" class="hidden"
                                                @change="cambiarImagenPrincipal" />
                                            <div v-if="mostrarIconoBorrarImagenPrincipal && imagenPrincipalPreview"
                                                class="absolute inset-0 h-32 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
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
                                </div>
                                <div class="modal-buttons flex justify-end items-end absolute bottom-6 right-6">
                                    <button class="h-10 w-10 rounded-lg flex justify-center items-center mr-4" type="button"
                                        @click="limpiarForm()">
                                        <svg width="22px" height="22px" viewBox="0 0 24 24" stroke-width="2" fill="none"
                                            xmlns="http://www.w3.org/2000/svg" color="#000000">
                                            <path d="M11 21H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v7" stroke="#23B7A0"
                                                stroke-width="2" stroke-linecap="round"></path>
                                            <path
                                                d="M2 7h20M5 5.01l.01-.011M8 5.01l.01-.011M11 5.01l.01-.011M21.666 16.667C21.049 15.097 19.636 14 17.99 14c-1.758 0-3.252 1.255-3.793 3"
                                                stroke="#23B7A0" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round"></path>
                                            <path
                                                d="M19.995 16.772H21.4a.6.6 0 00.6-.6V14.55M14.334 19.333C14.953 20.903 16.366 22 18.01 22c1.758 0 3.252-1.255 3.793-3"
                                                stroke="#23B7A0" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round"></path>
                                            <path d="M16.005 19.228H14.6a.6.6 0 00-.6.6v1.622" stroke="#23B7A0"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </button>
                                    <button class="h-10 w-10 rounded-lg flex justify-center items-center" id="btnModalAdd"
                                        type="submit" @click="accionForm('crear')">
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
                                    <!-- Se le coloca la función para actualizar al botón y se evalua que ninguna función de validaciones sea false, si alguna es false el botón se desactiva -->
                                    <button id="btnModalUpdate" type="submit"
                                        :disabled="!validarNombreProyecto() || form.estado_proyecto == 0"
                                        class="h-10 w-10 rounded-lg flex justify-center items-center ml-4"
                                        @click="accionForm('actualizar')">
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
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Images modal -->
    <div id="imagemodal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-4xl max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 modalG">
                <!-- Modal header -->
                <div class="flex items-start justify-between p-4 rounded-t">
                    <div class="flex-col ml-4 pt-4">
                        <p class="text-3xl font-bold text-gray-100" id="modalText">Proyectos</p>
                        <p class="text-lg font-medium text-gray-400">Imagenes referentes a proyectos</p>
                    </div>
                    <button type="button"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        id="imageclose">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="p-8 space-y-6 flex-col">
                    <div class="flex justify-between items-center">
                        <p class="text-gray-100">Ingrese las imagenes que desee mostrar para sus proyectos publicos</p>
                        <button class="bg-space h-10 w-14 flex justify-center items-center rounded-lg"
                            @click="seleccionarArchivos">
                            <svg width="26px" height="26px" stroke-width="2" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" color="#000000">
                                <path d="M13 21H3.6a.6.6 0 01-.6-.6V3.6a.6.6 0 01.6-.6h16.8a.6.6 0 01.6.6V13"
                                    stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M3 16l7-3 5.5 2.5M16 10a2 2 0 110-4 2 2 0 010 4zM16 19h3m3 0h-3m0 0v-3m0 3v3"
                                    stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="h-80 w-full image-container grid grid-cols-5 gap-5 py-5 px-5">
                        <div v-if="data_imagenes" v-for="item in data_imagenes" :key="item.id_imagen_proyecto"
                            class="relative">
                            <img :src="imagenes_url + item.archivo_imagen" class="h-32 w-32 rounded-lg" />
                            <div @click="agregarImagenBorrada(item.id_imagen_proyecto)"
                                class="absolute inset-0 w-32 h-32 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100"
                                style="background-color: rgba(0, 0, 0, 0.5);">
                                <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 24 24"
                                    style="fill: rgba(255, 255, 255, 1); transform: ; msFilter:;">
                                    <path
                                        d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div v-for="(imagen, id) in imagenesPreviewArray" :key="id" class="relative">
                            <img :src="imagen.url" class="h-32 w-32 rounded-lg" />
                            <div @click="agregarImagenPreviewBorrada(id)"
                                class="absolute inset-0 w-32 h-32 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100"
                                style="background-color: rgba(0, 0, 0, 0.5);">
                                <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 24 24"
                                    style="fill: rgba(255, 255, 255, 1); transform: ; msFilter:;">
                                    <path
                                        d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <input type="file" accept=".jpg, .jpeg, .png, .svg" ref="inputImagenes" class="hidden"
                            @change="cambiarImagenes" multiple />
                    </div>
                    <div class="flex justify-between items-center mt-6">
                        <div class="relative z-0 w-64">
                            <input type="text" id="proyecto" name="proyecto" v-model="nombre_proyectoref" required readonly
                                maxlength="100"
                                class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                placeholder=" " autocomplete="off" />
                            <label for="proyecto"
                                class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Proyecto</label>
                        </div>
                        <button class="w-32 h-10 bg-space text-white mt-4 rounded-lg" @click="actualizarImagenes">
                            Guardar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.progressbar {
    width: 600px;
    margin-right: 8rem;
    border: 2px solid #fff;
}

.data-contained {
    border: 3px solid #1b1c30;
}

.modal-buttons button {
    background-color: #32345a;
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

.buttons-data .imagenbtn {
    border: 3px solid #3F4280;
}

.modal {
    background: linear-gradient(180deg,
            rgba(63, 66, 128, 0.6241) 0%,
            rgba(49, 50, 71, 0.5609) 100%);
    background-color: #1e1e1e;
}

.modalG {
    background-color: #1A1B27;
}

.image-container {
    border: 3px solid #FFF;
}

.image_loader {
    border: 3px solid #FFF;
}

.reportbtn {
    border: 3px solid #7AAB97;
}
</style>
<script setup>
import axios from 'axios';
import Swal from 'sweetalert2';
import { Modal } from 'flowbite'
import VueEasyLightbox from 'vue-easy-lightbox'
import validaciones from '../../assets/validaciones.js';
import { initTooltips } from 'flowbite'

const props = defineProps({
    //Prop que se utiliza para cargar los datos de la tabla
    datos_proyectos: Array,
    //Prop que recibe la funcion de leerProyecto, para recargar la tabla, cada vez de finalizar alguna acción
    actualizar_datos: Function,
    paginacion: Number,

});
//Evento para reiniciar el tiempo del componente del timer
const EVENT = new Event('reset-timer');

onMounted(() => {
    //Se le asigna un valor a la variable token para poder utilizar el middleware de laravel
    token.value = localStorage.getItem('token');
    id.value = localStorage.getItem('usuario');
    //Codigo para abrir el modal, con el boton de crear
    const AGREGAR_BOTON = document.getElementById('btnadd');
    const MODAL_ID = document.getElementById('staticModal');
    const CERRAR_BOTON = document.getElementById('closeModal');
    const TITULO_MODAL = document.getElementById('modalText');
    const OPCIONES_MODAL = {
        backdrop: 'static',
        backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
    };

    if (MODAL_ID) {
        const MODAL = new Modal(MODAL_ID, OPCIONES_MODAL);
        AGREGAR_BOTON.addEventListener('click', function () {
            TITULO_MODAL.textContent = "Registrar";
            document.getElementById('btnModalAdd').classList.remove('hidden');
            document.getElementById('btnModalUpdate').classList.add('hidden');
            accionForm('crear');
            MODAL.show();
        });
        CERRAR_BOTON.addEventListener('click', function () {
            MODAL.hide();
        });
    }
    initTooltips();
});

//Variable reactiva para almacenar el token del localStorag
const token = ref(null);

const id = ref(null);

async function generarReporteProyecto(id_proyecto) {
    //Constante donde se almacena la respuesta que retorna de la api
    const ruta = new URL(`http://127.0.0.1:8000/api/proyecto_reporte/` + id_proyecto);
    //Le añadimos el token en la ruta del reporte
    ruta.searchParams.append('token', token.value);
    //Le añadimos el id del usuario que ha iniciado sesion, se captura mediante el token
    ruta.searchParams.append('id', id.value);
    // Se abre el reporte en una nueva pestaña del navegador web.
    window.open(ruta.href);
}

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

const formPorcentaje = ref({
    cantidad_total: "",
    porcentaje_logro: "",
    meta_monetaria_porcentaje: "",
});

function formPorcentajeLimpiar() {
    formPorcentaje.value.cantidad_total = null;
    formPorcentaje.value.porcentaje_logro = null;
    formPorcentaje.meta_monetaria_porcentaje = null;
}

const form = ref({
    id_proyecto_donacion: "",
    nombre_proyecto: "",
    descripcion_proyecto: "",
    meta_monetaria: "",
    estado_proyecto: 0,
    visibilidad_proyecto: false,
    icono_proyecto: "",
    imagen_principal: "",
});
function limpiarForm() {
    form.value.id_proyecto_donacion = "";
    form.value.nombre_proyecto = "";
    form.value.descripcion_proyecto = "";
    form.value.meta_monetaria = "";
    form.value.estado_proyecto = 0;
    form.value.visibilidad_proyecto = false;
    limpiarImagenPrincipal();
    limpiarIcono();
    formPorcentajeLimpiar();
}
//Variable para validar que acción se quiere hacer cuando se hace un submit al form
var formAccion = null;

//Función para evaluar que acción se va a hacer al hacer submit en el form
function accionForm(accion) {
    formAccion = accion;
}


//Función para crear/actualizar un registro cuando se ejecuta el submit del form
function submitForm() {
    if (formAccion == "crear") {
        crearProyecto();
    } else {
        actualizarProyecto();
    }
}

//Metodo para agregar un nuevo proyecto
async function crearProyecto() {
    //Se actualiza el valor del token (esto para evitar errores con todos los refresh del token)
    token.value = localStorage.getItem('token');
    if (validarNombreProyecto() && form.estado_proyecto != 0) {
        try {
            const FORMDATA = new FormData();
            FORMDATA.append("nombre_proyecto", form.value.nombre_proyecto);
            FORMDATA.append("descripcion_proyecto", form.value.descripcion_proyecto);
            FORMDATA.append("meta_monetaria", form.value.meta_monetaria);
            FORMDATA.append("visibilidad_proyecto", form.value.visibilidad_proyecto ? 1 : 0);
            FORMDATA.append("estado_proyecto", form.value.estado_proyecto);
            FORMDATA.append("imagen_principal", form.value.imagen_principal);
            FORMDATA.append("icono_proyecto", form.value.icono_proyecto);
            //Se realiza la petición axios mandando la ruta y el formData
            await axios.post("/proyectos", FORMDATA, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token.value}`,
                },
            }).then(res => {
                //Se reinicia el timer
                window.dispatchEvent(EVENT);
                //Se actualiza el token con la respuesta del axios
                localStorage.setItem('token', res.data.data.token);
                token.value = localStorage.getItem('token');
                console.log(token.value);
                limpiarForm();
            });
            //Se leen todas las páginas y en dado caso haya algo escrito en el buscador se filtran los datos
            await props.actualizar_datos();

            document.getElementById('closeModal').click();
            TOAST.fire({
                icon: 'success',
                title: 'Proyecto creado exitosamente'
            });

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



//Metodo para configurar el modal y enviar el id 
async function estadoActualizar(id) {
    await leerUnProyecto(id);
    const MODAL_ID = document.getElementById('staticModal');
    const CERRAR_BOTON = document.getElementById('closeModal');
    const TITULO_MODAL = document.getElementById('modalText');
    const OPCIONES_MODAL = {
        backdrop: 'static',
        backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
    };
    const MODAL = new Modal(MODAL_ID, OPCIONES_MODAL);
    TITULO_MODAL.textContent = "Editar";
    MODAL.show();
    accionForm('actualizar');
    document.getElementById('btnModalAdd').classList.add('hidden');
    document.getElementById('btnModalUpdate').classList.remove('hidden');
    CERRAR_BOTON.addEventListener('click', function () {
        MODAL.hide();
        limpiarForm();
    });
}

//Metodo para capturar el id del proyecto y buscar la respectiva informacion
async function leerUnProyecto(id) {
    //Se actualiza el valor del token (esto para evitar errores con todos los refresh del token)
    token.value = localStorage.getItem('token');
    try {
        await axios.get('/proyectos/' + id, {
            headers: {
                Authorization: `Bearer ${token.value}`,
            },
        }).then(res => {
            console.log(res.data);
            form.value = {
                id_proyecto_donacion: res.data.data.id,
                nombre_proyecto: res.data.data.campos.nombre_proyecto,
                descripcion_proyecto: res.data.data.campos.descripcion_proyecto,
                meta_monetaria: res.data.data.campos.meta_monetaria,
                estado_proyecto: res.data.data.campos.estado_proyecto,
                visibilidad_proyecto: res.data.data.campos.visibilidad_proyecto ? true : false,
            };
            if (res.data.porcentaje_proyecto) {
                formPorcentaje.value.cantidad_total = res.data.porcentaje_proyecto.cantidad_total;
                if (res.data.porcentaje_proyecto.porcentaje_logro <= 100) {
                    formPorcentaje.value.porcentaje_logro = res.data.porcentaje_proyecto.porcentaje_logro;
                } else {
                    formPorcentaje.value.porcentaje_logro = 100;
                }
                formPorcentaje.value.meta_monetaria_porcentaje = res.data.porcentaje_proyecto.meta_monetaria;
            } else {
                formPorcentaje.value.cantidad_total = 0.00;
                formPorcentaje.value.porcentaje_logro = 0.00;
                formPorcentaje.value.meta_monetaria_porcentaje = res.data.data.campos.meta_monetaria;
            }

            if (res.data.data.campos.icono_proyecto != null) {
                form.value.icono_proyecto = res.data.data.campos.icono_proyecto;
                iconoPreview.value = iconos_url + form.value.icono_proyecto;
            } else {
                form.value.icono_proyecto = "";
            }

            if (res.data.data.campos.imagen_principal != null) {
                form.value.imagen_principal = res.data.data.campos.imagen_principal;
                imagenPrincipalPreview.value = imagenes_url + form.value.imagen_principal;
            } else {
                form.value.imagen_principal = "";
            }
            //Se reinicia el timer
            window.dispatchEvent(EVENT);
            //Se actualiza el token con la respuesta del axios
            localStorage.setItem('token', res.data.token);
            token.value = localStorage.getItem('token');
        });
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

//Metodo para actualizar la informacion de un proyecto
async function actualizarProyecto() {
    //Se actualiza el valor del token (esto para evitar errores con todos los refresh del token)
    token.value = localStorage.getItem('token');
    try {
        var id = form.value.id_proyecto_donacion;
        const FORMDATA = new FormData();
        FORMDATA.append("nombre_proyecto", form.value.nombre_proyecto);
        FORMDATA.append("descripcion_proyecto", form.value.descripcion_proyecto);
        FORMDATA.append("meta_monetaria", form.value.meta_monetaria);
        FORMDATA.append("visibilidad_proyecto", form.value.visibilidad_proyecto ? 1 : 0);
        FORMDATA.append("estado_proyecto", form.value.estado_proyecto);
        FORMDATA.append("imagen_principal", form.value.imagen_principal);
        FORMDATA.append("icono_proyecto", form.value.icono_proyecto);
        console.log(FORMDATA);
        await axios.post("/proyectos_update/" + id, FORMDATA, {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token.value}`,
            }
        }).then(res => {
            //Se reinicia el timer
            window.dispatchEvent(EVENT);
            //Se actualiza el token con la respuesta del axios
            localStorage.setItem('token', res.data.data.token);
            token.value = localStorage.getItem('token');
        });

        //Se leen todas las páginas y en dado caso haya algo escrito en el buscador se filtran los datos
        await props.actualizar_datos();

        document.getElementById('closeModal').click();
        TOAST.fire({
            icon: 'success',
            title: 'Proyecto actualizado exitosamente'
        });
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

//Codigo para cambiar el estado del proyecto a inactivo
async function borrarProyecto(id,) {
    console.log(id);
    Swal.fire({
        title: 'Confirmación',
        text: "¿Desea ocultar el registro",
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
                    await axios.delete("/proyectos/" + id, {
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
                            title: "Proyecto ocultado exitosamente",
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

//Función para cambiar un proyecto a activo
async function recuperarProyecto(id) {

    Swal.fire({
        title: 'Confirmación',
        text: "¿¿Desea recuperar el registro",
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
                    await axios.delete("/proyectos/" + id, {
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
                        title: "Proyecto recuperado exitosamente",
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

//Validaciones
//Función para validar que la meta monetaria lleve 2 decimales
function convertirDecimales() {
    if (form.value.meta_monetaria != null) {
        var res = validaciones.convertirDecimales(form.value.meta_monetaria, 2);
        if (res != false) {
            form.value.meta_monetaria = res;
        }
    }
}
//Función para validar que el nombre de página solo lleve letras y números
function validarNombreProyecto() {
    var res = validaciones.validarSoloLetrasYNumeros(form.value.nombre_proyecto);
    return res;
}

//Imagenes proyectos

//Url para cargar las imagenes
var iconos_url = "http://localhost:8000/storage/iconosProyectos/images/";
var imagenes_url = "http://localhost:8000/storage/proyectosDonaciones/images/";

//Función para abrir el modal
async function modalImagenes(id_proyecto) {
    await leerImagenesProyectos(id_proyecto);
    const modalElement = document.getElementById('imagemodal');
    const modalOptions = {
        backdrop: 'static',
        backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
    };
    const modal = new Modal(modalElement, modalOptions);
    const closeImagesButton = document.getElementById('imageclose');
    closeImagesButton.addEventListener('click', function () {
        modal.hide();
        id_proyectoref.value = "";
        nombre_proyectoref.value = "";
        vaciarImagenes();
    });
    modal.show();
}

//Variable ref para guardar los registros que se traen de la api
const data_imagenes = ref(null);

//Variable ref para guardar el id del proyecto al que pertenecen las imagenes
const id_proyectoref = ref(null);

//Variable ref para guardar el nombre del proyecto al que pertenecen las imagenes
const nombre_proyectoref = ref(null);

//Función para leer las imagenes y el proyecto asignado
async function leerImagenesProyectos(id_proyecto) {
    token.value = localStorage.getItem('token');
    id_proyectoref.value = id_proyecto;
    try {
        //Se realiza la petición axios para traer los datos
        const { data: res } = await axios.get('/imagenes_proyectos/' + id_proyecto, {
            headers: {
                Authorization: `Bearer ${token.value}`,
            },
        });
        //Se asigna el valor de la respuesta de axios a la variable data_imagenes
        data_imagenes.value = res.imagenes;
        nombre_proyectoref.value = res.nombre_proyecto;
        window.dispatchEvent(EVENT);
        localStorage.setItem('token', res.token);
        token.value = localStorage.getItem('token');
    } catch (error) {
        console.log(error);
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

//Array ref para guardar la preview de las imagenes
const imagenesPreviewArray = ref([]);

//Variable ref para enlazar el input de tipo file
const inputImagenes = ref(null);

//Función para abrir el selector de archivos
const seleccionarArchivos = () => {
    inputImagenes.value.click();
};

//Función para cargar las preview
const cambiarImagenes = () => {
    //Constantes para traer los archivos seleccionados en el input
    const input = inputImagenes.value;
    const archivos = input.files;

    if (archivos && archivos.length > 0) {
        //Se ejecuta un for para evaluar cada archivo
        for (const archivo of archivos) {
            //File reader
            const reader = new FileReader();

            //Se crea una constante imagenData la cual contiene la url para mostrar la preview y el objeto tipo File que se enviara a la API
            reader.onload = (e) => {
                const imagenData = {
                    file: archivo,
                    //e.target.result hace referencia al reader.readAsDataURL (función que convierte el objeto tipo File en una url base64 para poder mostrarla con el preview)
                    url: e.target.result,
                };
                //Se le asigna imagenData a cada posición de la arreglo de previews
                imagenesPreviewArray.value.push(imagenData);
            };

            reader.readAsDataURL(archivo);
        }
    }
};

//Array ref para almacenar los ids de las imagenes a borrar
const imagenesBorradas = ref([]);

//Función para agregar una nueva posición al array anterior
function agregarImagenBorrada(id) {
    imagenesBorradas.value.push(id);
    data_imagenes.value = data_imagenes.value.filter((item) => item.id_imagen_proyecto != id);
}

//Función para eliminar una posición del array de previews
function agregarImagenPreviewBorrada(id) {
    imagenesPreviewArray.value.splice(id, 1);
}

//Función para vaciar las imagenes al cerrar el modal
function vaciarImagenes() {
    imagenesPreviewArray.value.splice(0);
    inputImagenes.value.value = "";
    imagenesBorradas.value.splice(0);
}

//Función para actualizar las imagenes
async function actualizarImagenes() {
    token.value = localStorage.getItem('token');
    try {
        //Se evalua si el array de previews tiene valor, si tiene significa que hay registros para agregar
        if (imagenesPreviewArray.value.length > 0) {

            const formData = new FormData();
            formData.append('id_proyecto_donacion', id_proyectoref.value);
            //Se hace un for para cada posición del arreglo
            for (const imagenData of imagenesPreviewArray.value) {
                //Se crea un FormData con el archivo de la imagen y el id del proyecto al que pertenece
                formData.append('archivo_imagen[]', imagenData.file);
            }

            //Se envia la petición axios
            const res = await axios.post('/imagenes_proyectos', formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token.value}`,
                },
            });
            window.dispatchEvent(EVENT);
            localStorage.setItem('token', res.data.token);
            token.value = localStorage.getItem('token');
        }

        //Se evalua si hay datos en el array de imagenesBorradas, si hay significa que hay registros para borrar
        if (imagenesBorradas.value.length > 0) {
            //Se muestra el sweetalert de confirmación, se hace un await para que el codigo espere que salte el sweetalert para continuar
            const eleccion = await Swal.fire({
                title: 'Confirmación',
                text: 'Desea eliminar las imagenes seleccionadas?',
                icon: 'warning',
                reverseButtons: true,
                showCancelButton: true,
                confirmButtonColor: '#3F4280',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirmar',
                cancelButtonText: 'Cancelar'
            });

            //Si el usuario escogió la opción de confirmar se eliminan los registros
            if (eleccion.isConfirmed) {
                const res = await axios.delete('imagenes_proyectos', {
                    data: { id_imagen_proyecto: imagenesBorradas.value },
                    headers: {
                        Authorization: `Bearer ${token.value}`,
                    },
                });
                window.dispatchEvent(EVENT);
                localStorage.setItem('token', res.data.token);
                token.value = localStorage.getItem('token');
            }
        }

        //Se cierra el modal y se muestra el toast
        document.getElementById('imageclose').click();
        TOAST.fire({
            icon: 'success',
            title: 'Imagenes actualizadas exitosamente'
        });
    } catch (error) {
        console.log(error);
    }
}

const imagenPrincipalPreview = ref(null);

const seleccionarArchivoImagenPrincipal = () => {
    if (mostrarIconoBorrarImagenPrincipal.value == false) {
        inputImagenPrincipal.value.click();
    } else {
        limpiarImagenPrincipal();
    }
};

const inputImagenPrincipal = ref(null);

const cambiarImagenPrincipal = () => {
    const input = inputImagenPrincipal.value;
    const file = input.files;
    if (file && file[0]) {
        form.value.imagen_principal = file[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            imagenPrincipalPreview.value = e.target.result;
        };
        reader.readAsDataURL(file[0]);
        return file[0];
    }
};

function limpiarImagenPrincipal() {
    //Limpiar imagen
    inputImagenPrincipal.value.value = '';
    imagenPrincipalPreview.value = null;
    form.value.imagen_principal = "";
    mostrarIconoBorrarImagenPrincipal.value = false;
}

const mostrarIconoBorrarImagenPrincipal = ref(false);

function trueIconoBorrarImagenPrincipal() {
    if (imagenPrincipalPreview.value) {
        mostrarIconoBorrarImagenPrincipal.value = true;
    }
}

function falseIconoBorrarImagenPrincipal() {
    if (imagenPrincipalPreview.value) {
        mostrarIconoBorrarImagenPrincipal.value = false;
    }
}

const iconoPreview = ref(null);

const seleccionarArchivoIcono = () => {
    if (mostrarIconoBorrarIcono.value == false) {
        inputIcono.value.click();
    } else {
        limpiarIcono();
    }
};

const inputIcono = ref(null);

const cambiarIcono = () => {
    const input = inputIcono.value;
    const file = input.files;
    if (file && file[0]) {
        form.value.icono_proyecto = file[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            iconoPreview.value = e.target.result;
        };
        reader.readAsDataURL(file[0]);
        return file[0];
    }
};

function limpiarIcono() {
    //Limpiar imagen
    inputIcono.value.value = '';
    iconoPreview.value = null;
    form.value.icono_proyecto = "";
    mostrarIconoBorrarIcono.value = false;
}

const mostrarIconoBorrarIcono = ref(false);

function trueIconoBorrarIcono() {
    if (iconoPreview.value) {
        mostrarIconoBorrarIcono.value = true;
    }
}

function falseIconoBorrarIcono() {
    if (iconoPreview.value) {
        mostrarIconoBorrarIcono.value = false;
    }
}

const visible_ref = ref(false);
const index_ref = ref(0);
const imgs_ref = ref([]);

function abrirLightBox() {
    visible_ref.value = true;
}

function mostrarLightBox(url) {
    imgs_ref.value = url;
    abrirLightBox();
}

function esconderLightBox() {
    visible_ref.value = false
}
</script>