<template>
  <div>
    <div class="row">
      <mealList :meals="latestMeals"></mealList>
    </div>
  </div>
</template>

<script>
import MealList from '../common/MealList'

export default {
  name: 'Latest',
  components: {
    mealList: MealList
  },
  created () {
    this.$store.dispatch('getLatestMeals')
  },
  computed: {
    latestMeals () {
      return this.$store.getters.latestMeals
    }
  }
}
</script>
