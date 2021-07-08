<template>
  <div>
    <!-- authenticated stuff -->
    <div v-if="isAuthenticated">
      <home-page></home-page>
    </div>

    <!-- unauthenticated -->
    <div v-else>
      <auth-base></auth-base>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({ isAuthenticated: "localStorage/isauthenticated" }),
  },
};
</script>
