<template>
  <div>
    <v-dialog v-model="active" max-width="600px">
      <v-card>
        <v-card-title>
          <span>{{ name }}</span>
          <v-spacer></v-spacer>
        </v-card-title>
        <v-card-text>
          <v-icon icon dark large>{{ emoji }}</v-icon>
        </v-card-text>
        <v-card-actions>
          <v-btn block color="primary">Copy translation</v-btn>
          <v-btn block color="success">Copy emoji</v-btn>
          <v-btn block color="error" @click.stop="active = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  <v-flex xl1 lg1 md1 sm2 xs3>
    <v-icon @click="active = true" dark large>{{ emoji }}</v-icon>
  </v-flex>
  </div>
</template>

<script>
export default {
  name: 'word',
  props: {
    name: {
      type: String,
      required: true
    },
    emoji: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    }
  },
  data: () => ({
    active: false
  }),
};
</script>

<style scoped>
.card__actions {
  display: flex;
  justify-content: center;
}

@media(max-width: 600px) {
  .btn {
    font-size: 11px;
  }
}


.icon {
  cursor: pointer;
}
</style>
