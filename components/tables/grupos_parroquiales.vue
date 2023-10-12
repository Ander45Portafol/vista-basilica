<template>
    <!-- Haciendo uso del v-for se evalua cada registro individualmente para poder llenar todas las cards -->
    <div class="flex-col contained-data" v-for="grupo in datos_grupos[paginacion - 1]" :key="grupo.id">
        <div
            class="data-contained flex justify-between mt-4 rounded-xl p-4 max-[400px]:flex-wrap max-[400px]:w-full min-w-[200px]">
            <div class="flex justify-start w-3/4 items-center max-[400px]:w-full">
                <img :src="api_url + grupo.campos.logo_grupo" @click="mostrarLightBox(api_url + grupo.campos.logo_grupo)"
                    class="h-10 w-10 cursor-pointer rounded-lg border-2 border-gray-800 max-[400px]:hidden" />
                <div
                    class="datainfo flex-col ml-8 max-[400px]:p-0 max-[400px]:w-full max-[400px]:ml-0 max-[400px]:text-center">
                    <!--Con la implementación de una variable que permite visualizar la información contenida en cada uno-->
                    <p class="font-extrabold text-xl text-salte-900 max-[750px]:text-[18px]"> {{
                        grupo.campos.nombre_grupo }} </p>
                    <p class="font-normal text-sm text-gray-500 max-[750px]:text-[12px]"> {{
                        grupo.campos.nombre_encargado }} {{ grupo.campos.apellido_encargado }}</p>
                    <p class="font-normal text-sm text-gray-500 max-[750px]:text-[12px]"> {{
                        grupo.campos.descripcion_grupo }}</p>
                </div>
            </div>
            <!-- Al darle clic al evento leerUnContacto ejecuta la funcion -->
            <div
                class="buttons-data flex justify-center items-center max-[750px]:flex-col max-[400px]:flex-row max-[400px]:m-auto max-[400px]:mt-2">
                <button
                    class="h-10 w-10 rounded-md flex items-center justify-center imagenbtn max-[750px]:mr-0 max-[750px]:mt-2"
                    @click="modalImagenes(grupo.id)">
                    <svg width="26px" height="26px" stroke-width="2" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg" color="#000000">
                        <path d="M21 7.6v12.8a.6.6 0 01-.6.6H7.6a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6h12.8a.6.6 0 01.6.6z"
                            stroke="#3F4280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path
                            d="M18 4H4.6a.6.6 0 00-.6.6V18M7 16.8l5.444-1.8L21 18M16.5 13a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
                            stroke="#3F4280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
                <button v-if="grupo.campos.visibilidad_grupo == 1" @click.prevent="estadoActualizar(grupo.id)"
                    class="h-10 w-10 rounded-md flex items-center ml-4 justify-center editbtn max-[400px]:mx-4">
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
                    @click="borrarGrupoParroquial(grupo.id)" v-if="grupo.campos.visibilidad_grupo == 1">
                    <svg width="26px" height="26px" viewBox="0 0 24 24" stroke-width="2" fill="none"
                        xmlns="http://www.w3.org/2000/svg" color="#000000">
                        <path
                            d="M20 9l-1.995 11.346A2 2 0 0116.035 22h-8.07a2 2 0 01-1.97-1.654L4 9M21 6h-5.625M3 6h5.625m0 0V4a2 2 0 012-2h2.75a2 2 0 012 2v2m-6.75 0h6.75"
                            stroke="#872727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                    </svg>
                </button>
                <button @click="recuperarGrupoParroquial(grupo.id)"
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
    </div>
    <!--Llama la propiedad de lightbox para las imagenes-->
    <vue-easy-lightbox :visible="visible_ref" :imgs="imgs_ref" :index="index_ref"
        @hide="esconderLightBox"></vue-easy-lightbox>
    <!-- Modal -->
    <div id="staticModal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-5xl max-h-full">
            <!-- Modal content -->
            <div class="relative rounded-lg shadow modal">
                <!-- Modal header -->
                <div class="flex items-start justify-between p-4 rounded-t">
                    <div class="flex-col pt-4 ml-4">
                        <p class="text-3xl font-bold text-gray-100" id="modalText"></p>
                        <p class="text-base font-medium text-gray-400">
                            Grupo - Parroquial
                        </p>
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
                <div class="p-6 space-y-6 pb-14">
                    <form action="" id="formModal" @submit.prevent="submitForm()" class="flex justify-evenly">
                        <div class="flex-col w-64">
                            <!-- Se enlazan todos los inputs usando el v-model a la variable form -->
                            <input type="hidden" id="id_grupo_parroquial" v-model="form.id_grupo_parroquial" />
                            <div class="relative z-0">
                                <input type="text" id="nombre_grupo" name="nombre_grupo" v-model="form.nombre_grupo"
                                    @input="validarNombreGrupo()" required maxlength="100"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" />
                                <span class="text-xs text-gray-400 absolute bottom-0.5 right-0" v-if="form.nombre_grupo">
                                    {{ form.nombre_grupo.length }} /100</span>
                                <span class="text-xs text-gray-400 absolute bottom-0.5 right-0" v-else>
                                    0 /100</span>
                                <label for="nombre_grupo"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre
                                    - Grupo<span class="ml-1 text-sm"> * </span></label>
                            </div>
                            <div v-if="!validarNombreGrupo()" class="flex mt-2 mb-0 text-sm text-red-400 bg-transparent"
                                role="alert">
                                <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <div>
                                    El nombre del grupo solo permite caracteres
                                    <span class="font-medium">
                                        alfanuméricos y algunos especiales (- / |).</span>
                                </div>
                            </div>
                            <div class="relative z-0 mt-6">
                                <input type="text" id="nombre_encargado" name="nombre_encargado" maxlength="100"
                                    @input="validarNombreEncargado()" v-model="form.nombre_encargado"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" />
                                <span class="text-xs text-gray-400 absolute bottom-0.5 right-0"
                                    v-if="form.nombre_encargado">
                                    {{ form.nombre_encargado.length }} /100</span>
                                <span class="text-xs text-gray-400 absolute bottom-0.5 right-0" v-else>
                                    0 /100</span>
                                <label for="username"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre
                                    - Encargado</label>
                            </div>
                            <div v-if="!validarNombreEncargado()" class="flex mt-2 mb-0 text-sm text-red-400 bg-transparent"
                                role="alert">
                                <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <div>
                                    El nombre del encargado solo permite
                                    <span class="font-medium"> letras.</span>
                                </div>
                            </div>
                            <div class="relative z-0 mt-6">
                                <input type="email" id="correo_encargado" name="correo_encargado" required maxlength="100"
                                    v-model="form.correo_encargado"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" />
                                <span class="text-xs text-gray-400 absolute bottom-0.5 right-0"
                                    v-if="form.correo_encargado">
                                    {{ form.correo_encargado.length }} /100</span>
                                <span class="text-xs text-gray-400 absolute bottom-0.5 right-0" v-else>
                                    0 /100</span>
                                <label for="username"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Correo
                                    - Encargado<span class="ml-1 text-sm">
                                        *
                                    </span></label>
                            </div>
                            <div class="flex-col pt-4 mt-4">
                                <label for="" class="absolute text-sm text-gray-200">Categoría - Grupo<span
                                        class="ml-1 text-sm"> * </span></label>
                                <select id="underline_select" v-model="form.id_categoria_grupo_parroquial"
                                    class="block mt-4 py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                    <option value="0" class="text-white bg-gray-700"> Seleccione una opción </option>
                                    <option class="bg-gray-700" v-for="categoria_grupo in roles"
                                        :key="categoria_grupo.id_categoria_grupo_parroquial"
                                        :value="categoria_grupo.id_categoria_grupo_parroquial">
                                        {{ categoria_grupo.nombre_categoria_grupo }}</option>
                                </select>
                                <div v-if="form.id_categoria_grupo_parroquial == 0"
                                    class="flex mt-2 mb-0 text-sm text-red-400 bg-transparent" role="alert">
                                    <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
                        <div class="flex-col w-64">
                            <div class="relative z-0">
                                <textarea id="descripcion_grupo" name="descripcion_grupo" required maxlength="1000"
                                    v-model="form.descripcion_grupo"
                                    class="block py-2.5 px-0 min-h-[3rem] h-[3rem] max-h-[12rem] w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" />
                                <span class="text-xs text-gray-400 absolute bottom-0.5 right-5"
                                    v-if="form.descripcion_grupo">
                                    {{ form.descripcion_grupo.length }} /1000</span>
                                <span class="text-xs text-gray-400 absolute bottom-0.5 right-5" v-else>
                                    0 /1000</span>
                                <label for="descripcion_grupo"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Descripción
                                    - Grupo<span class="ml-1 text-sm">
                                        *
                                    </span></label>
                            </div>
                            <div class="relative z-0 mt-6">
                                <input type="text" id="apellido_encargado" name="apellido_encargado" maxlength="100"
                                    @input="validarApellidoEncargado()" v-model="form.apellido_encargado"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" />
                                <span class="text-xs text-gray-400 absolute bottom-0.5 right-0"
                                    v-if="form.apellido_encargado">
                                    {{ form.apellido_encargado.length }} /100</span>
                                <span class="text-xs text-gray-400 absolute bottom-0.5 right-0" v-else>
                                    0 /100</span>
                                <label for="apellido_encargado"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellido
                                    - Encargado</label>
                            </div>
                            <div v-if="!validarApellidoEncargado()"
                                class="flex mt-2 mb-0 text-sm text-red-400 bg-transparent" role="alert">
                                <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <div>
                                    El apellido del encargado solo permite
                                    <span class="font-medium"> letras.</span>
                                </div>
                            </div>
                            <div class="relative z-0 mt-6">
                                <input type="text" id="telefono_encargado" name="telefono_encargado" required maxlength="9"
                                    @input="validarTelefono()" v-model="form.telefono_encargado"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" />
                                <span class="text-xs text-gray-400 absolute bottom-0.5 right-0"
                                    v-if="form.telefono_encargado">
                                    {{ form.telefono_encargado.length }} /9</span>
                                <span class="text-xs text-gray-400 absolute bottom-0.5 right-0" v-else>
                                    0 /9</span>
                                <label for="telefono_encargado"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Teléfono
                                    - Encargado<span class="ml-1 text-sm">
                                        *
                                    </span></label>
                            </div>
                            <div v-if="!validarTelefono()" class="flex mt-2 mb-0 text-sm text-red-400 bg-transparent"
                                role="alert">
                                <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <div>
                                    El número de teléfono ingresado
                                    <span class="font-medium">
                                        no tiene un formato correcto.</span>
                                </div>
                            </div>
                            <div class="flex-col mt-6">
                                <label for="" class="text-sm text-gray-200">Visibilidad - Grupo</label>
                                <div class="flex justify-start mt-2">
                                    <label class="relative inline-flex items-center mb-5 cursor-pointer">
                                        <input type="checkbox" value="" class="sr-only peer" id="visibilidad_grupo"
                                            name="visibilidad_grupo" v-model="form.visibilidad_grupo" />
                                        <div
                                            class="w-9 h-5 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="flex-col w-64">
                            <div class="">
                                <p class="mb-4 text-center text-gray-200">Logo - Grupo </p>
                                <div class="flex-col m-auto">
                                    <div class="h-44 w-40 border-2 border-slate-900 ml-14 rounded-lg cursor-pointer relative max-[630px]:m-auto"
                                        @click="seleccionarArchivo" @mouseover="iconoBorrarTrue"
                                        @mouseleave="iconoBorrarFalse">
                                        <img v-if="imagenPreview" :src="imagenPreview" class="w-40 rounded-lg h-44" />
                                        <input type="file" ref="inputImagen" class="hidden" @change="cambiarImagen" />
                                        <div v-if="mostrarIconoBorrar"
                                            class="absolute h-44 inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px"
                                                viewBox="0 0 24 24"
                                                style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;">
                                                <path
                                                    d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="m-auto max-[630px]:text-center max-[630px]:ml-[-58px]">
                                        <button type="button"
                                            class="w-40 py-2 mt-3 text-center bg-white rounded-md ml-14 hover:bg-slate-300"
                                            @click="seleccionarArchivo">Seleccionar Imagen</button>
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-end justify-end mt-6 modal-buttons">
                                <!-- Se le coloca la función para limpiar el form al botón -->
                                <button type="button" id="btnModalClear" @click="limpiarForm()"
                                    class="flex items-center justify-center w-10 h-10 ml-4 rounded-lg">
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
                                        <path d="M16.005 19.228H14.6a.6.6 0 00-.6.6v1.622" stroke="#23B7A0" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>
                                <!-- Se le coloca la función para crear al botón y se evalua que ninguna función de validaciones sea false, si alguna es false el botón se desactiva -->
                                <button id="btnModalAdd" type="submit" :disabled="!validarNombreGrupo() ||
                                    !validarNombreEncargado() ||
                                    !validarApellidoEncargado() ||
                                    form.id_categoria_grupo_parroquial == 0 ||
                                    !validarTelefono()
                                    " class="flex items-center justify-center w-10 h-10 ml-2 rounded-lg">
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
                                <button id="btnModalUpdate" type="submit" :disabled="!validarNombreGrupo() ||
                                    !validarNombreEncargado() ||
                                    !validarApellidoEncargado() ||
                                    form.id_categoria_grupo_parroquial == 0 ||
                                    !validarTelefono()
                                    " class="flex items-center justify-center w-10 h-10 ml-2 rounded-lg">
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
            <div class="relative rounded-lg shadow dark:bg-gray-700 bg-black modal">
                <!-- Modal header -->
                <div class="flex items-start justify-between p-4 rounded-t">
                    <div class="flex-col pt-4 ml-4">
                        <p class="text-3xl font-bold text-gray-100" id="modalText">Grupos parroquiales</p>
                        <p class="text-lg font-medium text-gray-400">Imagenes referentes a los grupos parroquiales</p>
                    </div>
                    <button type="button"
                        class="inline-flex items-center justify-center w-8 h-8 ml-auto text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
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
                <div class="flex-col p-8 space-y-6">
                    <div class="flex items-center justify-between">
                        <p class="text-gray-100">Ingrese las imagenes que desee mostrar para sus grupos parroquiales
                            publicos</p>
                        <button class="flex items-center justify-center h-10 rounded-lg bg-purpleLogin hover:bg-lightPurpleLogin w-14"
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
                    <div class="grid w-full grid-cols-5 gap-5 px-5 py-5 h-80 image-container">
                        <div v-if="data_imagenes" v-for="item in data_imagenes" :key="item.id_imagen_grupo_parroquial"
                            class="relative">
                            <img :src="api_url + item.archivo_imagen" class="w-32 h-32 rounded-lg" />
                            <div @click="agregarImagenBorrada(item.id_imagen_grupo_parroquial)"
                                class="absolute inset-0 flex items-center justify-center w-32 h-32 rounded-lg opacity-0 hover:opacity-100"
                                style="background-color: rgba(0, 0, 0, 0.5);">
                                <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 24 24"
                                    style="fill: #FFFFFF; transform: ; msFilter:;">
                                    <path
                                        d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div v-for="(imagen, id) in imagenesPreviewArray" :key="id" class="relative">
                            <img :src="imagen.url" class="w-32 h-32 rounded-lg" />
                            <div @click="agregarImagenPreviewBorrada(id)"
                                class="absolute inset-0 flex items-center justify-center w-32 h-32 rounded-lg opacity-0 hover:opacity-100"
                                style="background-color: rgb(0, 0, 0, 0.5);">
                                <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 24 24"
                                    style="fill: rgb(190, 59, 59); transform: ; msFilter:;">
                                    <path
                                        d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <input type="file" accept=".jpg, .jpeg, .png, .svg" ref="inputImagenes" class="hidden"
                            @change="cambiarImagenes" multiple />
                    </div>
                    <div class="flex items-center justify-between mt-6">
                        <div class="relative z-0 w-64">
                            <input type="text" id="grupo" name="grupo" v-model="nombre_grupo_parroquialref" required readonly
                                maxlength="100"
                                class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                placeholder=" " autocomplete="off" />
                            <label for="grupo"
                                class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Grupo
                                parroquial</label>
                        </div>
                        <button class="w-32 h-10 mt-4 text-white rounded-lg bg-space" @click="actualizarImagenes">
                            Guardar
                        </button>
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

