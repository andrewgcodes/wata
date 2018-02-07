<template>
  <v-app>
    <v-content>
      <app-header/>
      <v-container>
        <v-select
          v-bind:items="allLanguages"
          item-text="name"
          item-value="slug"
          v-model="language"
          placeholder="Select language"
          autocomplete
        ></v-select>
      </v-container>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <app-footer />
  </v-app>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import AppHeader from "../components/appHeader.vue";
import AppFooter from "../components/appFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  data: () => ({
    language: null,
  }),
  created() {
    this.language = this.routeLanguage;
  },
  methods: {
    ...mapMutations(["selectLanguage"]),
  },
  computed: {
    ...mapGetters(["allLanguages"]),
    routeLanguage() {
      return this.$route.params.slug || null;
    },
  },
  watch: {
    language(newLanguage) {
      this.selectLanguage(newLanguage);
      this.$router.push({ path: `/languages/${newLanguage}` });
    },
  },
};
</script>

<style scoped>

</style>
