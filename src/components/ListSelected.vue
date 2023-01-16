<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-5" cols="14">
        <v-row justify="center">
          <v-col cols="14" sm="4">
            <h1>List of countries selected</h1>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col class="mb-5" cols="10">
            <v-expansion-panels variant="popout" sm="4" class="my-4">
              <v-expansion-panel
                v-for="(country, index) in countries"
                :key="index"
              >
                <v-expansion-panel-title>
                  <v-row class="justify-space-between align-center">
                    <div>
                      <p>{{ country.name.official }}</p>
                      <p>Region: {{ country.region }}</p>
                    </div>
                    <v-btn
                      v-if="!selected.includes(index)"
                      :loading="loading[index]"
                      :disabled="loading[index]"
                      color="red"
                      variant="outlined"
                      @click="load(index)"
                      size="small"
                      class="me-4"
                    >
                      Delete
                    </v-btn>
                  </v-row>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <v-row class="justify-space-between align-center">
                    <p>Region: {{ country.region }}</p>
                    <p>subregion: {{ country.subregion }}</p>
                    <v-col cols="4">
                      <v-img
                        :src="country.flags.png"
                        class="my-3"
                        contain
                        height="200"
                      />
                    </v-col>
                    <p>LatLong: {{ country.latlng }}</p>
                  </v-row>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ListCountries",
  computed: {
    countries() {
      if (this.$store.getters["list"] != null) {
        return this.$store.getters["list"];
      } else {
        return "";
      }
    },
  },
  methods: {
    load(i) {
      this.loading[i] = true;
      setTimeout(
        () => (
          (this.loading[i] = false), this.$store.getters["list"].splice(i, 1)
        ),
        3000
      );
    },
  },

  data: () => ({
    search: "",
    loading: [],
    selected: [],
  }),
};
</script>

<style scoped>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
