import { createRouter, createWebHashHistory } from 'vue-router'


import AcualizarPage from '../pages/AcualizarPage.vue'
import EliminarPage from '../pages/EliminarPage.vue'
import InsertarPage from '../pages/InsertarPage.vue'
import BienvenidaPage from '../pages/BienvenidaPage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'
import BloquedoPage from '../pages/BloquedoPage.vue'


const routes = [
    {
        path: '/estudiante/actualiza/:cedula',  
        component: AcualizarPage
    },
    {
        path: '/estudiante/bloqueado', 
        name: 'bloqueado', 
        component: BloquedoPage
    },
    {
        path: '/estudiante/elimina',
        component: EliminarPage
    },
    {
        path: '/estudiante/inserta/:id',
        name: 'prueba',
        component: InsertarPage
    },
    {
        //el index que me aparece la url raiz
        path: '/',
        component: BienvenidaPage
    },
    {
        path: '/:patMatch(.*)*',
        component: NotFoundPage
    }
] 

const router = createRouter({

    history: createWebHashHistory(), routes
})



//PROGRAMACION DE LOS GUARDIANES

router.beforeEach((to, from, next) => {

    //forma de controlar el guardian
    console.log('Guardianes')
    console.log(to)
    console.log(from)
    console.log(next)

    let usuario = 'henry'
    let resultado= false;

    const random= Math.random()*100

    if(random>50){
        console.log('Si tiene acceso a esa pagina');
        next();
    }else{
        console.log('Acceso denegado')
        next({name: 'bloqueado' })
    }
})

export default router