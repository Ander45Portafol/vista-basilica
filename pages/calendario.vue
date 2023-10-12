<template>
  <div class="principal mt-6">
    <MenuCalendarioDashboard class="mr-8" />
    <div class="mdprincipal flex-col">
      <div class='demo-app py-4'>
        <div class='demo-app-sidebar h-screen'>
          <div class='demo-app-sidebar-section h-5/6 mt-[-20px] menu-evento'>
            <button class="mb-4 pb-2 active" id="btneventos">Eventos <strong> ( {{ currentEvents.length }} )
              </strong></button>
            <button class="ml-6 pb-2" id="btneliminados" @click="eventosOcultos">Eliminados <strong>()</strong></button>
            <div class="container_cards w-full h-full pr-6 overflow-y-scroll">
              <ul class="ml-[-20px] text-[14px]">
                <li v-for='evento in currentEvents' :key='evento.id' class="flex items-center rounded-md bg-gray-200 p-5">
                  <div class="flex-col w-[100%]">
                    <p class="font-semibold">Dia: <span class="font-normal">{{ evento.start.toLocaleDateString('es-ES')
                    }}</span></p>
                    <p class=" mt-2 font-semibold">Hora inicio: <span class="font-normal">{{
                      evento.start.toLocaleTimeString('es-ES') }}</span></p>
                    <p class="mt-2 font-semibold">Hora final: <span class="font-normal">{{
                      evento.end.toLocaleTimeString('es-ES') }}</span></p>
                    <p class="mt-2 font-semibold">Nombre evento: <span class="font-normal">{{ evento.title }}</span></p>
                    <div class="flex justify-center mt-4">
                      <button @click="eliminarEvento(evento.id, evento.title)"
                        class="h-10 w-10 rounded-md flex items-center justify-center deletebtn max-[750px]:ml-0 max-[750px]:mt-2 max-[400px]:mt-0 max-[400px]:mx-4">
                        <svg width="26px" height="26px" viewBox="0 0 24 24" stroke-width="2" fill="none"
                          xmlns="http://www.w3.org/2000/svg" color="#000000">
                          <path
                            d="M20 9l-1.995 11.346A2 2 0 0116.035 22h-8.07a2 2 0 01-1.97-1.654L4 9M21 6h-5.625M3 6h5.625m0 0V4a2 2 0 012-2h2.75a2 2 0 012 2v2m-6.75 0h6.75"
                            stroke="#872727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          </path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class='demo-app-main h-1/3'>
          <FullCalendar class='demo-app-calendar' :options='calendarOptions'>
            <template v-slot:eventContent='arg'>
              <div class="flex-col p-2">
                <p class="font-bold">{{ arg.event.title }}</p>
                <div class="flex">
                  <p class="text-xs">{{ arg.event.start.toLocaleTimeString('es-ES', {
                    hour: '2-digit',
                    minute: '2-digit'
                  }) }}<span class="mx-2">-</span></p>
                  <p class="text-xs">{{ arg.event.end.toLocaleTimeString('es-ES', {
                    hour: '2-digit',
                    minute: '2-digit'
                  }) }}</p>
                </div>
              </div>
            </template>
          </FullCalendar>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal principal-->
  <div id="staticModal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative w-full max-w-4xl max-h-full">
      <!-- Contenido del modal -->
      <div class="relative rounded-lg shadow modal">
        <!--Encabezado del modal -->
        <div class="flex items-start justify-between p-4 rounded-t">
          <div class="flex-col ml-4 pt-4">
            <!-- Asignamos un id al título del modal para la creación  y actualizacion de texto-->
            <p class="text-3xl font-bold text-gray-100" id="modalText"></p>
            <p class="text-lg font-medium text-gray-400">Evento</p>
          </div>
          <!-- Boton para cerrar el modal -->
          <button type="button" id="closeModal"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="staticModal">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
        <!-- Cuerpo del modal -->
        <div class="p-6 space-y-6 pb-10">
          <form class="flex-col flex-wrap" @submit.prevent="accionForm">
            <div class="flex justify-evenly flex-wrap">
              <div class="flex-col w-52">
                <div class="relative z-0">
                  <input type="hidden" id="id_evento" @input="validarNombreEvento" v-model="form.id_evento">
                  <!-- Campo de entrada de texto -->
                  <input type="text" id="nombre_evento" name="nombre_evento" v-model="form.nombre_evento"
                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                    placeholder=" " autocomplete="off" />
                  <label for="nombre_evento"
                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre
                    - Evento</label>
                </div>
                <div v-if="!validarNombreEvento()" class="flex mt-2 mb-0 text-sm text-red-400 bg-transparent"
                  role="alert">
                  <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clip-rule="evenodd"></path>
                  </svg>
                  <div>
                    El nombre del evento solo permite <span class="font-medium">
                      letras.</span>
                  </div>
                </div>
                <div class="relative z-0 mt-12">
                  <!-- Campo de entrada de texto -->
                  <input type="time" id="hora_final_evento" name="hora_final_evento" @input="validarHoraFinal"
                    v-model="form.hora_final_evento"
                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                    placeholder=" " autocomplete="off" />
                  <label for="hora_final_evento"
                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Hora
                    final
                    - Evento</label>
                </div>
                <div v-if="!validarHoraFinal()" class="flex mt-2 mb-0 text-sm text-red-400 bg-transparent" role="alert">
                  <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clip-rule="evenodd"></path>
                  </svg>
                  <div>
                    La hora final debe ser mayor a la <span class="font-medium">
                      hora inicial.</span>
                  </div>
                </div>
                <div class="relative z-0 mt-8 pt-1">
                  <input type="text" id="nombre_consultor" name="nombre_consultor" @input="validarNombreConsultor()"
                    v-model="form.nombre_consultor"
                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                    placeholder=" " autocomplete="off" />
                  <label for="nombre_consultor"
                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre
                    - Consultor</label>
                </div>
                <div v-if="!validarNombreConsultor()" class="flex mt-2 mb-0 text-sm text-red-400 bg-transparent"
                  role="alert">
                  <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clip-rule="evenodd"></path>
                  </svg>
                  <div>
                    El nombre del consultor solo permite <span class="font-medium">
                      letras.</span>
                  </div>
                </div>
                <div class="pt-4 mt-4 flex-col">
                  <label for="" class="text-sm absolute text-gray-200">Personal<span class="text-sm ml-1"> *
                    </span></label>
                  <select id="underline_select" v-model="form.id_personal"
                    class="block mt-4 py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                    <option value="0" class="bg-gray-700 text-white"> Seleccione una opción </option>
                    <option class="bg-gray-700" v-for="persona in personal" :key="persona.id" :value="persona.id">
                      {{ persona.campos.nombre_personal }}</option>
                  </select>
                </div>
                <div v-if="form.id_personal == 0" class="flex mt-2 mb-0 text-sm text-red-400 bg-transparent" role="alert">
                  <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clip-rule="evenodd"></path>
                  </svg>
                  <div>
                    Seleccione <span class="font-medium">
                      una opción.</span>
                  </div>
                </div>
                <div class="relative z-0 mt-8">
                  <input type="date" id="fecha_evento" v-model="form.fecha_evento" name="fecha_evento"
                    :disabled="fecha_eventos"
                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                    placeholder="" autocomplete="off" />
                  <label for="evento"
                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Fecha
                    evento</label>
                </div>
              </div>
              <div class="flex-col w-52">
                <div class="relative z-0">
                  <!-- Campo de entrada de texto -->
                  <input type="text" id="descripcion_evento" name="descripcion_evento" v-model="form.descripcion_evento"
                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                    placeholder=" " autocomplete="off" />
                  <label for="descripcion_evento"
                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Descripción
                    - Evento</label>
                </div>
                <div class="pt-4 mt-6 flex-col">
                  <label for="" class="text-sm absolute text-gray-200">Modalidad - Evento<span class="text-sm ml-1"> *
                    </span></label>
                  <select id="underline_select" v-model="form.modalidad_evento"
                    class="block mt-4 py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                    <option value="0" class="bg-gray-700 text-white"> Seleccione una opción </option>
                    <option class="bg-gray-700" value="Eclesiástica">
                      Eclesiástica</option>
                    <option class="bg-gray-700" value="Administrativa">
                      Administrativa</option>
                    <option class="bg-gray-700" value="Común">
                      Común</option>
                  </select>
                </div>
                <div class="relative z-0 mt-8">
                  <!-- Campo de entrada de texto -->
                  <input type="text" id="apellido_consultor" name="apellido_consultor" v-model="form.apellido_consultor"
                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                    placeholder=" " autocomplete="off" />
                  <label for="apelliido_consultor"
                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellido
                    - Consultor</label>
                </div>
                <div class="pt-4 mt-4 flex-col">
                  <label for="" class="text-sm absolute text-gray-200">Zona<span class="text-sm ml-1"> *
                    </span></label>
                  <select id="underline_select" v-model="form.id_zona"
                    class="block mt-4 py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                    <option value="0" class="bg-gray-700 text-white"> Seleccione una opción </option>
                    <option class="bg-gray-700" v-for="zona in zonas" :key="zona.id" :value="zona.id">
                      {{ zona.campos.nombre_zona }}</option>
                  </select>
                </div>
              </div>
              <div class="flex-col w-52">
                <div class="relative z-0">
                  <!-- Campo de entrada de texto -->
                  <input type="time" id="hora_inicial_evento" name="hora_inicial_evento"
                    v-model="form.hora_inicial_evento"
                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                    placeholder=" " autocomplete="off" />
                  <label for="hora_inicial_evento"
                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Hora
                    inicial
                    - Evento</label>
                </div>
                <div class="pt-4 flex-col mt-6">
                  <label for="" class="text-sm absolute text-gray-200">Estado - Evento<span class="text-sm ml-1"> *
                    </span></label>
                  <select id="underline_select" v-model="form.estado_evento"
                    class="block mt-4 py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                    <option value="0" class="bg-gray-700 text-white"> Seleccione una opción </option>
                    <option class="bg-gray-700" value="Programado">
                      Programado</option>
                    <option class="bg-gray-700" value="En curso">
                      En curso</option>
                    <option class="bg-gray-700" value="Finalizado">
                      Finalizado</option>
                    <option class="bg-gray-700" value="Cancelado">
                      Cancelado</option>
                  </select>
                </div>
                <div class="relative z-0 mt-8">
                  <!-- Campo de entrada de texto -->
                  <input type="text" id="telefono_consultor" name="telefono_consultor" v-model="form.telefono_consultor"
                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                    placeholder=" " autocomplete="off" />
                  <label for="telefono_consultor"
                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Teléfono
                    - Consultor</label>
                </div>
                <div class="flex-col mt-10">
                  <label for="" class="text-sm text-gray-200">Visibilidad - Evento</label>
                  <div class="flex justify-start mt-2">
                    <label class="relative inline-flex items-center mb-5 cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer" v-model="form.visibilidad_evento">
                      <div
                        class="w-9 h-5 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-end mt-14 mr-8">
              <button class="bg-space h-10 w-10 rounded-lg flex justify-center items-center" id="btnModalAdd"
                type="submit">
                <svg width="22px" height="22px" stroke-width="2" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg" color="#000000">
                  <path
                    d="M3 19V5a2 2 0 012-2h11.172a2 2 0 011.414.586l2.828 2.828A2 2 0 0121 7.828V19a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                    stroke="#23B7A0" stroke-width="2"></path>
                  <path
                    d="M8.6 9h6.8a.6.6 0 00.6-.6V3.6a.6.6 0 00-.6-.6H8.6a.6.6 0 00-.6.6v4.8a.6.6 0 00.6.6zM6 13.6V21h12v-7.4a.6.6 0 00-.6-.6H6.6a.6.6 0 00-.6.6z"
                    stroke="#23B7A0" stroke-width="2"></path>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang='css'>
