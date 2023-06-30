<template>
  <div class="w-full grid place-items-center">
    <div class="top flex-col">
      <h1 class="font-bold text-white text-4xl text-center">Iniciar sesión</h1>
      <h3 class="font-semibold text-white mt-4 text-center">AD-ASTRA</h3>
    </div>
    <form class="middle flex-col w-1/2 mt-20" @submit.prevent="login()">
      <div class="relative z-0">
        <input type="text" id="username" name="usuario" v-model="form.usuario" required maxlength="50"
          @input="validarUsuario()"
          class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-lightPurpleLogin peer"
          placeholder=" " autocomplete="off" />
        <div v-if="!validarUsuario()" class="flex mt-2 mb-0 text-sm text-red-500 bg-transparent" role="alert">
          <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clip-rule="evenodd"></path>
          </svg>
          <div>
            El usuario solo permite caracteres <span class="font-medium">
              alfanuméricos y el guión bajo</span>
          </div>
        </div>
        <span class="text-xs text-gray-400 absolute bottom-0.5 right-0"> {{ form.usuario.length
        }} /50</span>
        <label for="username"
          class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Usuario
          <span class="text-sm ml-1"> * </span></label>
      </div>
      <div class="relative z-0 mt-10 mb-4">
        <input type="password" id="password" name="clave_usuario" v-model="form.clave_usuario" required minlength="8"
          maxlength="30"
          class="block py-2.5 px-0 w-full text-sm text-gray-200 border-gray-200 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer focus:border-lightPurpleLogin peer"
          placeholder=" " autocomplete="off" />
        <span class="text-xs text-gray-400 absolute bottom-0.5 right-0"> {{ form.clave_usuario.length
        }} /30</span>
        <label for="password"
          class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contraseña
          <span class="text-sm ml-1"> * </span></label>
      </div>
      <div class="ml-auto text-right">
        <a href="" class="btn-forgot text-white font-thin text-xs">Olvidaste tu contraseña?</a>
      </div>
      <div class="end flex mt-16 justify-center">
        <button type="submit" :disabled="!validarUsuario()"
          class="btn-login h-16 text-white w-80 text-lg justify-center flex items-center font-semibold bg-purpleLogin rounded-lg transition-all duration-200">Iniciar
          sesión</button>
      </div>
    </form>
  </div>
</template>
<style>
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
</style>
<script setup>
//Importación de axios
import axios from 'axios';
//Importación de sweetalert
import Swal from 'sweetalert2';
//Importación de flowbite
import 'flowbite';
//Importación del onMounted
import { onMounted } from 'vue'
//Importación de archivo de validaciones
import validaciones from '../assets/validaciones.js';

definePageMeta({
  layout: "default",
});

onMounted(() => {
  localStorage.removeItem('token');
})

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

//Función para hacer el login
async function login() {
  if (validarUsuario) {
    try {
      //Se guardan los datos actuales del formulario
      const formData = {
        usuario: form.value.usuario,
        clave_usuario: form.value.clave_usuario,
      };

      //Se hace la petición axios y se guarda el token que retorna
      const token = ((await axios.post("/login", formData)));
      const captoken=token.data.token;
      const capusuario=token.data.usuario.id_usuario;
      //Si retorno un token se redirige a la página principal
      if (token != null) {
        localStorage.setItem('token', captoken);
        localStorage.setItem('usuario',capusuario);
        console.log(localStorage.getItem('token'));
        console.log(localStorage.getItem('usuario'));
        navigateTo('/principal');
        //Si no retorno token es lanza un error
      } else {
        Toast.fire({
          icon: 'error',
          title: 'Credenciales inválidas'
        });
      }
    } catch (error) {
      //Se muestra un sweetalert con el error
      console.log(error);
      Toast.fire({
        icon: 'error',
        title: error.response.data.error
      });
    }
  }
}

//Validaciones
function validarUsuario() {
  var res = validaciones.validarUsuario(form.value.usuario);
  console.log(res);
  return res;
}

</script>

