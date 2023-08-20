<template>
    <div id="sectionPage" v-for="contacto in dataContacto" :key="contacto.id">
        <div class="contained-data flex-col">
            <div
                class="data-contained flex justify-between mt-4 rounded-xl p-4 max-[400px]:flex-wrap max-[400px]:w-full min-w-[200px]">
                <div class="flex justify-start w-3/4 items-center max-[400px]:w-full">
                    <div
                        class="datainfo flex-col ml-8 max-[400px]:p-0 max-[400px]:w-full max-[400px]:ml-0 max-[400px]:text-center">
                        <!--Con la implementación de una variable que permite visualizar la información contenida en cada uno-->
                        <p class="font-extrabold text-xl text-salte-900 max-[750px]:text-[18px]"> {{
                            contacto.campos.nombre_contacto }} </p>
                        <p class="font-normal text-sm text-gray-500 max-[750px]:text-[12px]"> {{
                            contacto.campos.correo_contacto }}</p>
                    </div>
                </div>
                <!-- Al darle clic al evento leerUnContacto ejecuta la funcion -->
                <div
                    class="buttons-data flex justify-center items-center max-[750px]:flex-col max-[400px]:flex-row max-[400px]:m-auto max-[400px]:mt-2">
                    <button @click="leerUnContacto(contacto.id)" v-if="contacto.campos.visibilidad_contacto == 1"
                        class="h-10 w-10 rounded-md flex items-center justify-center editbtn max-[400px]:mx-4">
                        <svg width="26px" height="26px" stroke-width="2" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg" color="#000000">
                            <path
                                d="M3 21h18M12.222 5.828L15.05 3 20 7.95l-2.828 2.828m-4.95-4.95l-5.607 5.607a1 1 0 00-.293.707v4.536h4.536a1 1 0 00.707-.293l5.607-5.607m-4.95-4.95l4.95 4.95"
                                stroke="#C99856" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            </path>
                        </svg>
                    </button>
                    <!-- Al darle clic al evento borrarContacto ejecuta la funcion -->
                    <button @click="borrarContacto(contacto.id)" v-if="contacto.campos.visibilidad_contacto == 1"
                        class="h-10 w-10 rounded-md flex items-center justify-center ml-4 deletebtn max-[750px]:ml-0 max-[750px]:mt-2 max-[400px]:mt-0 max-[400px]:mx-4">
                        <svg width="26px" height="26px" viewBox="0 0 24 24" stroke-width="2" fill="none"
                            xmlns="http://www.w3.org/2000/svg" color="#000000">
                            <path
                                d="M20 9l-1.995 11.346A2 2 0 0116.035 22h-8.07a2 2 0 01-1.97-1.654L4 9M21 6h-5.625M3 6h5.625m0 0V4a2 2 0 012-2h2.75a2 2 0 012 2v2m-6.75 0h6.75"
                                stroke="#872727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            </path>
                        </svg>
                    </button>
                    <!-- Al darle clic al evento recuperarContacto ejecuta la funcion -->
                    <button @click="recuperarUnContacto(contacto.id)"
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
        </div> <!--contained data -->
    </div>
</template>
<script setup>
const props = defineProps({
    dataContacto: Array,
});
console.log(props.dataContacto);
</script>
<style scoped></style>