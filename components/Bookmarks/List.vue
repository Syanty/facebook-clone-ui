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
    <li class="cursor-pointer">
      <nuxt-link
        to="/friends"
        class="flex items-center p-2 rounded-full cursor-pointer"
      >
        <div class="w-6 h-6 mr-1 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 text-blue-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M10.118 16.064c2.293-.529 4.428-.993 3.394-2.945-3.146-5.942-.834-9.119 2.488-9.119 3.388 0 5.644 3.299 2.488 9.119-1.065 1.964 1.149 2.427 3.394 2.945 1.986.459 2.118 1.43 2.118 3.111l-.003.825h-15.994c0-2.196-.176-3.407 2.115-3.936zm-10.116 3.936h6.001c-.028-6.542 2.995-3.697 2.995-8.901 0-2.009-1.311-3.099-2.998-3.099-2.492 0-4.226 2.383-1.866 6.839.775 1.464-.825 1.812-2.545 2.209-1.49.344-1.589 1.072-1.589 2.333l.002.619z"
            />
          </svg>
        </div>
        <span>Friends</span>
      </nuxt-link>
    </li>
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