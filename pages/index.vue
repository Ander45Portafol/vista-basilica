<template>
  <div v-if="!enviando_login && !doble_factor" class="w-full grid place-items-center">
    <div class="top flex items-center">
      <img src="/img/logo_con_letras.svg" alt="logo_login" class="h-[20vh]">
    </div>
    <form class="middle flex-col w-1/2 mt-12" @submit.prevent="login()">
      <div class="relative z-0">
        <input type="text" id="username" name="usuario" v-model="form.usuario" required maxlength="50"
          @input="cambiarProp"
          class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-lightPurpleLogin peer"
          placeholder=" " autocomplete="off" />
        <label for="username"
          class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Usuario
          <span class="text-sm ml-1"> * </span></label>
      </div>
      <div class="relative z-0 mt-10 mb-4">
        <input type="password" id="password" name="clave_usuario" v-model="form.clave_usuario" required minlength="8"
          maxlength="73"
          class="block py-2.5 px-0 w-full text-sm text-gray-200 border-gray-200 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer focus:border-lightPurpleLogin peer"
          placeholder=" " autocomplete="off" />
        <label for="password"
          class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contraseña
          <span class="text-sm ml-1"> * </span></label>
      </div>
      <div class="ml-auto text-right">
        <a href="" class="btn-forgot text-white font-thin text-xs">Olvidaste tu contraseña?</a>
      </div>
      <div class="end flex mt-16 justify-center">
        <button type="submit"
          class="btn-login h-16 text-white w-80 text-lg justify-center flex items-center font-semibold bg-purpleLogin rounded-lg transition-all duration-200">
          Iniciar sesión
        </button>
      </div>
    </form>
  </div>
  <div v-if="enviando_login"
    class="h-screen w-screen bg-[#1A1B27] flex flex-col justify-center items-center absolute bottom-0 left-0">
    <img class="h-1/3" src="/img/logo_sin_letras.png" alt="logo_cargando">
    <p class="loading_text mt-8 text-white min-[500px]:text-6xl max-[500px]:text-5xl">Cargando...</p>
    <div class="race-by min-[850px]:w-2/5 max-[850px]:w-2/3 mt-5"></div>
  </div>
  <form v-if="doble_factor" class="h-screen w-screen flex flex-col justify-center items-center absolute bottom-0 left-0">
    <div class="min-[480px]:flex max-[480px]:flex-wrap items-center">
      <p class="t-roboto text-white font-bold text-center text-6xl mr-5">¡Un paso más!
      </p>
      <svg class="max-[480px]:ml-[40%] max-[480px]:mt-2" width="52px" height="52px" viewBox="0 0 24 24" stroke-width="2"
        fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFFFFF">
        <path d="M5 9l4.5 3L14 9" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        </path>
        <path d="M17 19H3a2 2 0 01-2-2V7a2 2 0 012-2h13a2 2 0 012 2v2" stroke="#FFFFFF" stroke-width="2"
          stroke-linecap="round"></path>
        <path d="M17 14h6m0 0l-3-3m3 3l-3 3" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round"></path>
      </svg>
    </div>
    <p class="t-roboto text-white text-center font-normal mt-5 text-lg mx-5">Hemos enviado un PIN de acceso al correo:
      <span class="t-roboto text-white font-bold text-lg">{{ correo_doble_factor }}</span>
    </p>
    <p class="t-roboto text-white text-center font-normal text-lg max-[480px]:mt-3 mx-5">Ingresa el código para poder
      continuar con tu inicio de sesión.</p>
    <div class="flex-wrap items-center mx-5 max-[480px]:mt-5">
      <input :id="'input' + (number + 1)" v-for="(item, number) in inputs" :key="number" v-model="inputs[number]"
        @keyup="moveFocus(number)" @keyup.delete="moveFocusBack(number)" @paste="handlePaste($event)" type="text"
        minlength="1" maxlength="1"
        class="mr-3 bg-transparent text-white text-center text-2xl border-4 border-white focus:border-lightPurpleLogin w-12 h-12 mt-5">
    </div>
    <div v-if="inputs_error"
      class="flex items-center mt-10 p-4 text-sm text-red-300 border border-red-300 rounded-lg bg-transparent"
      role="alert">
      <svg class="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
        fill="currentColor" viewBox="0 0 20 20">
        <path
          d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <div>
        <span class="font-medium">Formato incorrecto!</span>
      </div>
    </div>
    <button type="submit"
      class="btn-login h-16 text-white w-80 mt-10 text-lg justify-center flex items-center font-semibold bg-purpleLogin rounded-lg transition-all duration-200">
      Verificar
    </button>
  </form>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Russo+One&display=swap');

.t-roboto {
  font-family: 'Roboto';
}

.loading_text {
  font-family: 'Russo One';
}

.end .btn-login {
  background-color: #3F4280;
  border-radius: 10px;
}

/*Animación de olvido su contraseña*/
.btn-forgot {
  position: relative;
  display: inline-block;
  text-decoration: none;
  color: white;
}

.btn-forgot::before,
.btn-forgot::after {
  content: "";
  position: absolute;
  bottom: -2px;
  width: 0;
  height: 2px;
  background-color: white;
  transition: width 0.3s ease-in-out;
}

.btn-forgot::before {
  right: 50%;
  transform-origin: right;
}

.btn-forgot::after {
  left: 50%;
  transform-origin: left;
}

.btn-forgot:hover::before,
.btn-forgot:hover::after {
  width: 50%;
}

/*Animación del botón de login*/
.btn-login:hover {
  font-size: 22px;
  background-color: #5357aa;
}

