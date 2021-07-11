<template>
  <div class="flex items-center justify-end">
    <!-- profile info -->
    <header-profile-link></header-profile-link>
    <!-- more items -->
    <div
      class="items-center justify-center hidden w-24 h-full md:flex lg:hidden"
    >
      <header-more-menu></header-more-menu>
    </div>

    <div class="flex items-center justify-center p-2">
      <!-- menu -->
      <icon-menu
        :showMenuDropDown="showMenuDropDown"
        @menuDrop="showMenuDropDown = $event"
      ></icon-menu>
      <!-- create -->
      <icon-create
        :showCreateDropDown="showCreateDropDown"
        @createDrop="showCreateDropDown = $event"
      ></icon-create>
      <!-- messenger -->
      <icon-messenger></icon-messenger>
      <!-- notifications -->
      <icon-notification></icon-notification>
      <!-- account -->
      <icon-account
        :showAccountDropDown="showAccountDropDown"
        @accountDrop="showAccountDropDown = $event"
      ></icon-account>
    </div>
    <dropdown-account
      v-if="showAccountDropDown"
      @closeDropDown="showAccountDropDown = false"
    ></dropdown-account>
    <dropdown-menu v-if="showMenuDropDown"></dropdown-menu>
    <dropdown-create v-if="showCreateDropDown"></dropdown-create>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showAccountDropDown: false,
      showMenuDropDown: false,
      showCreateDropDown: false,
    };
  },
};
</script>
<style scoped>
span {
  margin-right: 5px;
}
</style>