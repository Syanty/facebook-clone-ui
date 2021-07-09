<template>
  <div class="flex items-center justify-end">
    <!-- profile info -->
    <header-profile-link :user="user"></header-profile-link>
    <!-- more items -->
    <div
      class="items-center justify-center hidden w-20 h-12 rounded-lg cursor-pointer  md:flex lg:hidden hover:bg-gray-200"
    >
      <header-more-menu></header-more-menu>
    </div>

    <div class="flex items-center justify-center p-2">
      <!-- menu -->
      <icon-menu
        :showMenuDropDown="MenuDropdown"
        @menuDrop="showMenuDropDown = $event"
      ></icon-menu>
      <!-- create -->
      <icon-create
        :showCreateDropDown="CreateDropdown"
        @createDrop="showCreateDropDown = $event"
      ></icon-create>
      <!-- messenger -->
      <icon-messenger></icon-messenger>
      <!-- notifications -->
      <icon-notification></icon-notification>
      <!-- account -->
      <icon-account
        :showAccountDropDown="Accountdropdown"
        @accountDrop="showAccountDropDown = $event"
      ></icon-account>
    </div>
    <dropdown-account
      :user="user"
      :dropdown="showAccountDropDown"
    ></dropdown-account>
    <dropdown-menu :dropdown="showMenuDropDown"></dropdown-menu>
    <dropdown-create :dropdown="showCreateDropDown"></dropdown-create>
  </div>
</template>
<script>
export default {
  props: ["user"],
  data() {
    return {
      showAccountDropDown: false,
      showMenuDropDown: false,
      showCreateDropDown: false,
    };
  },
  computed: {
    Accountdropdown() {
      return this.showAccountDropDown;
    },
    MenuDropdown() {
      return this.showMenuDropDown;
    },
    CreateDropdown() {
      return this.showCreateDropDown;
    },
  },
};
</script>
<style scoped>
span {
  margin-right: 5px;
}
</style>