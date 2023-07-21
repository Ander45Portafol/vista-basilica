<template>
    <!-- Main modal -->
    <div id="staticModal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-5xl max-h-full">
            <!-- Modal content -->
            <div class="relative rounded-lg shadow modal">
                <!-- Modal header -->
                <div class="flex items-start justify-between p-4 rounded-t">
                    <div class="flex-col ml-4 pt-4">
                        <p class="text-3xl font-bold text-gray-100" id="modalText"></p>
                        <p class="text-lg font-medium text-gray-400">Usuario</p>
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
                <div class="p-2 space-y-6 pb-8">
                    <form @submit.prevent="submitForm()" class="flex justify-evenly">
                        <div class="flex-col w-72">
                            <input type="hidden" v-model="form.id_usuario">
                            <div class="relative z-0">
                                <input type="text" id="nombre_usuario" name="nombre_usuario" required maxlength="100"
                                    @input="validarNombre()"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" v-model="form.nombre_usuario" />
                                <span class="text-xs text-gray-400 absolute bottom-0.5 right-0" v-if="form.nombre_usuario">
                                    {{
                                        form.nombre_usuario.length }} /100</span>
                                <span class="text-xs text-gray-400 absolute bottom-0.5 right-0" v-else> 0 /100</span>
                                <label for="nombre_usuario"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre
                                    - Persona<span class="text-sm ml-1"> * </span></label>
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
                                    El nombre del usuario solo permite <span class="font-medium">
                                        letras.</span>
                                </div>
                            </div>
                            <div class="pt-4 mt-2 flex-col">
                                <label for="" class="text-sm absolute text-gray-200">Tipo - Documento<span
                                        class="text-sm ml-1"> * </span></label>
                                <select id="underline_select" v-model="form.tipo_documento"
                                    class="block mt-4 py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                    <option value="0" class="bg-gray-700">Seleccione una opción</option>
                                    <option value="Cédula" class="bg-gray-700">Cédula</option>
                                    <option value="Pasaporte" class="bg-gray-700">Pasaporte</option>
                                    <option value="Otro" class="bg-gray-700">Otro...</option>
                                </select>
                                <div v-if="form.tipo_documento == 0"
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
                            <div class="relative z-0 mt-6">
                                <input type="text" id="usuario" name="usuario" required maxlength="50"
                                    @input="validarUsuario()"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" v-model="form.usuario" />
                                <span class="text-xs text-gray-400 absolute bottom-0.5 right-0" v-if="form.usuario">
                                    {{
                                        form.usuario.length }} /50</span>
                                <span class="text-xs text-gray-400 absolute bottom-0.5 right-0" v-else> 0 /50</span>
                                <label for="usuario"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Usuario<span class="text-sm ml-1"> * </span></label>
                            </div>
                            <div v-if="!validarUsuario()" class="flex mt-2 mb-0 text-sm text-red-400 bg-transparent"
                                role="alert">
                                <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <div>
                                    El usuario ingresado <span class="font-medium">
                                        no tiene un formato correcto.</span>
                                </div>
                            </div>
                            <div class="relative z-0 mt-6">
                                <input type="email" id="correo_usuario" name="correo_usuario" required
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" v-model="form.correo_usuario" />
                                <label for="correo_usuario"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Correo
                                    - Usuario<span class="text-sm ml-1"> * </span></label>
                            </div>
                            <div class="pt-4 mt-4 flex-col">
                                <label for="" class="text-sm absolute text-gray-200">Rol - Usuario<span
                                        class="text-sm ml-1"> * </span></label>
                                <select id="underline_select" v-model="form.id_rol_usuario"
                                    class="block mt-4 py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                    <option value="0" class="bg-gray-700 text-white"> Seleccione una opción </option>
                                    <option class="bg-gray-700" v-for="rol_usuario in roles"
                                        :key="rol_usuario.id_rol_usuario" :value="rol_usuario.id_rol_usuario">
                                        {{ rol_usuario.rol_usuario }}</option>
                                </select>
                                <div v-if="form.id_rol_usuario == 0"
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
                        <div class="flex-col w-72">
                            <div class="relative z-0">
                                <input type="text" id="apellido_usuario" name="apellido_usuario" required maxlength="100"
                                    @input="validarApellido()"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" v-model="form.apellido_usuario" />
                                <span class="text-xs text-gray-400 absolute bottom-0.5 right-0"
                                    v-if="form.apellido_usuario">
                                    {{
                                        form.apellido_usuario.length }} /100</span>
                                <span class="text-xs text-gray-400 absolute bottom-0.5 right-0" v-else> 0 /100</span>
                                <label for="apellido_usuario"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellido
                                    - Persona<span class="text-sm ml-1"> * </span></label>
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
                                    El apellido del usuario solo permite <span class="font-medium">
                                        letras.</span>
                                </div>
                            </div>
                            <div class="relative z-0 mt-10">
                                <input type="text" id="numero_documento_usuario" name="numero_documento_usuario"
                                    @input="validarNumeroDocumento()"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" v-model="form.numero_documento_usuario" />
                                <span class="text-xs text-gray-400 absolute bottom-0.5 right-0"
                                    v-if="form.numero_documento_usuario">
                                    {{
                                        form.numero_documento_usuario.length }} /20</span>
                                <span class="text-xs text-gray-400 absolute bottom-0.5 right-0" v-else> 0 /20</span>
                                <label for="numero_documento_usuario"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">#
                                    Documento<span class="text-sm ml-1"> * </span></label>
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
                            <div class="relative z-0 mt-6">
                                <input type="text" id="telefono_usuario" name="telefono_usuario" required maxlength="9"
                                    @input="validarNumeroTelefono()"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" v-model="form.telefono_usuario" />
                                <span class="text-xs text-gray-400 absolute bottom-0.5 right-0"
                                    v-if="form.telefono_usuario">
                                    {{
                                        form.telefono_usuario.length }} /9</span>
                                <span class="text-xs text-gray-400 absolute bottom-0.5 right-0" v-else> 0 /9</span>
                                <label for="telefono_usuario"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Teléfono
                                    - Usuario<span class="text-sm ml-1"> * </span></label>
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
                            <div class="flex-col mt-6">
                                <label for="" class="text-sm text-gray-200">Visibilidad - Usuario</label>
                                <div class="flex justify-start mt-2">
                                    <label class="relative inline-flex items-center mb-5 cursor-pointer">
                                        <input type="checkbox" value="" class="sr-only peer"
                                            v-model="form.visibilidad_usuario">
                                        <div
                                            class="w-9 h-5 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="flex-col">
                            <div class="">
                                <p class="mb-4 text-center text-gray-200">Imagen - Usuario</p>
                                <img src="" class="h-44 w-40 border-2 border-slate-900 ml-2 rounded-lg" />
                            </div>
                            <div class="modal-buttons mt-40 flex justify-end items-end">
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
                                        <path d="M16.005 19.228H14.6a.6.6 0 00-.6.6v1.622" stroke="#23B7A0" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>
                                <button class="h-10 w-10 rounded-lg flex justify-center items-center" id="btnModalAdd"
                                    @click="crearUsuario()">
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
                                    class="h-10 w-10 rounded-lg flex justify-center items-center">
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
<script setup>
const props = defineProps({
    estado_modal: Boolean,
    id_usuario: Number,
});
if (props.estado_modal) {
    console.log('actualizar');
} else {
    async function crearUsuario() {
        if (validarNombre() && form.tipo_documento != 0 && validarUsuario() && form.id_rol_usuario != 0 && validarApellido() && validarNumeroDocumento() && validarNumeroTelefono()) {
            try {
                //Se crea una constante para guardar el valor actual que tienen todos los campos del form
                const formData = {
                    nombre_usuario: form.value.nombre_usuario,
                    apellido_usuario: form.value.apellido_usuario,
                    usuario: form.value.usuario,
                    numero_documento_usuario: form.value.numero_documento_usuario,
                    tipo_documento: form.value.tipo_documento,
                    correo_usuario: form.value.correo_usuario,
                    telefono_usuario: form.value.telefono_usuario,
                    tema: form.value.tema,
                    idioma: form.value.idioma,
                    visibilidad_usuario: form.value.visibilidad_usuario,
                    id_rol_usuario: form.value.id_rol_usuario,
                };
                leerUsuarios();
                //Se realiza la petición axios mandando la ruta y el formData
                await axios.post("/usuarios/", formData);

                //Se lanza la alerta con el mensaje de éxito
                Toast.fire({
                    icon: 'success',
                    title: 'Usuario creado exitosamente'
                })
                //Se cargan todas las páginas y se cierra el modal

                document.getElementById('closeModal').click();

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
}
import axios from 'axios';
import validaciones from '../../assets/validaciones.js';
import Swal from 'sweetalert2';
const form = ref({
    id_usuario: "",
    nombre_usuario: "",
    apellido_usuario: "",
    usuario: "",
    numero_documento_usuario: "",
    tipo_documento: 0,
    correo_usuario: "",
    telefono_usuario: "",
    idioma: "Español (ES)",
    tema: "Claro",
    visibilidad_usuario: false,
    id_rol_usuario: 0,
})
function llenarDatos() {
    ;
    // form.value = {
    //     id_usuario: props.datoUser.id_usuario,
    //     nombre_usuario: props.datoUser.nombre_usuario,
    //     apellido_usuario: res.data.apellido_usuario,
    //     usuario: res.data.usuario,
    //     id_rol_usuario: res.data.id_rol_usuario,
    //     numero_documento_usuario: res.data.numero_documento_usuario,
    //     correo_usuario: res.data.correo_usuario,
    //     telefono_usuario: res.data.telefono_usuario,
    //     tipo_documento: res.data.tipo_documento,
    //     //Se convierte a true o false en caso de que devuelva 1 o 0, esto por que el input solo acepta true y false
    //     visibilidad_usuario: res.data.visibilidad_usuario ? true : false
    // }
}
llenarDatos();
var roles = ref(null);
async function llenarRolUsuario() {
    const { data: res } = await axios.get('roles-select');
    roles.value = res;
}
await llenarRolUsuario();
function validarNombre() {
    var res = validaciones.validarSoloLetras(form.value.nombre_usuario);
    return res;
}
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
function validarApellido() {
    var res = validaciones.validarSoloLetras(form.value.apellido_usuario);
    return res;
}

function validarNumeroDocumento() {
    if (form.value.tipo_documento == 0 && form.value.numero_documento_usuario.length == 0) {
        return true;
    } else if (form.value.tipo_documento == 0) {
        return false;
    } else {
        var res = validaciones.validarNumeroDocumento(form.value.numero_documento_usuario, form.value.tipo_documento);
        return res;
    }
}

function validarUsuario() {
    var res = validaciones.validarUsuario(form.value.usuario);
    return res;
}

function validarNumeroTelefono() {
    var res = validaciones.validarNumeroTelefono(form.value.telefono_usuario);
    return res;
}
</script>
<style scoped>
.modal {
    background: linear-gradient(180deg,
            rgba(63, 66, 128, 0.6241) 0%,
            rgba(49, 50, 71, 0.5609) 100%);
    background-color: #1e1e1e;
}

.modal-buttons button {
    background-color: #32345a;
}
</style>