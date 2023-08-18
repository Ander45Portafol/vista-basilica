<script>

definePageMeta({
  layout: "principal"
})

import { defineComponent } from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

let contador_eventos = 0
let diaActual = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

function crearIdEvento() {
  return String(contador_eventos++)
}

export default defineComponent({
  components: {
    FullCalendar,
  },
  data() {
    const INITIAL_EVENTS = [
      {
        id: crearIdEvento(),
        title: 'All-day event',
        start: diaActual
      },
      {
        id: crearIdEvento(),
        title: 'Timed event',
        start: diaActual + 'T12:00:00'
      }
    ]
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
        initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
        select: this.handleDateSelect,
        eventClick: this.handleEventClick,
        eventsSet: this.handleEvents
        /* you can update a remote database when these fire:
        eventAdd:
        eventChange:
        eventRemove:
        */
      },
      currentEvents: [],
    }
  },
  methods: {
    handleWeekendsToggle() {
      this.calendarOptions.weekends = !this.calendarOptions.weekends // update a property
    },
    handleDateSelect(selectInfo) {
      let title = prompt('Please enter a new title for your event')
      let calendarApi = selectInfo.view.calendar

      calendarApi.unselect() // clear date selection

      if (title) {
        calendarApi.addEvent({
          id: crearIdEvento(),
          title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay
        })
      }
    },
    handleEventClick(clickInfo) {
      if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
        clickInfo.event.remove()
      }
    },
    handleEvents(events) {
      this.currentEvents = events
    },
  }
})

const formData = ref({
  id_evento: "0",
  nombre_evento: "",
  descripcion_evento: "",
  fecha_evento: "",
  hora_inicial_evento: "",
  hora_final_evento: "",
  nombre_consultor: "",
  apellido_consultor: "",
  telefono_consultor: "",
  visibilidad_evento: "",
  modalidad_evento: "",
  estado_evento: "",
  id_personal: "",
  id_zona: "",
  id_configuracion_parroquia: 1,
});

</script>

<template>
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
          <li v-for='event in currentEvents' :key='event.id' class="flex items-center rounded-md bg-gray-200 p-5">
            <div class="w-[100%]">
              <b>{{ event.startStr }}</b>
              <i>{{ event.title }}</i>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class='demo-app-main'>
      <FullCalendar class='demo-app-calendar' :options='calendarOptions'>
        <template v-slot:eventContent='arg'>
          <b>{{ arg.timeText }}</b>
          <i>{{ arg.event.title }}</i>
        </template>
      </FullCalendar>
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
