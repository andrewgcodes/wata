<template>
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
</template>

<script>
export default {
  props: {},
  data: () => ({
    selectedCategories: [],
  }),
  methods: {
    isSelected(name) {
      return this.selectedCategories.includes(name);
    },
  },
};
</script>

<style>

</style>
