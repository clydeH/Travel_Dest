<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logow.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-5" cols="14">
        <v-row justify="center">
          <v-col cols="14" sm="4">
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col class="mb-5" cols="10">
            <v-expansion-panels variant="popout" sm="4" class="my-4">
              <v-expansion-panel
                v-for="(country, index) in paginatedData"
                :key="index"
              >
                <v-expansion-panel-title>
                  <v-row class="justify-space-between align-center">
                    <div>
                      <p>{{ country.name.official }}</p>
                      <p>Region: {{ country.region }}</p>
                    </div>
                    <v-btn
                      v-if="!list?.includes(country)"
                      :loading="loading[index]"
                      :disabled="loading[index]"
                      color="secondary"
                      @click="load(index, country)"
                      size="small"
                      class="me-4"
                    >
                      add to list
                    </v-btn>
                    <v-btn
                      v-if="list?.includes(country)"
                      :loading="loading[index]"
                      :disabled="loading[index]"
                      color="red"
                      size="small"
                      class="me-4"
                    >
                      added to list
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
            <v-pagination
              v-model="pageNumber"
              :length="paginatedData.length"
              :total-visible="10"
              @input="nextPage"
            />
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
      if (this.$store.getters["countries"] != null) {
        return this.$store.getters["countries"].filter((country) =>
          country.name.official
            .toLowerCase()
            .includes(this.search.toLowerCase())
        );
      } else {
        return "";
      }
    },
    list() {
      if (this.$store.getters["list"] != []) {
        return this.$store.getters["list"];
      } else {
        return "";
      }
    },
    pageCount() {
      let l = this.countries.length,
        s = this.size;
      return Math.ceil(l / s) - 1;
    },
    paginatedData() {
      const start = this.pageNumber * this.size - this.size,
        end = start + this.size;
      return this.countries.slice(start, end);
    },
  },
  methods: {
    load(i, data) {
      this.$store.dispatch("add", data);
      this.loading[i] = true;
      setTimeout(() => (this.loading[i] = false), 3000);
    },
    nextPage(page) {
      this.pageNumber = page;
    },
  },

  data: () => ({
    search: "",
    loading: [],
    pageNumber: 1,
    size: 10,
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
