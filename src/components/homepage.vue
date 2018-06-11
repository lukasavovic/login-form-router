<template>
<div>
  <navigation></navigation>
  <card></card>
</div>

</template>

<script>
import navigation from './navigation'
import card from './card'

export default {
  name: 'homepage',
  components: {
    navigation,
    card
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
