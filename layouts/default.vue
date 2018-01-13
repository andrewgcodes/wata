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
          label="Select language"
          prepend-icon="language"
          autocomplete
        ></v-select>
        </v-container>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import AppHeader from "../components/appHeader.vue";

export default {
  components: {
    AppHeader,
  },
  data: () => ({
    language: null,
  }),
  created() {
    this.language = this.routeLanguage;
  },
  methods: {
    ...mapMutations([
      'selectLanguage',
    ]),
  },
  computed: {
    ...mapGetters([
      'allLanguages',
    ]),
    routeLanguage() {
      return this.$route.params.slug || null;
    },
  },
  watch: {
    language(newLanguage) {
      this.selectLanguage(newLanguage);
      this.$router.push({ path: `/languages/${newLanguage}` })
    }
  }
};
</script>

