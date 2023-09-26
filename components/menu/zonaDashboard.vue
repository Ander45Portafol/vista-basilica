<template>
    <div class="topprincipal flex justify-between font-semibold text-base ml-4">
            <div class="options">
                <NuxtLink class="ml-4" to="/calendario">Calendario</NuxtLink>
                <NuxtLink class="active ml-4" to="/zona">Zona</NuxtLink>
                <NuxtLink class="ml-4" to="/horario">Horario</NuxtLink>
            </div>
            <div class="endtop flex justify-between w-20">
           <BotonPerfil/>
                <button type="button" data-drawer-target="drawer-right-example" data-drawer-show="drawer-right-example"
                    data-drawer-placement="right" aria-controls="drawer-right-example">
                    <svg width="24px" height="24px" stroke-width="2" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg" color="#000000">
                        <path
                            d="M18.134 11C18.715 16.375 21 18 21 18H3s3-2.133 3-9.6c0-1.697.632-3.325 1.757-4.525C8.883 2.675 10.41 2 12 2c.337 0 .672.03 1 .09M19 8a3 3 0 100-6 3 3 0 000 6zM13.73 21a1.999 1.999 0 01-3.46 0"
                            stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
            </div>
        </div>
</template>

<style scoped>

.topprincipal .active {
    color: #c99856;
    border-bottom: 3px solid #c99856;
}
</style>