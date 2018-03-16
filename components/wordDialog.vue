<template>
  <v-dialog v-model="active" max-width="600px">
    <v-card>
      <v-card-title>
        <v-icon class="selected-icon" icon dark large>{{ emoji }}</v-icon>
      </v-card-title>
      <v-card-text>
        <p class="display-2">{{ translation }}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn block class="translation" v-clipboard:copy="translation">Copy translation</v-btn>
        <v-btn block color="emoji" v-clipboard:copy="emoji">Copy emoji</v-btn>
        <v-btn block color="close" @click.stop="active = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "word-dialog",
  props: {
    active: {
      type: Boolean,
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
};
</script>

<style scoped>
.dialog {
  margin: 10px;
}

.card__actions,
.card__title,
.card__text {
  display: flex;
  justify-content: center;
  text-transform: capitalize;
}

.selected-icon {
  font-size: 3.5em;
}

.translation {
  background-image: linear-gradient(80deg, #00aeff, #3369e7);
}

.btn {
  color: #fff;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.15) 0 7px 20px;
}

.emoji {
  background-image: linear-gradient(284deg, #1cc7d0, #2dde98);
}

.close {
  background-image: linear-gradient(112deg, #ff4f81, #ff6c5f);
}

@media screen and (max-width: 600px) {
  .btn {
    font-size: 8px;
  }
}
</style>

