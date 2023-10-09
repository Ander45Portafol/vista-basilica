<template>
    <div class="w-screen h-screen bg-[#1B1C30]">
        <div class="flex items-center justify-center">
            <div class="flex-column mt-24 text-center">
                <div class="flex items-center justify-center">
                    <!-- Logo -->
                    <img src="/img/logo_sin_letras.png" alt="" class="h-56">
                </div>
                <!-- Se muestra el código del error -->
                <p class="mt-8 text-white text-8xl">401</p>
                <!-- Se muestra el mensaje personalizado -->
                <p class="mt-8 text-white text-2xl">Parece que no estás autorizado para</p>
                <p class="text-white text-2xl">realizar esta acción.</p>
                <!-- Botón para volver al inicio -->
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

definePageMeta({
    //A esta página no se le establece un layout ya que tiene su propia forma
    layout: "vacio",
});

//Función para volver al inicio cuando el usuario presiona ese botón
function volverAlInicio() {
    clearError();
    window.location.href = '/';
}

</script>