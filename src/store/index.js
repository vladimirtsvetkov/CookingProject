import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        mealComponent:{
            meals:[],
            currentpage: 1,
            totalItems: 1,
            selected: 'SampleMeal'
        },
        cartComponent: {
            meals:[]
        }
},


});


export default store;
