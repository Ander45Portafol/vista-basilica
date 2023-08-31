<template>
  <div class="hidden">Hola</div>
</template>
    
<script setup>
//Importación de funciones y utilidades de vue
import { ref, onMounted, onBeforeUnmount } from 'vue';
//Importación de sweetalert
import Swal from 'sweetalert2';
//Importación de axios
import axios from 'axios';

//Se calculan los 5 minutos_restantes en segundos_restantes
const segundos_restantes_totales = ref(5 * 60);
//Se dividen los segundos_restantes totales entre 60 para sacar los minutos_restantes restantes
const minutos_restantes = ref(Math.floor(segundos_restantes_totales.value / 60));
//Se usa el operador mod con los segundos_restantes totales entre 60 para saber cuantos segundos_restantes quedan en el minuto
const segundos_restantes = ref((segundos_restantes_totales.value % 60).toString().padStart(2, '0'));
//Variable para almacenar la instancia del sweetalert que se muestra cuando solo queda un minuto
let alerta_1minuto = null;

//Intervalo para manejar el título del sweetalert
let intervalo_titulo;
//Intervalo para manejar que el timer vaya restando segundos_restantes
let intervalo_segundos_restantes;

//Al montarse el componente se inicia el intervalo para restar los segundos_restantes
onMounted(() => {
  intervalo_segundos_restantes = setInterval(CONTEO, 1000);

  //Se agrega un eventListener reiniciar el timer
  window.addEventListener('reset-timer', () => {
    reiniciarTimer();
  });
});

// Antes de montar se limpian ambos intervalos y se cierra el sweetalert para evitar conflictos de un intervalo ya iniciado
onBeforeUnmount(() => {
  clearInterval(intervalo_segundos_restantes);
  clearInterval(intervalo_titulo);
  if (alerta_1minuto) {
    alerta_1minuto.close();
  }
});

//Constante que realiza la función del conteo del timer
const CONTEO = () => {
  //Si los segundos_restantes totales son mayores a 0 significa que aun hay tiempo restante, entonces se resta 1 segundo y se vuelven a calcular los minutos_restantes y segundos_restantes restantes
  if (segundos_restantes_totales.value > 0) {
    segundos_restantes_totales.value--;
    minutos_restantes.value = Math.floor(segundos_restantes_totales.value / 60);
    segundos_restantes.value = (segundos_restantes_totales.value % 60).toString().padStart(2, '0');
    console.log(minutos_restantes.value + ':' + segundos_restantes.value);

    //Si queda menos de 1 minuto se muestra un sweetalert y se inicia el intervalo del titulo
    if (segundos_restantes_totales.value <= 60 && !alerta_1minuto) {
      alerta_1minuto = Swal.fire({
        title: 'La sesión caduca en: ' + minutos_restantes.value + ':' + segundos_restantes.value,
        icon: 'warning',
        iconColor: '#FFCA51',
        confirmButtonText: 'Seguir navegando',
        allowOutsideClick: false,
        showCancelButton: false,
      });

      intervalo_titulo = setInterval(CAMBIAR_TITULO, 1000);

      //Se evalua el resultado del sweetalert para que si el usuario da click en confirmar se reinicie el timer
      alerta_1minuto.then((result) => {
        if (result.isConfirmed) {
          refreshToken();
          reiniciarTimer();
        }
      });
    }
  } else {
    //Si los segundos llegan a 0, se limpian ambos intervalos y se cierra el sweetalert
    clearInterval(intervalo_segundos_restantes);
    clearInterval(intervalo_titulo);
    if (alerta_1minuto) {
      alerta_1minuto.close();
    }
    //Además, retorna al login y elimina el token del localStorage
    navigateTo('/');
    localStorage.removeItem('token');
  }
};

//Constante que realiza la función de actualizar el titulo del sweetalert
const CAMBIAR_TITULO = () => {
  minutos_restantes.value = Math.floor(segundos_restantes_totales.value / 60);
  segundos_restantes.value = (segundos_restantes_totales.value % 60).toString().padStart(2, '0');

  if (alerta_1minuto) {
    alerta_1minuto.update({
      title: 'La sesión caduca en: ' + minutos_restantes.value + ':' + segundos_restantes.value,
    });
  }
};

//Función para reiniciar el timer
function reiniciarTimer() {
  segundos_restantes_totales.value = (5 * 60);
  alerta_1minuto = null;
  clearInterval(intervalo_titulo);
}

//Función para refrescar el token cuando sea necesario
async function refreshToken() {
  //Se realiza la petición axios
  const res = await axios.get('refresh/', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

  //Se actualiza el valor del token en el localStorage
  localStorage.setItem('token', res.data.token);
}

</script>
  