.buttons-data .imagenbtn {
    border: 3px solid #3F4280;
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

.modalG {
    background: linear-gradient(180deg,
            rgba(74, 64, 160, 0.624) 0%,
            rgba(62, 50, 119, 0.561) 100%);
    background-color: #1e1e1e;
}
</style>

<script setup>
//Importación de archivo de validaciones
import axios from 'axios';
import Swal from 'sweetalert2';
import validaciones from '../../assets/validaciones.js';
import VueEasyLightbox from 'vue-easy-lightbox'

const props = defineProps({
    //Prop que se utiliza para cargar los datos de la tabla
    datos_grupos: Array,
    //Prop que recibe la funcion de leerUsuarios, para recargar la tabla, cada vez de finalizar alguna acción
    actualizar_datos: Function,
    paginacion: Number,

});

//Evento para reiniciar el tiempo del componente del timer
const EVENT = new Event('reset-timer');

//Seccion para cargar o modificar el DOM despues de haber cargado todo el template
onMounted(() => {
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
    //Se le asigna un valor a la variable token para poder utilizar el middleware de laravel
    token.value = localStorage.getItem('token');
    llenarSelectCategoriaGrupos();
});
//Variable reactiva para almacenar el token del localStorag
const token = ref(null);

//Función para llenar el select
var roles = ref(null);

//Funcion para agregarle el valor de los roles a la variable reactiva
async function llenarSelectCategoriaGrupos() {
    try {
        //Se realiza la petición axios
        const { data: res } = await axios.get('c_grupos-select', {
            headers: {
                Authorization: `Bearer ${token.value}`,
            },
        });
        //Lo que devuelve la petición axios se le asigna a "contactos"
        roles.value = res;
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

//Se crea una variable reactiva para manejar la información del modal
const form = ref({
    id_grupo_parroquial: "",
    nombre_grupo: "",
    nombre_encargado: "",
    apellido_encargado: "",
    correo_encargado: "",
    telefono_encargado: "",
    descripcion_grupo: "",
    visibilidad_grupo: false,
    id_categoria_grupo_parroquial: 0,
    id_configuracion_parroquia: null,
});

//Función para limpiar todos los campos del form
function limpiarForm() {
    //Se llama el valor de la variable form y se cambia cada uno de sus elementos a nulo
    form.value.id_grupo_parroquial = "";
    form.value.nombre_grupo = "";
    form.value.nombre_encargado = "";
    form.value.apellido_encargado = "";
    form.value.correo_encargado = "";
    form.value.telefono_encargado = "";
    form.value.descripcion_grupo = "";
    form.value.visibilidad_grupo = false;
    form.value.id_categoria_grupo_parroquial = "0";
    limpiarImagen();
}

//Metodo para limpiar el campo de la imagen
function limpiarImagen() {
    //Limpiar imagen
    inputImagen.value.value = '';
    imagenPreview.value = null;
    form.value.logo_grupo = "";
    mostrarIconoBorrar.value = false;
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


//Variable para validar que acción se quiere hacer cuando se hace un submit al form
var formAccion = null;

//Función para evaluar que acción se va a hacer al hacer submit en el form
function accionForm(accion) {
    formAccion = accion;
}

//Función para crear/actualizar un registro cuando se ejecuta el submit del form
function submitForm() {
    if (formAccion == "crear") {
        crearGrupoParroquial();
    } else {
        actualizarGrupoParroquial();
    }
}

//Metodo para agregar un nuevo enlace
async function crearGrupoParroquial() {
    //Se actualiza el valor del token (esto para evitar errores con todos los refresh del token)

    token.value = localStorage.getItem('token');
    if (validarNombreGrupo() && validarNombreEncargado() && validarApellidoEncargado() && form.value.id_categoria_grupo_parroquial != 0 &&
        validarTelefono()
    ) {
        try {
            const FORMDATA = new FormData();
            FORMDATA.append("nombre_grupo", form.value.nombre_grupo);
            FORMDATA.append("nombre_encargado", form.value.nombre_encargado);
            FORMDATA.append("apellido_encargado", form.value.apellido_encargado);
            FORMDATA.append("correo_encargado", form.value.correo_encargado);
            FORMDATA.append("telefono_encargado", form.value.telefono_encargado);
            FORMDATA.append("descripcion_grupo", form.value.descripcion_grupo);
            FORMDATA.append("logo_grupo", form.value.logo_grupo);
            FORMDATA.append(
                "visibilidad_grupo",
                form.value.visibilidad_grupo ? 1 : 0
            );
            FORMDATA.append(
                "id_categoria_grupo_parroquial",
                form.value.id_categoria_grupo_parroquial
            );
            //Se realiza la petición axios mandando la ruta y el formData
            await axios.post("/grupos_parroquia", FORMDATA, {
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
            // props.actualizar_datos();
            TOAST.fire({
                icon: 'success',
                title: 'Grupo Parroquial creado exitosamente'
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
    await leerUnGrupoParroquial(id);
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


//Metodo para capturar el id del enlace y buscar la respectiva informacion
async function leerUnGrupoParroquial(id) {
    //Se actualiza el valor del token (esto para evitar errores con todos los refresh del token)
    token.value = localStorage.getItem('token');
    try {
        await axios.get('/grupos_parroquia/' + id, {
            headers: {
                Authorization: `Bearer ${token.value}`,
            },
        }).then(res => {
            console.log(res.data);
            form.value = {
                id_grupo_parroquial: res.data.data.id,
                nombre_grupo: res.data.data.campos.nombre_grupo,
                nombre_encargado: res.data.data.campos.nombre_encargado,
                apellido_encargado: res.data.data.campos.apellido_encargado,
                correo_encargado: res.data.data.campos.correo_encargado,
                telefono_encargado: res.data.data.campos.telefono_encargado,
                descripcion_grupo: res.data.data.campos.descripcion_grupo,
                //Se convierte a true o false en caso de que devuelva 1 o 0, esto por que el input solo acepta true y false
                visibilidad_grupo: res.data.data.campos.visibilidad_grupo ? true : false,
                id_categoria_grupo_parroquial: res.data.data.campos.id_categoria_grupo_parroquial,
            };
            if (res.data.data.campos.logo_grupo != null) {
                form.value.logo_grupo = res.data.data.campos.logo_grupo;
                imagenPreview.value = api_url + form.value.logo_grupo;
            } else {
                form.value.logo_grupo = "";
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


//Metodo para actualizar la informacion de un enlace
async function actualizarGrupoParroquial() {
    //Se actualiza el valor del token (esto para evitar errores con todos los refresh del token)
    token.value = localStorage.getItem('token');
    if (validarNombreGrupo() && validarNombreEncargado() && validarApellidoEncargado() && form.value.id_categoria_grupo_parroquial != 0 &&
        validarTelefono()) {
        try {
            var id = form.value.id_grupo_parroquial;
            const FORMDATA = new FormData();
            FORMDATA.append("nombre_grupo", form.value.nombre_grupo);
            FORMDATA.append("nombre_encargado", form.value.nombre_encargado);
            FORMDATA.append("apellido_encargado", form.value.apellido_encargado);
            FORMDATA.append("correo_encargado", form.value.correo_encargado);
            FORMDATA.append("telefono_encargado", form.value.telefono_encargado);
            FORMDATA.append("descripcion_grupo", form.value.descripcion_grupo);
            FORMDATA.append("logo_grupo", form.value.logo_grupo);
            FORMDATA.append(
                "visibilidad_grupo",
                form.value.visibilidad_grupo ? 1 : 0
            );
            FORMDATA.append("id_categoria_grupo_parroquial", form.value.id_categoria_grupo_parroquial);
            await axios.post("/grupos_parroquia_update/" + id, FORMDATA, {
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
            // props.actualizar_datos();
            TOAST.fire({
                icon: 'success',
                title: 'Grupo parroquial actualizado exitosamente'
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
}

//Codigo para cambiar el estado del enlace a inactivo
async function borrarGrupoParroquial(id,) {
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
                    await axios.delete("/grupos_parroquia/" + id, {
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
                            title: "Grupo parroquial ocultado exitosamente",
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
async function recuperarGrupoParroquial(id) {

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
                    await axios.delete("/grupos_parroquia/" + id, {
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
                        title: "Grupo parroquial recuperado exitosamente",
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


//Variable para poder concectar con el storage de la api y asi poder buscar imagenes
var api_url = "http://localhost:8000/storage/gruposParroquiales/images/";


//Imagenes grupos parroquiales

//Función para abrir el modal
async function modalImagenes(id_grupo_parroquial) {
    console.log(id_grupo_parroquial)
    await leerImagenesGruposParroquiales(id_grupo_parroquial);
    const modalElement = document.getElementById('imagemodal');
    const modalOptions = {
        backdrop: 'static',
        backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
    };
    const modal = new Modal(modalElement, modalOptions);
    const closeImagesButton = document.getElementById('imageclose');
    closeImagesButton.addEventListener('click', function () {
        modal.hide();
        id_grupo_parroquialref.value = "";
        nombre_grupo_parroquialref.value = "";
        vaciarImagenes();
    });
    modal.show();
}

//Variable ref para guardar los registros que se traen de la api
const data_imagenes = ref(null);

//Variable ref para guardar el id del grupo al que pertenecen las imagenes
const id_grupo_parroquialref = ref(null);

//Variable ref para guardar el nombre del grupo al que pertenecen las imagenes
const nombre_grupo_parroquialref = ref(null);


//Función para leer las imagenes y el grupo asignado
async function leerImagenesGruposParroquiales(id_grupo_parroquial) {
    console.log(id_grupo_parroquial);
    token.value = localStorage.getItem('token');
    id_grupo_parroquialref.value = id_grupo_parroquial;
    try {
        //Se realiza la petición axios para traer los datos
        const { data: res } = await axios.get('/imagenes_grupos/' + id_grupo_parroquial, {
            headers: {
                Authorization: `Bearer ${token.value}`,
            },
        });
        //Se asigna el valor de la respuesta de axios a la variable data_imagenes
        data_imagenes.value = res.imagenes;
        nombre_grupo_parroquialref.value = res.nombre_grupo;
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
    data_imagenes.value = data_imagenes.value.filter((item) => item.id_imagen_grupo_parroquial != id);
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
            formData.append('id_grupo_parroquial', id_grupo_parroquialref.value);
            //Se hace un for para cada posición del arreglo
            for (const imagenData of imagenesPreviewArray.value) {
                //Se crea un FormData con el archivo de la imagen y el id del grupo parroquial al que pertenece
                formData.append('archivo_imagen[]', imagenData.file);
            }

            //Se envia la petición axios
            const res = await axios.post('/imagenes_grupos', formData, {
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
                const res = await axios.delete('imagenes_grupos', {
                    data: { id_imagen_grupo_parroquial: imagenesBorradas.value },
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



//Variable reactiva para verificar si mostrar o no el boton para borrar alguna imagen
const mostrarIconoBorrar = ref(false);
//Metodo para hacer visible el icono de borrar una imagen
function iconoBorrarTrue() {
    if (imagenPreview.value) {
        mostrarIconoBorrar.value = true;
    }
}
//Metodo para no mostrar el icono de borrar una imagen
function iconoBorrarFalse() {
    if (imagenPreview.value) {
        mostrarIconoBorrar.value = false;
    }
}
//Variable reactiva para mostrar la imagen capturada
const imagenPreview = ref(null);
//Metodo para seleccionar una imagen para el registro
const seleccionarArchivo = () => {
    if (mostrarIconoBorrar.value == false) {
        inputImagen.value.click();
    } else {
        limpiarImagen();
    }
};
//Variable reactiva para caputar el valor de la imagen
const inputImagen = ref(null);
//Metodo para cambiar la imagen de un registro
const cambiarImagen = () => {
    const input = inputImagen.value;
    const file = input.files;
    if (file && file[0]) {
        form.value.logo_grupo = file[0];
        console.log(form.value.logo_grupo);
        const reader = new FileReader();
        reader.onload = (e) => {
            imagenPreview.value = e.target.result;
        };
        reader.readAsDataURL(file[0]);
        return file[0];
    }
};


//Validaciones

function validarNombreGrupo() {
    var res = validaciones.validarSoloLetras(form.value.nombre_grupo);
    return res;
}

function validarNombreEncargado() {
    var res = validaciones.validarSoloLetras(form.value.nombre_encargado);
    return res;
}

function validarApellidoEncargado() {
    var res = validaciones.validarSoloLetras(form.value.apellido_encargado);
    return res;
}

function validarTelefono() {
    var res = validaciones.validarNumeroTelefono(form.value.telefono_encargado);
    return res;
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