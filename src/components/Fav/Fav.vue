<template>
  <div>
    <h1>Favorite Foods</h1>
    <mealList :meals="favMeals"></mealList>
  </div>
</template>

<script>
import MealList from '../common/MealList'

export default {
  name: 'Fav',
  components: {
    mealList: MealList
  },
  computed: {
    favMeals () {
      return this.$store.getters.favMeals
    }
  }
}
</script>
