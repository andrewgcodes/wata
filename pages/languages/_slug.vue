<template>
<div>
  <no-translations v-if="translatedWordCount === 0" />
  <div v-else>
    <v-layout row wrap class="light--text">
      <v-flex md2 sm4 xs6>
        <v-checkbox label="All categories" v-model="selectedCategories" value="all" />
      </v-flex>
      <v-flex v-for="{ name, icon } in availableCategories" :key="name" md2 sm4 xs6>
        <v-checkbox
          :label="`${icon} ${name}`"
          v-model="selectedCategories"
          :value="name"
          style="text-transform: capitalize"
        />
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <category
          v-for="{ name, words } in allCategories"
          v-if="isCategorySelected('all') || isCategorySelected(name)"
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
    selectAllCategories() {
      this.selectedCategories = ["all"];
    },
    isCategorySelected(name) {
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
      } else if (this.selectedCategories.length === 2) {
        if (this.isCategorySelected("all")) {
          this.selectedCategories = this.selectedCategories.filter(
            name => name !== "all"
          );
        }
      }
    },
  },
};
</script>
