<template>
    <div class="principal mt-6">
        <!-- Menu de navegación superior -->
        <MenuMensajeDashboard />
        <div class="mdprincipal flex-col mt-8 px-8 overflow-hidden">
            <div class="h-16 w-full rounded-xl flex justify-between items-center content-buttons max-[450px]:flex-wrap">
                <!-- Sección del buscador -->
                <div action="" class="w-3/4 flex items-center h-full mt-4 max-[500px]:w-full">
                    <!-- Se enlaza la variable buscar con v-model y se le asigna el evento para el buscador -->
                    <input type="text" class="rounded-lg relative w-2/4 h-12 outline-none max-[800px]:w-full min-w-[200px]"
                        placeholder="Buscar... (asunto/correo)" v-model="buscar.buscador" @keyup="buscarMensajes()">
                    <div class="flex justify-end items-center">
                        <!-- Se le asigna la función para limpiar el buscador al botón -->
                        <button class="absolute mr-4" @click="limpiarBuscador()"><svg width="20px" height="20px"
                                stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                color="#000000">
                                <path d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
                                    stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                    </div>
                </div>
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
                    <button
                        class="w-12 h-10 flex items-center justify-center ml-4 mr-5 rounded-lg max-[800px]:w-8 max-[800px]:h-8 max-[800px]:ml-2 max-[450px]:mx-8">
                        <svg width="24px" height="24px" stroke-width="2.5" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg" color="#000000">
                            <path d="M7 6h10M7 9h10M9 17h6" stroke="#1B1C30" stroke-width="2.5" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                            <path
                                d="M3 12h-.4a.6.6 0 00-.6.6v8.8a.6.6 0 00.6.6h18.8a.6.6 0 00.6-.6v-8.8a.6.6 0 00-.6-.6H21M3 12V2.6a.6.6 0 01.6-.6h16.8a.6.6 0 01.6.6V12M3 12h18"
                                stroke="#1B1C30" stroke-width="2.5"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <!-- Línea divisora -->
            <div class="line bg-slate-800 h-0.5 mt-4 w-full min-w-[200px]"></div>
            <!-- Se manda a traer la longitud del array de contactos (el que trae los registros) y así saber cuantos registros son -->
            <p v-if="mensajes" class="font-extrabold text-slate-900 mt-8 ml-4 max-[425px]:mt-16">
                {{ mensajes.length }}
                <span class="text-gray-500 font-normal ml-2">registros encontrados!</span>
            </p>
            <p v-else class="font-extrabold text-slate-900 mt-8 ml-4 max-[425px]:mt-16">
                <span class="text-gray-500 font-normal ml-2">- registros encontrados!</span>
            </p>
            <!--Cargando de mensajes -->
            <div class="loadingtable overflow-hidden h-4/6 pr-4">
                <div class="contained-data flex-col" v-for="number in 6" :key="number">
                    <div v-if="!mensajes"
                        class="border-4 border-slate-300 animate-pulse flex justify-between mt-4 rounded-xl p-4 max-[400px]:flex-wrap max-[400px]:w-full min-w-[200px]">
                        <div class="flex justify-start w-3/4 items-center max-[400px]:w-full">
                            <div class="h-16 w-16 bg-slate-300 mr-5 rounded-2xl max-[600px]:hidden"></div>
                            <div class="datainfo flex-col max-[400px] p-0 w-full ml-0 mt-2 text-center">
                                <div class="h-4 bg-slate-300 rounded-full dark:bg-gray-700 w-48 max-[450px]:w-40 max-[400px]:w-full mb-4"></div>
                                <div class="h-3 bg-slate-300 rounded-full dark:bg-gray-700 w-1/2 mb-2.5 max-[400px]:w-full"></div>
                            </div>
                        </div>
                        <div
                            class="buttons-data flex justify-center items-center max-[750px]:flex-col max-[400px]:flex-row max-[400px]:m-auto max-[400px]:mt-2">
                            <div
                                class="bg-slate-300 h-10 w-10 ml-4 rounded-md flex items-center justify-center max-[750px]:ml-0 max-[750px]:mt-2 max-[400px]:mt-0 max-[400px]:ml-2">
                            </div>
                            <div
                                class="bg-slate-300 h-10 w-10 ml-4 rounded-md flex items-center justify-center max-[750px]:ml-0 max-[750px]:mt-2 max-[400px]:mt-0 max-[400px]:ml-8">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="sectionPage" v-for="mensaje in mensajes" :key="mensaje.id_mensaje">
                <div class="contained-data flex-col">
                    <div v-if="mensajes"
                        class="data-contained flex justify-between mt-4 rounded-xl p-4 max-[400px]:flex-wrap max-[400px]:w-full min-w-[200px]">
                        <div class="flex justify-start w-3/4 items-center max-[400px]:w-full">
                            <div
                                class="datainfo flex-col ml-8 max-[400px]:p-0 max-[400px]:w-full max-[400px]:ml-0 max-[400px]:text-center">
                                <p class="font-extrabold text-xl text-salte-900 max-[750px]:text-[18px]">{{
                                    mensaje.asunto_mensaje }}
                                </p>
                                <p class="font-normal text-sm mt-1text-gray-500 max-[750px]:text-[12px]">
                                    {{ mensaje.nombre_contactante }} {{ mensaje.apellido_contactante }}</p>
                                <p class="font-normal text-sm text-gray-500 max-[750px]:text-[12px]">
                                    {{ mensaje.correo_contactante }}
                                </p>
                            </div>
                        </div>
                        <!-- Boton para leer un mensaje -->
                        <div class="buttons-data flex justify-center items-center max-[750px]:flex-col max-[400px]:flex-row max-[400px]:m-auto max-[400px]:mt-2"
                            v-if="mensaje.visibilidad_mensaje == 1">
                            <button class="h-10 w-10 rounded-md flex items-center justify-center editbtn max-[400px]:mx-4"
                                @click="leerUnMensaje(mensaje.id_mensaje)" v-if="mensaje.visibilidad_mensaje == 1">
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
                                @click="borrarMensaje(mensaje.id_mensaje)" v-if="mensaje.visibilidad_mensaje == 1">
                                <svg width="26px" height="26px" viewBox="0 0 24 24" stroke-width="2" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" color="#000000">
                                    <path
                                        d="M20 9l-1.995 11.346A2 2 0 0116.035 22h-8.07a2 2 0 01-1.97-1.654L4 9M21 6h-5.625M3 6h5.625m0 0V4a2 2 0 012-2h2.75a2 2 0 012 2v2m-6.75 0h6.75"
                                        stroke="#872727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                </svg>
                            </button>
                        </div>
                        <div class="buttons-data flex justify-center items-center max-[750px]:flex-col max-[400px]:flex-row max-[400px]:m-auto max-[400px]:mt-2"
                            v-else>
                            <button
                                class="h-10 w-10 rounded-md flex items-center justify-center ml-4 changebtn max-[750px]:ml-0 max-[750px]:mt-2 max-[400px]:mt-0 max-[400px]:mx-4"
                                @click="recuperarMensaje(mensaje.id_contacto)">
                                <svg width="24px" height="24px" stroke-width="3" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" color="#000000">
                                    <path d="M21.168 8A10.003 10.003 0 0012 2C6.815 2 2.55 5.947 2.05 11" stroke="#3F4280"
                                        stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path
                                        d="M17 8h4.4a.6.6 0 00.6-.6V3M2.881 16c1.544 3.532 5.068 6 9.168 6 5.186 0 9.45-3.947 9.951-9"
                                        stroke="#3F4280" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                    <path d="M7.05 16h-4.4a.6.6 0 00-.6.6V21" stroke="#3F4280" stroke-width="3"
                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Paginación -->
            <div class="flex justify-center mt-6">
                    <TailwindPagination v-if="data" :item-classes="[
                        'text-gray-500',
                        'rounded-full',
                        'border-none',
                        'ml-1',
                        'hover:bg-gray-200',
                    ]" :active-classes="['text-white', 'rounded-full', 'bg-purpleLogin']" :limit="1" :keepLength="true"
                        :data="data" @pagination-change-page="pagina = $event" />
                </div>
        </div>
    </div>
    <!-- Modal -->
    <div id="staticModal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-2xl max-h-full">
            <!-- Modal content -->
            <div class="relative rounded-lg shadow modal">
                <!-- Modal header -->
                <div class="flex items-start justify-between p-4 rounded-t">
                    <div class="flex-col ml-4 pt-4">
                        <p class="text-3xl font-bold text-gray-100" id="modalText"></p>
                        <p class="text-base font-medium text-gray-400">Mensaje</p>
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
                    <form action="" class="flex justify-evenly" id="formModal" @submit.prevent="submitForm()">
                        <div class="flex-col w-64">
                            <!-- Se enlazan todos los inputs usando el v-model a la variable form -->
                            <input type="hidden" id="id_mensaje" v-model="form.id_mensaje">
                            <div class="relative z-0">
                                <input type="text" id="nombre_contactante" name="nombre_contactante"
                                    @input="validarNombre()" v-model="form.nombre_contactante" maxlength="100" required
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" />
                                <span class="text-xs text-gray-400 absolute bottom-0.5 right-0"
                                    v-if="form.nombre_contactante">
                                    {{
                                        form.nombre_contactante.length
                                    }} /100
                                </span>
                                <span class="text-xs text-gray-400 absolute bottom-0.5 right-0" v-else>0 /100</span>
                                <label for="nombre_contactante"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre
                                    - Persona<span class="text-sm ml-1"> *
                                    </span></label>
                            </div>
                            <div v-if="!validarNombre()" class="flex mt-2 mb-0 text-sm text-red-400 bg-transparent"
                                role="alert">
                                <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <div>
                                    El nombre del contactante solo permite <span class="font-medium">
                                        letras.</span>
                                </div>
                            </div>
                            <div class="relative z-0 mt-6">
                                <textarea id="mensaje" name="mensaje" v-model="form.mensaje" maxlength="500" required
                                    class="block py-2.5 px-0 min-h-[3rem] h-[3rem] max-h-[12rem] w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" />
                                <span class="text-xs text-gray-400 absolute bottom-0.5 right-5" v-if="form.mensaje"> {{
                                    form.mensaje.length }} /500</span>
                                <span class="text-xs text-gray-400 absolute bottom-0.5 right-5" v-else> 0 /500</span>
                                <label for="mensaje"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mensaje<span
                                        class="text-sm ml-1"> *
                                    </span></label>
                            </div>
                            <div class="relative z-0 mt-6">
                                <input type="email" id="correo_contactante" name="correo_contactante" maxlength="150"
                                    required v-model="form.correo_contactante"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" />
                                <span class="text-xs text-gray-400 absolute bottom-0.5 right-0"
                                    v-if="form.correo_contactante">
                                    {{
                                        form.correo_contactante.length
                                    }} /150
                                </span>
                                <span class="text-xs text-gray-400 absolute bottom-0.5 right-0" v-else>0 /150</span>
                                <label for="correo_contactante"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Correo
                                    electrónico
                                    - Persona<span class="text-sm ml-1"> *
                                    </span></label>
                            </div>
                            <div class="relative z-0 mt-10">
                                <input type="text" id="telefono_contactante" name="telefono_contactante" maxlength="9"
                                    @input="validarTelefono()" required v-model="form.telefono_contactante"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" />
                                <span class="text-xs text-gray-400 absolute bottom-0.5 right-0"
                                    v-if="form.telefono_contactante">
                                    {{
                                        form.telefono_contactante.length
                                    }} /9
                                </span>
                                <span class="text-xs text-gray-400 absolute bottom-0.5 right-0" v-else>0 /9</span>
                                <label for="telefono_contactante"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Teléfono
                                    - Persona<span class="text-sm ml-1"> *
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
                                    El número de teléfono ingresado no tiene un <span class="font-medium">
                                        formato correcto.</span>
                                </div>
                            </div>
                            <div class="flex-col mt-6">
                                <label for="" class="text-gray-200">Visibilidad - Pagina</label>
                                <div class="flex justify-start mt-2">
                                    <label class="relative inline-flex items-center mb-5 cursor-pointer">
                                        <input type="checkbox" value="" class="sr-only peer" id="visibilidad_mensaje"
                                            name="visibilidad_mensaje" v-model="form.visibilidad_mensaje">
                                        <div
                                            class="w-9 h-5 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                        </div>
                                    </label>
                                </div>
                            </div>

                        </div>
                        <div class="flex-col w-64">
                            <div class="relative z-0">
                                <input type="text" id="apellido_contactante" name="apellido_contactante" maxlength="100"
                                    @input="validarApellido()" required v-model="form.apellido_contactante"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" />
                                <span class="text-xs text-gray-400 absolute bottom-0.5 right-0"
                                    v-if="form.apellido_contactante">
                                    {{
                                        form.apellido_contactante.length
                                    }} /100
                                </span>
                                <span class="text-xs text-gray-400 absolute bottom-0.5 right-0" v-else>0 /100</span>
                                <label for="apellido_contactante"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellido
                                    - Persona<span class="text-sm ml-1"> *
                                    </span></label>
                            </div>
                            <div v-if="!validarApellido()" class="flex mt-2 mb-0 text-sm text-red-400 bg-transparent"
                                role="alert">
                                <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <div>
                                    El apellido del contactante solo permite <span class="font-medium">
                                        letras.</span>
                                </div>
                            </div>
                            <div class="relative z-0 mt-6">
                                <input type="date" id="fecha_mensaje" name="fecha_mensaje" v-model="form.fecha_mensaje"
                                    required
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" aaaaa" autocomplete="off" />
                                <label for="fecha_mensaje"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Fecha
                                    - Mensaje<span class="text-sm ml-1"> *
                                    </span></label>
                            </div>

                            <div class="relative z-0 mt-6">
                                <input type="text" id="asunto_mensaje" name="asunto_mensaje" v-model="form.asunto_mensaje"
                                    maxlength="150" required
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" />
                                <span class="text-xs text-gray-400 absolute bottom-0.5 right-0" v-if="form.asunto_mensaje">
                                    {{
                                        form.asunto_mensaje.length
                                    }} /150
                                </span>
                                <span class="text-xs text-gray-400 absolute bottom-0.5 right-0" v-else>0 /150</span>
                                <label for="asunto_mensaje"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Asunto
                                    - Mensaje<span class="text-sm ml-1"> *
                                    </span></label>
                            </div>

                            <div class="pt-4 mt-2 flex-col">
                                <label for="" class="absolute text-gray-200 text-sm">Estado - Mensaje<span
                                        class="text-sm ml-1"> *
                                    </span></label>
                                <select id="estado_mensaje" name="estado_mensaje" v-model="form.estado_mensaje"
                                    class="block mt-4 py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                    <option class="bg-gray-700" value="0">Seleccione una opción</option>
                                    <option class="bg-gray-700" value="Atendido">Atendido</option>
                                    <option class="bg-gray-700" value="En seguimiento">En seguimiento</option>
                                    <option class="bg-gray-700" value="Pendiente">Pendiente</option>
                                </select>
                                <div v-if="form.estado_mensaje == 0"
                                    class="flex mt-2 mb-0 text-sm text-red-400 bg-transparent" role="alert">
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
                            <div class="pt-4 mt-4 flex-col">
                                <label for="" class="absolute text-gray-200 text-sm">Contactos<span class="text-sm ml-1"> *
                                    </span></label>
                                <select id="underline_select" v-model="form.id_contacto"
                                    class="block mt-4 py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                    <option value="0" class="bg-gray-700 text-white"> Seleccione una opción </option>
                                    <option class="bg-gray-700" v-for="contacto in contactos" :key="contacto.id_contacto"
                                        :value="contacto.id_contacto">
                                        {{ contacto.correo_contacto }}</option>
                                </select>
                                <div v-if="form.id_contacto == 0" class="flex mt-2 mb-0 text-sm text-red-400 bg-transparent"
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
                            <div class="modal-buttons mt-24 flex justify-end items-end">
                                <button class="h-10 w-10 rounded-lg flex justify-center items-center ml-4"
                                    id="btnModalClear" @click="limpiarForm()" type="button">
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
                                <button class="h-10 w-10 rounded-lg flex justify-center items-center ml-4"
                                    value="actualizar" id="btnModalUpdate" type="submit"
                                    :disabled="!validarNombre() || !validarApellido() || !validarTelefono() || form.estado_mensaje == 0 || form.id_contacto == 0">
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

