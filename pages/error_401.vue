<template>
    <div class="w-screen h-screen bg-[#1B1C30]">
        <div class="flex items-center justify-center">
            <div class="flex-column mt-24 text-center">
                <div class="flex items-center justify-center">
                    <img src="/img/logo_sin_letras.png" alt="" class="h-56">
                </div>
                <p class="mt-8 text-white text-8xl">401</p>
                <p class="mt-8 text-white text-2xl">Parece que no estás autorizado para</p>
                <p class="text-white text-2xl">realizar esta acción.</p>
                <button @click="volverAlInicio" class="mt-12 py-4 px-8 text-white text-lg rounded-lg bg-[#393B69]">Volver al
                    inicio</button>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');

* {

    font-family: 'Russo One';
}
</style>
<script setup>

//Importación de axios, se utiliza para hacer las peticiones al servidor -> Para mas información vean el axiosPlugin en la carpeta plugins
import axios from "axios";

onMounted(async () => {
    if (localStorage.getItem('token')) {
        try {
            await axios.post("/logout", localStorage.getItem('token'), {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
        } catch (error) {

        }
        localStorage.removeItem('token');
    }
});

definePageMeta({
    //Se le establece el layout principal
    layout: "",
});

function volverAlInicio() {
    clearError();
    navigateTo('/');
}

</script>