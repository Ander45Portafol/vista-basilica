<template>
    <div class="principal mt-6">
        <div class="topprincipal flex justify-between font-semibold text-base ml-4">
            <div class="options">
                <nuxtLink to="/calendario" class="ml-4">Calendario</nuxtLink>
                <NuxtLink to="/zona" class="ml-4">Zonas</NuxtLink>
                <NuxtLink to="/evento" class=" active ml-4">Eventos</NuxtLink>
            </div>
            <div class="endtop flex justify-between w-20">
                <button>
                    <svg width="24px" height="24px" stroke-width="2.5" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg" color="#000000">
                        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="#000000" stroke-width="2.5" stroke-linecap="round"
                            stroke-linejoin="round"></path>
                        <path
                            d="M19.622 10.395l-1.097-2.65L20 6l-2-2-1.735 1.483-2.707-1.113L12.935 2h-1.954l-.632 2.401-2.645 1.115L6 4 4 6l1.453 1.789-1.08 2.657L2 11v2l2.401.655L5.516 16.3 4 18l2 2 1.791-1.46 2.606 1.072L11 22h2l.604-2.387 2.651-1.098C16.697 18.831 18 20 18 20l2-2-1.484-1.75 1.098-2.652 2.386-.62V11l-2.378-.605z"
                            stroke="#1B1C30" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
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
                <div class="w-3/4 flex items-center h-full mt-4 max-[500px]:w-full">
                    <!-- Se enlaza el buscador con la variable reactiva y se le coloca el evento buscarSecciones en el keyup -->
                    <input type="text" class="rounded-lg relative w-2/4 h-12 outline-none max-[800px]:w-full min-w-[200px]"
                        placeholder="Buscar..." v-model="buscar.buscador" @keyup="buscarSecciones()">
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
            <!-- Según la longitud de "secciones" se coloca el número de registros -->
            <p class="font-extrabold text-slate-900 mt-8 ml-4 max-[425px]:mt-16">{{ eventos.length }}<span
                    class="text-gray-500 font-normal ml-2">registros
                    encontrados!</span></p>
            <!-- Haciendo uso del v-for se evalua cada registro individualmente para poder llenar todas las cards -->
            <div class="contained-data flex-col" v-for="evento in eventos" :key="evento.id_evento">
                <div
                    class="data-contained flex justify-between mt-4 rounded-xl p-4 max-[400px]:flex-wrap max-[400px]:w-full min-w-[200px]">
                    <div class="flex justify-start w-3/4 items-center max-[400px]:w-full">
                        <div
                            class="datainfo flex-col ml-8 max-[400px]:p-0 max-[400px]:w-full max-[400px]:ml-0 max-[400px]:text-center">
                            <p class="font-extrabold text-xl text-salte-900 max-[750px]:text-[18px]">{{
                                evento.nombre_evento }}
                            </p>
                            <p v-if="evento.fecha_evento"
                                class="font-normal text-sm mt-1text-gray-500 max-[750px]:text-[12px]">{{
                                    evento.fecha_evento }}</p>
                            <p v-else class="font-normal text-sm mt-1text-gray-500 max-[750px]:text-[12px]">Este evento no
                                tiene fecha</p>
                            <p v-if="evento.nombre_consultor"
                                class="font-normal text-sm text-gray-500 max-[750px]:text-[12px]">{{
                                    `${evento.nombre_consultor} ${evento.apellido_consultor}` }}
                            </p>
                            <p v-else class="font-normal text-sm text-gray-500 max-[750px]:text-[12px]">Este evento no
                                tiene un consultor</p>
                        </div>
                    </div>
                    <div
                        class="buttons-data flex justify-center items-center max-[750px]:flex-col max-[400px]:flex-row max-[400px]:m-auto max-[400px]:mt-2">
                        <button class="h-10 w-10 rounded-md flex items-center justify-center max-[400px]:mx-4 editbtn"
                            id="btnedit" @click="leerUnEvento(evento.id_evento)"
                            v-if="evento.visiblidad_evento == 1">
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
                            @click="borrarEvento(evento.id_evento)" v-if="evento.visiblidad_evento == 1">
                            <svg width="26px" height="26px" viewBox="0 0 24 24" stroke-width="2" fill="none"
                                xmlns="http://www.w3.org/2000/svg" color="#000000">
                                <path
                                    d="M20 9l-1.995 11.346A2 2 0 0116.035 22h-8.07a2 2 0 01-1.97-1.654L4 9M21 6h-5.625M3 6h5.625m0 0V4a2 2 0 012-2h2.75a2 2 0 012 2v2m-6.75 0h6.75"
                                    stroke="#872727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                            </svg>
                        </button>
                        <button @click="recuperarEvento(evento.id_evento)"
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
            <div class="flex justify-center mt-6">
                <!-- Componente para la paginación, el "limit" se usa para que la paginación no se extienda demasiado, el "keepLength" para que la paginación siempre tenga el mismo
                tamaño (a excepción de si no hay suficientes paginas o si la pagina actual esta muy cerca de la primera o ultima pagina), el "data" es la variable a que se enlaza
            para leer los datos, y el "@pagination-change-page" se usa para enlazar una variable que sirve para llevar el control del número de página actual -->
                <TailwindPagination
                    :item-classes="['text-gray-500', 'rounded-full', 'border-none', 'ml-1', 'hover:bg-gray-200']"
                    :active-classes="['text-white', 'rounded-full', 'bg-purpleLogin']" :limit="1" :keepLength="true"
                    :data="data" @pagination-change-page="pagina = $event" />
            </div>
        </div>
    </div>

    <!-- Main modal -->
    <div id="staticModal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-lg max-h-full">
            <!-- Modal content -->
            <div class="relative rounded-lg shadow modal">
                <!-- Modal header -->
                <div class="flex items-start justify-between p-4 rounded-t">
                    <div class="flex-col ml-4 pt-4">
                        <p class="text-3xl font-bold text-gray-100" id="modalText"></p>
                        <p class="text-base font-medium text-gray-400">
                            Evento
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
                <!-- Modal body -->
                <div class="p-6 space-y-6 pb-16">
                    <!-- Se le añade un evento submit para evaluar que acción realizara el form -->
                    <form id="formModal" @submit.prevent="submitForm()" class="flex justify-evenly">
                        <div class="flex-col w-64">
                            <!-- Se enlazan todos los inputs usando el v-model a la variable form -->
                            <input type="hidden" id="id_evento" v-model="form.id_evento">
                            <div class="relative z-0">
                                <input type="text" v-model="form.nombre_evento"
                                    id="nombre_evento" name="nombre_evento"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" required />
                                <label for="nombre_evento"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre
                                    - Evento<span class="text-sm ml-1"> * </span></label>
                                <!-- Se coloca un if que evalua si la función de validar es false, así se muestra la alerta solo cuando es false
                                <div v-if="!validarTituloSeccion()"
                                    class="flex mt-2 mb-0 text-sm text-red-400 bg-transparent" role="alert">
                                    <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <div>
                                        El título de la sección solo permite caracteres <span class="font-medium">
                                            alfanuméricos y algunos especiales (- / |)</span>
                                    </div>
                                </div> -->
                            </div>
                            <div class="relative z-0 mt-6">
                                <input type="text" v-model="form.descripcion_evento" id="descripcion_evento"
                                    name="descripcion_evento"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" />
                                <label for="descripcion_evento"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Descripcion
                                    - Evento</label>
                                <!-- Se coloca un if que evalua si la función de validar es false, así se muestra la alerta solo cuando es false
                                <div v-if="!validarSubtituloSeccion()"
                                    class="flex mt-2 mb-0 text-sm text-red-400 bg-transparent" role="alert">
                                    <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <div>
                                        El subtitulo de la sección solo permite caracteres <span class="font-medium">
                                            alfanuméricos y algunos especiales (- / |)</span>
                                    </div>
                                </div> -->
                            </div>
                            <div class="relative z-0 mt-6">
                                <input type="date" v-model="form.fecha_evento" id="fecha_evento"
                                    name="fecha_evento"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" />
                                <label for="fecha_evento"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Fecha
                                    - Evento</label>
                            </div>
                            <div class="relative z-0 mt-6">
                                <input type="time" v-model="form.hora_inicial_evento" id="hora_inicial_evento"
                                    name="hora_inicial_evento"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" />
                                <label for="hora_inicial_evento"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Hora
                                    - Inicial</label>
                            </div>
                            <div class="relative z-0 mt-6">
                                <input type="time" v-model="form.hora_final_evento" id="hora_final_evento"
                                    name="hora_final_evento"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" />
                                <label for="hora_final_evento"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Hora
                                    - Final</label>
                            </div>
                            <div class="relative z-0 mt-6">
                                <input type="text" v-model="form.nombre_consultor" id="nombre_consultor"
                                    name="nombre_consultor"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" />
                                <label for="nombre_consultor"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre
                                    - Consultor</label>
                            </div>
                            <div class="relative z-0 mt-6">
                                <input type="text" v-model="form.apellido_consultor" id="apellido_consultor"
                                    name="apellido_consultor"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" />
                                <label for="apellido_consultor"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellido
                                    - Consultor</label>
                            </div>
                            <div class="relative z-0 mt-6">
                                <input type="number" v-model="form.telefono_consultor" id="telefono_consultor"
                                    name="telefono_consultor"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" />
                                <label for="telefono_consultor"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Telefono
                                    - Consultor</label>
                            </div>
                            <div class="relative z-0 mt-6">
                                <input type="text" v-model="form.modalidad_evento" id="modalidad_evento"
                                    name="modalidad_evento"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" />
                                <label for="modalidad_evento"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Modalidad - Evento
                                    </label>
                            </div>
                            <div class="relative z-0 mt-6">
                                <input type="text" v-model="form.estado_evento" id="estado_evento"
                                    name="estado_evento"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" />
                                <label for="estado_evento"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Estado
                                    - Evento</label>
                            </div>
                            <div class="pt-4 mt-4 flex-col">
                                <label for="" class="absolute text-gray-200">Personal<span class="text-sm ml-1"> *
                                    </span></label>
                                <select id="underline_select" v-model="form.id_personal"
                                    class="block mt-4 py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                    <option value="0" class="bg-gray-700"> Seleccione una opción </option>
                                    <!-- Se usa el v-for para llenar la información del select, haciendo uso de "eventos" -->
                                    <option v-for="personal in personales" :key="personal.id_personal" :value="personal.id_personal"
                                        class="text-left bg-gray-700">
                                        {{ `${personal.nombre_personal} ${personal.apellido_personal}` }}
                                    </option>
                                </select>
                                <!-- Validacion para el select
                                <div v-if="form.id_pagina == 0" class="flex mt-2 mb-0 text-sm text-red-400 bg-transparent"
                                    role="alert">
                                    <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <div>
                                        Seleccione <span class="font-medium"> una opción </span>
                                    </div>
                                </div> -->
                            </div>
                            <div class="pt-4 mt-4 flex-col">
                                <label for="" class="absolute text-gray-200">Zonas<span class="text-sm ml-1"> *
                                    </span></label>
                                <select id="underline_select" v-model="form.id_personal"
                                    class="block mt-4 py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                    <option value="0" class="bg-gray-700"> Seleccione una opción </option>
                                    <!-- Se usa el v-for para llenar la información del select, haciendo uso de "eventos" -->
                                    <option v-for="zona in zonas" :key="zona.id_zona" :value="zona.id_zona"
                                        class="text-left bg-gray-700">
                                        {{ `${zona.nombre_zona}` }}
                                    </option>
                                </select>
                                <!-- Validacion para el select
                                <div v-if="form.id_pagina == 0" class="flex mt-2 mb-0 text-sm text-red-400 bg-transparent"
                                    role="alert">
                                    <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <div>
                                        Seleccione <span class="font-medium"> una opción </span>
                                    </div>
                                </div> -->
                            </div>
                            <div class="modal-buttons mt-6 flex justify-end items-end">
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
                                        <path d="M16.005 19.228H14.6a.6.6 0 00-.6.6v1.622" stroke="#23B7A0" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>
                                <!-- Se le coloca la función para crear al botón y se evalua que ninguna función de validaciones sea false, si alguna es false el botón se desactiva -->
                                <button id="btnModalAdd" type="submit" value="crear" @click="accionForm('crear')"
                                    :disabled="!validarTituloSeccion() || !validarSubtituloSeccion() || form.id_pagina == 0"
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
                                <button id="btnModalUpdate" type="submit" @click="accionForm('actualizar')"
                                    :disabled="!validarTituloSeccion() || !validarSubtituloSeccion() || form.id_pagina == 0"
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
import { onMounted, ref } from 'vue'
//Importación del modal de flowbite
import { Modal } from 'flowbite'
//Importación de axios, se utiliza para hacer las peticiones al servidor -> Para mas información vean el axiosPlugin en la carpeta plugins
import axios from 'axios';
//Impiónortac de sweetalert
import Swal from 'sweetalert2';
//Importación de archivo de validaciones
import validaciones from '../assets/validaciones.js';


