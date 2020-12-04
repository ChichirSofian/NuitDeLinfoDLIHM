<template>
    <div class="homePage">
        <h1>
            {{msg}}
        </h1>
        <HomeSearchBar/>
    </div>
</template>


<script>
import HomeSearchBar from '@/components/HomeSearchBar.vue'

export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  components: {
      HomeSearchBar
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
