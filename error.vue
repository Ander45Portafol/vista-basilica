<template>
    <div class="w-screen h-screen bg-[#1B1C30]">
        <div class="flex items-center justify-center">
            <div class="flex-column mt-24 text-center">
                <div class="flex items-center justify-center">
                    <img src="/img/logo_sin_letras.png" alt="" class="h-56">
                </div>
                <p class="mt-8 text-white text-8xl">{{ error.statusCode }}</p>
                <p class="mt-8 text-white text-2xl">{{ mensaje_error }}</p>
                <p class="text-white text-2xl">{{ mensaje_error_2 }}</p>
                <button @click="volverAlInicio" class="mt-12 py-4 px-8 text-white text-lg rounded-lg bg-[#393B69]">Volver al inicio</button>
            </div>
        </div>
    </div>
</template>
<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');

*{

    font-family: 'Russo One';
}
</style>
<script setup>
import { defineProps, ref } from 'vue';

const { error } = defineProps(['error']);
const mensaje_error = ref(error.message);
const mensaje_error_2 = ref();

if (error.statusCode == 404) {
    mensaje_error.value = "La página a la que intentas acceder";
    mensaje_error_2.value = "no existe en esta galaxia."
}

function volverAlInicio() {
    clearError({ redirect: '/' });
}
</script>