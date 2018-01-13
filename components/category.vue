<template>
  <v-card>
    <v-container grid-list-xl>
        <v-layout wrap>
          <word
            v-for="{ name, emoji, translations, category } in words"
            v-bind:key="name"
            :name="name"
            :category="category"
            :emoji="emoji"
            :translations="translations"
          >
          </word>
        </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
import Word from "../components/word.vue";

export default {
  name: "category",
  components: {
    Word,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    words: {
      type: Array,
      required: true,
    },
  },
  computed: {
    ...mapGetters([
      'getSelectedLanguage',
    ]),
  },
};
</script>

<style scoped>
  .card {
    margin-bottom: 1rem;
  }
</style>