.buttons-data .changebtn {
    border: 3px solid #3F4280;
}
</style>


<script setup>
//El setup se usa para manejar una sintaxis mas concisa del codigo y poder usar la reactividad de vue 3

//Importaciones de plugins y funciones necesarias para el funcionamiento del proyecto

//Importacion para usar el hook de onMounted
import { onMounted, ref } from "vue";
//Importación del modal de flowbite
import { Modal } from "flowbite";
//Importación de axios, se utiliza para hacer las peticiones al servidor -> Para mas información vean el axiosPlugin en la carpeta plugins
import axios from "axios";
//Importación del plugin de paginación de registros
import { TailwindPagination } from "laravel-vue-pagination";
//Importación de sweetalert
import Swal from "sweetalert2";
//Importación de archivo de validaciones
import validaciones from "../assets/validaciones.js";

/*definePageMeta es un macro compilador (Se ejecuta mientras el programa se compila) para los componentes que se 
encuentran en /pages, este permite establecer/transformar las propiedades de los componentes de nuxt*/
definePageMeta({
    //Se le establece el layout principal
    layout: "principal",
    //Se le establece un middleware a la página
    middleware: "middleware-paginas"
});

//onMounted es un hook (en vue los hooks se usan para hacer tareas especificas con los componentes)
/*En este hook se crean todas las funciones relacionadas al manejo del modal, se crean en este onMounted para que se
realicen mientras el componente se crea y se añade al DOM*/
onMounted(() => {
    //Agrega la funcion par ala validacion de la fecha de los  mensajes
    function validarFechas() {
        var res = validaciones.validarFecha(0, 1, 0);
        document.getElementById('fecha_mensaje').min = res.min;
        document.getElementById('fecha_mensaje').max = res.max;
    }

    validarFechas();

    //Se le asigna un valor a la variable token para poder utilizar el middleware de laravel
    token.value = localStorage.getItem('token');

    //Constantes para manejar el modal
    //Constante para el botón de agregar un registro
    const buttonElement = document.getElementById("btnadd");
    //Constante para el modal
    const modalElement = document.getElementById("staticModal");
    //Constante para el botón de cerrar en el modal
    const closeButton = document.getElementById("closeModal");
    //Constante para el titulo del modal
    const modalText = document.getElementById("modalText");
    //Constante para el boton de actualizar dentro del modal
    const modalBtnUpdate = document.getElementById("btnModalUpdate");
    //Constante para el boton de agregar dentro del modal
    const modalBtnAdd = document.getElementById("btnModalAdd");

    /*Constante para manejar el comportamiento del modal, el 'static' se usa para que el modal no se cierre 
      aunque se de click fuera de el y el backdropClasses se usa para cambiar el fondo al abrir el modal*/
    const modalOptions = {
        backdrop: "static",
        backdropClasses:
            "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
    };

    //Se evalua si existe un modal y en caso de que si se ejecuta todo lo relacionado a su funcionamiento
    if (modalElement) {
        //Se crea el objeto del modal con el id de la etiqueta del modal + las opciones de modalOptions
        const modal = new Modal(modalElement, modalOptions);

        //Se le añade un evento click al botón de cerrar que se encuentra en el modal, esto para poder cerrar el modal después de abrirlo
        closeButton.addEventListener("click", function () {
            modal.hide();
            limpiarForm();
        });
    }

    //Se leen las páginas al montarse la página para evitar problemas del setup y el localStorage
    leerMensajes();
});

