<template>
  <ParticleEarth />
</template>

<script>
import { defineComponent } from "vue";

// Components
import ParticleEarth from "../components/Particles.vue";

export default defineComponent({
  name: "ListView",

  components: {
    ParticleEarth,
  },
});
</script>
