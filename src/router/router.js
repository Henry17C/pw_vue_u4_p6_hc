import { createRouter, createWebHashHistory } from 'vue-router'


import AcualizarPage from '../pages/AcualizarPage.vue'
import EliminarPage from '../pages/EliminarPage.vue'
import InsertarPage from '../pages/InsertarPage.vue'
import BienvenidaPage from '../pages/BienvenidaPage.vue'


const routes = [

    {
        path: '/estudiante/actualiza',
        component: AcualizarPage
    },
    {
        path: '/estudiante/elimina',
        component: EliminarPage
    },
    {
        path: '/estudiante/inserta',
        component: InsertarPage
    },
    {
        //el index que me aparece la url raiz
        path: '/',
        component: BienvenidaPage
    }
] 

const router = createRouter({

    history: createWebHashHistory(), routes
})

export default router