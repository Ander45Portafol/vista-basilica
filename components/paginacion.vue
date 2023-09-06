<script setup>
//Importaciones de vue
import { ref, watchEffect } from 'vue';

//Se definen las props
const props = defineProps({
    //Prop para llevar el control de la paginación y además poder cambiar el número de página desde el componente padre
    pagina_actual: Number,
    //Prop para saber los elementos totales a paginar
    items_totales: Number
});

//Se definen los emits (eventos para comunicar componentes)
const emits = defineEmits(["cambioDePagina"]);

//Consante ref para llevar el manejo de la paginación
const pagina_actual = ref(props.pagina_actual);

//Función watch que se activa cada que la prop de pagina actual cambia (esto se activa cada que desde el componente padre se cambia la prop)
watchEffect(() => {
    //Se actualiza el valor de la constante ref
    pagina_actual.value = props.pagina_actual;
});

//Función para alertar al componente padre de que hubo un cambio en el número de página
function eventoCambioDePagina(pagina) {
    pagina_actual.value = pagina;
    emits('cambioDePagina', parseInt(pagina));
}

</script>

<template>
    <!--
        Componente para la paginación:
        -total-items: El total de elementos a paginar
        -items-per-page: Establece el número de elementos por página
        -max-pages-shown: Establece el número máximo de páginas a mostrar al lado de la página actual (se coloca 1 para que en total hayan 3 páginas)
        -showBreakpointButtons: Activa los breaking points, que son cuando el número de páginas sobrepasa a la cantidad de max-pages-shown, así que se muestra ...
        -startingBreakpointContent / endingBreakpointButtonContent: Establece el texto que se va a mostrar en los breaking points (muestra el número de página que sigue mas ...)
        -firstPageContent: Establece el texto que se va a mostrar en el botón para ir a la primera página (<<)
        -lastPageContent: Establece el texto que se va a mostrar en el botón para ir a la última página (>>)

    -->
    <vue-awesome-paginate :total-items="props.items_totales" :items-per-page="1" :max-pages-shown="3"
        v-model="pagina_actual" :on-click="eventoCambioDePagina" :showEndingButtons="Boolean(1)" :hidePrevNext="Boolean(1)"
        :showBreakpointButtons="Boolean(0)" firstPageContent="<<" lastPageContent=">>"/>
</template>
<style>
.pagination-container {
    display: flex;
    column-gap: 10px;
}

.paginate-buttons {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    cursor: pointer;
    background-color: rgb(242, 242, 242);
    color: rgb(107 114 128);
}

.paginate-buttons:hover {
    background-color: #d8d8d8;
}

.active-page {
    background-color: #5357aa;
    color: white;
}

.active-page:hover {
    background-color: #3F4280;
}
</style>