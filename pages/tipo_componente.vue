<template>
    <div class="principal mt-4">
        <MenuTipoComponenteDashboard class="mr-8" />
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
                <div class=" flex-col mt-6 tipo_componente pr-4 overflow-y-scroll h-2/4">
                    <div class="bg-gray-200 w-56 h-52 rounded-lg flex justify-center items-start">
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
            <div class="flex-col ml-10 w-full">
                <div class="slider_example relative ml-10 w-full">
                    <img src="/img/example_db.png" alt="cohete_login" class="w-9/12 rounded-lg m-auto">
                    <h1 class="absolute text-gray-50 bottom-36 font-semibold text-4xl ml-48">DON BOSCO</h1>
                    <h4 class="absolute text-gray-50 bottom-28 font-normal text-lg ml-48">El valdocco de Centroamérica</h4>
                </div>
                <div class="flex justify-evenly">
                    <div class="w-2/4 flex-col mt-6 ml-32">
                        <button
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
        <div class="relative w-full max-w-4xl max-h-full">
            <!-- Modal content -->
            <div class="relative rounded-lg shadow modal">
                <!-- Modal header -->
                <div class="flex items-start justify-between p-4 rounded-t">
                    <div class="flex-col ml-4 pt-4">
                        <p class="text-xl font-bold text-gray-100" id="titulo_modal"></p>
                        <p class="text-base font-medium text-gray-400" id="subtitulo_modal"></p>
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
                    <div class="flex-col" id="visualizacion">
                        <div class="flex">
                            <div class="relative ml-28">
                                <img src="/img/example_db.png" alt="cohete_login" class="w-full m-auto">
                                <h1 class="absolute text-gray-50 bottom-14 font-semibold text-xl ml-16">DON BOSCO</h1>
                                <h4 class="absolute text-gray-50 bottom-10 font-normal text-sm ml-16">El valdocco de
                                    Centroamérica</h4>
                            </div>
                            <div class="flex justify-end items-center ml-6">
                                <button @click="cambiarFormularioP"
                                    class="bg-space flex justify-center items-center w-16 h-12 rounded-xl mr-6"
                                    type="button"><svg width="26px" height="26px" viewBox="0 0 24 24" stroke-width="2"
                                        fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                                        <path d="M3 12h18m0 0l-8.5-8.5M21 12l-8.5 8.5" stroke="#FFF" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg></button>
                            </div>
                        </div>
                        <div class="flex mt-4 w-full justify-center items-center">
                            <div class="mt-2 flex-col">
                                <label for="" class="text-sm absolute text-gray-200">Escoger sección<span
                                        class="text-sm ml-1"> * </span></label>
                                <select id="underline_select" v-model="form.id_seccion"
                                    class="block mt-4 py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                    <option value="0" class="bg-gray-700">Seleccione una opción</option>
                                    <option class="bg-gray-700" v-for="seccion in secciones" :key="seccion.id"
                                        :value="seccion.id">{{ seccion.campos.titulo_seccion }}</option>
                                </select>
                                <div v-if="form.id_seccion == 0" class="flex mt-2 mb-0 text-sm text-red-400 bg-transparent"
                                    role="alert">
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
                    </div>
                    <form action="" class="w-full py-6 px-14" id="p_formulario">
                        <div class="flex justify-between w-full">
                            <div class="flex-col w-72">
                                <div class="relative z-0">
                                    <input type="text" id="titulo_lamina" name="titulo_lamina" required maxlength="100"
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
                                    <input type="text" id="descripcion_lamina" name="descripcion_lamina" required
                                        maxlength="100"
                                        class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                        placeholder=" " autocomplete="off" />
                                    <span class="text-xs text-gray-400 absolute bottom-0.5 right-0"></span>
                                    <span class="text-xs text-gray-400 absolute bottom-0.5 right-0"> 0 /100</span>
                                    <label for="descripcion_lamina"
                                        class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Descripción
                                        - lamina<span class="text-sm ml-1"> * </span></label>
                                </div>
                                <div class="flex-col mt-8">
                                    <label for="" class="text-sm text-gray-200">Visibilidad</label>
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
                            <div class="flex-col">
                                <p class="text-center text-white">Imagen</p>
                                <div class="flex justify-center mt-2">
                                    <div class="h-52 w-48 rounded-xl border-2 border-white">
                                        <img src="" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="flex-col">
                                <div class="mt-20 flex justify-end items-end">
                                    <button class="bg-space flex justify-center items-center w-16 h-12 rounded-xl mr-6"
                                        type="button" @click="cambiarFormularioS"><svg width="26px" height="26px"
                                            viewBox="0 0 24 24" stroke-width="2" fill="none"
                                            xmlns="http://www.w3.org/2000/svg" color="#000000">
                                            <path d="M3 12h18m0 0l-8.5-8.5M21 12l-8.5 8.5" stroke="#FFF" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg></button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <form action="" class="w-full py-6 px-10" id="s_formulario">
                        <div class="flex justify-between w-full">
                            <div class="flex-col mt-20">
                                <button class="bg-space flex justify-center items-center w-16 h-12 rounded-xl mr-6"
                                    type="button" @click="cambiarFormularioP">
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
                                    <input type="text" id="descripcion_lamina" name="descripcion_lamina" required
                                        maxlength="100"
                                        class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                        placeholder=" " autocomplete="off" />
                                    <span class="text-xs text-gray-400 absolute bottom-0.5 right-0"></span>
                                    <span class="text-xs text-gray-400 absolute bottom-0.5 right-0"> 0 /100</span>
                                    <label for="descripcion_lamina"
                                        class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Descripción
                                        - lamina<span class="text-sm ml-1"> * </span></label>
                                </div>
                                <div class="flex-col mt-8">
                                    <label for="" class="text-sm text-gray-200">Visibilidad</label>
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
                            <div class="flex-col">
                                <p class="text-center text-white">Imagen</p>
                                <div class="flex justify-center mt-2">
                                    <div class="h-52 w-48 rounded-xl border-2 border-white">
                                        <img src="" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="flex-col">
                                <div class="mt-20 flex justify-end items-end">
                                    <button class="bg-space flex justify-center items-center w-16 h-12 rounded-xl mr-6"
                                        type="button" @click="cambiarFormularioT"><svg width="26px" height="26px" viewBox="0 0 24 24" stroke-width="2"
                                            fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                                            <path d="M3 12h18m0 0l-8.5-8.5M21 12l-8.5 8.5" stroke="#FFF" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg></button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <form action="" class="w-full py-6 px-10" id="t_formulario">
                        <div class="flex justify-between w-full">
                            <div class="flex-col mt-20">
                                <button class="bg-space flex justify-center items-center w-16 h-12 rounded-xl mr-6"
                                    type="button" @click="cambiarFormularioS">
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
                                    <input type="text" id="descripcion_lamina" name="descripcion_lamina" required
                                        maxlength="100"
                                        class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                        placeholder=" " autocomplete="off" />
                                    <span class="text-xs text-gray-400 absolute bottom-0.5 right-0"></span>
                                    <span class="text-xs text-gray-400 absolute bottom-0.5 right-0"> 0 /100</span>
                                    <label for="descripcion_lamina"
                                        class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Descripción
                                        - lamina<span class="text-sm ml-1"> * </span></label>
                                </div>
                                <div class="flex-col mt-8">
                                    <label for="" class="text-sm text-gray-200">Visibilidad</label>
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
                            <div class="flex-col">
                                <p class="text-center text-white">Imagen</p>
                                <div class="flex justify-center mt-2">
                                    <div class="h-52 w-48 rounded-xl border-2 border-white">
                                        <img src="" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
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
import { Modal } from "flowbite";
import axios from "axios";
definePageMeta({
    layout: "principal",
});
onMounted(() => {
    token.value = localStorage.getItem('token');
    const BOTON_MODAL = document.getElementById('btncomponente');
    const BOTON_CERRAR_MODAL = document.getElementById('btnclose');
    const modalElement = document.getElementById("modal-show");
    const modalOptions = {
        //backdrop nos ayuda a colocar si queremos estatico el modal o dinamico
        backdrop: "static",
        backdropClasses:
            "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
    };
    const modal = new Modal(modalElement, modalOptions);
    BOTON_MODAL.addEventListener('click', function () {
        document.getElementById('visualizacion').classList.remove('hidden');
        document.getElementById('p_formulario').classList.add('hidden');
        document.getElementById('t_formulario').classList.add('hidden');
        document.getElementById('s_formulario').classList.add('hidden');
        document.getElementById('titulo_modal').textContent = "Visualización";
        document.getElementById('subtitulo_modal').textContent = "Componente";
        cargarSecciones();
        modal.show();
    })
    BOTON_CERRAR_MODAL.addEventListener('click', function () {
        modal.hide();
    })
});
const form = ref({
    id_seccion: 0,
});

