<template>
  <div class="overflow-hidden h-screen w-screen bg-gradient">
    <div class="contained h-full w-full flex">
      <div class="container-left w-1/2 flex items-center justify-center border-r border-gray-500">
        <slot />
      </div>
      <div class="container-right w-1/2 relative flex items-center justify-center">
        <img v-if="!ocultar" src="/img/cohete_login.svg" alt="cohete_login" class="w-full">
      </div>
      <div :class="clases_slot">
        <slot />
      </div>
      <div v-if="!ocultar" class="container-right w-1/2 relative flex items-center justify-center">
        <img src="/img/cohete_login.svg" alt="cohete_login" class="w-full">
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Importar fuente */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

/* Estilo general */
.container-right {
  font-family: 'Poppins', sans-serif;
}

/* Separador */
.container-left {
  border-right-width: 4px;
  border-right-color: #808080;
}

/* Centrar imagen */
.container-right {
  margin: 0 15px;
}

/* Fondo gradiente */
.bg-gradient {
  background: linear-gradient(180deg, rgba(63, 66, 128, 0.71) 0%, rgba(49, 50, 71, 0.79) 100%);
  background-color: #1E1E1E;
}

.primer_uso {
  background: linear-gradient(180deg,
      rgba(63, 66, 128, 0.6241) 0%,
      rgba(49, 50, 71, 0.5609) 100%);
  background-color: #1e1e1e;
  font-family: 'Poppins', sans-serif;
}

/* Responsive */
@media (max-width: 1200px) {
  .container-right {
    display: none;
  }

  .container-left {
    border: none;
    width: 100%;
    height: 100vh;
  }
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

onMounted(() => {
  verificarUsuario();
  //Se agrega un eventListener reiniciar el timer
  window.addEventListener('ocultar-divs', () => {
    ocultarDivs();
  });
});


const clases_slot = ref('container-left w-1/2 flex items-center justify-center border-r border-gray-500');

const ocultar = ref(false);

function ocultarDivs() {
  ocultar.value = !ocultar.value;
  if (ocultar.value) {
    clases_slot.value = 'container-left w-1/2 flex items-center justify-center';
  } else {
    clases_slot.value = 'container-left w-1/2 flex items-center justify-center border-r border-gray-500';
  }
}
const existencia_usuario = ref(null);
const existencia_parroquia = ref(null);
async function verificarUsuario() {
  const res = await axios.get(`/primer_uso`);
  existencia_usuario.value = res.data.usuarios;
  existencia_parroquia.value = res.data.parroquias;
  if (existencia_parroquia.value == false && existencia_usuario.value == false) {
    navigateTo('/bienvenida');
  }
  else if (existencia_parroquia.value == true && existencia_usuario.value == false) {
    navigateTo('primer_usuario');
  }
  else if (existencia_usuario.value == true) {
    navigateTo('/');
  }

}



</script>