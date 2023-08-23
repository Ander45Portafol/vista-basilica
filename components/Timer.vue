<template>
    <div>
      <h1>Temporizador de 5 minutos</h1>
      <p>Tiempo restante: {{ minutes }}:{{ seconds }}</p>
    </div>
  </template>
    
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  import Swal from 'sweetalert2';
  
  const totalSeconds = ref(1.1* 60); // 5 minutes in seconds
  const minutes = ref(Math.floor(totalSeconds.value / 60));
  const seconds = ref((totalSeconds.value % 60).toString().padStart(2, '0'));
  let alertInstance = null;
  
  const countdown = () => {
    if (totalSeconds.value > 0) {
      totalSeconds.value--;
      minutes.value = Math.floor(totalSeconds.value / 60);
      seconds.value = (totalSeconds.value % 60).toString().padStart(2, '0');
  
      if (totalSeconds.value <= 60 && !alertInstance) {
        showCountdownAlert();
      } else if (alertInstance) {
        updateCountdownAlert();
      }
    } else {
      window.location.reload();
    }
  };
  
  let timerInterval;
  
  onMounted(() => {
    timerInterval = setInterval(countdown, 1000);
  });
  
  // Cleanup the interval when the component is unmounted
  onBeforeUnmount(() => {
    clearInterval(timerInterval);
    if (alertInstance) {
      alertInstance.close();
    }
  });
  
  function showCountdownAlert() {
    alertInstance = Swal.fire({
      title: 'La sesión caduca en: ' + minutes.value + ':' + seconds.value,
      icon: 'warning',
      allowOutsideClick: false,
      showCancelButton: false,
      didOpen: () => {
        // Escuchar evento personalizado para actualizar el título
        document.addEventListener('updateTitle', updateTitle);
      }
    }).then((result) => {
      if (result.isConfirmed) {
        resetTimer();
      }
    });
  }
  
  function updateCountdownAlert() {
    if (alertInstance) {
      // Disparar el evento personalizado para actualizar el título
      const updateTitleEvent = new Event('updateTitle');
      document.dispatchEvent(updateTitleEvent);
    }
  }
  
  function updateTitle() {
    if (alertInstance) {
      alertInstance.update({
        title: 'La sesión caduca en: ' + minutes.value + ':' + seconds.value
      });
    }
  }
  
  function resetTimer() {
    totalSeconds.value = (1.1* 60);
    alertInstance = null;
  }
  </script>
  