<template>
    <div class="primer_uso h-screen w-screen overflow-hidden">
        <slot>

        </slot>
    </div>
</template>
<style scoped>
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
onMounted(()=>{
    verificarUsuario();
});
const existencia_usuario=ref(null);
async function verificarUsuario() {
    const res = await axios.get(`/primer_uso`);
    existencia_usuario.value = res.data.usuarios;
    if (existencia_usuario.value == true) {
        navigateTo('/login');
    }
}
</script>