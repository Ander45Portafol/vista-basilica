<template>
  <div class="w-full grid place-items-center">
    <div class="top flex-col">
      <h1 class="font-bold text-white text-4xl text-center">Iniciar sesión</h1>
      <h3 class="font-semibold text-white mt-4 text-center">AD-ASTRA</h3>
    </div>
    <form class="middle flex-col w-1/2 mt-20" method="POST" action="" novalidate @submit="login()">
      <div class="relative z-0">
        <input type="text" id="username" name="usuario" v-model="form.usuario"
          class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-lightPurpleLogin peer"
          placeholder=" " autocomplete="off" />
        <label for="username"
          class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Usuario</label>
      </div>
      <div class="relative z-0 mt-10 mb-4">
        <input type="password" id="password" name="clave_usuario" v-model="form.clave_usuario"
          class="block py-2.5 px-0 w-full text-sm text-gray-200 border-gray-200 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer focus:border-lightPurpleLogin peer"
          placeholder=" " autocomplete="off" />
        <label for="password"
          class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contraseña</label>
      </div>
      <div class="ml-auto text-right">
        <a href="" class="btn-forgot text-white font-thin text-xs">Olvidaste tu contraseña?</a>
      </div>
      <div class="end flex mt-16 justify-center">
        <button type="submit"
          class="btn-login h-16 text-white w-80 text-lg justify-center flex items-center font-semibold bg-purpleLogin rounded-lg transition-all duration-200">Iniciar
          sesión</button>
      </div>
    </form>
    <pre>
                  {{ form }}
                </pre>
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
import axios from 'axios';
//Importación de sweetalert
import Swal from 'sweetalert2';

import { useRouter } from 'vue-router';

definePageMeta({
  layout: "default",
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

const form = ref({
  usuario: "",
  clave_usuario: "",
})

const router = useRouter();

async function login() {
  event.preventDefault();
  try {
    const formData = {
      usuario: form.value.usuario,
      clave_usuario: form.value.clave_usuario,
    };

    //Data y token para acceder a esos campos de la respuesta q retorna
    const token = (await axios.post("/login", formData)).data.token;
    localStorage.setItem('token', token);
    console.log(localStorage.getItem('token'));
    router.push('/principal');
  } catch (error) {
    console.log(error);
    Toast.fire({
      icon: 'error',
      title: error.response.data.error
    });
  }
}
</script>

