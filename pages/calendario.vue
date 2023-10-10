<template>
  <div class="principal mt-6">
    <MenuCalendarioDashboard class="mr-8" />
    <div class="mdprincipal flex-col px-8">
      <div class='demo-app'>
        <div class='demo-app-sidebar'>
          <div class='demo-app-sidebar-section'>
            <label>
              <input type='checkbox' :checked='calendarOptions.weekends' @change='handleWeekendsToggle' />
              toggle weekends
            </label>
          </div>
          <div class='demo-app-sidebar-section mt-[-20px]'>
            <h2>All Events <strong> ( {{ currentEvents.length }} ) </strong></h2>
            <ul class="ml-[-20px] text-[14px]">
              <li v-for='evento in currentEvents' :key='evento.id' class="flex items-center rounded-md bg-gray-200 p-5">
                <div class="w-[100%]">
                  <b>{{ evento.startStr }}</b>
                  <i>{{ evento.title }}</i>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class='demo-app-main h-1/3'>
          <FullCalendar class='demo-app-calendar' :options='calendarOptions'>
            <template v-slot:eventContent='arg'>
              <b>{{ arg.timeText }}</b>
              <i>{{ arg.event.title }}</i>
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
          <form class="flex-col flex-wrap" @submit.prevent="GuardarEvento">
            <div class="flex justify-evenly flex-wrap">
              <div class="flex-col w-52">
                <div class="relative z-0">
                  <input type="hidden" id="id_evento" v-model="form.id_evento">
                  <!-- Campo de entrada de texto -->
                  <input type="text" id="nombre_evento" name="nombre_evento" v-model="form.nombre_evento"
                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                    placeholder=" " autocomplete="off" />
                  <label for="nombre_evento"
                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre
                    - Evento</label>
                </div>
                <div class="relative z-0 mt-12">
                  <!-- Campo de entrada de texto -->
                  <input type="time" id="hora_final_evento" name="hora_final_evento" v-model="form.hora_final_evento"
                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                    placeholder=" " autocomplete="off" />
                  <label for="hora_final_evento"
                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Hora
                    final
                    - Evento</label>
                </div>
                <div class="relative z-0 mt-8 pt-1">
                  <input type="text" id="nombre_consultor" name="nombre_consultor" v-model="form.nombre_consultor"
                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                    placeholder=" " autocomplete="off" />
                  <label for="nombre_consultor"
                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre
                    - Consultor</label>
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
</style>


<script>
definePageMeta({
  layout: "principal"
});
import Swal from 'sweetalert2';
import axios from 'axios';
import { Modal } from 'flowbite';
import { defineComponent } from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

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
        plugins: [
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin // needed for dateClick
        ],
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        initialView: 'dayGridMonth',
        events: [], // alternatively, use the `events` setting to fetch from a feed
        editable: true,
        selectable: true,
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
      zonas: [],
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
      try {
        const EVENT = new Event('reset-timer');
        const token = ref(null);
        const eventos = ref(null);
        token.value = localStorage.getItem('token');
        const { data: res } = await axios.get('/eventos', {
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        });
        eventos.value = res.data;
        //Se reinicia el timer
        window.dispatchEvent(EVENT);
        //Se refresca el valor del token con la respuesta del axios
        localStorage.setItem('token', res.token);
        this.calendarOptions.events = eventos.value.map((evento) => ({
          id: evento.id,
          title: evento.campos.nombre_evento,
          start: `${evento.campos.fecha_evento}T${evento.campos.hora_inicial_evento}`,
          end: `${evento.campos.fecha_evento}T${evento.campos.hora_final_evento}`,
        }));
      } catch (error) {
        console.error(error);
      }
    },
    handleWeekendsToggle() {
      this.calendarOptions.weekends = !this.calendarOptions.weekends // update a property
    },
    agregarEvento(selectInfo) {
      const modalElement = document.getElementById('staticModal');
      const closeButton = document.getElementById('closeModal');
      const tituloModal = document.getElementById('modalText');
      const modalOptions = {
        backdrop: 'static',
        backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
      };
      const modal = new Modal(modalElement, modalOptions);
      tituloModal.textContent = 'Agregar'
      modal.show();
      closeButton.addEventListener('click', function () {
        modal.hide();
      });
      fecha_evento.value = selectInfo.startStr;
      console.log(fecha_evento.value);
    },
    async GuardarEvento() {
      try {
        const EVENT = new Event('reset-timer');
        const token = ref(null);
        token.value = localStorage.getItem('token');
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
            Authorization: `Bearer ${token.value}`,
          },
        }).then(res => {
          window.dispatchEvent(EVENT);
          // //Se actualiza el token con la respuesta del axios
          localStorage.setItem('token', res.data.data.token);
          token.value = localStorage.getItem('token');
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
        const token = ref(null);
        token.value = localStorage.getItem('token');
        const { data: res } = await axios.get('/personal', {
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        });
        this.personal = res.data;
        //Se reinicia el timer
        window.dispatchEvent(EVENT);
        //Se refresca el valor del token con la respuesta del axios
        localStorage.setItem('token', res.token);
      } catch (error) {
        console.log(error)
      }
    },
    async llenarZonas() {
      try {
        const EVENT = new Event('reset-timer');
        const token = ref(null);
        token.value = localStorage.getItem('token');
        const { data: res } = await axios.get('/zonas', {
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        });
        this.zonas = res.data;
        //Se reinicia el timer
        window.dispatchEvent(EVENT);
        //Se refresca el valor del token con la respuesta del axios
        localStorage.setItem('token', res.token);
      } catch (error) {
        console.log(error)
      }
    },
    actualizarEvento() {
      const modalElement = document.getElementById('staticModal');
      const closeButton = document.getElementById('closeModal');
      const tituloModal = document.getElementById('modalText');
      const modalOptions = {
        backdrop: 'static',
        backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
      };
      const modal = new Modal(modalElement, modalOptions);
      tituloModal.textContent = 'Actualizar'
      modal.show();
      closeButton.addEventListener('click', function () {
        modal.hide();
      });
    },
    handleEvents(events) {
      this.currentEvents = events
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