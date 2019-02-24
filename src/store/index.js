import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    favMeals: [],
    meals: [],
    latestMeals: [],
    mealDetails:[]
  },
  mutations: {
    setFavMeals (state, meal) {
      state.favMeals.push(meal)
    },
    setMeals (state, meals) {
      state.meals = meals
    },
    setLatestMeals (state, meals) {
      state.latestMeals = meals
    },
    setMealDetais (state, meals){
      state.mealDetails = meals
    }
  },
  actions: {
    findMeals ({commit}, keyword) {
      Vue.http
        .get(`search.php?s=${keyword}`)
        .then(response => {
          commit('setMeals', response.body.meals)
        })
    },
    getLatestMeals ({commit}) {
      Vue.http
        .get(`latest.php`)
        .then(response => {
          commit('setLatestMeals', response.body.meals)
        })
    },
    getMealDetails({commit}, id){
      Vue.http
      .get(`lookup.php?i=${id}`)
      then(response =>{
        commit('setMealDetails', response.body.meals)
      })
    }
  },
  getters: {
    meals: state => state.meals,
    favMeals: state => state.favMeals,
    latestMeals: state => state.latestMeals,
    mealDetails: state => state.mealDetails
  }
})

export default store
