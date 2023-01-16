<template>
  <ListCountries />
</template>

<script>
import { defineComponent } from "vue";

// Components
import ListCountries from "../components/ListCountries.vue";

export default defineComponent({
  name: "HomeView",

  components: {
    ListCountries,
  },
});
</script>
