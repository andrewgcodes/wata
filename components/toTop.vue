<template>
  <v-btn
    fab
    dark
    fixed
    bottom
    right
    v-scroll="onScroll"
    v-show="fab"
    v-scroll-to="'#app'"
  >
    <v-icon>keyboard_arrow_up</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "to-top",
  data: () => ({
    fab: false,
  }),
  mounted() {
    this.onScroll();
  },
  methods: {
    onScroll() {
      if (typeof window === "undefined") {
        return;
      }
      const top = window.pageYOffset || document.documentElement.offsetTop || 0;
      this.fab = top > 300;
    },
  },
};
</script>

<style scoped>
.btn {
  background: linear-gradient(135deg, #6253e1, #04befe) !important;
}
</style>
