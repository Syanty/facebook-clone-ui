<template>
  <ul class="w-full h-screen hover:overflow-y-auto">
    <li>
      <nuxt-link
        v-if="isAuthenticated"
        :to="`/${loggedInUser.slug}/`"
        class="flex items-center p-2 rounded-full cursor-pointer"
      >
        <div
          class="w-6 h-6 mr-1 bg-gray-900 border-2 border-red-600 rounded-full"
        ></div>
        <span>{{ loggedInUser.first_name }} {{ loggedInUser.last_name }}</span>
      </nuxt-link>
    </li>
    <li class="cursor-pointer"><nuxt-link to="/friends">Friends</nuxt-link></li>
    <li v-for="i in 20" :key="i">list item {{ i }}</li>
  </ul>
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
li {
  padding: 5px;
  border-radius: 0.375rem;
}
li:hover {
  background-color: darkgray;
}
</style>