//Variable reactiva para llenar el select
var contactos = ref(null);

//Función para llenar el select
async function llenarSelectContactos() {
    try {
        //Se realiza la petición axios
        const { data: res } = await axios.get('contactos-select');
        //Lo que devuelve la petición axios se le asigna a "contactos"
        contactos.value = res;
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

llenarSelectContactos();

//Variable reactiva para almacenar el token del localStorage
const token = ref(null);

//Variable reactiva para almacenar los datos de la tabla
const data = ref(null);

//Se establece una variable reactiva para manejar la paginación de registros, se establece como 1 ya que es la pagina default
const pagina = ref(useRoute().query.pagina || 1);

//Se crea una variable reactiva para el buscador
const buscar = ref({
    buscador: "",
});

/*Se crea una variable let (variable de bloque / su alcance se limita a un bloque cercano). Esta variable es reactiva
y se usa para llevar el control de la información que se muestra dependiendo de la pagina*/
let mensajes = computed(() => data.value?.data);

/*Se crea un watch (detecta cada que "pagina" cambia) y ejecuta un select a los registros de esa página,
además muestra en la url la página actual*/
watch(pagina, async () => {
    //Se evalua si el buscador tiene algún valor para ver si se realiza el leer o el buscar
    if (buscar.value.buscador != "") {
        //Se ejecuta el buscar página si el buscador tiene un valor (el plugin reinicia el paginado a 1 así que no hay que cambiar el valor de la constante pagina)
        buscarMensajes();
    } else {
        //Se ejecuta el leer páginas para cargar la tabla, usando la constante pagina también se busca la pagina especifica de registros
        leerMensajes();
    }
    //Se cambia la url para agregar en que pagina se encuentra el usuario
    useRouter().push({ query: { pagina: pagina.value } });
});

//Variable reactiva para poder intercambiar los registros entre visibles y no visibles
const registros_visibles = ref(true);

//Función para evaluar registros según la visibilidad que quiera el usuario
function visibilidadRegistros() {
    //Se establece el valor de la variable registros_visibles a su opuesto
    registros_visibles.value = !registros_visibles.value;
    //Se evalua el buscador para realizar leerMensajes o buscarMensajes 
    if (buscar.value.buscador) {
        buscarMensajes();
    } else {
        leerMensajes();
    }
}

/*Función para leer la información de los registros de la página actual, se hace uso de axios para llamar la ruta junto con 
?page que se usa para ver la paginación de registros, y mediante el valor de la constante de "pagina" se manda a llamar los registros especificos*/
async function leerMensajes() {
    try {
        //Se evalua si se quieren mostrar los registros visibles o invisibles
        if (registros_visibles.value) {
            //Se realiza la petición axios para leer los registros visibles
            const { data: res } = await axios.get(`/mensajes?page=${pagina.value}`, {
                headers: {
                    Authorization: `Bearer ${token.value}`,
                },
            });
            //Se asigna el valor de la respuesta de axios a la constante data
            data.value = res;
        } else {
            //Se realiza la petición axios para leer los registros no visibles
            const { data: res } = await axios.get(`/mensajes_ocultos?page=${pagina.value}`, {
                headers: {
                    Authorization: `Bearer ${token.value}`,
                },
            });
            //Se asigna el valor de la respuesta de axios a la constante data
            data.value = res;
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
            icon: "error",
            title: "Error",
            text: res,
            confirmButtonColor: "#3F4280",
        });
    }
}

//Función para buscar registros dependiendo del valor del buscador
async function buscarMensajes() {
    try {
        //Se evalua que el buscador no este vacio
        if (buscar.value.buscador != "") {
            //Se evalua si se quieren mostrar los registros visibles o no visibles
            if (registros_visibles.value) {
                // Se realiza la petición axios para mostrar los registros visibles
                const { data: res } = await axios.get(
                    `/mensajes_search?page=${pagina.value}&buscador=${buscar.value.buscador}`, {
                    headers: {
                        Authorization: `Bearer ${token.value}`,
                    },
                }
                );
                // Actualiza los datos en la constante data
                data.value = res;
            } else {
                // Se realiza la petición axios para mostrar los registros no visibles
                const { data: res } = await axios.get(
                    `/mensajes_search_ocultos?page=${pagina.value}&buscador=${buscar.value.buscador}`, {
                    headers: {
                        Authorization: `Bearer ${token.value}`,
                    },
                }
                );
                // Actualiza los datos en la constante data
                data.value = res;
            }
            // Actualiza la URL con el parámetro de página
            useRouter().push({ query: { pagina: pagina.value } });
        } else {
            //Se regresa a la página 1 y se cargan todos los registros
            pagina.value = 1;
            leerMensajes();
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
            icon: "error",
            title: "Error",
            text: res,
            confirmButtonColor: "#3F4280",
        });
    }
}

