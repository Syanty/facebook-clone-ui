<template>
  <div
    v-if="dropdown"
    class="absolute p-4 bg-white rounded-lg shadow-lg w-96 right-4 top-12"
  >
    <nuxt-link
      :to="`/${user.slug}/`"
      class="flex items-center p-2 rounded-md cursor-pointer hover:bg-gray-300"
    >
      <div
        class="w-12 h-12 p-6 mr-2 bg-gray-900 border-2 border-red-600 rounded-full "
      ></div>
      <div>
        <p class="text-lg font-semibold">
          {{ user.first_name }} {{ user.last_name }}
        </p>
        <span class="text-sm text-gray-400">see your profile</span>
      </div>
    </nuxt-link>

    <ul class="pt-4 mt-3 border-t border-gray-400">
      <li
        class="flex items-center p-4 rounded-md cursor-pointer  hover:bg-gray-300"
        @click="logoutUser"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 mr-2"
          viewBox="0 0 24 24"
        >
          <path
            d="M16 9v-4l8 7-8 7v-4h-8v-6h8zm-16-7v20h14v-2h-12v-16h12v-2h-14z"
          />
        </svg>
        Logout
      </li>
    </ul>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  props: ["dropdown", "user"],
  methods: {
    ...mapMutations({
      logoutUser: "localStorage/removeToken",
    }),
  },
};
</script>