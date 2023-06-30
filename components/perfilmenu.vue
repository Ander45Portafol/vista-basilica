<template>
    <aside class="flex justify-center fixed top-0 left-0 z-40 w-16 h-screen">
        <div class="flex-col mt-10">
            <ul class="space-y-2 font-medium">
                <div class="h-64 flex items-start justify-center">
                    <li>
                        <NuxtLink class="flex items-center p-2 justify-center rounded-lg hover:bg-gray-700" to="/principal">
                            <svg width="28px" height="28px" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M16 12H8m0 0l3.5 3.5M8 12l3.5-3.5M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </NuxtLink>
                    </li>
                </div>
                <li class="item text-white text-base">
                    <NuxtLink to="/perfil" class="flex p-2 items-center rounded-md justify-center hover:bg-gray-700">
                        <svg width="28px" height="28px" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M7 18v-1a5 5 0 015-5v0a5 5 0 015 5v1" stroke="#FFF" stroke-width="2" stroke-linecap="round"></path><path d="M12 12a3 3 0 100-6 3 3 0 000 6z" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 3.6v16.8a.6.6 0 01-.6.6H3.6a.6.6 0 01-.6-.6V3.6a.6.6 0 01.6-.6h16.8a.6.6 0 01.6.6z" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </NuxtLink>
                </li>
                <li class="item pt-4">
                    <NuxtLink to="/pagina" class="flex items-center p-2 justify-center rounded-lg hover:bg-gray-700">
                        <svg width="28px" height="28px" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.622 10.395l-1.097-2.65L20 6l-2-2-1.735 1.483-2.707-1.113L12.935 2h-1.954l-.632 2.401-2.645 1.115L6 4 4 6l1.453 1.789-1.08 2.657L2 11v2l2.401.655L5.516 16.3 4 18l2 2 1.791-1.46 2.606 1.072L11 22h2l.604-2.387 2.651-1.098C16.697 18.831 18 20 18 20l2-2-1.484-1.75 1.098-2.652 2.386-.62V11l-2.378-.605z" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </aside>
</template>
<style scoped>
aside {
    background-color: #1b1c30;
}</style>