<template>
  <div>
  <v-container
    v-for="{ letter , elements } in languagesAlphabeticallySplited"
    :key="letter"
  >
    <p class="display-1">{{ letter }}</p>
    <hr />
    <v-layout row wrap>
      <v-flex
        md3
        sm4
        xs12
        v-for="{ name, slug, countries = [] } in elements"
        :key="slug"
        @click="selectLanguage(slug)"
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
    ...mapGetters(["languagesAlphabeticallySplited"]),
  },
};
</script>

<style scoped>
.card {
  padding: 2rem;
  margin: 1rem;
}

p {
  display: inline;
  color: #04befe;
}
</style>
