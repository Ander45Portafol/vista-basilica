export default defineNuxtRouteMiddleware((to, from) => {
    if(to.path == '/cambio_contra' && from.path == '/cambio_contra'){
        if(!to.fullPath.includes('?token')){
            return navigateTo('/');
        }
    }else{
        return navigateTo('/');
    }
});