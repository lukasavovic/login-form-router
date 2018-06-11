<template>
  <div id="app" v-bind:class="{dark: dark}" class="light">
    <button @click="changeTheme">Change theme</button>
    <router-view></router-view>
  </div>
</template>

<script>
import login from './components/login.vue'
import homepage from './components/homepage.vue'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'app',
  components: {
    login,
    homepage,
  },
  data(){
    return {
      dark: false
    }
  },
  methods:{
    changeTheme(){
      if(this.dark == false) {
        this.dark = true;
        agCookie.create('theme', true, 30)
      } else {
        this.dark = false;
         agCookie.create('theme', false, 30)
      }
    }
  },
  mounted(){
      this.dark = JSON.parse( agCookie.read('theme'));
  }
}
</script>

<style lang="scss">
#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased; 
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.light {
   background: linear-gradient(-120deg, rgb(23, 209, 163), rgb(105, 187, 219));
}
.dark {
  background: rgb(0, 0, 0);
    button {
      background-color: white;
      color: black;
    }
    .wrapper {
      #app2 {
        form {
          label {
          color: white;
          }
          input {
            background-color: darkgray;
          }
        }
      }
    }
    .cardBody {
    background-color: rgb(145, 145, 145);
    width: 75%;
    img {
        width: 50%;
    }
    h1{
      color: white;
    }
    h2 {
      color: lightgray;
    }
    p {
        padding-top: 25px;
        margin: 0;
        color: white;
        font-size: 20px;
    }
  }
  nav {
      ul {
      background-color: rgb(128, 128, 128);
      height: 100px;
      display: flex;
      justify-content: start;
      align-items: center;
      border-bottom: 2px solid rgb(255, 255, 255);
      li{
        list-style-type: none;
        color: white;
        font-size: 20px;
        padding-left: 150px;
        img {
            height: 80px;
        }
        &:hover {
            text-decoration: underline;
            cursor: pointer;
        }
      }
    }
  }
}
button {
  border: 1px solid black;
  border-radius: 5px;
  color: white;
  background: black;
  }
</style>
