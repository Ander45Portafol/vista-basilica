<template>
    <div class="principal mt-6">
        <div class="topprincipal flex justify-between font-semibold text-base ml-4">
            <div class="options">
                <NuxtLink to="/parroquia" class="ml-4">Enlaces Amigos</NuxtLink>
                <NuxtLink to="/misa" class="ml-4">Misas Online</NuxtLink>
                <NuxtLink class="ml-4" to="/grupos_parroquiales">Grupos</NuxtLink>
                <NuxtLink to="/configuracion_parroquia" class="active ml-4">Configuracion</NuxtLink>
            </div>
        </div>
        <div>
            <form action=""
                class="flex pt-14 justify-evenly max-[700px]:flex-col max-[700px]:items-center max-[700px]:text-2xl">
                <div class="flex-col w-80">
                    <input type="hidden" v-model="form.id_configuracion_parroquia">
                    <div class="relative z-0">
                        <input type="text" id="floating_standard"
                            class="block py-2.5 px-0 w-full text-sm text-slate-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                            placeholder=" " autocomplete="off" v-model="form.nombre_parroquia" />
                        <label for="floating_standard"
                            class="absolute text-base text-slate-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-900  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre
                            - Parroquia</label>
                    </div>
                    <div class="relative z-0 mt-12">
                        <input type="text" id="floating_standard"
                            class="block py-2.5 px-0 w-full text-sm text-slate-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                            placeholder=" " autocomplete="off" v-model="form.ruc_parroquia" />
                        <label for="floating_standard"
                            class="absolute text-base text-slate-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">RUC
                            - Parroquia</label>
                    </div>
                    <div class="relative z-0 mt-8">
                        <input type="text" id="floating_standard"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                            placeholder=" " autocomplete="off" v-model=form.direccion_parroquia />
                        <label for="floating_standard"
                            class="absolute text-base text-slate-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Direccion
                            - Parroquia</label>
                    </div>
                    <div class="relative z-0 mt-12">
                        <input type="text" id="floating_standard"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                            placeholder=" " autocomplete="off" v-model="form.nombre_representante" />
                        <label for="floating_standard"
                            class="absolute text-base text-slate-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre
                            - Rrepresentante</label>
                    </div>
                    <div class="pt-4 mt-6 flex-col">
                        <label for="" class="absolute text-slate-900">Tipo - Documento</label>
                        <select id="underline_select" v-model="form.tipo_documento_representante"
                            class="block mt-4 py-2.5 px-0 w-full text-sm text-slate-900 bg-transparent border-0 border-b-2 border-salte-900 appearance-none focus:outline-none focus:ring-0 focus:border-slate-900 peer">
                            <option value="0" class="bg-white text-slate-900"> Seleccione una opción </option>
                            <option value="Cédula">Cédula</option>
                            <option value="Pasaporte">Pasaporte</option>
                            <option value="Otro">Otro...</option>
                        </select>
                    </div>
                </div>
                <div class="flex-col w-80 max-[700px]:mt-10">
                    <div class="relative z-0">
                        <input type="text" id="floating_standard"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                            placeholder=" " autocomplete="off" v-model="form.pagina_web" />
                        <label for="floating_standard"
                            class="absolute text-base text-slate-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Pagina
                            web - Parroquia</label>
                    </div>
                    <div class="relative z-0 mt-12">
                        <input type="text" id="floating_standard"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                            placeholder=" " autocomplete="off" v-model="form.identificador_parroquia" />
                        <label for="floating_standard"
                            class="absolute text-base text-slate-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Identificador
                            - Parroquia</label>
                    </div>
                    <div class="relative z-0 mt-12">
                        <input type="text" id="floating_standard"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none  focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                            placeholder=" " autocomplete="off" v-model="form.apellido_representante" />
                        <label for="floating_standard"
                            class="absolute text-base text-slate-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellido
                            - Rrepresentante</label>
                    </div>
                    <div class="relative z-0 mt-10">
                        <input type="text" id="floating_standard"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                            placeholder=" " autocomplete="off" v-model="form.documento_representante" />
                        <label for="floating_standard"
                            class="absolute text-base text-slate-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Documento
                            - Rrepresentante</label>
                    </div>
                </div>
                <div class="flex-col h-96 max-[700px]:mt-10">
                    <div class="h-1/2">
                        <p class="mb-4 text-center">Logo Parroquia</p>
                        <img class="h-44 w-40 border-2 border-slate-900 ml-2">
                    </div>
                    <div class="flex items-end justify-between h-full mt-[-60px] w-44 ">
                        <button class="border-2 border-space h-10 w-10 flex justify-center items-center">
                            <svg width="24px" height="24px" stroke-width="2" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" color="#000000">
                                <path
                                    d="M3 19V5a2 2 0 012-2h11.172a2 2 0 011.414.586l2.828 2.828A2 2 0 0121 7.828V19a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                                    stroke="#23B7A0" stroke-width="2"></path>
                                <path
                                    d="M8.6 9h6.8a.6.6 0 00.6-.6V3.6a.6.6 0 00-.6-.6H8.6a.6.6 0 00-.6.6v4.8a.6.6 0 00.6.6zM6 13.6V21h12v-7.4a.6.6 0 00-.6-.6H6.6a.6.6 0 00-.6.6z"
                                    stroke="#23B7A0" stroke-width="2"></path>
                            </svg>
                        </button>
                        <button class="border-2 border-space w-10 h-10 flex justify-center items-center">
                            <svg width="24px" height="24px" stroke-width="2" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" color="#000000">
                                <path
                                    d="M3 21h18M12.222 5.828L15.05 3 20 7.95l-2.828 2.828m-4.95-4.95l-5.607 5.607a1 1 0 00-.293.707v4.536h4.536a1 1 0 00.707-.293l5.607-5.607m-4.95-4.95l4.95 4.95"
                                    stroke="#C99856" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                        <button class="border-2 border-space w-10 h-10 flex justify-center items-center">
                            <svg width="24px" height="24px" viewBox="0 0 24 24" stroke-width="2" fill="none"
                                xmlns="http://www.w3.org/2000/svg" color="#000000">
                                <path d="M11 21H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v7" stroke="#45A0B4"
                                    stroke-width="2" stroke-linecap="round"></path>
                                <path
                                    d="M2 7h20M5 5.01l.01-.011M8 5.01l.01-.011M11 5.01l.01-.011M21.666 16.667C21.049 15.097 19.636 14 17.99 14c-1.758 0-3.252 1.255-3.793 3"
                                    stroke="#45A0B4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path
                                    d="M19.995 16.772H21.4a.6.6 0 00.6-.6V14.55M14.334 19.333C14.953 20.903 16.366 22 18.01 22c1.758 0 3.252-1.255 3.793-3"
                                    stroke="#45A0B4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M16.005 19.228H14.6a.6.6 0 00-.6.6v1.622" stroke="#45A0B4" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>


