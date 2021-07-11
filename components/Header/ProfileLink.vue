<template>
  <nuxt-link
    v-if="isAuthenticated"
    :to="`/${loggedInUser.slug}/`"
    class="items-center hidden p-2 rounded-full cursor-pointer  xl:flex hover:bg-gray-200"
  >
    <div
      class="w-6 h-6 mr-1 bg-gray-900 border-2 border-red-600 rounded-full"
    ></div>
    <span class="w-20 truncate">{{ loggedInUser.first_name }}</span>
  </nuxt-link>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },
};
</script>
<style scoped>
.nuxt-link-exact-active {
  color: rgba(59, 130, 246);
  background-color: silver;
}
</style>