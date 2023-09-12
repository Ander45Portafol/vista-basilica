<template>
  <div v-if="!enviando_login" class="w-full grid place-items-center">
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
    class="h-[100vh] w-screen bg-[#1A1B27] flex flex-col justify-center items-center absolute bottom-0 left-0">
    <img class="h-1/3" src="/img/logo_sin_letras.png" alt="logo_cargando">
    <p class="loading_text mt-8 text-white min-[500px]:text-6xl max-[500px]:text-5xl">Cargando...</p>
    <div class="race-by min-[850px]:w-2/5 max-[850px]:w-2/3 mt-5"></div>
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');

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
  layout: "login",
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

//Evento para controlar la pantalla de cargando
const EVENTO = new Event('ocultar-divs');

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
    console.log(token.data.data);
    const cap_token = token.data.data.token;
    const cap_usuario = token.data.data.user.id_usuario;
    const cap_imagen = token.data.data.user.imagen_usuario;
    //Si retorno un token se redirige a la página principal
    if (token != null) {
      localStorage.setItem('token', cap_token)
      console.log(localStorage.getItem('token'));
      localStorage.setItem('usuario', cap_usuario);
      localStorage.setItem('imagen_usuario', cap_imagen);
      navigateTo('/principal');
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

</script>