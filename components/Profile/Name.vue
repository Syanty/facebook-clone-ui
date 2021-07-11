<template>
  <div class="h-full col-span-2">
    <div class="lg:h-3/5"></div>
    <div class="flex flex-col items-center justify-center lg:items-start">
      <h1 class="text-3xl font-bold truncate">
        {{ user.first_name }} {{ user.last_name }}
      </h1>
      <p class="font-medium">100 friends</p>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({ user: "user/getProfileInfo" }),
  },
};
</script>