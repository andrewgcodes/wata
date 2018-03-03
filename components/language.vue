<template>
  <v-card>
    <v-card-title>
      <h3>{{ name }}</h3>
    </v-card-title>
    <v-card-text>
      <p><b>{{ translatedWordCount }}</b> / <b>{{ wordCount }}</b> words translated</p>
      <v-icon
        v-for="countryFlag in countries"
        :key="countryFlag"
        small
      >
        {{ countryFlag }}
      </v-icon>
    </v-card-text>
  </v-card>
</template>

<script>
import { getWordCount, getTranslatedWordCount } from "../api";

export default {
  props: {
    slug: String,
    name: String,
    countries: Array,
  },
  computed: {
    wordCount() {
      return getWordCount(this.slug);
    },
    translatedWordCount() {
      return getTranslatedWordCount(this.slug);
    },
  }
};
</script>

<style scoped>
.card {
  min-height: 180px;
  padding: 1rem;
}

h3 {
  font-size: 1.2em;
}
</style>
