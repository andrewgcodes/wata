<template>
  <v-card elevation="5">
    <v-card-media>
      <v-icon dark large>{{ icon }}</v-icon>
    </v-card-media>
    <v-card-title primary-title>
      <div>
        <h3 class="mb-0 display-1">{{ title }}</h3>
        <div>{{ description }}</div>
      </div>
    </v-card-title>
    <v-card-text />
  </v-card>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    icon: String,
  },
};
</script>


<style scoped>
.card {
  text-align: center;
}
.icon {
  margin: 1rem;
  margin-left: auto;
  margin-right: auto;
  font-size: 3.5rem;
}

.display-1 {
  font-weight: 700;
}
</style>
