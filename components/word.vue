<template>
  <v-flex xl1 lg1 md1 sm2 xs3>
    <v-icon dark large>{{ emoji }}</v-icon>
  </v-flex>
</template>

<script>
export default {
  name: "word",
  props: {
    name: {
      type: String,
      required: true,
    },
    emoji: {
      type: String
    },
  },
};
</script>
