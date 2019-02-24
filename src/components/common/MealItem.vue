<template>
    <div>
      <div class="row">
        <div class="col-md-6">
          <img :src="meal.strMealThumb" class="img-fluid"/>
        </div>
        <div class="col-md-6">
          <b-card-body :title="meal.strMeal">
            <b-button @click="addToFavs" v-show="showFavBtn" variant="success">Add to favorite</b-button>
            <b-button @click="showDetails(meal.idMeal)" variant="info">Show details</b-button>
          </b-card-body>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'MealItem',
  props: ['meal'],
  methods: {
    addToFavs () {
      this.$store.commit('setFavMeals', this.meal)
    },
    showDetails(id){
      this.$router.push({ path: `/mealdetails/${id}`});
    }
  },
  computed: {
    showFavBtn () {
      return this.$store
        .getters
        .favMeals
        .filter(x => x.idMeal === this.meal.idMeal).length === 0
    }
  },
}
</script>
