<template>
  <div>
    <!-- authenticated stuff -->
    <div v-if="isAuthenticated">
      <home-base></home-base>
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
    ...mapGetters(["isAuthenticated"]),
  },
};
</script>
