<template>
  <v-card>
    <v-card-media>
      <v-icon dark large>{{ icon }}</v-icon>
    </v-card-media>
    <v-card-title primary-title>
      <h3 class="display-1">{{ title }}</h3>
    </v-card-title>
    <v-card-text>
      {{ description }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    icon: String,
  },
};
</script>

<style scoped>
.card {
  text-align: center !important;
  border: none !important;
  background: inherit !important;
  box-shadow: none !important;
}

.icon {
  margin: 1rem;
  margin-left: auto;
  margin-right: auto;
  font-size: 3.5rem;
}

.display-1 {
  margin-left: auto;
  margin-right: auto;
}

.card__text {
  font-size: 1.1em;
  padding-top: 0 !important;
}
</style>