//Función para limpiar el buscador
function limpiarBuscador() {
    //Se coloca la constante pagina 1 para que salga la primera pagina de registros
    pagina.value = 1;
    //Se leen todos los registros
    leerMensajes();
    //Se coloca el valor del buscador a nulo
    buscar.value.buscador = "";
}

//Funciones para manejo del modal

//Se crea una variable reactiva para manejar la información del modal
const form = ref({
    id_mensaje: "",
    nombre_contactante: "",
    apellido_contactante: "",
    telefono_contactante: "",
    correo_contactante: "",
    asunto_mensaje: "",
    mensaje: "",
    fecha_mensaje: "",
    estado_mensaje: "",
    visibilidad_mensaje: false,
    id_contacto: "",
})


//Función para limpiar todos los campos del form
function limpiarForm() {
    //Se llama el valor de la variable form y se cambia cada uno de sus elementos a nulo
    form.value.id_mensaje = "";
    form.value.nombre_contactante = "";
    form.value.apellido_contactante = "";
    form.value.telefono_contactante = "";
    form.value.correo_contactante = "";
    form.value.asunto_mensaje = "";
    form.value.mensaje = "";
    form.value.fecha_mensaje = "";
    form.value.estado_mensaje = 0;
    form.value.visibilidad_mensaje = false;
    form.value.id_contacto = 0;
}

