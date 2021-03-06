import Vue from 'vue'
import VueRouter from 'vue-router'
import Calendar from '@/components/Calendar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'django-calender',
    components: {
      default: Calendar,
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
