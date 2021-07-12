<template>
  <div class="w-full mt-5">
    <div class="w-full">
      <!-- left sidebar -->
      <div class="left-0 hidden w-0 p-4 lg:w-1/5 lg:fixed lg:flex top-14">
        <bookmarks-list></bookmarks-list>
      </div>
      <!-- main content  -->
      <home-main></home-main>
      <!-- contacts sidebar-->
      <div class="fixed right-0 hidden w-1/4 lg:w-1/5 md:flex top-20">
        <contact-list></contact-list>
      </div>
    </div>
  </div>
</template>