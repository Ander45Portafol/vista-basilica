<template>
    <div class="principal mt-6">
        <!-- Menu de navegación superior -->
        <MenuPaginaDashboard class="mr-8" />
        <div class="mdprincipal flex-col mt-8 px-8 overflow-hidden">
            <div class="h-16 w-full rounded-xl flex justify-between items-center content-buttons max-[450px]:flex-wrap">
                <!-- Sección del buscador -->
                <div class="w-3/4 flex items-center h-full mt-4 max-[500px]:w-full">
                    <!-- Se enlaza la variable buscar con v-model y se le asigna el evento para el buscador -->
                    <input type="text" class="rounded-lg relative w-2/4 h-12 outline-none max-[800px]:w-full min-w-[200px]"
                        placeholder="Buscar... (nombre página)" v-model="buscar.buscador" @keyup="buscarPaginas($event)" />
                    <div class="flex justify-end items-center">
                        <!-- Se le asigna la función para limpiar el buscador al botón -->
                        <button class="absolute mr-4" @click="limpiarBuscador()">
                            <svg width="20px" height="20px" stroke-width="2" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" color="#000000">
                                <path d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
                                    stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <!-- Sección de botones a la derecha del buscador -->
                <div
                    class="buttons flex mt-4 mr-[-15px] max-[800px]:mt-4 min-w-[100px] max-[450px]:m-auto max-[450px]:mt-3 max-[450px]:mb-[500px]">
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
            <!-- Línea divisora -->
            <div class="line bg-slate-800 h-0.5 mt-4 w-full min-w-[200px]"></div>
            <!-- Sección de cards -->
            <!-- Conteo de registros / Se le agrega el v-if para que no de error la página cuando el usuario no tenga token -->
            <p v-if="paginas.length > 0 && !ceroRegistrosEncontrados"
                class="font-extrabold text-slate-900 mt-8 ml-4 max-[425px]:mt-16">
                {{ paginas[pagina - 1].length }}
                <span class="text-gray-500 font-normal ml-2">registros encontrados!</span>
            </p>
            <p v-else class="font-extrabold text-slate-900 mt-8 ml-4 max-[425px]:mt-16">
                -
                <span class="text-gray-500 font-normal ml-2">registros encontrados!</span>
            </p>
            <div class="loadingtable overflow-hidden h-4/6 pr-4">
                <div class="contained-data flex-col" v-for="number in 6" :key="number">
                    <div v-if="paginas.length == 0 && !ceroRegistrosEncontrados"
                        class="border-4 border-slate-300 animate-pulse flex justify-between mt-4 rounded-xl p-4 max-[400px]:flex-wrap max-[400px]:w-full min-w-[200px]">
                        <div class="flex justify-start w-3/4 items-center max-[400px]:w-full">
                            <div class="h-16 w-16 bg-slate-300 mr-5 rounded-2xl max-[600px]:hidden"></div>
                            <div class="datainfo flex-col max-[400px] p-0 w-full ml-0 mt-2 text-center">
                                <div
                                    class="h-4 bg-slate-300 rounded-full dark:bg-gray-700 w-48 max-[450px]:w-40 max-[400px]:w-full mb-4">
                                </div>
                                <div class="h-3 bg-slate-300 rounded-full dark:bg-gray-700 w-1/2 mb-2.5 max-[400px]:w-full">
                                </div>
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
            <div class="tables overflow-y-scroll h-4/6 pr-4">
                <!-- Haciendo uso del v-for se evalua cada registro individualmente para poder llenar todas las cards / Se le agrega el v-if para que no de error la página cuando el usuario no tenga token -->
                <div class="contained-data flex-col" v-for="pagina in paginas[pagina - 1]" :key="pagina.id">
                    <div v-if="paginas.length > 0 && !ceroRegistrosEncontrados"
                        class="data-contained flex justify-between mt-4 rounded-xl p-4 max-[400px]:flex-wrap max-[400px]:w-full min-w-[200px]">
                        <div class="flex justify-start w-3/4 items-center max-[400px]:w-full">
                            <div
                                class="datainfo flex-col ml-8 max-[400px]:p-0 max-[400px]:w-full max-[400px]:ml-0 max-[400px]:text-center">
                                <p class="font-extrabold text-xl text-salte-900 max-[750px]:text-[18px]">
                                    Página- {{ pagina.campos.nombre_pagina }}
                                </p>
                                <p v-if="pagina.campos.descripcion_pagina && pagina.campos.descripcion_pagina != 'null'"
                                    class="font-normal text-sm mt-1 text-gray-500 max-[750px]:text-[12px]">
                                    {{ pagina.campos.descripcion_pagina }}
                                </p>
                                <p class="font-normal text-sm text-gray-500 max-[750px]:text-[12px]">
                                    Número de página: {{ pagina.campos.numero_pagina }}
                                </p>
                            </div>
                        </div>
                        <div
                            class="buttons-data flex justify-center items-center max-[750px]:flex-col max-[400px]:flex-row max-[400px]:m-auto max-[400px]:mt-2">
                            <button class="h-10 w-10 rounded-md flex items-center justify-center max-[400px]:mx-4 editbtn"
                                id="btnedit" @click="leerUnaPagina(pagina.id)" v-if="pagina.campos.visibilidad_pagina == 1">
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
                                @click="borrarPagina(pagina.id)" v-if="pagina.campos.visibilidad_pagina == 1">
                                <svg width="26px" height="26px" viewBox="0 0 24 24" stroke-width="2" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" color="#000000">
                                    <path
                                        d="M20 9l-1.995 11.346A2 2 0 0116.035 22h-8.07a2 2 0 01-1.97-1.654L4 9M21 6h-5.625M3 6h5.625m0 0V4a2 2 0 012-2h2.75a2 2 0 012 2v2m-6.75 0h6.75"
                                        stroke="#872727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                </svg>
                            </button>
                            <button @click="recuperarPagina(pagina.id)"
                                class="h-10 w-10 rounded-md flex items-center justify-center ml-4 changebtn max-[750px]:ml-0 max-[750px]:mt-2 max-[400px]:mt-0 max-[400px]:mx-4"
                                v-else>
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
                <!-- Paginación -->
                <div class="flex justify-center mt-6">
                    <Paginacion v-if="paginas.length > 1 && !ceroRegistrosEncontrados" v-model:pagina_actual="pagina"
                        @cambioDePagina="cambioDePagina" :items_totales="data.length" />
                </div>
            </div>
            <!-- Alerta a mostrar el usuario busca algo que no coincide con ningún registro -->
            <div class="flex-col">
                <div v-if="paginas.length == 0 && ceroRegistrosEncontrados">
                    <div class="flex items-center px-4 py-6 mb-4 text-sm text-purpleLogin border-2 border-purpleLogin rounded-lg bg-transparent"
                        role="alert">
                        <svg class="flex-shrink-0 inline w-6 h-6 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <div class="text-base">
                            <span class="font-medium">No se encontraron registros, </span> la petición realizada no
                            obtuvo resultados.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div id="staticModal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-lg max-h-full">
            <div class="relative rounded-lg shadow modal">
                <!-- Encabezado del modal -->
                <div class="flex items-start justify-between p-4 rounded-t">
                    <div class="flex-col ml-4 pt-4">
                        <p class="text-3xl font-bold text-gray-100" id="modalText"></p>
                        <p class="text-base font-medium text-gray-400">
                            Página (opción de menú)
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
                <!-- Contenido del modal -->
                <div class="p-6 space-y-6 pb-20">
                    <form id="modalForm" class="flex justify-evenly" @submit.prevent="submitForm()">
                        <div class="flex-col w-72">
                            <!-- Se enlazan todos los inputs usando el v-model a la variable form -->
                            <input type="hidden" name="id_pagina" id="id_pagina" v-model="form.id_pagina" />
                            <div class="relative z-0 mt-6">
                                <!-- Se le agrega un evento input para evaluar cada vez que hay un cambio en el input y así validar la información -->
                                <input type="text" id="nombre_pagina" name="nombre_pagina" v-model="form.nombre_pagina"
                                    @input="validarNombrePagina()" maxlength="100" required
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" /><span
                                    class="text-xs text-gray-400 absolute bottom-0.5 right-0">
                                    {{ form.nombre_pagina.length }} /100</span>
                                <label for="nombre_pagina"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre
                                    - Página <span class="text-sm ml-1"> * </span></label>
                                <!-- Se coloca un if que evalua si la función de validar es false, así se muestra la alerta solo cuando es false -->
                                <div v-if="!validarNombrePagina()"
                                    class="flex mt-2 mb-0 text-sm text-red-400 bg-transparent" role="alert">
                                    <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <div>
                                        El nombre de la página solo permite caracteres
                                        <span class="font-medium">
                                            alfanuméricos y algunos especiales (- / |).</span>
                                    </div>
                                </div>
                            </div>
                            <div class="relative z-0 mt-6">
                                <!-- Se le agrega un evento input para evaluar cada vez que hay un cambio en el input y así validar la información -->
                                <input type="number" id="numero_pagina" name="numero_pagina" v-model="form.numero_pagina"
                                    @input="validarNumeroPagina()" min="1" max="10" required
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" />
                                <label for="numero_pagina"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Número
                                    - Página <span class="text-sm ml-1"> * </span></label>
                                <!-- Se coloca un if que evalua si la función de validar es false, así se muestra la alerta solo cuando es false -->
                                <div v-if="!validarNumeroPagina()"
                                    class="flex mt-2 mb-0 text-sm text-red-400 bg-transparent" role="alert">
                                    <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <div>
                                        El número de página debe ser mayor a
                                        <span class="font-medium">10</span> y menor a
                                        <span class="font-medium">0.</span>
                                    </div>
                                </div>
                            </div>
                            <div class="relative z-0 mt-6">
                                <textarea id="descripcion_pagina" name="descripcion_pagina" maxlength="250"
                                    v-model="form.descripcion_pagina"
                                    class="block py-2.5 px-0 min-h-[3rem] h-[3rem] max-h-[12rem] w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" />
                                <span class="text-xs text-gray-400 absolute bottom-0.5 right-5"
                                    v-if="form.descripcion_pagina">
                                    {{ form.descripcion_pagina.length }} /250</span>
                                <span class="text-xs text-gray-400 absolute bottom-0.5 right-5" v-else>
                                    0 /250</span>
                                <label for="descripcion_pagina"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Descripcion
                                    - Página</label>
                            </div>
                            <div class="flex-col mt-6">
                                <label for="visibilidad_pagina" class="text-sm text-gray-200">Visibilidad - Página
                                    <span class="text-sm ml-1"> * </span></label>
                                <div class="flex justify-start mt-2">
                                    <label class="relative inline-flex items-center mb-5 cursor-pointer">
                                        <input type="checkbox" value="" class="sr-only peer" id="visibilidad_pagina"
                                            name="visibilidad_pagina" v-model="form.visibilidad_pagina" />
                                        <div
                                            class="w-9 h-5 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                        </div>
                                    </label>
                                </div>
                                <!-- Sección de botones del modal -->
                                <div class="modal-buttons mt-4 flex justify-end items-end">
                                    <!-- Se le coloca la función para limpiar el form al botón -->
                                    <button type="button" id="btnModalClear" @click="limpiarForm()"
                                        class="h-10 w-10 rounded-lg flex justify-center items-center ml-4">
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
                                    <!-- Se le coloca la función para crear al botón y se evalua que ninguna función de validaciones sea false, si alguna es false el botón se desactiva -->
                                    <button id="btnModalAdd" type="submit"
                                        :disabled="!validarNumeroPagina() || !validarNombrePagina()"
                                        class="h-10 ml-2 w-10 rounded-lg flex justify-center items-center">
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
                                        :disabled="!validarNumeroPagina() || !validarNombrePagina()"
                                        class="h-10 ml-2 w-10 rounded-lg flex justify-center items-center">
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
    border: 3px solid #3f4280;
}

