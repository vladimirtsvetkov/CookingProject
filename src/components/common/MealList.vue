<template>
  <div class="row">
    <mealItem v-for="meal in meals"
              :meal="meal"
              class="col-md-4"
    ></mealItem>
  </div>
</template>

<script>
import MealItem from './MealItem'

export default {
  name: 'MealList',
  props: ['meals'],
  components: {
    mealItem: MealItem
  }
}
</script>
