<template>
    <div class="primer_uso h-screen w-screen overflow-hidden">
        <div class="flex ml-16 h-full w-full items-center">
            <div class="w-3/4 flex justify-start items-center">
                <div class="flex-col">
                    <h2 class="text-white font-bold text-5xl">BIENVENIDO</h2>
                    <p class="text-white font-thin text-2xl mt-4">Antes de comenzar a utilizar el sistema
                        es necesaria una configuración.</p>
                    <div class="flex mt-8">
                        <div class="flex-col text-white">
                            <div class="flex justify-center font-thin">
                                <svg width="35px" height="35px" stroke-width="2.5" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" color="#000000">
                                    <path
                                        d="M12 6l-7.718 4.824a.6.6 0 00-.282.508V21.4a.6.6 0 00.6.6H12m0-16l7.718 4.824a.6.6 0 01.282.508V21.4a.6.6 0 01-.6.6H12m0-16V4m0-2v2m-2 0h2m0 0h2m-2 18v-5M16 17.01l.01-.011M16 13.01l.01-.011M12 13.01l.01-.011M8 13.01l.01-.011M8 17.01l.01-.011"
                                        stroke="#FFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                </svg>
                            </div>
                            Parroquia
                        </div>
                        <div class="flex-col text-white ml-8">
                            <div class="flex justify-center font-thin">
                                <svg width="35px" height="35px" stroke-width="2.5" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" color="#000000">
                                    <path d="M3 16V8a5 5 0 015-5h8a5 5 0 015 5v8a5 5 0 01-5 5H8a5 5 0 01-5-5z" stroke="#FFF"
                                        stroke-width="2.5"></path>
                                    <path d="M16.5 14.5s-1.5 2-4.5 2-4.5-2-4.5-2" stroke="#FFF" stroke-width="2.5"
                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M8.5 10a.5.5 0 110-1 .5.5 0 010 1zM15.5 10a.5.5 0 110-1 .5.5 0 010 1z"
                                        fill="#000000" stroke="#FFF" stroke-width="2.5" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                </svg>
                            </div>
                            Usuario
                        </div>
                        <div class="flex-col text-white ml-8">
                            <div class="flex justify-center font-thin">
                                <svg width="35px" height="35px" stroke-width="2.5" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" color="#000000">
                                    <path d="M7 22h10" stroke="#FFF" stroke-width="2.5" stroke-linecap="round"
                                        stroke-linejoin="round">
                                    </path>
                                    <path d="M2 17V4a2 2 0 012-2h16a2 2 0 012 2v13a2 2 0 01-2 2H4a2 2 0 01-2-2z"
                                        stroke="#FFF" stroke-width="2.5"></path>
                                    <path d="M9 10.5l2 2 4-4" stroke="#FFF" stroke-width="2.5" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                </svg>
                            </div>
                            Sistema
                        </div>
                    </div>
                </div>
            </div>
            <div class="botones w-1/5 h-3/5 ml-10 flex items-center">
                <div class="flex-col ml-2">
                    <NuxtLink to="primer_parroquia"
                        class="h-14 w-64 bg-darkSpace text-white rounded-md text-lg font-semibold flex justify-center items-center">
                        Continuar
                        <svg width="30px" height="30px" stroke-width="2.5" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg" color="#000000">
                            <path d="M9 6l6 6-6 6" stroke="#FFF" stroke-width="2.5" stroke-linecap="round"
                                stroke-linejoin="round">
                            </path>
                        </svg>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.botones {
    border-left: 1px solid #818181;
}

.primer_uso {
    background: linear-gradient(180deg,
            rgba(63, 66, 128, 0.6241) 0%,
            rgba(49, 50, 71, 0.5609) 100%);
    background-color: #1e1e1e;
    font-family: 'Poppins', sans-serif;
}
</style>
<script setup>
import axios from 'axios';
definePageMeta({
    layout: false,
});
const capturar_parroquia = ref(null);
const capturar_usuario = ref(null);

async function validarPantalla() {
    const res = await axios.get('/primer_uso');
    capturar_parroquia.value = res.data.parroquias;
    capturar_usuario.value = res.data.usuarios;
    if (capturar_parroquia.value == false && capturar_usuario.value == false) {
        navigateTo('bienvenida');
    }
    else if (capturar_parroquia.value == true && capturar_usuario.value == false) {
        navigateTo('primer_usuario')
    } else {
        navigateTo('/');
    }
}
onMounted(() => {
    validarPantalla();
})
</script>
