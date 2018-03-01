<template>
  <div>
  <h1>All languages</h1>
    <v-container grid-list-md>
      <v-layout row wrap>
      <v-flex 
        md3
        xs12
        v-for="{name, slug, countries = []} in allLanguages"
        v-bind:key="slug"
      >
        <nuxt-link :to="`/languages/${slug}`">
          <language
            :name="name"
            :slug="slug"
            :countries="countries"
          />
        </nuxt-link>
      </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Language from "../../components/language.vue";

export default {
  components: {
    Language,
  },
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