<style scoped>
.topprincipal .active {
    color: #c99856;
    border-bottom: 3px solid #c99856;
}
</style>
<script setup>
//Importación de axios, se utiliza para hacer las peticiones al servidor -> Para mas información vean el axiosPlugin en la carpeta plugins
import axios from 'axios';
import { ref } from 'vue'
//Importación de sweetalert
import Swal from 'sweetalert2';
definePageMeta({
    layout: "principal",
})

// const menuOptions = () => {
//     const options = document.getElementsByClassName('menu');
//     if (options.length >= 3) {
//         // Se imprime un logo de 3 barras, dependiendo de la resolucion y el numero de opciones del menu
//     }
// }
//Operaciones SCRUD

/*Se establece una variable reactiva llamada data, se inicia con un valor nulo y se usará 
para almacenar la información que traiga el axios*/
const data = ref(null);

//Se crea una variable reactiva para manejar la información del modal
const form = ref({
    id_configuracion_parroquia: "",
    nombre_parroquia: "",
    pagina_web: "",
    ruc_parroquia: "",
    direccion_parroquia: "",
    nombre_representante: "",
    apellido_representante: "",
    documento_representante: "",
    tipo_documento_representante: 0,
    telefono_parroquia: "",
    identificador_parroquia: "",
})
let parroquias = computed(() => data.value.data);
/*Función para leer la información de los registros de la página actual, se hace uso de axios para llamar la ruta junto con 
?page que se usa para ver la paginación de registros, y mediante el valor de la constante de "pagina" se manda a llamar los registros especificos*/
async function leerParroquia() {
    try {
        /*Se manda la petición axios para leer las paginas (no se manda la ruta completa por al configuración de axios -> Para mas información vean el axiosPlugin en la carpeta plugins),
        además usando el valor de la constante values se filtra la pagina de registros que axios va a traer*/
        const { data: res } = await axios.get(`/parroquia`);
        //Se asigna el valor de la respuesta de axios a la constante data
        data.value = res;
        //console.log(data.value);
        console.log(data.value);
        //form.value={nombre_parroquia:res.data.nombre_parroquia,}
    } catch (error) {
        console.log(error);
    }
}
leerParroquia();
async function leerUnaParroquia(){
    var id=1;
    try {
        //Se hace la petición axios y se evalua la respuesta
        await axios.get('/parroquia/' + id).then(res => {
            console.log(res);
            //Llenamos los inputs del modal con su respectiva informacion
            form.value = {
                id_configuracion_parroquia:res.data.id_configuracion_parroquia,
                nombre_parroquia:res.data.nombre_parroquia,
                pagina_web:res.data.pagina_web,
                ruc_parroquia:res.data.ruc_parroquia,
                identificador_parroquia:res.data.identificador_parroquia,
                direccion_parroquia:res.data.direccion_parroquia,
                apellido_representante:res.data.apellido_representante,
                nombre_representante:res.data.nombre_representante,
                documento_representante:res.data.documento_representante,
                tipo_documento_representante:res.data.tipo_documento_representante
            }
            console.log(form.value);
        })
    } catch (error) {
        console.log(error);
    }
}
leerUnaParroquia();

</script>
