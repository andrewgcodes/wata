<template>
  <div class="text-xs-center">
    <nuxt-link to="/languages">
      <v-btn round dark large>⚡️ Browse languages</v-btn>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "browse-languages",
};
</script>

<style scoped>
.btn {
  background: linear-gradient(135deg, #6253e1, #04befe) !important;
}
</style>
