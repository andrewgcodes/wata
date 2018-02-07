<template>
  <div>
  <h1>All languages</h1>
  <v-list style="background: inherit">
    <v-card v-for="{name, slug, countries = []} in allLanguages" v-bind:key="slug">
    <v-list-tile-content>
      <v-list-tile-title>{{ name }}</v-list-tile-title>
      <v-list-tile-sub-title>
        <template v-for="countryFlag in countries">
          {{ countryFlag }}
        </template>
      </v-list-tile-sub-title>
    </v-list-tile-content>
    </v-card>
  </v-list>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["selectLanguage"]),
  },
  computed: {
    ...mapGetters(["allLanguages"]),
  },
};
</script>

<style scoped>
.card {
  padding: 2rem;
  margin: 1rem;
}
</style>
