<template>
  <v-card class="text-center">
    <v-card-title>
      <p class="display-1">Sorry, this language has no tranlsated words 🙁</p>
    </v-card-title>
    <v-card-text>
      <p class="display-0">
        If you know this language you can help translate on
        <a class="primary-color" href="https://github.com/michalczmiel/wata">Github</a> ⌨️📚
      </p>
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

.card__title {
  padding-bottom: 0 !important;
  padding-top: 2rem;
}

.card__text {
  padding-top: 0 !important;
  font-size: 1.5em;
}
</style>
