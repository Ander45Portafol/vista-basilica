<template>
    <!-- Cuerpo del modal -->
    <div id="staticModal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
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
        <div class="p-6 space-y-6 pb-10">
            <form action="">
                <div class="relative z-0">
                    <input type="text" name="nombre_evento" class="">
                    <label for="nombre_evento" class="">Nombre - Evento</label>
                </div>
                <div class="relative z-0">
                    <input type="text" name="descripcion_evento" class="">
                    <label for="descripcion_evento">Descripcion - Evento</label>
                </div>
                <div class="relative z-0">
                    <input type="checkbox" name="habilitar_consultor" class="">
                    <label for="habilitar_consultor">Habilitar Consultor:</label>
                </div>
                <!-- Opcion de habilitar datos del consultor -->
                <div>
                    <div class="relative z-0">
                        <input type="text" name="nombre_consultor" class="">
                        <label for="nombre_consultor" class="">Nombre - Consultor</label>
                    </div>
                    <div class="relative z-0">
                        <input type="text" name="apellido_consultor" class="">
                        <label for="apellido_consultor" class="">Apellido - Consultor</label>
                    </div>
                    <div class="relative z-0">
                        <input type="number" name="telefono_consultor" class="">
                        <label for="telefono_consultor" class="">Teléfono - Consultor</label>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
// Imports necesarios
import { defineComponent } from 'vue'

export default defineComponent({
    name: "ModalEvento",
    setup() {
        // Establecer los campos
        const form = ({
            id_evento: "",
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

        return {
            form
        }
    }
});
</script>