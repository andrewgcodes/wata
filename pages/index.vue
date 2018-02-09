<template>
  <v-container grid-list-md>
  <v-layout row wrap>
    <v-flex xs12 sm4 md4 lg4>
      <feature icon="🌍" title="Easy to learn" description="Select from wide range of emojis, to look up new words or to revise already known" />
    </v-flex>
    <v-flex xs12 sm4 md4 lg4>
      <feature icon="👐" title="Open source" description="Everyone can contribute, by adding new translations, emojis or code" />
    </v-flex>
    <v-flex xs12 sm4 md4 lg4>
      <feature icon="📱" title="Multiplatform" description="Accesible from any device and works offline. No installation required" />
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
import Feature from "../components/feature.vue";

export default {
  components: {
    Feature,
  },
};
</script>
