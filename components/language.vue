<template>
  <v-card>
    <v-card-title>
      <h3>{{ name }}</h3>
    </v-card-title>
    <v-card-text>
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
export default {
  props: {
    slug: String,
    name: String,
    countries: Array,
  },
};
</script>

<style scoped>
.card {
  min-height: 170px;
  padding: 1rem;
}
</style>
