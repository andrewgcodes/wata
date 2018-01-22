<template>
  <div>
    <nuxt-link to="/">
      <h1>WATA</h1>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "app-header"
}
</script>

<style scoped>
div {
  background-image: linear-gradient( 135deg, #FCCF31 10%, #F55555 100%);
  padding: 1rem;
}

h1 {
  text-align: center;
  font-size: 5rem;
  color: whitesmoke;
}

a {
  text-decoration: none;
}
</style>

