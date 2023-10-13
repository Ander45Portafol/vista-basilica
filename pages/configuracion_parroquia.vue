<template>
    <div class="principal mt-6">
        <!-- Menu como componente -->
        <MenuConfiguracionParroquiaDashboard class="mr-8" />
        <div>
            <!-- Formulario -->
            <form @submit.prevent="actualizarConfiguracionParroquia()"
                class="flex pt-20 justify-evenly max-[700px]:flex-col max-[700px]:items-center max-[700px]:text-2xl overflow-auto h-screen">
                <div class="flex-col w-80">
                    <!-- Campo de entrada oculto -->
                    <input type="hidden" v-model="form.id_configuracion_parroquia">
                    <!-- Campo de entrada Nombre - Parroquia -->
                    <div class="relative z-0">
                        <input type="text" id="nombre_parroquia" name="nombre_parroquia" maxlength="150" required
                            @input="validarNombreParroquia()"
                            class="block py-2.5 px-0 w-full text-sm text-slate-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                            placeholder=" " autocomplete="off" v-model="form.nombre_parroquia" />
                        <span class="text-xs text-gray-400 absolute bottom-0.5 right-0" v-if="form.nombre_parroquia">
                            {{
                                form.nombre_parroquia.length }} /150</span>
                        <span class="text-xs text-gray-400 absolute bottom-0.5 right-0" v-else> 0 /100</span>
                        <label for="nombre_parroquia"
                            class="absolute text-base text-slate-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-900  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre
                            - Parroquia<span class="text-sm ml-1"> *
                            </span></label>
                    </div>
                    <div v-if="!validarNombreParroquia()" class="flex mt-2 mb-0 text-sm text-red-400 bg-transparent"
                        role="alert">
                        <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <div>
                            El nombre de la parroquia solo permite caracteres <span class="font-medium">
                                alfanuméricos y algunos especiales (- / |).</span>
                        </div>
                    </div>
                    <!-- Campo de entrada  RUC - Parroquia -->
                    <div class="relative z-0 mt-12">
                        <input type="text" id="ruc_parroquia" name="ruc_parroquia" minlength="13" maxlength="13"
                            @input="validarRuc()"
                            class="block py-2.5 px-0 w-full text-sm text-slate-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                            placeholder=" " autocomplete="off" v-model="form.ruc_parroquia" />
                        <span class="text-xs text-gray-400 absolute bottom-0.5 right-0" v-if="form.ruc_parroquia">
                            {{ form.ruc_parroquia.length }} /13</span>
                        <span class="text-xs text-gray-400 absolute bottom-0.5 right-0" v-else> 0 /13</span>
                        <label for="ruc_parroquia"
                            class="absolute text-base text-slate-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">RUC
                            - Parroquia</label>
                    </div>
                    <div v-if="!validarRuc()" class="flex mt-2 mb-0 text-sm text-red-400 bg-transparent" role="alert">
                        <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <div>
                            <span class="font-medium">El RUC de la parroquia solo admite numeros.</span>
                        </div>
                    </div>
                    <!-- Campo de texto Dirección - Parroquia -->
                    <div class="relative z-0 mt-12">
                        <textarea type="text" id="direccion_parroquia" name="direccion_parroquia" maxlength="250"
                            class="block py-2.5 px-0 min-h-[3rem] h-[3rem] max-h-[12rem] w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                            placeholder=" " autocomplete="off" v-model=form.direccion_parroquia />
                        <span class="text-xs text-gray-400 absolute bottom-0.5 right-3" v-if="form.direccion_parroquia">
                            {{
                                form.direccion_parroquia.length }} /250</span>
                        <span class="text-xs text-gray-400 absolute bottom-0.5 right-3" v-else> 0 /250 </span>
                        <label for="direccion_parroquia"
                            class="absolute text-base text-slate-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Dirección
                            - Parroquia</label>
                    </div>
                    <!-- Campo de entrada  Nombre - Representante -->
                    <div class="relative z-0 mt-12">
                        <input type="text" id="nombre_representante" name="nombre_representante" maxlength="100" required
                            @input="validarNombreRepresentante()"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                            placeholder=" " autocomplete="off" v-model="form.nombre_representante" />
                        <span class="text-xs text-gray-400 absolute bottom-0.5 right-0" v-if="form.nombre_representante">
                            {{
                                form.nombre_representante.length }} /100</span>
                        <span class="text-xs text-gray-400 absolute bottom-0.5 right-0" v-else> 0 /100 </span>
                        <label for="nombre_representante"
                            class="absolute text-base text-slate-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre
                            - Representante<span class="text-sm ml-1"> *
                            </span></label>
                    </div>
                    <div v-if="!validarNombreRepresentante()" class="flex mt-2 mb-0 text-sm text-red-400 bg-transparent"
                        role="alert">
                        <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <div>
                            El nombre del representante solo permite caracteres <span class="font-medium">
                                alfanuméricos y algunos especiales (- / |).</span>
                        </div>
                    </div>

                    <div class="pt-4 mt-2">
                        <label for="" class="text-sm text-slate-900">Tipo - Documento<span class="text-sm ml-1"> *
                            </span></label>
                        <select id="tipo_documento_representante" name="tipo_documento_representante"
                            v-model="form.tipo_documento"
                            class="block mt-4 py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-space dark:border-space focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                            <option value="0" class="bg-white text-slate-900"> Seleccione una opción </option>
                            <option value="Cédula">Cédula</option>
                            <option value="Pasaporte">Pasaporte</option>
                            <option value="Otro">Otro...</option>
                        </select>
                        <div v-if="form.tipo_documento == 0" class="flex mt-2 mb-0 text-sm text-red-400 bg-transparent"
                            role="alert">
                            <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
                <!-- Campo de entrada  >Página web - Parroquia -->
                <div class="flex-col w-80 max-[700px]:mt-10">
                    <div class="relative z-0">
                        <input type="text" id="pagina_web" name="pagina_web" maxlength="250"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                            placeholder=" " autocomplete="off" v-model="form.pagina_web" />
                        <span class="text-xs text-gray-400 absolute bottom-0.5 right-0" v-if="form.pagina_web">
                            {{
                                form.pagina_web.length }} /250</span>
                        <span class="text-xs text-gray-400 absolute bottom-0.5 right-0" v-else> 0 /250 </span>
                        <label for="pagina_web"
                            class="absolute text-base text-slate-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Página
                            web - Parroquia</label>
                    </div>
                    <!-- Campo de entrada  >Idetificador - Parroquia -->
                    <div class="relative z-0 mt-12">
                        <input type="text" id="identificador_parroquia" name="identificador_parroquia" maxlength="100"
                            @input="validarIdentificacionFarroquia()"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                            placeholder=" " autocomplete="off" v-model="form.identificador_parroquia" />
                        <span class="text-xs text-gray-400 absolute bottom-0.5 right-0" v-if="form.identificador_parroquia">
                            {{
                                form.identificador_parroquia.length }} /100</span>
                        <span class="text-xs text-gray-400 absolute bottom-0.5 right-0" v-else> 0 /100 </span>
                        <label for="identificador_parroquia"
                            class="absolute text-base text-slate-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Identificador
                            - Parroquia</label>
                    </div>
                    <div v-if="!validarIdentificacionFarroquia()" class="flex mt-2 mb-0 text-sm text-red-400 bg-transparent"
                        role="alert">
                        <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <div>
                            <span class="font-medium">El identificador de la parroquia solo admite numeros.</span>
                        </div>
                    </div>
                    <!-- Campo de entrada  >Apellido- Representante -->
                    <div class="relative z-0 mt-12">
                        <input type="text" id="apellido_representante" name="apellido_representante" maxlength="100"
                            required @input="validarApellidoRepresentante()"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none  focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                            placeholder=" " autocomplete="off" v-model="form.apellido_representante" />
                        <span class="text-xs text-gray-400 absolute bottom-0.5 right-0" v-if="form.apellido_representante">
                            {{
                                form.apellido_representante.length }} /100</span>
                        <span class="text-xs text-gray-400 absolute bottom-0.5 right-0" v-else> 0 /100 </span>
                        <label for="apellido_representante"
                            class="absolute text-base text-slate-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellido
                            - Representante<span class="text-sm ml-1"> *
                            </span></label>
                    </div>
                    <div v-if="!validarApellidoRepresentante()" class="flex mt-2 mb-0 text-sm text-red-400 bg-transparent"
                        role="alert">
                        <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <div>
                            El apellido del representante solo permite caracteres <span class="font-medium">
                                alfanuméricos y algunos especiales (- / |).</span>
                        </div>
                    </div>
                    <!-- Campo de entrada  >Teléfono- Parroquia -->
                    <div class="relative z-0 mt-12">
                        <input type="text" id="telefono_parroquia" name="telefono_parroquia" maxlength="10" required
                            @input="validarNumeroTelefono()"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none  focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                            placeholder=" " autocomplete="off" v-model="form.telefono_parroquia" />
                        <span class="text-xs text-gray-400 absolute bottom-0.5 right-0" v-if="form.telefono_parroquia">
                            {{
                                form.telefono_parroquia.length }} /10</span>
                        <span class="text-xs text-gray-400 absolute bottom-0.5 right-0" v-else> 0 /10</span>
                        <label for="telefono_parroquia"
                            class="absolute text-base text-slate-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Teléfono
                            - Parroquia<span class="text-sm ml-1"> *
                            </span></label>
                    </div>
                    <div v-if="!validarNumeroTelefono()" class="flex mt-2 mb-0 text-sm text-red-400 bg-transparent"
                        role="alert">
                        <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <div>
                            El número de teléfono ingresado <span class="font-medium">
                                no tiene un formato correcto.</span>
                        </div>
                    </div>
                    <!-- Campo de entrada  >Documento- Representante -->
                    <div class="relative z-0 mt-10">
                        <input type="text" id="documento_representante" name="documento_representante" maxlength="10"
                            required
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                            placeholder=" " autocomplete="off" v-model="form.documento_representante" />
                        <span class="text-xs text-gray-400 absolute bottom-0.5 right-0" v-if="form.documento_representante">
                            {{
                                form.documento_representante.length }} /10</span>
                        <span class="text-xs text-gray-400 absolute bottom-0.5 right-0" v-else> 0 /10</span>
                        <label for="documento_representante"
                            class="absolute text-base text-slate-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">#
                            Documento
                            - Representante<span class="text-sm ml-1"> *
                            </span></label>
                    </div>
                    <div v-if="!validarNumeroDocumento()" class="flex mt-2 mb-0 text-sm text-red-400 bg-transparent"
                        role="alert">
                        <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <div>
                            El documento ingresado <span class="font-medium">
                                no tiene un formato correcto.</span>
                        </div>
                    </div>
                </div>
                <div class="flex-col h-96 max-[700px]:mt-10">
                    <div class="h-1/2">
                        <p class="mb-4 text-center">Logo Parroquia</p>
                        <div class="flex justify-center">
                            <div class="flex justify-center relative h-44 w-36 rounded-lg cursor-pointer"
                                @click="seleccionarArchivo" @mouseover="iconoBorrarTrue" @mouseleave="iconoBorrarFalse">
                                <img v-if="imagenPreview" :src="imagenPreview"
                                    class="h-full w-full rounded-lg border-2 border-gray-800" />
                                <input type="file" ref="inputImagen" class="hidden" @change="cambiarImagen" />
                                <div v-if="mostrarIconoBorrar"
                                    class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 24 24"
                                        style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;">
                                        <path
                                            d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-end justify-end h-full mt-[-60px] w-44 ">
                        <!-- Se le coloca la función para actualizar al botón -->
                        <button type="button" id="btnModalClear" @click="limpiarForm()"
                            class="h-10 w-10 rounded-lg flex justify-center items-center ml-4 ">
                            <svg width="22px" height="22px" viewBox="0 0 24 24" stroke-width="2" fill="none"
                                xmlns="http://www.w3.org/2000/svg" color="#000000">
                                <path d="M11 21H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v7" stroke="#C99856"
                                    stroke-width="2" stroke-linecap="round"></path>
                                <path
                                    d="M2 7h20M5 5.01l.01-.011M8 5.01l.01-.011M11 5.01l.01-.011M21.666 16.667C21.049 15.097 19.636 14 17.99 14c-1.758 0-3.252 1.255-3.793 3"
                                    stroke="#C99856" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path
                                    d="M19.995 16.772H21.4a.6.6 0 00.6-.6V14.55M14.334 19.333C14.953 20.903 16.366 22 18.01 22c1.758 0 3.252-1.255 3.793-3"
                                    stroke="#C99856" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M16.005 19.228H14.6a.6.6 0 00-.6.6v1.622" stroke="#C99856" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                        <button id="btnModalAdd" type="submit"
                            :disabled="!validarNombreParroquia() || !validarRuc() || !validarNombreRepresentante() || !validarApellidoRepresentante() || !validarNumeroTelefono() || !validarIdentificacionFarroquia() || !validarNumeroDocumento()"
                            class="h-10 ml-2 w-10 rounded-lg flex justify-center items-center max-[400px]:mx-4 max-[750px]:my-1 max-[750px]:ml-[-1px] max-[400px]:ml-6 max-[400px]:mr-[6px]">
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
</template>

