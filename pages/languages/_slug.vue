<template>
<div>
  <div v-if="translatedWordCount === 0">
    <h2>No translated words</h2>
  </div>
  <div v-else>
    <div>
      <v-chip v-for="{ name } in allCategories" :key="name" color="yellow">{{ name }}</v-chip>
    </div>
    <v-layout>
      <v-flex>
        <category
          v-for="{ name, words } in allCategories"
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

export default {
  validate ({ params: { slug } }) {
    return /^[a-zA-Z-]+$/i.test(slug);
  },
  components: {
    Category,
  },
  computed: {
    ...mapGetters([
      'allCategories',
      'translatedWordCount',
    ]),
  },
};
</script>

<style>

</style>
