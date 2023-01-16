<template>
  <v-app>
    <v-toolbar density="comfortable" :elevation="8" title="Travel Destination">
      <v-spacer></v-spacer>

      <router-link to="/">
        <v-btn icon color="black">
          <v-icon>mdi-view-list</v-icon>
        </v-btn>
      </router-link>

      <router-link to="/list">
        <v-btn icon color="red">
          <v-icon>mdi-heart</v-icon>
        </v-btn>
      </router-link>

      <router-link to="/extra">
        <v-btn icon color="blue">
          <v-icon>mdi-earth</v-icon>
        </v-btn>
      </router-link>
    </v-toolbar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
  methods: {
    async apiCall() {
      try {
        await this.$store.dispatch("data");
      } catch (e) {
        console.log(e);
      }
    },
  },
  beforeMount() {
    this.apiCall();
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
}
</style>
