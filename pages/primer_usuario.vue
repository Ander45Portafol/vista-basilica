<template>
    <div class="flex ml-16 h-full w-full">
        <div class="w-3/4 flex-col mt-20">
            <p class="text-white font-semibold text-6xl">Usuario</p>
            <div class="flex mr-20 mt-20 justify-between">
                <div class="flex-col">
                    <div class="relative z-0 mt-9 w-72">
                        <input type="text" id="telefono_usuario" name="telefono_usuario" required maxlength="9"
                            class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                            placeholder=" " autocomplete="off" />
                        <label for="telefono_usuario"
                            class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre
                            - Persona<span class="text-sm ml-1"> * </span></label>
                    </div>
                    <div class="relative z-0 mt-16 w-72">
                        <input type="text" id="telefono_usuario" name="telefono_usuario" required maxlength="9"
                            class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                            placeholder=" " autocomplete="off" />
                        <label for="telefono_usuario"
                            class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre
                            - Usuario<span class="text-sm ml-1"> * </span></label>
                    </div>
                    <div class="relative z-0 mt-16 w-72">
                        <input type="text" id="telefono_usuario" name="telefono_usuario" required maxlength="9"
                            class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                            placeholder=" " autocomplete="off" />
                        <label for="telefono_usuario"
                            class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Correo
                            Eletronico<span class="text-sm ml-1"> * </span></label>
                    </div>
                </div>
                <div class="flex-col">
                    <div class="relative z-0 mt-9 w-72">
                        <input type="text" id="telefono_usuario" name="telefono_usuario" required maxlength="9"
                            class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                            placeholder=" " autocomplete="off" />
                        <label for="telefono_usuario"
                            class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellido
                            - Persona<span class="text-sm ml-1"> * </span></label>
                    </div>
                    <div class="relative z-0 mt-16 w-72">
                        <input type="text" id="telefono_usuario" name="telefono_usuario" required maxlength="9"
                            class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                            placeholder=" " autocomplete="off" />
                        <label for="telefono_usuario"
                            class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Teléfono
                            - Persona<span class="text-sm ml-1"> * </span></label>
                    </div>
                    <div class="relative z-0 mt-16 w-72">
                        <input type="text" id="telefono_usuario" name="telefono_usuario" required maxlength="9"
                            class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                            placeholder=" " autocomplete="off" />
                        <label for="telefono_usuario"
                            class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Documento
                            <span class="text-sm ml-1"> * </span></label>
                    </div>
                </div>
                <div class="flex-col">
                    <div class="pt-4 mt-1 flex-col w-72">
                        <label for="" class="text-sm absolute text-gray-200">Tipo - Documento<span class="text-sm ml-1"> *
                            </span></label>
                        <select id="underline_select"
                            class="block mt-4 py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                            <option value="0" class="bg-gray-700">Seleccione una opción</option>
                            <option value="Cédula" class="bg-gray-700">Cédula</option>
                            <option value="Pasaporte" class="bg-gray-700">Pasaporte</option>
                            <option value="Otro" class="bg-gray-700">Otro...</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="flex justify-start items-end h-56">
                <div class="flex-col">
                    <p class="font-extralight text-base text-gray-400">Llena los campos establecidos con la información
                        solicitada de acuerdo al usuario que</p>
                    <p class="font-extralight text-base text-gray-400">deseas registrar.</p>
                    <p class="font-extralight text-base text-gray-400 mt-4">Una vez ingresada la información, solo
                        podrás cambiarla
                        dentro del sistema.</p>
                </div>
            </div>
        </div>
        <div class="h-full flex justify-center items-center w-1/6">
            <div class="botones w-full h-3/5 ml-10 flex items-center">
                <div class="flex-col ml-2">
                    <NuxtLink to="primer_uso"
                        class="h-14 w-64 bg-darkSpace text-white rounded-md text-lg font-semibold flex justify-center items-center">
                        Continuar
                        <svg width="30px" height="30px" stroke-width="2.5" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg" color="#000000">
                            <path d="M9 6l6 6-6 6" stroke="#FFF" stroke-width="2.5" stroke-linecap="round"
                                stroke-linejoin="round">
                            </path>
                        </svg>
                    </NuxtLink>
                    <NuxtLink to="primer_parroquia"
                        class="bg-transparent h-14 w-64 text-white rounded-lg mt-8 text-lg font-semibold flex justify-center items-center">
                        Volver</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.botones {
    border-left: 1px solid #818181;
}
</style>
<script setup>
definePageMeta({
    layout: "primer",
});
</script>
