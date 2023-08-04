export default defineNuxtRouteMiddleware((to, from) => {
    if (process.client) {
        if (!localStorage.getItem('token')) {
            window.location.href = '/';
        }
    }
});