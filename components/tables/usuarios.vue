<template>
    <div>
        <p class="font-extrabold text-slate-900 mt-8 ml-4 max-[425px]:mt-16">2<span
                class="text-gray-500 font-normal ml-2">registro encontrado!</span></p>
        <div class="contained-data flex-col" v-for="usuario in props.data" :key="usuario.id_usuario">
            <div
                class="data-contained flex justify-between mt-4 rounded-xl p-4 max-[400px]:flex-wrap max-[400px]:w-full min-w-[200px]">
                <div class="flex justify-start w-3/4 items-center max-[400px]:w-full">
                    <div
                        class="datainfo flex-col ml-8 max-[400px]:p-0 max-[400px]:w-full max-[400px]:ml-0 max-[400px]:text-center">
                        <p class="font-extrabold text-xl text-salte-900 max-[750px]:text-[18px]">{{
                            usuario.nombre_usuario }}</p>
                        <p class="font-normal text-sm mt-1 text-gray-500 max-[750px]:text-[12px]"> {{
                            usuario.usuario }}
                        </p>
                        <p class="font-normal text-sm text-gray-500 max-[750px]:text-[12px]">{{
                            usuario.correo_usuario }}
                        </p>
                    </div>
                </div>
                <div
                    class="buttons-data flex justify-center items-center max-[750px]:flex-col max-[400px]:flex-row max-[400px]:m-auto max-[400px]:mt-2">
                    <button class="h-10 w-10 rounded-md flex items-center justify-center max-[400px]:mx-4 editbtn"
                        id="btnedit" @click="leerUnUsuario(usuario.id_usuario)" v-if="usuario.visibilidad_usuario == 1">
                        <svg width="26px" height="26px" stroke-width="2" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg" color="#000000">
                            <path
                                d="M3 21h18M12.222 5.828L15.05 3 20 7.95l-2.828 2.828m-4.95-4.95l-5.607 5.607a1 1 0 00-.293.707v4.536h4.536a1 1 0 00.707-.293l5.607-5.607m-4.95-4.95l4.95 4.95"
                                stroke="#C99856" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            </path>
                        </svg>
                    </button>
                    <button
                        class="h-10 w-10 rounded-md flex items-center justify-center ml-4 deletebtn max-[750px]:ml-0 max-[750px]:mt-2 max-[400px]:mt-0 max-[400px]:mx-4"
                        @click="borrarPagina(usuario.id_usuario)" v-if="usuario.visibilidad_usuario == 1">
                        <svg width="26px" height="26px" viewBox="0 0 24 24" stroke-width="2" fill="none"
                            xmlns="http://www.w3.org/2000/svg" color="#000000">
                            <path
                                d="M20 9l-1.995 11.346A2 2 0 0116.035 22h-8.07a2 2 0 01-1.97-1.654L4 9M21 6h-5.625M3 6h5.625m0 0V4a2 2 0 012-2h2.75a2 2 0 012 2v2m-6.75 0h6.75"
                                stroke="#872727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            </path>
                        </svg>
                    </button>
                    <button @click="recuperarPagina(usuario.id_usuario)"
                        class="h-10 w-10 rounded-md flex items-center justify-center ml-4 changebtn max-[750px]:ml-0 max-[750px]:mt-2 max-[400px]:mt-0 max-[400px]:mx-4"
                        v-else>
                        <svg width="24px" height="24px" stroke-width="3" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg" color="#000000">
                            <path d="M21.168 8A10.003 10.003 0 0012 2C6.815 2 2.55 5.947 2.05 11" stroke="#3F4280"
                                stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path
                                d="M17 8h4.4a.6.6 0 00.6-.6V3M2.881 16c1.544 3.532 5.068 6 9.168 6 5.186 0 9.45-3.947 9.951-9"
                                stroke="#3F4280" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            </path>
                            <path d="M7.05 16h-4.4a.6.6 0 00-.6.6V21" stroke="#3F4280" stroke-width="3"
                                stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <ModalUsuarios :id_usuario="capid" :dato-user="datoUser"/>
