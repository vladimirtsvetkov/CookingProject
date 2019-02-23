import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/components/Search/Search'
import MealDetails from '@/components/mealdetails/MealDetails'
import BootstrapVue from 'bootstrap-vue'
import Footer from '@/components/Footer/Footer'
Vue.use(BootstrapVue)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Search,
      footer: Footer,
    },
    {
      path:'/mealdetails/:id',
      name: 'MealDetails',
      component: MealDetails,
      footer: Footer,
    },
  ],
})
