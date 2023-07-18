import { createRouter, createWebHistory } from 'vue-router'
import AppHome from './components/pages/AppHome.vue' 
import AppProva from './components/pages/AppProva.vue';
import ContactApp from './components/pages/ContactApp.vue'
const router = createRouter({
history: createWebHistory(),
routes: [
    { 
        path:"/home",
        name:"home",
        component: AppHome,
    },
    { 
        path:"/prova",
        name:"prova",
        component: AppProva,
    },
    { 
        path:"/contact-us",
        name:"Contact us",
        component: ContactApp,
    },]
}); 

export {router};