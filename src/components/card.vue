<template>
<div>
  <div class="container cardBody" v-bind:key="car.model" v-for="car in carList">
      <h1> Brand: {{car.brand}}</h1>
      <h2> Model: {{car.model}}</h2>
      <img :src="car.img" alt="">
      <p>{{car.description}}</p>
  </div>
</div>
</template>

<script>
import navigation from './navigation'
export default {
  name: 'homepage',
  data(){
      return {
          carList: ""
      }
  },
  components: {
    navigation
  },
  mounted(){
    this.axios.get('https://api.myjson.com/bins/w31bu').then(response => this.carList = response.data);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cardBody {
    background-color: white;
    width: 75%;
    img {
        width: 50%;
    }
    p {
        padding-top: 25px;
        margin: 0;
        font-size: 20px;
    }
}
</style>

