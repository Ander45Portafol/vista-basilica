<template>
    <!-- Modal Graficas-->
    <div id="graficsModal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-5xl max-h-full">
            <!--Encabezado del modal -->
            <div class="relative rounded-lg shadow modal">
                <!-- Asignamos un id al título del modal para la creación  y actualizacion de texto-->
                <div class="flex items-start justify-between p-4 rounded-t">
                    <div class="flex-col ml-4 pt-4">
                        <p class="text-3xl font-bold text-gray-100" id="modal_text">Graficar</p>
                        <p class="text-lg font-medium text-gray-400">Donaciones por rangos de fechas</p>
                    </div>
                    <!-- Boton para cerrar el modal -->
                    <button type="button" id="closeModalGrafics"
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
                <div class="p-8 space-y-6 flex-col">
                    <div class="flex justify-between items-center">
                        <p class="text-gray-100">Ingrese una fecha inicial y una fecha final para enviar como parametro de
                            graficacion. </p>
                        <div class="flex">
                            <div class="flex text-white">
                                <input type="checkbox" id="rango_fecha" checked @click="cambiandoGraficaRango">
                                <label for="" class="mr-4 ml-2">Rangos de fecha</label>
                            </div>
                            <div class="flex text-white">
                                <input type="checkbox" id="anio" @click="cambiandoGraficaAnio">
                                <label for="" class="mr-4 ml-2">Año</label>
                            </div>
                        </div>
                    </div>
                    <div class="h-80 contenedor_graficas w-full image-container grid grid-cols-5 gap-5 py-5 px-5">
                    </div>
                    <div class="flex justify-between items-center mt-6">
                        <div class="flex">
                            <div class="relative z-0 w-64" id="input_fechai">
                                <input type="text" id="fecha_inicial" name="fecha_inicial" required readonly maxlength="100"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" />
                                <label for="fecha_inicial"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Fecha
                                    inicial</label>
                            </div>
                            <div class="relative z-0 w-64 ml-14" id="input_fechaf">
                                <input type="text" id="fecha_final" name="fecha_final" required readonly maxlength="100"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" />
                                <label for="fecha_final"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Fecha
                                    final</label>
                            </div>
                            <div class="relative z-0 w-64 ml-14" id="input_anio">
                                <input type="text" id="anio_input" name="anio" required readonly maxlength="100"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 peer focus:border-moradoClaroLogin peer"
                                    placeholder=" " autocomplete="off" />
                                <label for="anio_input"
                                    class="absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Año
                                </label>
                            </div>
                        </div>
                        <button class="w-32 h-10 bg-space text-white mt-4 rounded-lg">
                            Guardar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.contenedor_graficas {
    border: 3px solid #FFF;
}
</style>
<script setup>
onMounted(() => {
    function validarCheck() {
        const checkrango = document.getElementById('rango_fecha');
        if (checkrango.checked) {
            document.getElementById('input_anio').classList.add('hidden');
            document.getElementById('input_fechai').classList.remove('hidden');
            document.getElementById('input_fechaf').classList.remove('hidden');
        }
    }
    validarCheck();
});
function cambiandoGraficaAnio() {
    const checkanio = document.getElementById('anio');
    if (checkanio.checked) {
        document.getElementById('input_anio').classList.remove('hidden');
        document.getElementById('input_fechai').classList.add('hidden');
        document.getElementById('input_fechaf').classList.add('hidden');
        document.getElementById('rango_fecha').checked = false;
    }
}
function cambiandoGraficaRango() {
    const checkrango = document.getElementById('rango_fecha');
    if (checkrango.checked) {
        document.getElementById('input_anio').classList.add('hidden');
        document.getElementById('input_fechai').classList.remove('hidden');
        document.getElementById('input_fechaf').classList.remove('hidden');
        document.getElementById('anio').checked = false;
    }
}
</script>