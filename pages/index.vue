<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8>
      <v-card class="mt-12" min-width="400px">
        <v-card-title>
          <h1>Chat title</h1>
        </v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="name"
              :counter="16"
              :rules="nameRules"
              label="Name"
              required
            ></v-text-field>

            <v-text-field
              v-model="room"
              :rules="roomRules"
              label="Write room"
              required
            ></v-text-field>

            <v-btn
              :disabled="!valid"
              color="primary"
              class="mr-4"
              @click="submit"
            >
              Enter
            </v-btn>
          </v-form>
        </v-card-text>
        <v-snackbar v-model="snackbar" :timeout="1500" top>
          {{ message }}
          <v-btn color="blue" text @click="snackbar = false">
            Close
          </v-btn>
        </v-snackbar>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  layout: "empty",
  head: {
    title: "Welcome to Nuxt chat"
  },
  data: () => ({
    valid: true,
    name: "",
    message: "",
    snackbar: false,
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 16) || "Name must be less than 16 characters"
    ],
    room: "",
    roomRules: [v => !!v || "Room is required"]
  }),
  mounted() {
    const { message } = this.$route.query;
    if (message === "noUser") {
      this.message = "Fill your values.";
    } else if (message === "leftChat") {
      this.message = "You left the chat.";
    }

    this.$router.replace({ message: null });
    this.snackbar = !!this.message;
  },
  methods: {
    ...mapMutations(["setUser"]),
    submit() {
      if (this.$refs.form.validate()) {
        const user = {
          name: this.name,
          room: this.room
        };

        this.$socket.emit("userJoined", user, data => {
          if (typeof data === "string") {
            console.error(data);
          } else {
            user.id = data.userId;
            this.setUser(user);
            this.$router.push("/chat");
          }
        });
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>
