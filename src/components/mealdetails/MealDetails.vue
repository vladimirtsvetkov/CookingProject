<template>
<div>
  <div class="container text-center">
    <div class="row">
        <div class="col-md-8">
          <h3> {{meal.strMeal}}</h3>
          <p>{{meal.strInstructions}}</p>
          <h3> Details</h3>
        </div>
        <div class="col-md-4">
         <img v-bind:src="meal.strMealThumb" /> 
        </div>
        <iframe width="560" height="315" v-bind:src="'https://www.youtube.com/embed' +youtubeLink " frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'MealDetails',
    methods: {
        details(){
            
        },
    },
    data(){
      return {
        meal:{strMeal:''}
      }
    },
    created(){
      this.$http.get(`lookup.php?i=${this.$route.params.id}`)
                    .then(response => {
                      this.$data.meal = response.body.meals[0];
                        console.log(response.body.meals[0].idMeal);
                        
                         let youtubeLink = response.body.meals[0].strYoutube.split('?v=');
                         console.log(youtubeLink);
                        //this.$data.meals = response.body.meals;
                        //console.log(response.body.meals.idMeal);
                });
    },
    computed: {
      mealDetails(){
        return this.$store.getters.mealDetails
      }
    }
  }
</script>


<style>
 img{
   width: 100%;
   height: 100%;
 }

</style>
