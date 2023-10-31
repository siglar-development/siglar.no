import {
    createRouter,
    createWebHistory
} from 'vue-router'

const routes = [{
        path: '/',
        component: () => import('@/views/Kontakt.vue')
    },
    {
        path: '/design',
        component: () => import('@/views/Design.vue')
    },
    {
        path: '/utvikling',
        component: () => import('@/views/Utvikling.vue')
    },
    {
        path: '/okonomi',
        component: () => import('@/views/Okonomi.vue')
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {
            top: 0
        }
    }
})

export default router