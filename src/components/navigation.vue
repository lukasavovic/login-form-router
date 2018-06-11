<template>
  <nav>
      <ul class="container-fluid">
          <li><img src="../assets/logo.png" alt=""></li>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
      </ul>
  </nav>
</template>

<script>
export default {
  name: 'navigacija',
  props: {
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
  ul {
      background-color: white;
      height: 100px;
      display: flex;
      justify-content: start;
      align-items: center;
      border-bottom: 2px solid gray;
      li{
        list-style-type: none;
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
</style>
