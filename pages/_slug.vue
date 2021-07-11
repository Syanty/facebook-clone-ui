<template>
  <div class="w-full mx-auto">
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
</template>
<script>
export default {
  async fetch() {
    await this.$axios
      .get(`/users/find_by_slug/${this.$route.params.slug}`)
      .then((res) => {
        this.$store.commit("user/storeProfileInfo", res.data);
      });
  },
};
</script>
<style scoped>
.profile_background {
  height: 550px;
}
</style>