.tables::-webkit-scrollbar {
    width: 7px;
}

.tables::-webkit-scrollbar-thumb {
    background: #32345A;
}
</style>
<script setup>
//El setup se usa para manejar una sintaxis mas concisa del codigo y poder usar la reactividad de vue 3

//Importaciones de plugins y funciones necesarias para el funcionamiento del proyecto

//Importacion para usar el hook de onMounted
import { onMounted, ref } from "vue";
//Importación de axios, se utiliza para hacer las peticiones al servidor -> Para mas información vean el axiosPlugin en la carpeta plugins
import axios from "axios";
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

        /*Se le añade un evento click al botón de agregar registro para abrir el modal, a su vez cambia el titulo
            del modal y oculta el boton de actualizar que se encuentra dentro del modal*/
        buttonElement.addEventListener("click", function () {
            //Se limpia el form al abrir el modal de agregar
            accionForm("crear");
            limpiarForm();
            modalBtnAdd.classList.remove("hidden");
            modalText.textContent = "Registrar";
            modalBtnUpdate.classList.add("hidden");
            modal.show();
        });

        //Se le añade un evento click al botón de cerrar que se encuentra en el modal, esto para poder cerrar el modal después de abrirlo
        closeButton.addEventListener("click", function () {
            modal.hide();
            limpiarForm();
        });
    }

    //Se leen las páginas al montarse la página para evitar problemas del setup y el localStorage
    leerPaginas();
});

