<template>
  <v-card>
    <v-card-title>
      <h1>Sorry, this language has no tranlsated words 🙁</h1>
    </v-card-title>
    <v-card-text>
      <h2>
        If you know this language you can help translate on
        <a href="https://github.com/michalczmiel/wata">Github</a> ⌨️📚
      </h2>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "no-translation",
};
</script>

<style scoped>
.card__actions,
.card__title,
.card__text {
  display: flex;
  justify-content: center;
}
</style>
