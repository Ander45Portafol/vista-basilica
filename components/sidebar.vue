<template>
  <aside class="flex justify-center items-center fixed top-0 left-0 z-40 w-16 h-screen">
    <div class="flex-col items-center mr-6">
      <ul class="space-y-2 m-4">
        <li>
          <NuxtLink data-tooltip-target="tooltip-principal" data-tooltip-placement="right"
            class="flex items-center p-2 justify-center rounded-lg hover:bg-gray-700" to="/principal">
            <svg width="28px" height="28px" viewBox="0 0 24 24" stroke-width="2.5" fill="none"
              xmlns="http://www.w3.org/2000/svg" color="#000000">
              <path d="M10 18v-3a2 2 0 012-2v0a2 2 0 012 2v3M2 8l9.732-4.866a.6.6 0 01.536 0L22 8" stroke="#fff"
                stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              </path>
              <path d="M20 11v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8" stroke="#fff" stroke-width="2.5" stroke-linecap="round"
                stroke-linejoin="round"></path>
            </svg>
          </NuxtLink>
          <div id="tooltip-principal" role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-purpleToolTip transition-opacity duration-300 rounded-lg shadow-sm opacity-0 tooltip">
            Inicio
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
        </li>
        <li v-if="cargando" class="flex items-center p-2 justify-center rounded-lg">
          <div class="momentum"></div>
        </li>
        <li :class="clases_permisos.parroquia">
          <NuxtLink to="/enlace_amigo" data-tooltip-target="tooltip-parroquia" data-tooltip-placement="right"
            class="flex items-center justify-center rounded-lg p-2 hover:bg-gray-700">
            <svg width="28px" height="28px" stroke-width="2.5" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg" color="#000000">
              <path
                d="M12 6l-7.718 4.824a.6.6 0 00-.282.508V21.4a.6.6 0 00.6.6H12m0-16l7.718 4.824a.6.6 0 01.282.508V21.4a.6.6 0 01-.6.6H12m0-16V4m0-2v2m-2 0h2m0 0h2m-2 18v-5M16 17.01l.01-.011M16 13.01l.01-.011M12 13.01l.01-.011M8 13.01l.01-.011M8 17.01l.01-.011"
                stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </NuxtLink>
          <div id="tooltip-parroquia" role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-purpleToolTip transition-opacity duration-300 rounded-lg shadow-sm opacity-0 tooltip">
            Parroquia
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
        </li>
        <li :class="clases_permisos.usuarios">
          <NuxtLink to="/usuario" id="btn-usuarios" data-tooltip-target="tooltip-usuarios" data-tooltip-placement="right"
            class="flex items-center p-2 rounded-lg justify-center hover:bg-gray-700">
            <svg width="28px" height="28px" stroke-width="2.5" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg" color="#000000">
              <path d="M3 16V8a5 5 0 015-5h8a5 5 0 015 5v8a5 5 0 01-5 5H8a5 5 0 01-5-5z" stroke="#fff" stroke-width="2.5">
              </path>
              <path d="M16.5 14.5s-1.5 2-4.5 2-4.5-2-4.5-2" stroke="#fff" stroke-width="2.5" stroke-linecap="round"
                stroke-linejoin="round"></path>
              <path d="M8.5 10a.5.5 0 110-1 .5.5 0 010 1zM15.5 10a.5.5 0 110-1 .5.5 0 010 1z" fill="#000000" stroke="#fff"
                stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </NuxtLink>
          <div id="tooltip-usuarios" role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-purpleToolTip transition-opacity duration-300 rounded-lg shadow-sm opacity-0 tooltip">
            Usuarios
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
        </li>
        <li :class="clases_permisos.navegabilidad">
          <NuxtLink to="/pagina" data-tooltip-target="tooltip-paginas" data-tooltip-placement="right"
            class="flex items-center p-2 justify-center rounded-lg hover:bg-gray-700">
            <svg width="28px" height="28px" stroke-width="2.5" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg" color="#000000">
              <path d="M3 17V7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="#fff"
                stroke-width="2.5"></path>
              <path d="M6 8h1" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </NuxtLink>
          <div id="tooltip-paginas" role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-purpleToolTip transition-opacity duration-300 rounded-lg shadow-sm opacity-0 tooltip">
            Navegabilidad
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
        </li>
        <li :class="clases_permisos.anuncios">
          <NuxtLink to="/anuncio" data-tooltip-target="tooltip-anuncios" data-tooltip-placement="right"
            class="flex items-center p-2 justify-center rounded-lg hover:bg-gray-700">
            <svg width="28px" height="28px" stroke-width="2.5" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg" color="#000000">
              <path
                d="M10 15v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4a2 2 0 012-2h4a2 2 0 012 2zM16 5v4a2 2 0 01-2 2h-4a2 2 0 01-2-2V5a2 2 0 012-2h4a2 2 0 012 2zM22 15v4a2 2 0 01-2 2h-4a2 2 0 01-2-2v-4a2 2 0 012-2h4a2 2 0 012 2zM6 16v-3M12 6V3M18 16v-3"
                stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </NuxtLink>
          <div id="tooltip-anuncios" role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-purpleToolTip transition-opacity duration-300 rounded-lg shadow-sm opacity-0 tooltip">
            Anuncios
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
        </li>
        <li :class="clases_permisos.mensajes">
          <NuxtLink to="/contacto" data-tooltip-target="tooltip-mensajes" data-tooltip-placement="right"
            class="flex items-center p-2 justify-center rounded-lg hover:bg-gray-700">
            <svg width="28px" height="28px" stroke-width="2.5" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg" color="#000000">
              <path
                d="M8 10h8M8 14h4M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.955 9.955 0 0012 22z"
                stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              </path>
            </svg>
          </NuxtLink>
          <div id="tooltip-mensajes" role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-purpleToolTip transition-opacity duration-300 rounded-lg shadow-sm opacity-0 tooltip">
            Mensajes
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
        </li>
        <li :class="clases_permisos.donaciones">
          <NuxtLink to="/donacion" data-tooltip-target="tooltip-donaciones" data-tooltip-placement="right"
            class="flex items-center p-2 justify-center rounded-lg hover:bg-gray-700">
            <svg width="28px" height="28px" stroke-width="2.5" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg" color="#000000">
              <path
                d="M16 6.28a2.28 2.28 0 01-.662 1.606c-.976.984-1.923 2.01-2.936 2.958a.597.597 0 01-.822-.017l-2.918-2.94a2.281 2.281 0 010-3.214 2.277 2.277 0 013.232 0L12 4.78l.106-.107A2.276 2.276 0 0116 6.28z"
                stroke="#fff" stroke-width="2.5" stroke-linejoin="round"></path>
              <path d="M18 20l3.824-3.824a.6.6 0 00.176-.424V10.5A1.5 1.5 0 0020.5 9v0a1.5 1.5 0 00-1.5 1.5V15"
                stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path
                d="M18 16l.858-.858a.484.484 0 00.142-.343v0a.485.485 0 00-.268-.433l-.443-.221a2 2 0 00-2.308.374l-.895.895a2 2 0 00-.586 1.414V20M6 20l-3.824-3.824A.6.6 0 012 15.752V10.5A1.5 1.5 0 013.5 9v0A1.5 1.5 0 015 10.5V15"
                stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path
                d="M6 16l-.858-.858A.485.485 0 015 14.799v0c0-.183.104-.35.268-.433l.443-.221a2 2 0 012.308.374l.895.895a2 2 0 01.586 1.414V20"
                stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </NuxtLink>
          <div id="tooltip-donaciones" role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-purpleToolTip transition-opacity duration-300 rounded-lg shadow-sm opacity-0 tooltip">
            Donaciones
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
        </li>
        <li :class="clases_permisos.donantes">
          <NuxtLink to="/donante" data-tooltip-target="tooltip-donantes" data-tooltip-placement="right"
            class="flex items-center p-2 justify-center rounded-lg hover:bg-gray-700">
            <svg width="28px" height="28px" stroke-width="2.5" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg" color="#000000">
              <path d="M7 18v-1a5 5 0 015-5v0a5 5 0 015 5v1" stroke="#fff" stroke-width="2.5" stroke-linecap="round">
              </path>
              <path d="M12 12a3 3 0 100-6 3 3 0 000 6z" stroke="#fff" stroke-width="2.5" stroke-linecap="round"
                stroke-linejoin="round"></path>
              <path d="M21 3.6v16.8a.6.6 0 01-.6.6H3.6a.6.6 0 01-.6-.6V3.6a.6.6 0 01.6-.6h16.8a.6.6 0 01.6.6z"
                stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </NuxtLink>
          <div id="tooltip-donantes" role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-purpleToolTip transition-opacity duration-300 rounded-lg shadow-sm opacity-0 tooltip">
            Donantes
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
        </li>
        <li :class="clases_permisos.calendario">
          <NuxtLink to="/calendario" data-tooltip-target="tooltip-calendario" data-tooltip-placement="right"
            class="flex items-center p-2 justify-center rounded-lg hover:bg-gray-700">
            <svg width="28px" height="28px" stroke-width="2.5" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg" color="#000000">
              <path
                d="M15 4V2m0 2v2m0-2h-4.5M3 10v9a2 2 0 002 2h14a2 2 0 002-2v-9H3zM3 10V6a2 2 0 012-2h2M7 2v4M21 10V6a2 2 0 00-2-2h-.5"
                stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </NuxtLink>
          <div id="tooltip-calendario" role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-purpleToolTip transition-opacity duration-300 rounded-lg shadow-sm opacity-0 tooltip">
            Calendario
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
        </li>
        <li :class="clases_permisos.personal">
          <NuxtLink to="/personal" data-tooltip-target="tooltip-personal" data-tooltip-placement="right"
            class="flex items-center p-2 justify-center rounded-lg hover:bg-gray-700">
            <svg width="28px" stroke-width="2.5" height="28px" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg" color="#000000">
              <path d="M4 19V5a2 2 0 012-2h13.4a.6.6 0 01.6.6v13.114" stroke="#fff" stroke-width="2.5"
                stroke-linecap="round"></path>
              <path d="M8 3v8l2.5-1.6L13 11V3" stroke="#fff" stroke-width="2.5" stroke-linecap="round"
                stroke-linejoin="round"></path>
              <path d="M6 17h14M6 21h14" stroke="#fff" stroke-width="2.5" stroke-linecap="round"></path>
              <path d="M6 21a2 2 0 110-4" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              </path>
            </svg>
          </NuxtLink>
          <div id="tooltip-personal" role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-purpleToolTip transition-opacity duration-300 rounded-lg shadow-sm opacity-0 tooltip">
            Personal
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
        </li>
        <div class="flex justify-center items-end h-20">
          <li class="item">
            <button @click="deshabilitarToken" type="button" data-tooltip-target="tooltip-logout"
              data-tooltip-placement="right"
              class="flex items-center p-2 justify-center rounded-lg hover:bg-gray-700"><svg width="28px" height="28px"
                stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                <path d="M12 12h7m0 0l-3 3m3-3l-3-3M19 6V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2v-1"
                  stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </button>
            <div id="tooltip-logout" role="tooltip"
              class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-red-500 transition-opacity duration-300 rounded-lg shadow-sm opacity-0 tooltip">
              Cerrar Sesión
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
          </li>
        </div>
      </ul>
    </div>
  </aside>