h2 {
  margin: 0;
  font-size: 16px;
}

.menu-evento .active {
  border-bottom: 3px solid#1b1c30;
}

.deletebtn {
  border: 3px solid #872727;
}

ul {
  margin: 0;
  padding: 0 0 0 1.5em;
}

.modal {
  background: linear-gradient(180deg,
      rgba(63, 66, 128, 0.6241) 0%,
      rgba(49, 50, 71, 0.5609) 100%);
  background-color: #1e1e1e;
}

.modal-buttons button {
  background-color: #32345a;
}

li {
  margin: 1.5em 0;
  padding: 0;
}

b {
  /* used for event dates/times */
  margin-right: 3px;
}

.demo-app {
  display: flex;
  min-height: 100%;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 14px;
}

.demo-app-sidebar {
  width: 300px;
  line-height: 1;
  border-right: 1px solid #d3e2e8;
}

.demo-app-sidebar-section {
  padding: 2em;
}

.demo-app-main {
  flex-grow: 1;
  padding: 3em;
}

.fc {
  /* the calendar root */
  max-width: 1100px;
  margin: 0 auto;
}

.container_cards::-webkit-scrollbar {
  width: 7px;
}

.container_cards::-webkit-scrollbar-thumb {
  background: #32345A;
}
</style>


