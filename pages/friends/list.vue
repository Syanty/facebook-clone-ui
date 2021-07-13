<template>
  <friends-grid
    :users="loggedInUser.friends"
    :showUnfriendButton="true"
  ></friends-grid>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["loggedInUser"]),
  },
};
</script>