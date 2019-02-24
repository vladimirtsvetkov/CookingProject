<template>
    <div class="search">
        <b-input-group prepend="Enter meal">
        <b-form-input v-model="input" ></b-form-input>
        <b-input-group-append>
        <b-btn variant="info" @click="search">Search</b-btn>
        </b-input-group-append>
        </b-input-group>

        <div class="row">
          <mealList :meals="meals"></mealList>
        </div>
</div>
</template>

<script>
import MealList from '../common/MealList'

export default {
  name: 'Search',
  components: {
    mealList: MealList
  },
   data () {
      return {
        input: ''
      }
    },
  methods: {
    search () {
      this.$store.dispatch('findMeals', this.$data.input)
    }
  },
  computed: {
      meals () {
        return this.$store.getters.meals
      }
    }
}
</script>

<style>
.search{
    margin: 100px;
}
</style>