definePageMeta({
    layout: "principal",
});

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

//Variables reactivas para llenar los select
const personales = ref(null);
const zonas = ref(null);

//Funciones para llenar los select
async function llenarSelectPersonal() {
    try {
        //Se realiza la petición axios
        const { data: res } = await axios.get('/personal-select');
        //Lo que devuelve la petición axios se le asigna a "personal"
        personales.value = res;
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

async function llenarSelectZonas() {
    try {
        //Se realiza la petición axios
        const { data: res } = await axios.get('/zonas-select');
        //Lo que devuelve la petición axios se le asigna a "paginas"
        zonas.value = res;
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

//Llamamos las funciones para cargar los select
llenarSelectPersonal();
llenarSelectZonas();

/*Se establece una variable reactiva llamada data, se inicia con un valor nulo y se usará 
para almacenar la información que traiga el axios*/
const data = ref(null);

//Se establece una variable reactiva para manejar la paginación de registros, se establece como 1 ya que es la pagina default
const pagina = ref(useRoute().query.pagina || 1);

/*Se crea una variable let (variable de bloque / su alcance se limita a un bloque cercano). Esta variable es reactiva
y se usa para llevar el control de la información que se muestra dependiendo de la pagina*/
let eventos = computed(() => data.value.data);

/*Se crea un watch (detecta cada que "pagina" cambia) y ejecuta un select a los registros de esa página,
además muestra en la url la página actual*/
watch(pagina, async () => {
    //Se evalua si el buscador tiene algún valor para ver si se realiza el leer o el buscar
    if (buscar.value.buscador != "") {
        //Se ejecuta el buscar secciones si el buscador tiene un valor (el plugin reinicia el paginado a 1 así que no hay que cambiar el valor de la constante pagina)
        buscarSecciones();
    } else {
        //Se ejecuta el leer secciones para cargar la tabla, usando la constante pagina también se busca la pagina especifica de registros
        leerSecciones();
    }
    //Se cambia la url para agregar en que pagina se encuentra el usuario
    useRouter().push({ query: { pagina: pagina.value } })
})

/*Función para leer la información de los registros de la página actual, se hace uso de axios para llamar la ruta junto con 
?page que se usa para ver la paginación de registros, y mediante el valor de la constante de "pagina" se manda a llamar los registros especificos*/
async function leerEventos() {
    try {
        /*Se manda la petición axios para leer las secciones (no se manda la ruta completa por al configuración de axios -> Para mas información vean el axiosPlugin en la carpeta plugins),
        además usando el valor de la constante "pagina" se filtra la pagina de registros que axios va a traer*/
        const { data: res } = await axios.get(`/eventos?page=${pagina.value}`);
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

//Se ejecuta la funcion para llenar la tabla cuando se carga el DOM
await leerEventos();

//Se crea una variable reactiva para el buscador
const buscar = ref({
    buscador: "",
})

//Función para limpiar el buscador
function limpiarBuscador() {
    //Se coloca la constante pagina 1 para que salga la primera pagina de registros
    pagina.value = 1;
    //Se leen todos los registros
    leerEventos();
    //Se coloca el valor del buscador a nulo
    buscar.value.buscador = "";
}

//Función para buscar registros dependiendo del valor del buscador
async function buscarEventos() {
    try {
        //Se evalua que el buscador no este vacio
        if (buscar.value.buscador != "") {
            // Realiza la petición axios para llamar a la ruta de búsqueda
            const { data: res } = await axios.get(`/eventos_search?page=${pagina.value}&buscador=${buscar.value.buscador}`);
            // Actualiza los datos en la constante data
            data.value = res;
            // Actualiza la URL con el parámetro de página
            useRouter().push({ query: { pagina: pagina.value } });
        } else {
            //Se regresa a la página 1 y se cargan todos los registros
            pagina.value = 1;
            leerEventos();
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
            icon: 'error',
            title: 'Error',
            text: res,
            confirmButtonColor: '#3F4280'
        });
    }
}

//Funciones para manejo del modal

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

//Se crea una variable reactiva para manejar la información del modal
const form = ref({
    id_evento: "",
    nombre_evento: "",
    descripcion_evento: "",
    fecha_evento: "",
    hora_inicial_evento: "",
    hora_final_evento: "",
    nombre_consultor: "",
    apellido_consultor: "",
    telefono_consultor: "",
    visiblidad_evento: false,
    modalidad_evento: "",
    estado_evento: "",
    id_personal: "",
    id_zona: "",
    id_configuracion_parroquia: 1,
})

//Función para limpiar todos los campos del form
function limpiarForm() {
    //Se llama el valor de la variable form y se cambia cada uno de sus elementos a nulo
    form.value.id_evento = "";
    form.value.nombre_evento = "";
    form.value.descripcion_evento = "";
    form.value.fecha_evento = "";
    form.value.hora_inicial_evento = "";
    form.value.hora_final_evento = "";
    form.value.nombre_consultor = "";
    form.value.apellido_consultor = "";
    form.value.telefono_consultor = "";
    form.value.visiblidad_evento = false;
    form.value.modalidad_evento = "";
    form.value.estado_evento = "";
    form.value.id_personal = "0";
    form.value.id_zona = "0";
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
        crearEvento();
    } else {
        actualizarEvento();
    }
}

//Función para crear una sección
async function crearEvento() {
    try {
        //Se crea una constante para guardar el valor actual que tienen  todos los campos del form
        const formData = {
            nombre_evento: form.value.nombre_evento,
            descripcion_evento: form.value.descripcion_evento,
            fecha_evento: form.value.fecha_evento,
            hora_inicial_evento: form.value.hora_inicial_evento,
            hora_final_evento: form.value.hora_final_evento,
            nombre_consultor: form.value.nombre_consultor,
            apellido_consultor: form.value.apellido_consultor,
            telefono_consultor: form.value.telefono_consultor,
            visiblidad_evento: form.value.visiblidad_evento,
            modalidad_evento: form.value.modalidad_evento,
            estado_evento: form.value.estado_evento,
            id_personal: form.value.id_personal,
            id_zona: form.value.id_zona,
            id_configuracion_parroquia: form.value.id_configuracion_parroquia,
        };

        //Se realiza la petición axios mandando la ruta y el formData
        await axios.post("/eventos", formData);

        //Se cargan todas las páginas y se cierra el modal
        leerEventos();
        document.getElementById('closeModal').click();

        //Se lanza la alerta con el mensaje de éxito
        Toast.fire({
            icon: 'success',
            title: 'Evento creado exitosamente'
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


//Función para traer los datos de un registro en específico, estableciendo como parámetro el id del registro 
async function leerUnEvento(id) {
    try {
        //Se hace la petición axios y se evalua la respuesta
        await axios.get('/eventos/' + id).then(res => {
            //Constante para el modal
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
            //Llenamos los inputs del modal con su respectiva informacion
            form.value = {
                id_evento: form.data.id_evento,
                nombre_evento: form.data.nombre_evento,
                descripcion_evento: form.data.descripcion_evento,
                fecha_evento: form.data.fecha_evento,
                hora_inicial_evento: form.data.hora_inicial_evento,
                hora_final_evento: form.data.hora_final_evento,
                nombre_consultor: form.data.nombre_consultor,
                apellido_consultor: form.data.apellido_consultor,
                telefono_consultor: form.data.telefono_consultor,
                visiblidad_evento: form.data.visiblidad_evento ? true : false,
                modalidad_evento: form.data.modalidad_evento,
                estado_evento: form.data.estado_evento,
                id_personal: form.data.id_personal,
                id_zona: form.data.id_zona,
                id_configuracion_parroquia: form.data.id_configuracion_parroquia,
            }
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

//Función para actualizar un registro
async function actualizarEvento() {
    try {
        //Se establece una variable de id con el valor que tiene guardado la variable form
        var id = form.value.id_evento;
        //Se crea una constante para guardar el valor actual que tienen todos los campos del form
        const formData = {
            nombre_evento: form.value.nombre_evento,
            descripcion_evento: form.value.descripcion_evento,
            fecha_evento: form.value.fecha_evento,
            hora_inicial_evento: form.value.hora_inicial_evento,
            hora_final_evento: form.value.hora_final_evento,
            nombre_consultor: form.value.nombre_consultor,
            apellido_consultor: form.value.apellido_consultor,
            telefono_consultor: form.value.telefono_consultor,
            visiblidad_evento: form.value.visiblidad_evento,
            modalidad_evento: form.value.modalidad_evento,
            estado_evento: form.value.estado_evento,
            id_personal: form.value.id_personal,
            id_zona: form.value.id_zona,
            id_configuracion_parroquia: form.value.id_configuracion_parroquia,
        };

        //Se realiza la petición axios mandando la ruta y el formData
        await axios.put(`/eventos/${id}`, formData);

        //Se cargan todas las páginas y se cierra el modal
        leerSecciones();
        document.getElementById('closeModal').click();

        //Se lanza la alerta de éxito
        Toast.fire({
            icon: 'success',
            title: 'Evento actualizado exitosamente'
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

//Función para cambiar la visibilidad de un registro para ocultarlo
async function borrarEvento(id) {
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
    }).then(async (result) => {
        //Si el usuario selecciono "Confirmar"
        if (result.isConfirmed) {
            try {
                //Se realiza la petición axios
                await axios.delete(`/eventos/${id}`);

                //Se cargan todos los registros
                leerEventos();

                //Se lanza la alerta de éxito
                Toast.fire({
                    icon: 'success',
                    title: 'Evento ocultado exitosamente'
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
    });
}

//Función para cambiar la visibilidad de un registro para recuperarlo
async function recuperarEvento(id) {
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
    }).then(async (result) => {
        //Si el usuario selecciono "Confirmar"
        if (result.isConfirmed) {
            try {
                //Se realiza la petición axios
                await axios.delete(`/eventos/${id}`);

                //Se cargan todos los registros
                leerEventos();

                //Se lanza la alerta de éxito
                Toast.fire({
                    icon: 'success',
                    title: 'Evento recuperado exitosamente'
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
    });
}

//Validaciones 

//Función para validar que el titulo de la sección solo lleve letras y números
function validarTituloSeccion() {
    var res = validaciones.validarSoloLetrasYNumeros(form.value.titulo_seccion);
    return res;
}

//Función para validar que el subtitulo de la sección solo lleve letras y números
function validarSubtituloSeccion() {
    var res = validaciones.validarSoloLetrasYNumeros(form.value.subtitulo_seccion);
    return res;
}

</script>