.race-by {
  --uib-speed: 1.4s;
  --uib-color: #7075EB;
  --uib-line-weight: 30px;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--uib-line-weight);
  border-radius: calc(var(--uib-line-weight) / 2);
  overflow: hidden;
  transform: translate3d(0, 0, 0);
}

.race-by::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: var(--uib-color);
  opacity: 0.1;
}

.race-by::after {
  content: '';
  height: 100%;
  width: 100%;
  border-radius: calc(var(--uib-line-weight) / 2);
  animation: raceBy var(--uib-speed) ease-in-out infinite;
  transform: translateX(-100%);
  background-color: var(--uib-color);
}

@keyframes raceBy {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }
}
</style>
<script setup>
//Importación de axios
import axios from 'axios';
//Importación de sweetalert
import Swal from 'sweetalert2';
//Importación de flowbite
import 'flowbite';
//Importación de archivo de validaciones
import validaciones from '../assets/validaciones.js';

definePageMeta({
  layout: "default",
});

onMounted(async () => {
  //Cuando la página se monta se verifica si el usuario tiene un token
  if (localStorage.getItem('token')) {
    //Si el usuario tiene un token válido, se cierra la sesión y se elimina el token
    try {
      const res = await axios.post('/verificar-token/', localStorage.getItem('token'), {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })

      if (res.data.message == 'El token de acceso es valido.') {
        await axios.post("/logout", localStorage.getItem('token'), {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
      }
      localStorage.removeItem('token');
    } catch (error) {
      console.log(error);
    }
  }
});

//Toast de sweetalert 
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

//Variable reactiva para manejar la información del formulario
const form = ref({
  usuario: "",
  clave_usuario: "",
})

//Constante ref para controlar la pantalla de cargando
const enviando_login = ref(false);

//Constante ref para controlar la pantalla del doble factor
const doble_factor = ref(false);

//Evento para controlar la pantalla de cargando
const EVENTO = new Event('ocultar-divs');

//Constante ref  para guardar el correo al que fue enviado el pin del doble factor
const correo_doble_factor = ref();

//Constante ref para el manejo de los inputs
const inputs = ref(Array(6).fill(''));

//Constante ref para mostrar el mensaje de error de los inputs del codigo de verificación
const inputs_error = ref(false);

//Función para hacer el login
async function login() {
  try {
    //Se lanza el evento para controlar la pantalla de cargando y tambien se establece enviando_login a true
    window.dispatchEvent(EVENTO);
    enviando_login.value = true;
    //Se guardan los datos actuales del formulario
    const form_data = {
      usuario: form.value.usuario,
      clave_usuario: form.value.clave_usuario,
    };

    //Se hace la petición axios y se guarda el token que retorna
    const token = ((await axios.post("/login", form_data)));
    //Si retorno un token se redirige a la página principal
    if (token != null) {
      if (!token.data.data.doble_factor) {
        const cap_token = token.data.data.token;
        const cap_usuario = token.data.data.user.id_usuario;
        const cap_imagen = token.data.data.user.imagen_usuario;
        localStorage.setItem('token', cap_token)
        console.log(localStorage.getItem('token'));
        localStorage.setItem('usuario', cap_usuario);
        localStorage.setItem('imagen_usuario', cap_imagen);
        console.log(token.data.data.user.autenticable)
        navigateTo('/principal');
      } else {
        enviando_login.value = false;
        doble_factor.value = true;
        correo_doble_factor.value = token.data.data.correo;
      }
      //Si no retorno token es lanza un error
    } else {
      Toast.fire({
        icon: 'error',
        title: 'Credenciales inválidas'
      });
    }
  } catch (error) {
    //Se lanza el evento para controlar la pantalla de cargando y tambien se establece enviando_login a false, así vuelve al login normal
    window.dispatchEvent(EVENTO);
    enviando_login.value = false;
    //Se muestra un sweetalert con el error
    console.log(error);
    Toast.fire({
      icon: 'error',
      title: error.response.data.error
    });
  }
}

function moveFocus(num) {
  if (inputs.value[num].length === 1 && num < inputs.value.length - 1) {
    document.getElementById('input' + (num + 2)).focus();
  }
  validarNumeros();
};

function moveFocusBack(num) {
  if (num > 0) {
    document.getElementById('input' + num).focus();
  }
};

function handlePaste(event) {
  // Prevenir la acción de pegado predeterminada
  event.preventDefault();

  // Obtener el texto del portapapeles
  const pastedData = event.clipboardData.getData('text');

  // Verificar si el texto pegado tiene 6 dígitos
  if (pastedData.length == 6) {
    // Recorrer cada carácter del texto pegado
    for (let i = 0; i < pastedData.length; i++) {
      // Si el input existe, establecer su valor y mover el enfoque al siguiente input
      let inputElement = document.getElementById('input' + (i + 1));
      if (inputElement !== null) {
        inputElement.value = pastedData.charAt(i);
        if (i < pastedData.length - 1) {
          document.getElementById('input' + (i + 2)).focus();
        }
      }
    }
  }
};

function validarNumeros() {
  if(inputs.value[0] == null || isNaN(inputs.value[0])){
    inputs_error.value = true;
  }else if(inputs.value[1] == null || isNaN(inputs.value[1])){
    inputs_error.value = true;
  }else if(inputs.value[2] == null || isNaN(inputs.value[2])){
    inputs_error.value = true;
  }else if(inputs.value[3] == null || isNaN(inputs.value[3])){
    inputs_error.value = true;
  }else if(inputs.value[4] == null || isNaN(inputs.value[4])){
    inputs_error.value = true;
  }else if(inputs.value[5] == null || isNaN(inputs.value[5])){
    inputs_error.value = true;
  }else{
    inputs_error.value = false;
  }
  console.log(inputs_error.value);
}

</script>