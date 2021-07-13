<template>
  <friends-grid :users="loggedInUser.friends_requests"></friends-grid>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["loggedInUser"]),
  },
};
</script>