</template>
<style>
aside {
  background-color: #1b1c30;
}

.momentum {
  --uib-size: 25px;
  --uib-speed: 1.1s;
  --uib-color: white;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--uib-size);
  width: var(--uib-size);
  animation: rotate var(--uib-speed) linear infinite;
}

.momentum::before,
.momentum::after {
  content: '';
  height: 25%;
  width: 25%;
  border-radius: 50%;
  background-color: var(--uib-color);
}

.momentum::before {
  animation: wobble2 calc(var(--uib-speed) * 1.25) ease-in-out infinite;
}

.momentum::after {
  animation: wobble calc(var(--uib-speed) * 1.25) ease-in-out infinite;
}

.momentum::before {
  margin-right: 10%;
}

@keyframes wobble {

  0%,
  100% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(calc(var(--uib-size) * 0.2)) scale(1.1);
  }
}

@keyframes wobble2 {

  0%,
  100% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(calc(var(--uib-size) * -0.2)) scale(1.1);
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>

<script setup>
//Importaciones de vue
import { onMounted, ref } from 'vue';
//Importación de la funcionalidad de los tooltips
import { initTooltips } from 'flowbite'
//Importación de axios para las peticiones
import axios from "axios";
//Importación de sweetalert
import Swal from 'sweetalert2';

//Cuando se monta el componente se inician los tooltips y se leen los permisos del usuario activo
onMounted(async () => {
  initTooltips();
  await permisosUsuario();
});

//Constante ref para controlar el simbolo de cargando en el menú
const cargando = ref(true);

//Constante ref para manejar el token
const token = ref(null);

//Constante ref para guardar los permisos del usuario
const permisos = ref();

//Constante ref para controlar cuales opciones de menú se van a mostrar y cuales no
const clases_permisos = ref({
  parroquia: 'hidden',
  usuarios: 'hidden',
  navegabilidad: 'hidden',
  anuncios: 'hidden',
  mensajes: 'hidden',
  donaciones: 'hidden',
  donantes: 'hidden',
  calendario: 'hidden',
  personal: 'hidden',
})

//Función para leer los permisos del usuario activo
async function permisosUsuario() {
  token.value = localStorage.getItem('token');
  try {
    //Se realiza la petición axios
    const res = await axios.post("/accesos-usuario", token.value, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });

    //Se almacenan los permisos del usuario en la constante ref
    permisos.value = res.data.data.data[0];

    //Se recorre el objeto de permisos para ver cuales permisos mostrar y cuales no
    for (const PERMISO in clases_permisos.value) {
      if (permisos.value[`acceso_${PERMISO}`]) {
        clases_permisos.value[PERMISO] = '';
      } else {
        clases_permisos.value[PERMISO] = 'hidden';
      }
    }

    //Se oculta el simbolo de cargando
    cargando.value = false;
  } catch (error) {
    console.log(error);
  }
}

//Función para que cuando el usuario cierre sesión, sea enviado al login
async function deshabilitarToken() {
  //Se lanza una alerta de confirmación
  Swal.fire({
    title: "Confirmación",
    text: "¿Desea cerrar la sesión?",
    icon: "warning",
    reverseButtons: true,
    showCancelButton: true,
    confirmButtonColor: "#3F4280",
    cancelButtonColor: "#d33",
    confirmButtonText: "Confirmar",
    cancelButtonText: "Cancelar",
    allowOutsideClick: false,
    //Se evalua la respuesta de la alerta
  }).then(async (result) => {
    //Si el usuario selecciono "Confirmar"
    if (result.isConfirmed) {
      window.location.href = '/';
    }
  });
}

</script>