//Toast del sweetalert
const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
});

//Variable para validar que acción se quiere hacer cuando se hace un submit al form
var formAccion = null;

//Función para evaluar que acción se va a hacer al hacer submit en el form
function accionForm(accion) {
    formAccion = accion;
}

//Función para actualizar un registro cuando se ejecuta el submit del form
function submitForm() {
    if (formAccion == "actualizar") {
        actualizarMensaje();
    }
}


//Función para traer los datos de un registro en específico, estableciendo como parámetro el id del registro
async function leerUnMensaje(id) {
    try {
        accionForm("actualizar");
        //Se hace la petición axios y se evalua la respuesta
        await axios.get("/mensajes/" + id, {
            headers: {
                Authorization: `Bearer ${token.value}`,
            },
        }).then((res) => {
            //Constante para el modal
            const modalElement = document.getElementById("staticModal");
            //Constante que contiene las caracteristicas del modal
            const modalOptions = {
                backdrop: "static",
                backdropClasses:
                    "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
            };
            //Instanciamos el boton para cerrar el modal
            const closeButton = document.getElementById("closeModal");
            //Constante para el titulo del modal
            const modalText = document.getElementById("modalText");
            //Constante para el boton de actualizar dentro del modal
            const modalBtnUpdate = document.getElementById("btnModalUpdate");
            //Instanciamos el modal
            const modal = new Modal(modalElement, modalOptions);
            //Le modificamos el texto del header al modal
            modalText.textContent = "Editar";
            //Colocamos visibilidad al botón de actualizar en el modal
            modalBtnUpdate.classList.remove("hidden"); 
            //Abrimos el modal
            modal.show();
            //Creamos el evento click para cuando se cierre el modal y te cierre la instancia antes creada
            closeButton.addEventListener("click", function () {
                //Ocultamos el modal
                modal.hide();
                //Limpiamos el modal
                limpiarForm();
            });
            //Llenamos los inputs del modal con su respectiva informacion
            form.value = {
                id_mensaje: res.data.id_mensaje,
                nombre_contactante: res.data.nombre_contactante,
                apellido_contactante: res.data.apellido_contactante,
                telefono_contactante: res.data.telefono_contactante,
                correo_contactante: res.data.correo_contactante,
                asunto_mensaje: res.data.asunto_mensaje,
                mensaje: res.data.mensaje,
                fecha_mensaje: res.data.fecha_mensaje,
                estado_mensaje: res.data.estado_mensaje,
                //Se convierte a true o false en caso de que devuelva 1 o 0, esto por que el input solo acepta true y false
                visibilidad_mensaje: res.data.visibilidad_mensaje ? true : false,
                id_contacto: res.data.id_contacto,
            };
        });
    } catch (error) {
        console.log(error); 
        //Se extrae el mensaje de error
        const mensajeError = error.response.data.message;
        //Se extrae el sqlstate (identificador de acciones SQL)
        const sqlState = validaciones.extraerSqlState(mensajeError);
        //Se llama la función de mensajeSqlState para mostrar un mensaje de error relacionado al sqlstate
        const res = validaciones.mensajeSqlState(sqlState);

        //Se cierra el modal
        document.getElementById("closeModal").click();

        //Se muestra un sweetalert con el mensaje
        Swal.fire({
            icon: "error",
            title: "Error",
            text: res,
            confirmButtonColor: "#3F4280",
        });
    }
}

