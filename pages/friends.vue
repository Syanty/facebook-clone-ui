<template>
  <div class="w-full">
    <div
      class="fixed left-0 hidden w-1/4 h-screen p-2 bg-white md:block top-14"
    >
      <friends-sidebar></friends-sidebar>
    </div>

    <div class="absolute left-0 w-full p-6 mx-auto md:left-1/4 top-14 md:w-3/4">
      <nuxt-child />
    </div>
  </div>
</template>
