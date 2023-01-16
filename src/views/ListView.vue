<template>
  <ListSelected />
</template>

<script>
import { defineComponent } from "vue";

// Components
import ListSelected from "../components/ListSelected.vue";

export default defineComponent({
  name: "ListView",

  components: {
    ListSelected,
  },
});
</script>
