<template>
    <div>
        <p class="font-extrabold text-slate-900 mt-8 ml-4 max-[425px]:mt-16"><span
                class="text-gray-500 font-normal ml-2">registros
                encontrados!</span></p>
        <!-- Haciendo uso del v-for se evalua cada registro individualmente para poder llenar todas las cards -->
        <div class="contained-data flex-col">
            <div class="data-contained flex justify-between mt-4 rounded-xl p-4">
                <div class="flex justify-start w-3/4 items-center max-[400px]:w-full">
                    <img src="" class="h-10 w-10 rounded-lg border-2 border-gray-800 max-[400px]:hidden" />
                    <div
                        class="datainfo flex-col ml-8 max-[400px]:p-0 max-[400px]:w-full max-[400px]:ml-0 max-[400px]:text-center">
                        <!--Con la implementación de una variable que permite visualizar la información contenida en cada uno-->
                        <p class="font-extrabold text-xl text-salte-900 max-[750px]:text-[18px]"></p>
                        <p class="font-normal text-sm mt-1text-gray-500 max-[750px]:text-[12px]"></p>
                        <p class="font-normal text-sm text-gray-500 max-[750px]:text-[12px]">
                        </p>
                    </div>
                </div>
                <!-- Al darle clic al evento leerUnAnuncio ejecuta la funcion -->
                <div
                    class="buttons-data flex justify-center items-center max-[750px]:flex-col max-[400px]:flex-row max-[400px]:m-auto max-[400px]:mt-2">
                    <button class="h-10 w-10 rounded-md flex items-center justify-center max-[400px]:mx-4 editbtn"
                        id="btnedit">

                        <svg width="26px" height="26px" stroke-width="2" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg" color="#000000">
                            <path
                                d="M3 21h18M12.222 5.828L15.05 3 20 7.95l-2.828 2.828m-4.95-4.95l-5.607 5.607a1 1 0 00-.293.707v4.536h4.536a1 1 0 00.707-.293l5.607-5.607m-4.95-4.95l4.95 4.95"
                                stroke="#C99856" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </button>
                    <!-- Al darle clic al evento borrarAnuncio ejecuta la funcion -->
                    <button
                        class="h-10 w-10 rounded-md flex items-center justify-center ml-4 deletebtn max-[750px]:ml-0 max-[750px]:mt-2 max-[400px]:mt-0 max-[400px]:mx-4">
                        <svg width="26px" height="26px" viewBox="0 0 24 24" stroke-width="2" fill="none"
                            xmlns="http://www.w3.org/2000/svg" color="#000000">
                            <path
                                d="M20 9l-1.995 11.346A2 2 0 0116.035 22h-8.07a2 2 0 01-1.97-1.654L4 9M21 6h-5.625M3 6h5.625m0 0V4a2 2 0 012-2h2.75a2 2 0 012 2v2m-6.75 0h6.75"
                                stroke="#872727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </button>
                </div>
                <!-- Al darle clic al evento recuperarUnAnuncio ejecuta la funcion -->
                <div
                    class="buttons-data flex justify-center items-center max-[750px]:flex-col max-[400px]:flex-row max-[400px]:m-auto max-[400px]:mt-2">
                    <button
                        class="h-10 w-10 rounded-md flex items-center justify-center ml-4 changebtn max-[750px]:ml-0 max-[750px]:mt-2 max-[400px]:mt-0 max-[400px]:mx-4">
                        <svg width="24px" height="24px" stroke-width="3" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg" color="#000000">
                            <path d="M21.168 8A10.003 10.003 0 0012 2C6.815 2 2.55 5.947 2.05 11" stroke="#3F4280"
                                stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path
                                d="M17 8h4.4a.6.6 0 00.6-.6V3M2.881 16c1.544 3.532 5.068 6 9.168 6 5.186 0 9.45-3.947 9.951-9"
                                stroke="#3F4280" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M7.05 16h-4.4a.6.6 0 00-.6.6V21" stroke="#3F4280" stroke-width="3"
                                stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    dataAnuncio: Array,
});
console.log(props.dataAnuncio);
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