async function actualizarMensaje() {
    if (validarNombre() && validarApellido() && validarTelefono() && form.estado_mensaje != 0 && form.id_contacto != 0) {
        try {
            //Se establece una variable de id con el valor que tiene guardado la variable form
            var id = form.value.id_mensaje;

            //Se crea una constante FormData para almacenar los datos del modal
            const formData = new FormData();
            formData.append("nombre_contactante", form.value.nombre_contactante);
            formData.append("apellido_contactante", form.value.apellido_contactante);
            formData.append("telefono_contactante", form.value.telefono_contactante);
            formData.append("correo_contactante", form.value.correo_contactante);
            formData.append("asunto_mensaje", form.value.asunto_mensaje);
            formData.append("mensaje", form.value.mensaje);
            formData.append("fecha_mensaje", form.value.fecha_mensaje);
            formData.append("estado_mensaje", form.value.estado_mensaje);
            formData.append(
                "visibilidad_mensaje",
                form.value.visibilidad_mensaje ? 1 : 0
            )
            formData.append("id_contacto", form.value.id_contacto);

            //Se realiza la petición axios mandando la ruta y el formData
            await axios.post("/mensajes_update/" + id, formData, {
                headers: {
                    Authorization: `Bearer ${token.value}`,
                },
            });

            //Se evalua el buscador para realizar leerMensajes o buscarMensajes 
            if (buscar.value.buscador) {
                buscarMensajes();
            } else {
                leerMensajes();
            }
            //Se cierra el modal
            document.getElementById("closeModal").click();

            //Se lanza la alerta de éxito
            Toast.fire({
                icon: "success",
                title: "Mensaje actualizado exitosamente",
            });
        } catch (error) {
            console.log(error);
            const mensajeError = error.response.data.message;
            if (!error.response.data.errors) {
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
            } else {
                //Se muestra un sweetalert con el mensaje
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: mensajeError,
                    confirmButtonColor: '#3F4280'
                });
            }
        }
    }
}