<script setup>
import axios from 'axios';
import Swal from 'sweetalert2';
import validaciones from '../assets/validaciones.js';
definePageMeta({
    layout: "principal",
    //Se le establece un middleware a la página
    middleware: "middleware-paginas"
})

const token = ref(null);
const EVENT = new Event('reset-timer');

onMounted(() => {
    cargando_datos();
});

const mostrarIconoBorrar = ref(false);

function iconoBorrarTrue() {
    if (imagenPreview.value) {
        mostrarIconoBorrar.value = true;
    }
}

function iconoBorrarFalse() {
    if (imagenPreview.value) {
        mostrarIconoBorrar.value = false;
    }
}

const imagenPreview = ref(null);
const seleccionarArchivo = () => {
    if (mostrarIconoBorrar.value == false) {
        inputImagen.value.click();
    } else {
        limpiarImagen();
    }
};
const inputImagen = ref(null);

const cambiarImagen = () => {
    const input = inputImagen.value;
    const file = input.files;
    if (file && file[0]) {
        form.value.logo_parroquia = file[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            imagenPreview.value = e.target.result;
        };
        reader.readAsDataURL(file[0]);
        return file[0];
    }
};

//Metodo para limpiar el campo de la imagen
function limpiarImagen() {
    //Limpiar imagen
    inputImagen.value.value = '';
    imagenPreview.value = null;
    form.value.logo_parroquia = "";
    mostrarIconoBorrar.value = false;
};
var api_url = "http://localhost:8000/storage/configuracionParroquia/images/";

