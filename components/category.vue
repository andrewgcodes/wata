<template>
  <v-expansion-panel>
   <v-expansion-panel-content :value="true">
    <div slot="header">{{ name }}</div>
    <v-card>
      <v-container grid-list-xl>
        <v-layout wrap>
          <word
            v-for="{ name, emoji, translations } in words"
            :key="name"
            :name="name"
            :emoji="emoji"
            :translation="getTranslation(translations)"
            >
          </word>
        </v-layout>
      </v-container>
    </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
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
.expansion-panel {
  margin-top: 0.5rem;
}

.expansion-panel__header div {
  text-transform: capitalize !important;
  font-size: 2em;
}

.card {
  margin-bottom: 1rem;
}

.layout {
  margin-left: auto !important;
  margin-right: auto !important;
}
</style>
