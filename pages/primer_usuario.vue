<template>
    <div class="flex ml-16 h-full w-full">
        <div class="w-3/4 flex-col mt-20">
            <div class="flex-col">
            </div>
        </div>
        <div class="h-full flex justify-center items-center w-1/6">
            <div class="botones w-1/5 h-3/5 ml-10 flex items-center">
                <div class="flex-col ml-2">
                    <NuxtLink to="primer_uso"
                        class="h-14 w-64 bg-darkSpace text-white rounded-md text-lg font-semibold flex justify-center items-center">
                        Continuar
                        <svg width="30px" height="30px" stroke-width="2.5" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg" color="#000000">
                            <path d="M9 6l6 6-6 6" stroke="#FFF" stroke-width="2.5" stroke-linecap="round"
                                stroke-linejoin="round">
                            </path>
                        </svg>
                    </NuxtLink>
                    <NuxtLink to="primer__parroquia"
                        class="bg-transparent h-14 w-64 text-white rounded-lg mt-8 text-lg font-semibold flex justify-center items-center">
                        Volver</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.botones {
    border-left: 1px solid #818181;
}
</style>
<script setup>
definePageMeta({
    layout: "primer",
});
</script>
