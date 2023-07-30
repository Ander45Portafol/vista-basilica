<template>

</template>
<script setup>
import axios from 'axios';
import validaciones from '../../assets/validaciones.js';
import leerUsuarios from '~/pages/usuario.vue';
import Swal from 'sweetalert2';
const props = defineProps({
    estado_modal: Boolean,
    dataUser:Object,
});
const estado=ref(null);
const ObjectUser=ref(null);
onUpdated(() => {
estado.value=props.estado_modal;
ObjectUser.value=props.dataUser;
if (props.estado_modal) {
    document.getElementById('btnModalAdd').classList.add('hidden');
    document.getElementById('btnModalUpdate').classList.remove('hidden');
} else {
    document.getElementById('btnModalAdd').classList.remove('hidden');
    document.getElementById('btnModalUpdate').classList.add('hidden');
}
})
async function actualizarUsuario() {
    try {
        //Se establece una variable de id con el valor que tiene guardado la variable form
        console.log(props.id_usuario);
        //Se crea una constante para guardar el valor actual que tienen todos los campos del form
        const formData = {
            nombre_usuario: form.value.nombre_usuario,
            apellido_usuario: form.value.apellido_usuario,
            usuario: form.value.usuario,
            numero_documento_usuario: form.value.numero_documento_usuario,
            tipo_documento: form.value.tipo_documento,
            correo_usuario: form.value.correo_usuario,
            telefono_usuario: form.value.telefono_usuario,
            tema: form.value.tema,
            idioma: form.value.idioma,
            visibilidad_usuario: form.value.visibilidad_usuario,
            id_rol_usuario: form.value.id_rol_usuario,
        };

        //Se realiza la petición axios mandando la ruta y el formData
        await axios.put("/usuarios/" + props.id_usuario, formData);

        //Se cargan todas las páginas y se cierra el modal
        document.getElementById('closeModal').click();

        //Se lanza la alerta de éxito
        Toast.fire({
            icon: 'success',
            title: 'Usuario actualizado exitosamente'
        })

    } catch (error) {
        console.log(error);
    }
}
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
</script>