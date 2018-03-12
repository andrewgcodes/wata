<template>
  <div>
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

    <v-flex xl1 lg1 md1 sm2 xs3>
      <v-icon @click="active = true" dark large>{{ emoji }}</v-icon>
    </v-flex>
  </div>
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
      type: String,
      required: true,
    },
    category: {
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
.card__actions,
.card__title,
.card__text {
  display: flex;
  justify-content: center;
  text-transform: capitalize;
}

.icon {
  cursor: pointer;
}

.selected-icon {
  font-size: 3.5em;
}

.btn {
  color: #fff;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.15) 0 7px 20px;
}

.translation {
  background-image: linear-gradient(80deg, #00aeff, #3369e7);
}

.emoji {
  background-image: linear-gradient(284deg, #1cc7d0, #2dde98);
}

.close {
  background-image: linear-gradient(112deg, #ff4f81, #ff6c5f);
}

.dialog {
  margin: 10px;
}

@media screen and (max-width: 600px) {
  .btn {
    font-size: 8px;
  }
}
</style>
