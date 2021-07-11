<template>
  <div class="w-full p-4 mb-4 bg-white rounded-xl h-96 lg:mb-0">
    <div class="font-bold">
      <h1 class="mb-4 text-lg">Intro</h1>
      <div
        class="p-2 mb-4 text-sm text-center bg-gray-200 rounded-lg cursor-pointer  hover:bg-gray-300"
      >
        Add Bio
      </div>
      <div
        class="flex items-center mx-1 mb-3 text-sm font-normal text-gray-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5 mr-2"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 14h-7v-8h2v6h5v2z"
          /></svg
        ><span v-if="user">Joined {{ user.date_created | humanDate }}</span>
      </div>
      <div
        class="p-2 text-sm text-center bg-gray-200 rounded-lg cursor-pointer  hover:bg-gray-300"
      >
        Edit Details
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import moment from "moment";
export default {
  computed: {
    ...mapGetters({ user: "user/getProfileInfo" }),
  },
  filters: {
    humanDate(v) {
      return moment(v).format("MMMM YYYY");
    },
  },
};
</script>