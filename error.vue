<template>
    <div class="w-screen h-screen bg-[#1B1C30]">
        <div class="flex items-center justify-center">
            <div class="flex-column mt-24 text-center">
                <div class="flex items-center justify-center">
                    <!-- Logo -->
                    <img src="/img/logo_sin_letras.png" alt="" class="h-56">
                </div>
                <!-- Se muestra el código del error -->
                <p class="mt-8 text-white text-8xl">{{ error.statusCode }}</p>
                <!-- Se muestra el mensaje personalizado -->
                <p class="mt-8 text-white text-2xl">{{ mensaje_error }}</p>
                <p class="text-white text-2xl">{{ mensaje_error_2 }}</p>
                <!-- Botón para volver al inicio -->
                <button v-if="error.statusCode != 500" @click="volverAlInicio"
                    class="mt-12 py-4 px-8 text-white text-lg rounded-lg bg-[#393B69]">Volver al
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

//Se crea una constante con la prop de error, cuando se lance algún mensaje de error (el error debe ser fatal) se activará esta página
const { error } = defineProps(['error']);
//Se crean 2 constantes para un mensaje de error personalizado al usuario
const mensaje_error = ref(error.message);
const mensaje_error_2 = ref();

//Se personalizan los mensajes
if (error.statusCode == 404) {
    mensaje_error.value = "La página a la que intentas acceder";
    mensaje_error_2.value = "no existe en esta galaxia."
} else if (error.statusCode == 500) {
    mensaje_error.value = "Algo salió mal, ponte en contacto con";
    mensaje_error_2.value = "los administradores o inténtalo más tarde."
}

//Función para regresar al inicio al usuario que entro a la página de error
async function volverAlInicio() {
    //Se valida si el usuario tiene un token
    if (localStorage.getItem('token')) {
        try {
            //Si el usuario tiene un token valido volverá a la página principal del dashboard
            await axios.post('/verificar-token/', localStorage.getItem('token'), {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            }).then(res => {
                if (res.data.message == 'Acceso concedido.') {
                    navigateTo('/principal');
                } else {
                    //Si no, volverá a la página del login
                    clearError();
                    window.location.href = '/';
                }
            });
        } catch (error) {

        }
    } else {
        //Si el usuario no tiene token, volverá a la página del login
        clearError();
        window.location.href = '/';
    }
}
</script>