//Función para cambiar la visibilidad de una página para ocultarla
async function borrarMensaje(id) {
    //Se lanza una alerta de confirmación
    Swal.fire({
        title: "Confirmación",
        text: "¿Desea ocultar el registro?",
        icon: "warning",
        reverseButtons: true,
        showCancelButton: true,
        confirmButtonColor: "#3F4280",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirmar",
        cancelButtonText: "Cancelar",
        //Se evalua la respuesta de la alerta
    }).then(async (result) => {
        //Si el usuario selecciono "Confirmar"
        if (result.isConfirmed) {
            try {
                //Se realiza la petición axios
                await axios.delete("/mensajes/" + id, {
                    headers: {
                        Authorization: `Bearer ${token.value}`,
                    },
                });

                //Se evalua el buscador para realizar leerMensajes o buscarMensajes 
                if (buscar.value.buscador) {
                    buscarMensajes();
                } else {
                    leerMensajes();
                }

                //Se lanza la alerta de éxito
                Toast.fire({
                    icon: "success",
                    title: "Mensaje ocultado exitosamente",
                });
            } catch (error) {
                //Se extrae el mensaje de error
                const mensajeError = error.response.data.message;
                //Se extrae el sqlstate (identificador de acciones SQL)
                const sqlState = validaciones.extraerSqlState(mensajeError);
                //Se llama la función de mensajeSqlState para mostrar un mensaje de error relacionado al sqlstate
                const res = validaciones.mensajeSqlState(sqlState);

                //Se cierra el modal
                document.getElementById("closeModal").click();

                //Se muestra un sweetalert con el mensaje
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: res,
                    confirmButtonColor: "#3F4280",
                });
            }
        }
    });
}

