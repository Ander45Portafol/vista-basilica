import nuxtStorage from 'nuxt-storage';

export default defineNuxtRouteMiddleware((to, from) => {
    if (process.client) {
        if (!nuxtStorage.localStorage.getData('token')) {
            window.location.href = '/';
        }
    }
});