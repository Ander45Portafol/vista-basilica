<template>
    <NuxtLink to="/perfil">
        <img :src="api_url + imagen" alt="" class="w-10 h-10 rounded-full">
    </NuxtLink>
</template>
<script setup>
var api_url = "http://localhost:8000/storage/usuarios/images/";
const imagen = ref(null);
onMounted(() => {
    function cargarImagen() {
        imagen.value = localStorage.getItem('imagen_usuario');
    }
    cargarImagen();
});
</script>