<script>
definePageMeta({
  layout: "principal"
});
import Swal from 'sweetalert2';
import axios from 'axios';
import { Modal } from 'flowbite';
import { defineComponent } from 'vue';
import FullCalendar from '@fullcalendar/vue3';
import validaciones from '../assets/validaciones.js';
import dayGridPlugin from '@fullcalendar/daygrid';
import esLocale from '@fullcalendar/core/locales/es';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const fecha_evento = ref(null);
//Metodo para mostrar las alertas
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
});
export default defineComponent({
  components: {
    FullCalendar,
  },
  data() {
    return {
      calendarOptions: {
        locale: esLocale,
        plugins: [
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin // needed for dateClick
        ],
        headerToolbar: {
          left: 'prev,next',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        initialView: 'dayGridMonth',
        events: [], // alternatively, use the `events` setting to fetch from a feed
        editable: false,
        selectable: true,
        height: 600,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
        select: this.agregarEvento,
        eventClick: this.actualizarEvento,
        eventsSet: this.handleEvents,
        /* you can update a remote database when these fire:
        eventAdd:
        eventChange:
        eventRemove:
        */
      },
      currentEvents: [],
      personal: [],
      accion: null,
      zonas: [],
      fecha_eventos: true,
      token: null,
      form: {
        id_evento: "",
        nombre_evento: "",
        descripcion_evento: "",
        fecha_evento: "",
        hora_inicial_evento: "",
        hora_final_evento: "",
        nombre_consultor: "",
        apellido_consultor: "",
        telefono_consultor: "",
        visibilidad_evento: false,
        modalidad_evento: 0,
        estado_evento: 0,
        id_personal: 0,
        id_zona: 0
      }
    }
  },
  methods: {
    async llenarEventos() {
      const EVENT = new Event('reset-timer');
      const eventos = ref(null);
      this.token = localStorage.getItem('token');
      try {
        const { data: res } = await axios.get('/eventos', {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        });
        eventos.value = res.data;
        //Se reinicia el timer
        window.dispatchEvent(EVENT);
        //Se refresca el valor del token con la respuesta del axios
        localStorage.setItem('token', res.token);
        this.token = localStorage.getItem('token');
        this.calendarOptions.events = eventos.value.map((evento) => ({
          id: evento.id,
          title: evento.campos.nombre_evento,
          start: `${evento.campos.fecha_evento}T${evento.campos.hora_inicial_evento}`,
          end: `${evento.campos.fecha_evento}T${evento.campos.hora_final_evento}`,
          display: '#5357aa',
          color: '#5357aa',
        }));
      } catch (error) {
        console.error(error);
      }
    },
    async llenarUnEvento(id) {
      try {
        const EVENT = new Event('reset-timer');
        this.token = localStorage.getItem('token');
        await axios.get("/eventos/" + id, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        }).then(res => {
          console.log(res);
          this.form = {
            id_evento: res.data.data.id,
            nombre_evento: res.data.data.campos.nombre_evento,
            descripcion_evento: res.data.data.campos.descripcion_evento,
            fecha_evento: res.data.data.campos.fecha_evento,
            hora_inicial_evento: res.data.data.campos.hora_inicial_evento,
            hora_final_evento: res.data.data.campos.hora_final_evento,
            nombre_consultor: res.data.data.campos.nombre_consultor,
            apellido_consultor: res.data.data.campos.apellido_consultor,
            telefono_consultor: res.data.data.campos.telefono_consultor,
            visibilidad_evento: res.data.data.campos.visibilidad_evento ? true : false,
            modalidad_evento: res.data.data.campos.modalidad_evento,
            estado_evento: res.data.data.campos.estado_evento,
            id_personal: res.data.data.campos.id_personal,
            id_zona: res.data.data.campos.id_zona
          }
          //document.getElementById('nombre_evento').value = res.data.data.campos.nombre_evento;
          //Se reinicia el timer
          window.dispatchEvent(EVENT);
          //Se actualiza el token con la respuesta del axios
          localStorage.setItem('token', res.data.token);
          this.token = localStorage.getItem('token');
        });
      } catch (error) {

      }
    },
    handleWeekendsToggle() {
      this.calendarOptions.weekends = !this.calendarOptions.weekends // update a property
    },
    accionForm() {
      if (this.accion == "agregar") {
        this.GuardarEvento();
      } else if (this.accion == "actualizar") {
        this.modificarEvento();
      }
    },
    agregarEvento(selectInfo) {
      const fecha_actual = new Date();
      fecha_actual.setDate(fecha_actual.getDate() - 1);
      const fecha_seleccionada = new Date(selectInfo.startStr);
      fecha_actual.setHours(0, 0, 0, 0);
      fecha_seleccionada.setHours(0, 0, 0, 0);
      console.log(fecha_actual + ", " + fecha_seleccionada);

      if (fecha_seleccionada < fecha_actual) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se permiten ingresar eventos, anteriores a la fecha actual",
          confirmButtonColor: "#3F4280",
        });
      } else {
        const modalElement = document.getElementById('staticModal');
        const closeButton = document.getElementById('closeModal');
        const tituloModal = document.getElementById('modalText');
        const modalOptions = {
          backdrop: 'static',
          backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
        };
        const modal = new Modal(modalElement, modalOptions);
        tituloModal.textContent = 'Agregar'
        this.fecha_eventos = true;
        this.accion = "agregar";
        modal.show();
        closeButton.addEventListener('click', function () {
          modal.hide();
        });
        fecha_evento.value = selectInfo.startStr;
        document.getElementById('fecha_evento').value = selectInfo.startStr;

        console.log(fecha_evento.value);
      }
    },
    async GuardarEvento() {
      try {
        const EVENT = new Event('reset-timer');
        this.token = localStorage.getItem('token');
        const FORMDATA = new FormData();
        FORMDATA.append("nombre_evento", this.form.nombre_evento);
        FORMDATA.append("descripcion_evento", this.form.descripcion_evento);
        FORMDATA.append("fecha_evento", fecha_evento.value);
        FORMDATA.append("hora_inicial_evento", this.form.hora_inicial_evento);
        FORMDATA.append("hora_final_evento", this.form.hora_final_evento);
        FORMDATA.append("nombre_consultor", this.form.nombre_consultor);
        FORMDATA.append("apellido_consultor", this.form.apellido_consultor);
        FORMDATA.append("telefono_consultor", this.form.telefono_consultor);
        FORMDATA.append("visibilidad_evento", this.form.visibilidad_evento ? 1 : 0);
        FORMDATA.append("modalidad_evento", this.form.modalidad_evento);
        FORMDATA.append("estado_evento", this.form.estado_evento);
        FORMDATA.append("id_personal", this.form.id_personal);
        FORMDATA.append("id_zona", this.form.id_zona);
        await axios.post('/eventos', FORMDATA, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        }).then(res => {
          window.dispatchEvent(EVENT);
          // //Se actualiza el token con la respuesta del axios
          localStorage.setItem('token', res.data.data.token);
          this.token = localStorage.getItem('token');
          this.llenarEventos();
        });
        document.getElementById('closeModal').click();
        Toast.fire({
          icon: 'success',
          title: 'Evento creado exitosamente'
        });
      } catch (error) {
        console.log(error);
      }
    },
    async llenarPersonal() {
      try {
        const EVENT = new Event('reset-timer');
        this.token = localStorage.getItem('token');
        const { data: res } = await axios.get('/personal', {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        });
        this.personal = res.data;
        //Se reinicia el timer
        window.dispatchEvent(EVENT);
        //Se refresca el valor del token con la respuesta del axios
        localStorage.setItem('token', res.token);
        this.token = localStorage.getItem('token');
      } catch (error) {
        console.log(error)
      }
    },
    async llenarZonas() {
      try {
        const EVENT = new Event('reset-timer');
        this.token = localStorage.getItem('token');
        const { data: res } = await axios.get('/zonas', {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        });
        this.zonas = res.data;
        //Se reinicia el timer
        window.dispatchEvent(EVENT);
        //Se refresca el valor del token con la respuesta del axios
        localStorage.setItem('token', res.token);
        this.token = localStorage.getItem('token');
      } catch (error) {
        console.log(error)
      }
    },
    async modificarEvento() {
      let id = this.form.id_evento;
      const EVENT = new Event('reset-timer');
      this.token = localStorage.getItem('token');
      try {
        const FORMDATA = new FormData();
        FORMDATA.append("nombre_evento", this.form.nombre_evento);
        FORMDATA.append("descripcion_evento", this.form.descripcion_evento);
        FORMDATA.append("fecha_evento", this.form.fecha_evento);
        FORMDATA.append("hora_inicial_evento", this.form.hora_inicial_evento);
        FORMDATA.append("hora_final_evento", this.form.hora_final_evento);
        FORMDATA.append("nombre_consultor", this.form.nombre_consultor);
        FORMDATA.append("apellido_consultor", this.form.apellido_consultor);
        FORMDATA.append("telefono_consultor", this.form.telefono_consultor);
        FORMDATA.append("visibilidad_evento", this.form.visibilidad_evento ? 1 : 0);
        FORMDATA.append("modalidad_evento", this.form.modalidad_evento);
        FORMDATA.append("estado_evento", this.form.estado_evento);
        FORMDATA.append("id_personal", this.form.id_personal);
        FORMDATA.append("id_zona", this.form.id_zona);
        await axios.post('/eventos_update/' + id, FORMDATA, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        }).then(res => {
          console.log(res.data);
          window.dispatchEvent(EVENT);
          // //Se actualiza el token con la respuesta del axios
          localStorage.setItem('token', res.data.data.token);
          this.token = localStorage.getItem('token');
          this.llenarEventos();
        });
        document.getElementById('closeModal').click();
        Toast.fire({
          icon: 'success',
          title: 'Evento modificado exitosamente'
        });
      } catch (error) {
        console.log(error);
      }
    },
    async actualizarEvento(info) {
      await this.llenarUnEvento(info.event.id);
      const fecha_actual = new Date();
      fecha_actual.setDate(fecha_actual.getDate() - 1);
      const fecha_seleccionada = new Date(this.form.fecha_evento);
      fecha_actual.setHours(0, 0, 0, 0);
      fecha_seleccionada.setHours(0, 0, 0, 0);
      if (fecha_seleccionada < fecha_actual) {
        this.fecha_eventos = true;
      } else {
        this.fecha_eventos = false;
      }
      const modalElement = document.getElementById('staticModal');
      const closeButton = document.getElementById('closeModal');
      const tituloModal = document.getElementById('modalText');
      const modalOptions = {
        backdrop: 'static',
        backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
      };
      const modal = new Modal(modalElement, modalOptions);
      tituloModal.textContent = 'Actualizar';
      this.accion = "actualizar";
      modal.show();
      closeButton.addEventListener('click', function () {
        modal.hide();
      });

    },
    async eliminarEvento(id, titulo) {
      const EVENT = new Event('reset-timer');
      this.token = localStorage.getItem('token');
      Swal.fire({
        title: 'Confirmación',
        text: "¿Desea eliminar el evento: " + titulo + "?",
        icon: 'warning',
        reverseButtons: true,
        showCancelButton: true,
        confirmButtonColor: '#3F4280',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar',
        allowOutsideClick: false,
        cancelButtonText: 'Cancelar'
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            await axios.delete("/eventos/" + id, {
              headers: {
                Authorization: `Bearer ${this.token}`,
              },
            }).then(res => {
              //Se reinicia el timer  
              window.dispatchEvent(EVENT);
              //Se actualiza el token con la respuesta del axios
              localStorage.setItem('token', res.data.data.token);
              this.token = localStorage.getItem('token');

              //Se lanza la alerta de éxito
              Toast.fire({
                icon: "success",
                title: "Evento eliminado exitosamente",
              });
              this.llenarEventos();
            })
          } catch (error) {
            console.log(error);
          }
        }
      })
    },
    async eventosOcultos() {
      document.getElementById('btneliminados').classList.add('active');
      document.getElementById('btneventos').classList.remove('active');
      const borrar = this.calendarOptions.events;
      borrar.remove();
      const EVENT = new Event('reset-timer');
      const eventos = ref(null);
      this.token = localStorage.getItem('token');
      try {
        const { data: res } = await axios.get('/eventos', {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        });
        eventos.value = res.data;
        //Se reinicia el timer
        window.dispatchEvent(EVENT);
        //Se refresca el valor del token con la respuesta del axios
        localStorage.setItem('token', res.token);
        this.token = localStorage.getItem('token');
        this.calendarOptions.events = eventos.value.map((evento) => ({
          id: evento.id,
          title: evento.campos.nombre_evento,
          start: `${evento.campos.fecha_evento}T${evento.campos.hora_inicial_evento}`,
          end: `${evento.campos.fecha_evento}T${evento.campos.hora_final_evento}`,
          display: '#5357aa',
          color: '#5357aa',
        }));
      } catch (error) {
        console.error(error);
      }
      console.log(borrar);
    },
    handleEvents(events) {
      this.currentEvents = events
      console.log(this.currentEvents);
    },
    validarNombreConsultor() {
      var res = validaciones.validarSoloLetras(this.form.nombre_consultor);
      return res;
    },
    validarNombreEvento() {
      var res = validaciones.validarSoloLetras(this.form.nombre_evento);
      return res;
    },
    validarDescripcionEvento() {
      var res = validaciones.validarSoloLetras(this.form.descripcion_evento);
      return res;
    },
    validarHoraFinal() {
      if (this.form.hora_inicial_evento < this.hora_final_evento) {
        return false;
      } else {
        return true;
      }
    },
  },
  async mounted() {
    // Llama a llenarEventos cuando el componente está montado
    await this.llenarEventos();
    await this.llenarPersonal();
    await this.llenarZonas();
  },
})

</script>