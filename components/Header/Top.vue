<template>
  <div class="sticky top-0 flex items-center w-full bg-white shadow-xl h-14">
    <div class="w-1/3">
      <div class="flex items-center pl-3">
        <nuxt-link to="/" class="logo">
          <header-logo />
        </nuxt-link>
        <div
          class="flex items-center justify-center ml-2 bg-gray-200 rounded-full  lg:hidden h-9 w-9"
        >
          <icon-search></icon-search>
        </div>
        <input-search />
        <div
          class="flex items-center justify-center w-20 h-12 rounded-lg cursor-pointer  md:hidden hover:bg-gray-200"
        >
          <header-more-menu></header-more-menu>
        </div>
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
<style scoped>
.logo {
  border-bottom: none;
}
</style>