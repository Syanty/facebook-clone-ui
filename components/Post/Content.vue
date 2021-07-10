<template>
  <div class="p-4 mb-5 bg-white rounded-md" v-if="post">
    <div class="flex items-center">
      <div
        class="w-10 h-10 p-6 mr-2 bg-gray-900 border-2 border-red-600 rounded-full "
      ></div>
      <div class="flex flex-col w-full">
        {{ post.posted_by.first_name }} {{ post.posted_by.last_name }}
        <span class="text-sm text-gray-500">{{
          post.date_posted | humanDate
        }}</span>
      </div>
    </div>
    <div class="p-2 text-justify">
      {{ post.content }}
    </div>
    <!-- :class="truncate ? 'truncate' : ''"<span
        class="float-right text-blue-500 cursor-pointer hover:underline"
        @click="truncate = !truncate"
        ><p v-if="truncate">see more...</p>
        <p v-else>see less</p></span
      > -->

    <div class="mt-2">
      <img
        src="https://images.unsplash.com/photo-1625846193454-ba89135851a9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
        alt="post_img"
        class="object-cover w-full h-80"
      />
    </div>
  </div>
</template>
<script>
import moment from "moment";
export default {
  props: ["post"],
  filters: {
    humanDate(val) {
      if (moment(new Date()).diff(moment(val), "days") > 10) {
        return moment(val).format("ddd, MMM YYYY");
      }
      return moment(val).fromNow();
    },
  },
};
</script>