<template>
  <v-app>
    <v-app-bar app clipped-right color="blue-grey" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click="exit">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title>Toolbar</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-list subheader>
        <v-subheader>Room users</v-subheader>

        <v-list-item v-for="user in users" :key="user.id" @click.prevent>
          <v-list-item-content>
            <v-list-item-title v-text="user.name"></v-list-item-title>
          </v-list-item-content>

          <v-list-item-icon>
            <v-icon :color="user.id === 2 ? 'deep-purple accent-2' : 'grey'">
              mdi-message
            </v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <div>
        <nuxt />
      </div>
    </v-content>
  </v-app>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data: () => ({
    drawer: true,
    users: [
      {
        id: 1,
        name: "ararat"
      },
      {
        id: 2,
        name: "tonoyan"
      }
    ]
  }),
  methods: {
    ...mapMutations(["clearData"]),
    exit() {
      this.$router.push("/?message=leftChat");
      this.clearData();
    }
  }
};
</script>
