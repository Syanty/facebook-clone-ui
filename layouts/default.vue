<template>
  <div class="min-h-screen">
    <div
      v-if="loading"
      class="absolute transform -translate-x-1/2 -translate-y-1/2  top-1/2 left-1/2"
    >
      <div class="flex p-5 space-x-3 rounded-full loader">
        <div class="w-4 h-4 bg-gray-800 rounded-full animate-pulse"></div>
        <div class="w-4 h-4 bg-gray-800 rounded-full animate-pulse"></div>
        <div class="w-4 h-4 bg-gray-800 rounded-full animate-pulse"></div>
      </div>
    </div>
    <div v-else-if="$nuxt.isOffline">
      <no-internet></no-internet>
    </div>
    <div v-else>
      <header-top v-if="isAuthenticated"> </header-top>
      <Nuxt />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  head() {
    return {
      bodyAttrs: {
        class: "debug-screens",
      },
    };
  },
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },

  beforeCreate() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  },
  data() {
    return {
      auth: false,
      loading: true,
    };
  },
};
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

body {
  font-family: "Open Sans" sans-serif;
  background-color: rgba(229, 231, 235);
  position: relative;
}
.loader div {
  animation-duration: 0.5s;
}

.loader div:first-child {
  animation-delay: 0.1s;
}

.loader div:nth-child(2) {
  animation-delay: 0.3s;
}

.loader div:nth-child(3) {
  animation-delay: 0.6s;
}
</style>