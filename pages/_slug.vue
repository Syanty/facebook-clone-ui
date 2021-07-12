<template>
  <div class="w-full mx-auto" v-if="user">
    <div class="bg-gradient-to-b from-blue-500 to-gray-100 profile_background">
      <!-- cover photo -->
      <profile-cover></profile-cover>
    </div>
    <div class="sticky mb-5 bg-gray-100 shadow-xl h-14 top-14">
      <!-- sticky tabs -->
      <profile-sticky-tabs></profile-sticky-tabs>
    </div>
    <nuxt-child />
  </div>
  <div v-else class="w-full h-full">
    <h1
      class="absolute text-sm font-bold transform -translate-x-1/2 -translate-y-1/2  sm:text-xl top-1/2 left-1/2"
    >
      Page couldn't be found....
    </h1>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  async fetch() {
    await this.$axios
      .get(`/users/find_by_slug/${this.$route.params.slug}`)
      .then((res) => {
        this.$store.commit("user/storeProfileInfo", res.data);
      });
  },
  computed: {
    ...mapGetters({ user: "user/getProfileInfo" }),
  },
};
</script>
<style scoped>
.profile_background {
  height: 550px;
}
</style>
