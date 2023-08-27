//Importaciones
import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";

//Se configura el plugin para permitir la libreria
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueAwesomePaginate);
})
