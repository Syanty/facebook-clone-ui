<template>
  <div class="w-8/12 mx-auto">
    <friends-grid
      :users="loggedInUser.friends"
      :showUnfriendButton="true"
    ></friends-grid>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["loggedInUser"]),
  },
};
</script>