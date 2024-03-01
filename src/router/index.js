import Vue from 'vue'
import VueRouter from 'vue-router'
import inicio from '../components/inicio.vue'
import form from '../components/Form.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,

  routes: [
    {
      path: '/',
      name: 'inicio',
      component: inicio
    },
    {
      path: '/form',
      name: 'form',
      component: form
    },
   
  ]
})

export default router