//Evento para reiniciar el tiempo del componente del timer
const EVENT = new Event('reset-timer');

//Variable reactiva para almacenar el token del localStorage
const token = ref(null);

//Variable reactiva para almacenar los datos de la tabla
const data = ref(null);

//Se establece una constante ref para manejar la paginación de registros, se establece como 1 ya que es la pagina default
const pagina = ref(parseInt(useRoute().query.pagina) || 1);

//Función para manejar el evento de cuando se realiza un cambio de página en el componente de paginación
function cambioDePagina(pagina_prop) {
    pagina.value = parseInt(pagina_prop);
}

//Se crea una constante ref para el buscador
const buscar = ref({
    buscador: "",
});

//Se crea una constante ref para saber cuando el usuario realizo una búsqueda que no retorno ningún registro
const ceroRegistrosEncontrados = ref(false);

/*Se crea una constante ref que se usa para llevar el control de la información que se muestra dependiendo de la pagina*/
const paginas = ref([]);

/*Se crea un watch (detecta cada que "pagina" cambia) para mostrar en la url la página actual*/
watch(pagina, async () => {
    //Se cambia la url para agregar en que pagina se encuentra el usuario
    useRouter().push({ query: { pagina: pagina.value } });
});

//Constante ref para poder intercambiar los registros entre visibles y no visibles
const registros_visibles = ref(true);

