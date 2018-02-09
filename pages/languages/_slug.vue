<template>
<div>
  <no-translations v-if="translatedWordCount === 0" />
  <div v-else>
    <div>
      <v-btn
        :outline="!isSelected('all')"
        :color="isSelected('all') && 'yellow'"
        @click="selectAll()">all</v-btn>
      <v-btn
        v-for="{ name, icon } in availableCategories"
        :key="name" @click="selectCategory(name)"
        :outline="!isSelected(name)"
        :color="isSelected(name) && 'yellow'"
      >
        {{ icon }} {{ name }}
      </v-btn>
    </div>
    <v-layout>
      <v-flex>
        <category
          v-for="{ name, words } in allCategories"
          v-if="isSelected('all') || isSelected(name)"
          v-bind:key="name"
          :name="name"
          :words="words"
        />
      </v-flex>
    </v-layout>
  </div>
</div>
</template>

<script>
import { mapGetters } from "vuex";
import Category from "../../components/category.vue";
import NoTranslations from "../../components/noTranslations.vue";

export default {
  validate({ params: { slug } }) {
    return /^[a-zA-Z-]+$/i.test(slug);
  },
  components: {
    Category,
    NoTranslations,
  },
  data: () => ({
    selectedCategories: ["all"],
  }),
  methods: {
    selectCategory(name) {
      if (this.isSelected(name)) {
        this.selectedCategories = this.selectedCategories.filter(
          categoryName => categoryName !== name
        );
      } else {
        this.selectedCategories = this.selectedCategories.filter(
          categoryName => categoryName !== "all"
        );
        this.selectedCategories.push(name);
      }
    },
    selectAll() {
      this.selectedCategories = ["all"];
    },
    isSelected(name) {
      return this.selectedCategories.includes(name);
    },
  },
  computed: {
    ...mapGetters([
      "allCategories",
      "availableCategories",
      "translatedWordCount",
    ]),
  },
  watch: {
    selectedCategories() {
      if (this.selectedCategories.length === 0) {
        this.selectedCategories.push("all");
      }
    },
  },
};
</script>
