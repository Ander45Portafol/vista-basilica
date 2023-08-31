<template>
    <!-- Cuerpo del modal -->
    <div class="modal">
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
</template>

<script>
// Imports necesarios
import { defineComponent } from 'vue'

export default defineComponent ({
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
    }
});
</script>