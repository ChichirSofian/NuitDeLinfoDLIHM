<template>
  <div class="home">
    <HomePage msg="oui"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomePage from '@/components/HomePage.vue'

export default {
  name: 'Home',
  components: {
    HomePage
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.home{
  width: 100%;
  background-size: cover;
  background-image: url('../assets/beach_homepage.jpg');
  height : 100vh;
}
</style>