const EVENT = new Event('reset-timer');
const token = ref(null);
const secciones = ref(null);
async function cargarSecciones() {
    try {
        const { data: res } = await axios.get('/secciones', {
            headers: {
                Authorization: `Bearer ${token.value}`,
            },
        });
        secciones.value = res.data;
        console.log(res.data);
        window.dispatchEvent(EVENT);
        //Se refresca el valor del token con la respuesta del axios
        localStorage.setItem('token', res.token);
        token.value = localStorage.getItem('token');
    } catch (error) {
        console.log(error);
    }
}
function cambiarFormularioP() {
    try {
        document.getElementById('visualizacion').classList.add('hidden');
        document.getElementById('p_formulario').classList.remove('hidden');
        document.getElementById('s_formulario').classList.add('hidden');
        document.getElementById('t_formulario').classList.add('hidden');
        document.getElementById('titulo_modal').textContent = "Información";
        document.getElementById('subtitulo_modal').textContent = "Componente - lamina";
    } catch (error) {
        console.log(error);
    }
}
function cambiarFormularioS() {
    try {
        document.getElementById('visualizacion').classList.add('hidden');
        document.getElementById('p_formulario').classList.add('hidden');
        document.getElementById('t_formulario').classList.add('hidden');
        document.getElementById('s_formulario').classList.remove('hidden');
        document.getElementById('titulo_modal').textContent = "Información";
        document.getElementById('subtitulo_modal').textContent = "Componente - lamina";
    } catch (error) {
        console.log(error);
    }
}
function cambiarFormularioT() {
    try {
        document.getElementById('visualizacion').classList.add('hidden');
        document.getElementById('p_formulario').classList.add('hidden');
        document.getElementById('t_formulario').classList.remove('hidden');
        document.getElementById('s_formulario').classList.add('hidden');
        document.getElementById('titulo_modal').textContent = "Información";
        document.getElementById('subtitulo_modal').textContent = "Componente - lamina";
    } catch (error) {
        console.log(error);
    }
}
</script>