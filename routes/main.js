import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Principal from './principal.vue';
import Index from './index.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/principal',
            component: Principal,
            meta: { requiresAuth: true } // Esta meta indica que la ruta requiere autenticación
        },
        {
            path: '/login',
            component: Index
        },
    ]
});

// Verificar el estado de autenticación antes de cada navegación
router.beforeEach((to,next) => {
    const isAuthenticated = localStorage.getItem('token'); // Verifica si el token está presente en el almacenamiento local

    if (to.meta.requiresAuth && !isAuthenticated) {
        // Si la ruta requiere autenticación y no hay un token, redirige a la página de inicio de sesión
        next('/login');
    } else {
        next(); // Continúa con la navegación normal
    }
});

createApp(App).use(router).mount('#app');