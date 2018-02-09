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
        <div class="text-xs-center">
          <nuxt-link to="/languages">
            <v-btn round dark large>⚡️ Browse languages</v-btn>
          </nuxt-link>
        </div>
      </v-container>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <app-footer />
    <v-btn
      fab
      dark
      fixed
      bottom
      right
      color="red"
      v-scroll="onScroll"
      v-show="fab"
      v-scroll-to="'#app'"
    >
      <v-icon>keyboard_arrow_up</v-icon>
    </v-btn>
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
    fab: false,
  }),
  created() {
    this.language = this.routeLanguage;
  },
  mounted() {
    this.onScroll();
  },
  methods: {
    ...mapMutations(["selectLanguage"]),
    onScroll() {
      if (typeof window === "undefined") {
        return;
      }
      const top = window.pageYOffset || document.documentElement.offsetTop || 0;
      this.fab = top > 300;
    },
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
a {
  text-decoration: none !important;
}

.btn {
  background: linear-gradient(135deg, #6253e1, #04befe) !important;
}
</style>
