<template>
  <v-app>
    <v-content>
      <app-header/>
      <v-container>
          <v-select
            class="language-picker"
            :items="allLanguages"
            item-text="name"
            item-value="slug"
            v-model="language"
            placeholder="Select language"
            prepend-icon="search"
            flat
            color="info"
            autocomplete
            solo
          ></v-select>
        <browse-languages />
      </v-container>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <app-footer />
    <to-top />
  </v-app>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import AppHeader from "../components/appHeader.vue";
import AppFooter from "../components/appFooter.vue";
import ToTop from "../components/toTop.vue";
import BrowseLanguages from "../components/browseLanguages.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
    BrowseLanguages,
    ToTop,
  },
  data: () => ({
    language: "",
  }),
  created() {
    this.selectLanguage(this.routeLanguage);
    this.language = this.routeLanguage;
  },
  methods: {
    ...mapMutations(["selectLanguage"]),
  },
  computed: {
    ...mapGetters(["allLanguages"]),
    routeLanguage() {
      return this.$route.params.slug || "";
    },
  },
  watch: {
    $route(route) {
      this.language = route.params.slug || "";
    },
    language() {
      this.selectLanguage(this.language);
      if (this.language !== "") {
        this.$router.push({ path: `/languages/${this.language}` });
      }
    },
  },
};
</script>

<style scoped>
.language-picker {
  border-radius: 28px;
  color: black;
}
</style>