//Se crea una variable reactiva para manejar la información del modal
const form = ref({
    id_configuracion_parroquia: "",
    nombre_parroquia: "",
    pagina_web: "",
    ruc_parroquia: "",
    direccion_parroquia: "",
    nombre_representante: "",
    apellido_representante: "",
    documento_representante: "",
    tipo_documento: 0,
    telefono_parroquia: "",
    identificador_parroquia: "",
    logo_parroquia: "",
});


//Función para limpiar todos los campos del form
function limpiarForm() {
    //Se llama el valor de la variable form y se cambia cada uno de sus elementos a nulo
    form.value.id_configuracion_parroquia = "";
    form.value.nombre_parroquia = "";
    form.value.pagina_web = "";
    form.value.ruc_parroquia = "";
    form.value.direccion_parroquia = "";
    form.value.nombre_representante = "";
    form.value.apellido_representante = "";
    form.value.documento_representante = "";
    form.value.tipo_documento = 0;
    form.value.telefono_parroquia = "";
    form.value.identificador_parroquia = "";
    form.value.logo_parroquia = "";
}


async function cargando_datos() {
    token.value = localStorage.getItem('token');
    await axios.get('/parroquia/', {
        headers: {
            Authorization: `Bearer ${token.value}`,
        },
    }).then(res => {
        form.value = {
            id_configuracion_parroquia: res.data.data[0].id,
            nombre_parroquia: res.data.data[0].campos.nombre_parroquia,
            pagina_web: res.data.data[0].campos.pagina_web,
            ruc_parroquia: res.data.data[0].campos.ruc_parroquia,
            direccion_parroquia: res.data.data[0].campos.direccion_parroquia,
            nombre_representante: res.data.data[0].campos.nombre_representante,
            apellido_representante: res.data.data[0].campos.apellido_representante,
            documento_representante: res.data.data[0].campos.documento_representante,
            tipo_documento: res.data.data[0].campos.tipo_documento,
            telefono_parroquia: res.data.data[0].campos.telefono_parroquia,
            identificador_parroquia: res.data.data[0].campos.identificador_parroquia,
        };
        if (res.data.data[0].campos.logo_parroquia != null) {
            form.value.logo_parroquia = res.data.data[0].campos.logo_parroquia;
            imagenPreview.value = api_url + form.value.logo_parroquia;
        } else {
            form.value.logo_parroquia = "";
        }
        //Se reinicia el timer
        window.dispatchEvent(EVENT);
        //Se refresca el valor del token con la respuesta del axios
        localStorage.setItem('token', res.data.token);
        token.value = localStorage.getItem('token');
    });
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


async function actualizarConfiguracionParroquia() {
    if (validarNombreParroquia() && validarRuc() && validarNombreRepresentante() && validarApellidoRepresentante() && validarNumeroTelefono() && validarIdentificacionFarroquia() && validarNumeroDocumento()) {
        token.value = localStorage.getItem('token');
        try {
            //Se establece una variable de id con el valor que tiene guardado la variable form
            var id = form.value.id_configuracion_parroquia;
            //Se crea una constante para guardar el valor actual que tienen todos los campos del form
            const FORM_DATA = new FormData();
            FORM_DATA.append("nombre_parroquia", form.value.nombre_parroquia);
            FORM_DATA.append("pagina_web", form.value.pagina_web);
            FORM_DATA.append("ruc_parroquia", form.value.ruc_parroquia);
            FORM_DATA.append("direccion_parroquia", form.value.direccion_parroquia);
            FORM_DATA.append("nombre_representante", form.value.nombre_representante);
            FORM_DATA.append("apellido_representante", form.value.apellido_representante);
            FORM_DATA.append("documento_representante", form.value.documento_representante);
            FORM_DATA.append("tipo_documento", form.value.tipo_documento);
            FORM_DATA.append("telefono_parroquia", form.value.telefono_parroquia);
            FORM_DATA.append("identificador_parroquia", form.value.identificador_parroquia);
            FORM_DATA.append("logo_parroquia", form.value.logo_parroquia);

            //Se realiza la petición axios mandando la ruta y el formData
            await axios.post("/parroquia_update/" + id, FORM_DATA, {
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
            //cargando_datos();
            //Se lanza la alerta de éxito
            TOAST.fire({
                icon: 'success',
                title: 'Informacion actualizada exitosamente'
            })

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

//validaciones 
function validarNombreParroquia() {
    var res = validaciones.validarSoloLetras(form.value.nombre_parroquia);
    return res;
}

function validarRuc() {
    var res = validaciones.validarSoloNumero(form.value.ruc_parroquia);
    return res;
}


function validarNombreRepresentante() {
    var res = validaciones.validarSoloLetras(form.value.nombre_representante);
    return res;
}

function validarApellidoRepresentante() {
    var res = validaciones.validarSoloLetras(form.value.apellido_representante);
    return res;
}

function validarNumeroDocumento() {
    if (form.value.tipo_documento == 0 && form.value.documento_representante.length == 0) {
        return true;
    } else if (form.value.tipo_documento == 0) {
        return false;
    } else {
        var res = validaciones.validarNumeroDocumento(form.value.documento_representante, form.value.tipo_documento);
        return res;
    }
}

function validarNumeroTelefono() {
    var res = validaciones.validarNumeroTelefono(form.value.telefono_parroquia);
    return res;
}

function validarIdentificacionFarroquia() {
    var res = validaciones.validarSoloNumero(form.value.identificador_parroquia);
    return res;
}

</script>
