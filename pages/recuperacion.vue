<template>
    <div class="contained h-screen w-screen flex">
        <div class="w-3/4 mt-20 ml-10 flex-col">
            <h1 class="text-white font-extrabold text-5xl">Reestableciendo contraseña</h1>
            <div class="card bg-space h-64 w-11/12 mt-10" id="cardUsuario">
                <div class="flex justify-between">
                    <div class="flex-col text-white w-96 h-8 p-8">
                        <p class="font-bold text-2xl mt-4">Datos del usuario: </p>
                        <p class="font-normal text-base mt-4">El usuario que desea recuperar su clave
                            necesita brindar primero sus datos para
                            verificar y garantizar que el restablecimiento
                            esta siendo solicitado por el.</p>
                    </div>
                    <div class="flex-col mr-20">
                        <div class="relative z-0 mt-8 w-64">
                            <input type="text" id="nombre_usuario" name="nombre_usuario" required maxlength="100"
                                class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                placeholder=" " autocomplete="off" />
                            <label for="nombre_usuario"
                                class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre
                                - Usuario<span class="text-sm ml-1"> * </span></label>
                        </div>
                        <div class="relative z-0 mt-8 w-64">
                            <input type="text" id="correo_usuario" name="correo_usuario" required maxlength="100"
                                class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                placeholder=" " autocomplete="off" />
                            <label for="correo_usuario"
                                class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Correo
                                - Usuario<span class="text-sm ml-1"> * </span></label>
                        </div>
                        <div class="flex justify-center">
                            <button
                                class="w-44 h-12 bg-darkSpace text-white flex items-center justify-center gap-4 mt-8 rounded-xl text-xl">
                                <svg width="28px" height="28px" stroke-width="2" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" color="#000000">
                                    <path d="M7 12.5l3 3 7-7" stroke="#FFF" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                                        stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                </svg>Verificar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card bg-space h-64 w-11/12 mt-10" id="cardPIN">
                <div class="flex justify-between">
                    <div class="flex-col text-white w-96 h-8 p-6">
                        <p class="font-bold text-2xl mt-4">Nueva contraseña:</p>
                        <p class="font-normal text-base mt-4">El usuario debera ingresar la nueva contraseña que desea
                            poseer, y al mismo tiempo tambien debe confirmarla, cumpliendo siempre con las recomendariones
                            de seguridad para las contraseñas.
                        </p>
                    </div>
                    <div class="flex-col mr-20">
                        <div class="relative z-0 mt-6 w-64">
                            <input type="text" id="nueva_contrasenia" name="nueva_contrasenia" required maxlength="100"
                                class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                placeholder=" " autocomplete="off" />
                            <label for="nueva_contrasenia"
                                class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nueva
                                Contraseña</label>
                        </div>
                        <div class="relative z-0 mt-6 w-64">
                            <input type="text" id="confirm_contra" name="confirm_contra" required maxlength="100"
                                class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                placeholder=" " autocomplete="off" />
                            <label for="confirm_contra"
                                class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirmar
                                Contraseña</label>
                        </div>
                        <div class="flex justify-center">
                            <button id="btnPIN"
                                class="w-44 h-12 bg-darkSpace text-white flex items-center justify-center gap-4 mt-8 rounded-xl text-xl">
                                <svg width="28px" height="28px" stroke-width="2" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" color="#000000">
                                    <path d="M7 12.5l3 3 7-7" stroke="#FFF" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                                        stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                </svg>Verificar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="h-full flex justify-center items-center w-1/6">
            <div class="botones w-full h-3/5 ml-10 flex items-center">
                <div class="flex-col ml-2">
                    <button type="submit"
                        class="h-14 w-64 bg-darkSpace text-white rounded-md text-lg font-semibold flex justify-center items-center">
                        Continuar
                        <svg width="30px" height="30px" stroke-width="2.5" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg" color="#000000">
                            <path d="M9 6l6 6-6 6" stroke="#FFF" stroke-width="2.5" stroke-linecap="round"
                                stroke-linejoin="round">
                            </path>
                        </svg>
                    </button>
                    <NuxtLink to="/"
                        class="bg-transparent h-14 w-64 text-white rounded-lg mt-8 text-lg font-semibold flex justify-center items-center">
                        Volver</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Roboto:wght@100;400;500;700&display=swap');

.contained {
    background: linear-gradient(180deg,
            rgba(63, 66, 128, 0.6241) 0%,
            rgba(49, 50, 71, 0.5609) 100%);
    background-color: #1e1e1e;
    font-family: 'Roboto', sans-serif;
}

.card {
    box-shadow: 5px 6px 5px 6px #1e1e1e;
}

.botones {
    border-left: 1px solid #818181;
}
</style>
<script setup>
definePageMeta({
    layout: false,
});
onMounted(() => {
    document.getElementById('cardPIN').classList.remove('bg-space');
    document.getElementById('cardPIN').classList.add('bg-darkspace');
    document.getElementById('confirm_contra').disabled = true;
    document.getElementById('nueva_contrasenia').disabled = true;
    document.getElementById('btnPIN').disabled = true;
});
</script>