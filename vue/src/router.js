import VueRouter from 'vue-router'

import mainRoutes from './routes/main'

const router = new VueRouter({
    routes: [...mainRoutes],
    linkActiveClass: "active", // active class for non-exact links.
    linkExactActiveClass: "active" // active class for *exact* links.
})

export default router;