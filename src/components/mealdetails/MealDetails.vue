<template>
<div>
  <b-card
    title="Card Title"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>

    <b-btn variant="info" @click="details">details</b-btn>
  </b-card>
</div>
</template>

<script>
export default {
    name: 'Details',
    methods: {
        details(){
            this.$http.get('search.php?i=' + this.$data.input)
                    .then(response => {
                        this.$data.meals = response.body.meals;
                        console.log(response.body.meal.idMeal);
                });
        },
    }
  }
</script>


<style>

</style>
