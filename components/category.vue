<template>
  <v-card>
    <v-container grid-list-xl>
      <v-layout wrap>
        <word
          v-for="{ name, emoji, translations, category } in words"
          :key="name"
          :name="name"
          :category="category"
          :emoji="emoji"
          :translation="getTranslation(translations)"
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
    ...mapGetters(["getSelectedLanguage"]),
  },
  methods: {
    getTranslation(translations) {
      return Object.prototype.hasOwnProperty.call(
        translations,
        this.getSelectedLanguage
      )
        ? translations[this.getSelectedLanguage]
        : "no translation";
    },
  },
};
</script>

<style scoped>
.card {
  margin-bottom: 1rem;
  box-shadow: 0 6px 8px rgba(102, 119, 136, 0.03),
    0 1px 2px rgba(102, 119, 136, 0.3);
}
</style>
