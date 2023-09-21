<template>
    <div class="primer_uso h-screen w-screen overflow-hidden">
        <div class="flex ml-16 h-full w-full items-center">
            <div class="w-3/4 flex justify-start items-center">
                <div class="flex-col w-full text-center text-white font-thin text-xl">
                    <h2 class="text-white font-bold text-6xl text-center">¡Listo!</h2>
                    <p class="mt-8">La configuración inicial se ha realizado</p>
                    <p>con éxito, ahora puedes acceder</p>
                    <p>a la plataforma</p>
                    <div class="flex justify-center items-center mt-12">
                        <svg width="64px" height="64px" stroke-width="1.2" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg" color="#000000">
                            <path d="M7 22h10" stroke="#FFF" stroke-width="1.2" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                            <path d="M2 17V4a2 2 0 012-2h16a2 2 0 012 2v13a2 2 0 01-2 2H4a2 2 0 01-2-2z" stroke="#FFF"
                                stroke-width="1.2"></path>
                            <path d="M9 10.5l2 2 4-4" stroke="#FFF" stroke-width="1.2" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="botones w-1/5 h-3/5 ml-10 flex items-center">
                <div class="flex-col ml-2">
                    <NuxtLink to="/"
                        class="h-14 w-64 bg-darkSpace text-white rounded-md text-lg font-semibold flex justify-center items-center">
                        Ir al sistema
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
    if (capturar_parroquia.value == true && capturar_usuario.value == false) {
        navigateTo('primer_usuario')
    } else if (capturar_parroquia.value == true && capturar_usuario.value == true) {
        navigateTo('/')
    }
}
onMounted(() => {
    validarPantalla();
})
</script>
