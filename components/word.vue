<template>
  <div>
    <word-dialog :emoji="emoji" :translation="translation" :active="active" />
    <v-flex xl1 lg1 md1 sm2 xs3>
      <v-icon @click="active = true" dark large>{{ emoji }}</v-icon>
    </v-flex>
  </div>
</template>

<script>
import WordDialog from "../components/wordDialog.vue";

export default {
  name: "word",
  components: {
    WordDialog,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    emoji: {
      type: String,
      required: true,
    },
    translation: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    active: false,
  }),
};
</script>

<style scoped>
.icon {
  cursor: pointer;
}
</style>
