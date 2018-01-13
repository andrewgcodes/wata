<template>
  <div>
  <h1>All languages</h1>
  <div>
    <div v-for="{name, slug} in allLanguages">
      {{ name }}
    </div>
  </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations([
      "selectLanguage",
    ]),
  },
  computed: {
    ...mapGetters([
      "allLanguages",
    ]),
  },
}
</script>


