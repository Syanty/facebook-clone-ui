<template>
  <div
    class="grid w-11/12 grid-cols-1 mx-auto lg:gap-4 md:w-8/12 lg:grid-cols-3"
  >
    <profile-intro></profile-intro>
    <div class="col-span-2">
      <!-- create post -->
      <post-create></post-create>
      <!-- posts -->
      <post-list></post-list>
    </div>
  </div>
</template>