//Función para evaluar registros según la visibilidad que quiera el usuario
function visibilidadRegistros() {
    //Se establece el valor de la variable registros_visibles a su opuesto
    registros_visibles.value = !registros_visibles.value;
    //Se establece el número de página a 1
    pagina.value = 1;
    //Se leen todas las páginas
    leerPaginas();
    //Se evalua el buscador para filtrar los registros
    if (buscar.value.buscador) {
        buscarPaginas();
    }
}

/*Función para leer la información de los registros de la página actual, se hace uso de axios para llamar la ruta junto con 
?page que se usa para ver la paginación de registros, y mediante el valor de la constante de "pagina" se manda a llamar los registros especificos*/
async function leerPaginas() {
    //Se actualiza el valor del token (esto para evitar errores con todos los refresh del token)
    token.value = localStorage.getItem('token');
    try {
        //Se evalua si se quieren mostrar los registros visibles o invisibles
        if (registros_visibles.value) {
            //Se realiza la petición axios para leer los registros visibles
            const { data: res } = await axios.get('/paginas', {
                headers: {
                    Authorization: `Bearer ${token.value}`,
                },
            });

            //Se asigna el valor de la respuesta de axios a la constante data
            data.value = res.data;

            //Se limpia el array de registros paginados
            paginas.value = [];

            //Se usa un for para paginar los registros almacenados en la constante data de 10 en 10
            for (let i = 0; i < res.data.length; i += 1) {
                paginas.value.push(res.data.slice(i, i + 1));
            }

            //Se reinicia el timer
            window.dispatchEvent(EVENT);
            //Se refresca el valor del token con la respuesta del axios
            localStorage.setItem('token', res.token);
            token.value = localStorage.getItem('token');

            //Se actualiza el valor de la constante de búsqueda a false
            ceroRegistrosEncontrados.value = false;

        } else {
            //Se realiza la petición axios para leer los registros no visibles
            const { data: res } = await axios.get('/paginas_ocultas', {
                headers: {
                    Authorization: `Bearer ${token.value}`,
                },
            });
            //Se asigna el valor de la respuesta de axios a la constante data
            data.value = res.data;

            //Se limpia el array de registros paginados
            paginas.value = [];

            //Se usa un for para paginar los registros almacenados en la constante data de 10 en 10
            for (let i = 0; i < res.data.length; i += 1) {
                paginas.value.push(res.data.slice(i, i + 1));
            }

            //Se reinicia el timer
            window.dispatchEvent(EVENT);
            //Se refresca el valor del token con la respuesta del axios
            localStorage.setItem('token', res.token);
            token.value = localStorage.getItem('token');

            //Se actualiza el valor de la constante de búsqueda a false
            ceroRegistrosEncontrados.value = false;
        }

        //Se evalua si el número de páginas es menor al valor de la constante de pagina, esto para evitar errores de eliminar un registro de una página que solo tenía un registro 
        //y que se bugee la paginación
        if (paginas.value.length < pagina.value) {
            //Se actualiza el valor de la constante pagina
            pagina.value = pagina.value - 1;
        }

        if (paginas.value.length == 0) {
            ceroRegistrosEncontrados.value = true;
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

//Constante ref para controlar que no se pueda spamear el delete en el buscador y bugear el token
const ejecutado_despues_borrar = ref(false);

//Función para buscar registros dependiendo del valor del buscador
function buscarPaginas(event) {
    try {
        //Se evalua que el buscador no este vacio
        if (buscar.value.buscador != "") {

            if(buscar.value.buscador.length == 1){
                pagina.value = 1;
            }

            //Se coloca como false para que si se pueda presionar el borrar
            ejecutado_despues_borrar.value = false;

            //Se filtran los registros de data según los parámetros del buscador (nombre_pagina / numero_pagina)
            const data_filtrada = ref();

            data_filtrada.value = data.value.filter(pagina =>
                pagina.campos.nombre_pagina.toLowerCase().includes(buscar.value.buscador.toLowerCase()) ||
                pagina.campos.numero_pagina.toString().includes(buscar.value.buscador)
            );

            //Se limpia el array de registros paginados
            paginas.value = [];

            //Se evalua la longitud del array filtrado, si es 0 significa que no hay registros similares
            if (data_filtrada.value.length == 0) {
                //Se actualiza el valor de la constante de búsqueda a true para mostrar un mensaje al usuario
                ceroRegistrosEncontrados.value = true;
            } else {
                //En caso de que si hayan registros similares, se paginan los registros de 10 en 10 usando el for
                for (let i = 0; i < data_filtrada.value.length; i += 1) {
                    paginas.value.push(data_filtrada.value.slice(i, i + 1));
                }
                //Se actualiza el valor de la constante de búsqueda a false
                ceroRegistrosEncontrados.value = false;
            }

        } else {
            //Se valida las teclas que el usuario puede presionar para bugear el buscador
            if (buscar.value.buscador.length == 0 && (event.key != 'CapsLock' && event.key != 'Shift' && event.key != 'Control' && event.key != 'Alt' && event.key != 'Meta' && event.key != 'Escape' && event.key != 'Enter') && !ejecutado_despues_borrar.value) {
                //Se coloca como true para que no se pueda presionar el borrar
                ejecutado_despues_borrar.value = true;
                //Se regresa a la página 1 y se cargan todos los registros
                limpiarBuscador();
                //Se actualiza el valor de la constante de búsqueda a false
                ceroRegistrosEncontrados.value = false;
            }
        }
    } catch (error) {
        console.log(error);
        //Se muestra un sweetalert con el mensaje   
        Swal.fire({
            icon: "error",
            title: "Error",
            text: error,
            confirmButtonColor: "#3F4280",
        });
    }
}



//Función para limpiar el buscador
function limpiarBuscador() {
    //Se coloca la constante pagina 1 para que salga la primera pagina de registros
    pagina.value = 1;
    //Se leen todos los registros
    leerPaginas();
    //Se coloca el valor del buscador a nulo
    buscar.value.buscador = "";
    //Se limpia la ruta
    useRouter().push({ query: '' });
}

//Funciones para manejo del modal

//Se crea una constante ref para manejar la información del modal
const form = ref({
    id_pagina: "",
    nombre_pagina: "",
    numero_pagina: "",
    descripcion_pagina: "",
    visibilidad_pagina: false,
});

//Función para limpiar todos los campos del form
function limpiarForm() {
    //Se llama el valor de la variable form y se cambia cada uno de sus elementos a nulo
    form.value.id_pagina = "";
    form.value.nombre_pagina = "";
    form.value.numero_pagina = "";
    form.value.descripcion_pagina = "";
    form.value.visibilidad_pagina = false;
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

//Función para crear/actualizar un registro cuando se ejecuta el submit del form
function submitForm() {
    if (formAccion == "crear") {
        crearPagina();
    } else {
        actualizarPagina();
    }
}

//Función para crear una página
async function crearPagina() {
    //Se actualiza el valor del token (esto para evitar errores con todos los refresh del token)
    token.value = localStorage.getItem('token');
    if (validarNumeroPagina() && validarNombrePagina()) {
        try {
            //Se crea una constante FormData para almacenar los datos del modal
            const formData = new FormData();
            formData.append("nombre_pagina", form.value.nombre_pagina);
            formData.append("numero_pagina", form.value.numero_pagina);
            formData.append("descripcion_pagina", form.value.descripcion_pagina);
            formData.append(
                "visibilidad_pagina",
                form.value.visibilidad_pagina ? 1 : 0
            );

            //Se realiza la petición axios mandando la ruta y el formData
            await axios.post("/paginas", formData, {
                headers: {
                    Authorization: `Bearer ${token.value}`,
                },
            }).then(res => {
                //Se reinicia el timer
                window.dispatchEvent(EVENT);
                //Se actualiza el token con la respuesta del axios
                localStorage.setItem('token', res.data.data.token);
                token.value = localStorage.getItem('token');
            });

            //Se leen todos los registros y se cierra el modal
            limpiarBuscador();

            document.getElementById("closeModal").click();

            //Se lanza la alerta con el mensaje de éxito
            Toast.fire({
                icon: "success",
                title: "Página creada exitosamente",
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
}

//Función para traer los datos de un registro en específico, estableciendo como parámetro el id del registro
async function leerUnaPagina(id) {
    //Se actualiza el valor del token (esto para evitar errores con todos los refresh del token)
    token.value = localStorage.getItem('token');
    try {
        accionForm("actualizar");
        //Se hace la petición axios y se evalua la respuesta
        await axios.get("/paginas/" + id, {
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
            //Constante para el boton de agregar dentro del modal
            const modalBtnAdd = document.getElementById("btnModalAdd");
            //Constante para el boton de actualizar dentro del modal
            const modalBtnUpdate = document.getElementById("btnModalUpdate");
            //Instanciamos el modal
            const modal = new Modal(modalElement, modalOptions);
            //Le modificamos el texto del header al modal
            modalText.textContent = "Editar";
            //Colocamos visibilidad al botón de actualizar en el modal
            modalBtnUpdate.classList.remove("hidden");
            //Ocultamos el botón de agregar en el modal
            modalBtnAdd.classList.add("hidden");
            //Abrimos el modal
            modal.show();
            //Creamos el evento click para cuando se cierre el modal y te cierre la instancia antes creada
            closeButton.addEventListener("click", function () {
                //Ocultamos el modal
                modal.hide();
                //Limpiamos el modal
                limpiarForm();
                //Se actualiza el valor del token (esto para evitar errores con todos los refresh del token)
                token.value = localStorage.getItem('token');
            });
            //Llenamos los inputs del modal con su respectiva informacion
            form.value = {
                id_pagina: res.data.data.id,
                nombre_pagina: res.data.data.campos.nombre_pagina,
                numero_pagina: res.data.data.campos.numero_pagina,
                descripcion_pagina: res.data.data.campos.descripcion_pagina,
                //Se convierte a true o false en caso de que devuelva 1 o 0, esto por que el input solo acepta true y false
                visibilidad_pagina: res.data.data.campos.visibilidad_pagina ? true : false,
            };

            //Se reinicia el timer
            window.dispatchEvent(EVENT);
            //Se actualiza el token con la respuesta del axios
            localStorage.setItem('token', res.data.token);
            token.value = localStorage.getItem('token');
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

async function actualizarPagina() {
    //Se actualiza el valor del token (esto para evitar errores con todos los refresh del token)
    token.value = localStorage.getItem('token');
    if (validarNumeroPagina() && validarNombrePagina()) {
        try {
            //Se establece una variable de id con el valor que tiene guardado la variable form
            var id = form.value.id_pagina;

            //Se crea una constante FormData para almacenar los datos del modal
            const formData = new FormData();
            formData.append("nombre_pagina", form.value.nombre_pagina);
            formData.append("numero_pagina", form.value.numero_pagina);
            formData.append("descripcion_pagina", form.value.descripcion_pagina);
            formData.append(
                "visibilidad_pagina",
                form.value.visibilidad_pagina ? 1 : 0
            );

            //Se realiza la petición axios mandando la ruta y el formData
            await axios.post("/paginas_update/" + id, formData, {
                headers: {
                    Authorization: `Bearer ${token.value}`,
                },
            }).then(res => {
                //Se reinicia el timer
                window.dispatchEvent(EVENT);
                //Se actualiza el token con la respuesta del axios
                localStorage.setItem('token', res.data.data.token);
                token.value = localStorage.getItem('token');
            });

            //Se leen todas las páginas y en dado caso haya algo escrito en el buscador se filtran los datos
            await leerPaginas();

            if (buscar.value.buscador) {
                buscarPaginas();
            }

            //Se cierra el modal
            document.getElementById("closeModal").click();

            //Se lanza la alerta de éxito
            Toast.fire({
                icon: "success",
                title: "Página actualizada exitosamente",
            });
        } catch (error) {
            console.log(error);
            const MENSAJE_ERROR = error.response.data.message;
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

//Función para cambiar la visibilidad de una página para ocultarla
async function borrarPagina(id) {
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
        allowOutsideClick: false,
        //Se evalua la respuesta de la alerta
    }).then(async (result) => {
        //Si el usuario selecciono "Confirmar"
        if (result.isConfirmed) {
            //Se actualiza el valor del token (esto para evitar errores con todos los refresh del token)
            token.value = localStorage.getItem('token');
            try {
                //Se realiza la petición axios
                await axios.delete("/paginas/" + id, {
                    headers: {
                        Authorization: `Bearer ${token.value}`,
                    },
                }).then(res => {
                    //Se reinicia el timer
                    window.dispatchEvent(EVENT);
                    //Se actualiza el token con la respuesta del axios
                    localStorage.setItem('token', res.data.data.token);
                    token.value = localStorage.getItem('token');
                });;

                //Se leen todas las páginas y en dado caso haya algo escrito en el buscador se filtran los datos
                await leerPaginas();

                if (buscar.value.buscador) {
                    buscarPaginas();
                }

                //Se lanza la alerta de éxito
                Toast.fire({
                    icon: "success",
                    title: "Página ocultada exitosamente",
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
async function recuperarPagina(id) {
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
        allowOutsideClick: false,
        //Se evalua la respuesta de la alerta
    }).then(async (result) => {
        //Si el usuario selecciono "Confirmar"
        if (result.isConfirmed) {
            //Se actualiza el valor del token (esto para evitar errores con todos los refresh del token)
            token.value = localStorage.getItem('token');
            try {
                //Se realiza la petición axios
                await axios.delete("/paginas/" + id, {
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
                await leerPaginas();

                if (buscar.value.buscador) {
                    buscarPaginas();
                }

                //Se lanza la alerta de éxito
                Toast.fire({
                    icon: "success",
                    title: "Página recuperada exitosamente",
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
        } else {
            window.dispatchEvent(EVENT);
            token.value = localStorage.getItem('token');
        }
    });
}

//Validaciones

//Función para validar que el número de página ingresado por el usuario este entre 1-10
function validarNumeroPagina() {
    var res = validaciones.validarNoNumerosNegativos(
        parseInt(form.value.numero_pagina),
        10
    );
    return res;
}

//Función para validar que el nombre de página solo lleve letras y números
function validarNombrePagina() {
    var res = validaciones.validarSoloLetrasYNumeros(
        form.value.nombre_pagina.toString()
    );
    return res;
}
</script>