//Función para cambiar la visibilidad de una página para recuperarla
async function recuperarMensaje(id) {
    //Se lanza una alerta de confirmación
    Swal.fire({
        title: "Confirmación",
        text: "¿Desea recuperar el registro?",
        icon: "warning",
        reverseButtons: true,
        showCancelButton: true,
        confirmButtonColor: "#3F4280",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirmar",
        cancelButtonText: "Cancelar",
        //Se evalua la respuesta de la alerta
    }).then(async (result) => {
        //Si el usuario selecciono "Confirmar"
        if (result.isConfirmed) {
            try {
                //Se realiza la petición axios
                await axios.delete("/mensajes/" + id, {
                    headers: {
                        Authorization: `Bearer ${token.value}`,
                    },
                });

                //Se evalua el buscador para realizar leerMensajes o buscarMensajes 
                if (buscar.value.buscador) {
                    buscarMensajes();
                } else {
                    leerMensajes();
                }

                //Se lanza la alerta de éxito
                Toast.fire({
                    icon: "success",
                    title: "Mensaje recuperado exitosamente",
                });
            } catch (error) {
                //Se extrae el mensaje de error
                const mensajeError = error.response.data.message;
                //Se extrae el sqlstate (identificador de acciones SQL)
                const sqlState = validaciones.extraerSqlState(mensajeError);
                //Se llama la función de mensajeSqlState para mostrar un mensaje de error relacionado al sqlstate
                const res = validaciones.mensajeSqlState(sqlState);

                //Se cierra el modal
                document.getElementById("closeModal").click();

                //Se muestra un sweetalert con el mensaje
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: res,
                    confirmButtonColor: "#3F4280",
                });
            }
        }
    });
}

//Validaciones

function validarNombre() {
    var res = validaciones.validarSoloLetras(form.value.nombre_contactante);
    return res;
}

function validarTelefono() {
    var res = validaciones.validarNumeroTelefono(form.value.telefono_contactante);
    return res;
}

function validarApellido() {
    var res = validaciones.validarSoloLetras(form.value.apellido_contactante);
    return res;
}
</script>
