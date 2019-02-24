import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/components/Search/Search'
import MealDetails from '@/components/mealdetails/MealDetails'
import BootstrapVue from 'bootstrap-vue'
import Fav from '@/components/Fav/Fav'
import Latest from '@/components/Latest/Latest'
Vue.use(BootstrapVue)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Search
    },
    {
      path: '/mealdetails/:id',
      name: 'MealDetails',
      component: MealDetails
    },
    {
      path: '/fav',
      name: 'Fav',
      component: Fav
    },
    {
      path: '/latest',
      name: 'Latest',
      component: Latest
    }
  ]
})
