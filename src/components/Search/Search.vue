<template>
    <div class="search">
        <b-input-group prepend="Enter meal">
        <b-form-input v-model="input" ></b-form-input>
        <b-input-group-append>
        <b-btn variant="info" @click="search">Search</b-btn>
        </b-input-group-append>
        </b-input-group>

        <div class="row">
            <div v-for="meal in meals"> 
                <div>
                    <b-card :title=meal.strMeal
                            :img-src=meal.strMealThumb
                            :id=meal.idMeal
                            img-alt="Image"
                            img-top
                            style="max-width: 20rem;"
                            class="mb-2">
                        <p class="card-text" >
                        Category: {{meal.strCategory}}
                        </br>
                        Area: {{meal.strArea}}
                        </p>
                        <b-button @click="viewMealDetails(meal.idMeal)" variant="success">Show details</b-button>
                        <b-button @click="viewMealDetails(meal.idMeal)" variant="warning">Add to favorite</b-button>
                    </b-card>
                </div>
            </div>
        </div>
</div>
</template>

<script>
export default {
    name: 'Search',
    methods: {
        search(){
            this.$http.get('search.php?s=' + this.$data.input)
                    .then(response => {
                        this.$data.meals = response.body.meals;
                        console.log(response.body.meal.idMeal);
                });
        },
        viewMealDetails(id){
          this.$router.push({ path: `/mealdetails/${id}`});
        }
    },
    data() {
        return {
            input: '',
            meals: []
        }
    }
}
</script>


<style>
.search{
    margin: 100px;
}
</style>