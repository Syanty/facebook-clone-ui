<template>
  <div
    class="fixed top-0 z-40 flex items-center w-full bg-white shadow-xl h-14"
  >
    <div class="flex items-center w-1/3 h-full">
      <div class="flex items-center w-full pl-3">
        <nuxt-link to="/" class="logo">
          <header-logo />
        </nuxt-link>
        <div
          class="flex items-center justify-center ml-2 bg-gray-200 rounded-full  lg:hidden h-9 w-9"
        >
          <div class="cursor-pointer" @click="searchModal = true">
            <icon-search></icon-search>
          </div>
        </div>
        <modal-search
          :searchModal="showModal"
          @closeModal="search"
        ></modal-search>
        <div @click="searchModal = true">
          <input-search />
        </div>
      </div>
      <div class="flex items-center justify-center w-24 h-full ml-3 md:hidden">
        <header-more-menu></header-more-menu>
      </div>
    </div>
    <div class="w-2/3 h-full">
      <header-mid-links></header-mid-links>
    </div>
    <div class="w-1/3">
      <header-end-links></header-end-links>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {},
      showDropDown: false,
      searchModal: false,
    };
  },
  created() {
    this.fetchUser();
  },

  computed: {
    showModal() {
      return this.searchModal;
    },
  },
  methods: {
    search() {
      this.searchModal = false;
    },
    async fetchUser() {
      await this.$axios
        .$get("/account/user/profile/", {
          params: {
            secret_token: this.$auth.strategy.token.get().slice(7),
          },
        })
        .then((res) => {
          this.$auth.setUser(res.user);
        });
    },
  },
};
</script>
<style scoped>
.logo {
  border-bottom: none;
}
</style>