</template>
<script setup> 
import { Modal } from 'flowbite'
import axios from 'axios';
const props=defineProps({
    data:Object,
})
let capid;
let datoUser;
//Función para traer los datos de un registro en específico, estableciendo como parámetro el id del registro 
async function leerUnUsuario(id) {
    capid=id;
    try {
        //accionForm('actualizar');
        //Se hace la petición axios y se evalua la respuesta
            await axios.get('/usuarios/' + id).then(res => {
            //Constante para el modal
            const modalElement = document.getElementById('staticModal');
            //Constante que contiene las caracteristicas del modal
            const modalOptions = {
                backdrop: 'static',
                backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
            };
            //Instanciamos el boton para cerrar el modal
            const closeButton = document.getElementById('closeModal');
            //Constante para el titulo del modal
            const modalText = document.getElementById('modalText');
            //Constante para el boton de agregar dentro del modal
            const modalBtnAdd = document.getElementById('btnModalAdd');
            //Constante para el boton de actualizar dentro del modal
            const modalBtnUpdate = document.getElementById('btnModalUpdate');
            //Instanciamos el modal
            const modal = new Modal(modalElement, modalOptions);
            //Le modificamos el texto del header al modal
            modalText.textContent = 'Editar';
            //Colocamos visibilidad al botón de actualizar en el modal
            modalBtnUpdate.classList.remove('hidden');
            //Ocultamos el botón de agregar en el modal
            modalBtnAdd.classList.add('hidden');
            //Abrimos el modal
            modal.show();
            //Creamos el evento click para cuando se cierre el modal y te cierre la instancia antes creada
            closeButton.addEventListener('click', function () {
                //Ocultamos el modal
                modal.hide();
                //Limpiamos el modal
                //limpiarForm();
            })
            // //Llenamos los inputs del modal con su respectiva informacion
            // form.value = {
            //     id_usuario: res.data.id_usuario,
            //     nombre_usuario: res.data.nombre_usuario,
            //     apellido_usuario: res.data.apellido_usuario,
            //     usuario: res.data.usuario,
            //     id_rol_usuario: res.data.id_rol_usuario,
            //     numero_documento_usuario: res.data.numero_documento_usuario,
            //     correo_usuario: res.data.correo_usuario,
            //     telefono_usuario: res.data.telefono_usuario,
            //     tipo_documento: res.data.tipo_documento,
            //     //Se convierte a true o false en caso de que devuelva 1 o 0, esto por que el input solo acepta true y false
            //     visibilidad_usuario: res.data.visibilidad_usuario ? true : false
            // }
            // console.log(form.value);
            datoUser=res;
            console.log(datoUser);
        })
    } catch (error) {
        console.log(error);
        const mensajeError = error.response.data.message;
        if (!error.response.data.errors) {
            //Se extrae el sqlstate (identificador de acciones SQL)
            const sqlState = validaciones.extraerSqlState(mensajeError);
            //Se llama la función de mensajeSqlState para mostrar un mensaje de error relacionado al sqlstate
            const res = validaciones.mensajeSqlState(sqlState);

            //Se cierra el modal
            document.getElementById('closeModal').click();

            //Se muestra un sweetalert con el mensaje
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: res,
                confirmButtonColor: '#3F4280'
            });
        } else {
            //Se muestra un sweetalert con el mensaje
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: mensajeError,
                confirmButtonColor: '#3F4280'
            });
        }
    }
}
</script>
<style>
    .data-contained {
    border: 3px solid #1b1c30;
}

.buttons-data .editbtn {
    border: 3px solid #c99856;
}

.buttons-data .deletebtn {
    border: 3px solid #872727;
}

.buttons-data .changebtn {
    border: 3px solid #3F4280;
}
</style>