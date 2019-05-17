import VueRouter from 'vue-router'

import mainRoutes from './routes/main'

const router = new VueRouter({
    routes: [...mainRoutes],
})

export default router;