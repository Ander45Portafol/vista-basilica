<script setup>
definePageMeta({
    layout: "principal",
})

const menuOptions = () => {
    const options = document.getElementsByClassName('menu');
    if (options.length >= 3) {
        // Se imprime un logo de 3 barras, dependiendo de la resolucion y el numero de opciones del menu
    }
}
</script>

<template>
    <div class="principal mt-6">
        <div class="topprincipal flex justify-between font-semibold text-base ml-4">
            <div class="options">
                <NuxtLink to="/parroquia" class="ml-4">Enlaces Amigos</NuxtLink>
                <NuxtLink to="/misa" class="ml-4">Misas Online</NuxtLink>
                <NuxtLink to="/configuracion_parroquia" class="active ml-4">Configuracion</NuxtLink>
            </div>
        </div>
        <div>
            <form action="" class="flex pt-14 justify-evenly max-[700px]:flex-col max-[700px]:items-center max-[700px]:text-2xl">
                <div class="flex-col w-80">
                    <div class="relative z-0">
                        <input type="text" id="floating_standard"
                            class="block py-2.5 px-0 w-full text-sm text-slate-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                            placeholder=" " autocomplete="off" />
                        <label for="floating_standard"
                            class="absolute text-base text-slate-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-900  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre
                            - Parroquia</label>
                    </div>
                    <div class="relative z-0 mt-12">
                        <input type="text" id="floating_standard"
                            class="block py-2.5 px-0 w-full text-sm text-slate-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                            placeholder=" " autocomplete="off" />
                        <label for="floating_standard"
                            class="absolute text-base text-slate-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">RUC
                            - Parroquia</label>
                    </div>
                    <div class="relative z-0 mt-8">
                        <input type="text" id="floating_standard"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                            placeholder=" " autocomplete="off" />
                        <label for="floating_standard"
                            class="absolute text-base text-slate-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Correo
                            - Parroquia</label>
                    </div>
                    <div class="relative z-0 mt-12">
                        <input type="text" id="floating_standard"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                            placeholder=" " autocomplete="off" />
                        <label for="floating_standard"
                            class="absolute text-base text-slate-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Direccion
                            - Parroquia</label>
                    </div>
                    <div class="relative z-0 mt-12 max-[700px]:mt-10">
                        <input type="text" id="floating_standard"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                            placeholder=" " autocomplete="off" />
                        <label for="floating_standard"
                            class="absolute text-base text-slate-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Identificador
                            - Parroquia</label>
                    </div>
                </div>
                <div class="flex-col w-80 max-[700px]:mt-10">
                    <div class="relative z-0">
                        <input type="text" id="floating_standard"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                            placeholder=" " autocomplete="off" />
                        <label for="floating_standard"
                            class="absolute text-base text-slate-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Pagina
                            web - Parroquia</label>
                    </div>
                    <div class="relative z-0 mt-12">
                        <input type="text" id="floating_standard"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                            placeholder=" " autocomplete="off" />
                        <label for="floating_standard"
                            class="absolute text-base text-slate-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Persona
                            - Contacto</label>
                    </div>
                    <div class="relative z-0 mt-12">
                        <input type="text" id="floating_standard"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                            placeholder=" " autocomplete="off" />
                        <label for="floating_standard"
                            class="absolute text-base text-slate-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Telefono
                            - Parroquia</label>
                    </div>
                    <div class="relative z-0 mt-12">
                        <input type="text" id="floating_standard"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none  focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                            placeholder=" " autocomplete="off" />
                        <label for="floating_standard"
                            class="absolute text-base text-slate-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Fax
                            - Parroquia</label>
                    </div>
                </div>
                <div class="flex-col h-96 max-[700px]:mt-10">
                    <div class="h-1/2">
                        <p class="mb-4 text-center">Logo Parroquia</p>
                        <img class="h-44 w-40 border-2 border-slate-900 ml-2">
                    </div>
                    <div class="flex items-end justify-between h-full mt-[-60px] w-44 ">
                        <button class="border-2 border-space h-10 w-10 flex justify-center items-center">
                            <svg width="24px" height="24px" stroke-width="2" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" color="#000000">
                                <path
                                    d="M3 19V5a2 2 0 012-2h11.172a2 2 0 011.414.586l2.828 2.828A2 2 0 0121 7.828V19a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                                    stroke="#23B7A0" stroke-width="2"></path>
                                <path
                                    d="M8.6 9h6.8a.6.6 0 00.6-.6V3.6a.6.6 0 00-.6-.6H8.6a.6.6 0 00-.6.6v4.8a.6.6 0 00.6.6zM6 13.6V21h12v-7.4a.6.6 0 00-.6-.6H6.6a.6.6 0 00-.6.6z"
                                    stroke="#23B7A0" stroke-width="2"></path>
                            </svg>
                        </button>
                        <button class="border-2 border-space w-10 h-10 flex justify-center items-center">
                            <svg width="24px" height="24px" stroke-width="2" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" color="#000000">
                                <path
                                    d="M3 21h18M12.222 5.828L15.05 3 20 7.95l-2.828 2.828m-4.95-4.95l-5.607 5.607a1 1 0 00-.293.707v4.536h4.536a1 1 0 00.707-.293l5.607-5.607m-4.95-4.95l4.95 4.95"
                                    stroke="#C99856" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                        <button class="border-2 border-space w-10 h-10 flex justify-center items-center">
                            <svg width="24px" height="24px" viewBox="0 0 24 24" stroke-width="2" fill="none"
                                xmlns="http://www.w3.org/2000/svg" color="#000000">
                                <path d="M11 21H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v7" stroke="#45A0B4"
                                    stroke-width="2" stroke-linecap="round"></path>
                                <path
                                    d="M2 7h20M5 5.01l.01-.011M8 5.01l.01-.011M11 5.01l.01-.011M21.666 16.667C21.049 15.097 19.636 14 17.99 14c-1.758 0-3.252 1.255-3.793 3"
                                    stroke="#45A0B4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path
                                    d="M19.995 16.772H21.4a.6.6 0 00.6-.6V14.55M14.334 19.333C14.953 20.903 16.366 22 18.01 22c1.758 0 3.252-1.255 3.793-3"
                                    stroke="#45A0B4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M16.005 19.228H14.6a.6.6 0 00-.6.6v1.622" stroke="#45A0B4" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>


<style scoped>
.topprincipal .active {
    color: #c99856;
    border-bottom: 3px solid #c99856;
}
</style>