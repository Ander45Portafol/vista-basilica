<template>
    <p class="font-extrabold text-slate-900 mt-8 ml-4 max-[425px]:mt-16">{{ anuncios.length }}<span
            class="text-gray-500 font-normal ml-2">registros
            encontrados!</span></p>
    <!-- Haciendo uso del v-for se evalua cada registro individualmente para poder llenar todas las cards -->
    <div class="contained-data flex-col" v-for="anuncio in anuncios" :key="anuncio.id_anuncio">
        <div class="data-contained flex justify-between mt-4 rounded-xl p-4">
            <div class="flex justify-start w-3/4 items-center max-[400px]:w-full">
                <img src="" class="h-10 w-10 rounded-lg border-2 border-gray-800 max-[400px]:hidden" />
                <div
                    class="datainfo flex-col ml-8 max-[400px]:p-0 max-[400px]:w-full max-[400px]:ml-0 max-[400px]:text-center">
                    <!--Con la implementación de una variable que permite visualizar la información contenida en cada uno-->
                    <p class="font-extrabold text-xl text-salte-900 max-[750px]:text-[18px]">{{
                        anuncio.titulo_anuncio }}</p>
                    <p class="font-normal text-sm mt-1text-gray-500 max-[750px]:text-[12px]">{{
                        anuncio.enlace_externo }}</p>
                    <p class="font-normal text-sm text-gray-500 max-[750px]:text-[12px]">{{ anuncio.fecha_anuncio }}
                    </p>
                </div>
            </div>
            <!-- Al darle clic al evento leerUnAnuncio ejecuta la funcion -->
            <div class="buttons-data flex justify-center items-center max-[750px]:flex-col max-[400px]:flex-row max-[400px]:m-auto max-[400px]:mt-2"
                v-if="anuncio.visibilidad_anuncio == 1">
                <button class="h-10 w-10 rounded-md flex items-center justify-center max-[400px]:mx-4 editbtn" id="btnedit"
                    @click="leerUnAnuncio(anuncio.id_anuncio)">

                    <svg width="26px" height="26px" stroke-width="2" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg" color="#000000">
                        <path
                            d="M3 21h18M12.222 5.828L15.05 3 20 7.95l-2.828 2.828m-4.95-4.95l-5.607 5.607a1 1 0 00-.293.707v4.536h4.536a1 1 0 00.707-.293l5.607-5.607m-4.95-4.95l4.95 4.95"
                            stroke="#C99856" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
                <!-- Al darle clic al evento borrarAnuncio ejecuta la funcion -->
                <button
                    class="h-10 w-10 rounded-md flex items-center justify-center ml-4 deletebtn max-[750px]:ml-0 max-[750px]:mt-2 max-[400px]:mt-0 max-[400px]:mx-4"
                    @click="borrarAnuncio(anuncio.id_anuncio)">
                    <svg width="26px" height="26px" viewBox="0 0 24 24" stroke-width="2" fill="none"
                        xmlns="http://www.w3.org/2000/svg" color="#000000">
                        <path
                            d="M20 9l-1.995 11.346A2 2 0 0116.035 22h-8.07a2 2 0 01-1.97-1.654L4 9M21 6h-5.625M3 6h5.625m0 0V4a2 2 0 012-2h2.75a2 2 0 012 2v2m-6.75 0h6.75"
                            stroke="#872727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
            </div>
            <!-- Al darle clic al evento recuperarUnAnuncio ejecuta la funcion -->
            <div class="buttons-data flex justify-center items-center max-[750px]:flex-col max-[400px]:flex-row max-[400px]:m-auto max-[400px]:mt-2"
                v-else>
                <button
                    class="h-10 w-10 rounded-md flex items-center justify-center ml-4 changebtn max-[750px]:ml-0 max-[750px]:mt-2 max-[400px]:mt-0 max-[400px]:mx-4"
                    @click="recuperarUnAnuncio(anuncio.id_anuncio)">
                    <svg width="24px" height="24px" stroke-width="3" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg" color="#000000">
                        <path d="M21.168 8A10.003 10.003 0 0012 2C6.815 2 2.55 5.947 2.05 11" stroke="#3F4280"
                            stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M17 8h4.4a.6.6 0 00.6-.6V3M2.881 16c1.544 3.532 5.068 6 9.168 6 5.186 0 9.45-3.947 9.951-9"
                            stroke="#3F4280" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M7.05 16h-4.4a.6.6 0 00-.6.6V21" stroke="#3F4280" stroke-width="3" stroke-linecap="round"
                            stroke-linejoin="round"></path>
                    </svg>
                </button>
            </div>
        </div>
    </div>
    <div class="flex justify-center mt-6">
        <!-- Componente de paginación utilizando Tailwind CSS -->
        <TailwindPagination :item-classes="['text-gray-500', 'rounded-full', 'border-none', 'ml-1', 'hover:bg-gray-200']"
            :active-classes="['text-white', 'rounded-full', 'bg-purpleLogin']" :limit="1" :keepLength="true" :data="data"
            @pagination-change-page="anuncio = $event" />
    </div>
</template>
<script setup>
import axios from 'axios';
import { TailwindPagination } from 'laravel-vue-pagination';
//Importación de archivo de validaciones
import validaciones from '../../assets/validaciones.js';
const data = ref(null);
let anuncios = computed(() => data.value.data);
const anuncio = ref(useRoute().query.anuncio || 1);
async function leerAnuncios() {
    try {
        /*Se manda la petición axios para leer las paginas (no se manda la ruta completa por al configuración de axios -> Para mas información vean el axiosPlugin en la carpeta plugins),
        además usando el valor de la constante values se filtra la pagina de registros que axios va a traer*/
        const { data: res } = await axios.get(`/anuncios?page=${anuncio.value}`);
        //Se asigna el valor de la respuesta de axios a la constante data
        data.value = res;
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
await leerAnuncios();
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