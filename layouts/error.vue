
<template>
  <div class="fixed top-0 left-0 z-50 w-screen h-screen bg-gray-900">
    <div
      class="flex flex-col items-center justify-center h-screen text-lg font-bold text-white  sm:text-4xl sm:font-extrabold"
    >
      <div class="flex flex-col items-center sm:flex-row">
        <span class="mb-2 text-blue-500 transform sm:mr-10 animate-pulse">
          {{ error.statusCode }}</span
        >
        SOMETHING WENT WRONG
      </div>
      <nuxt-link to="/" class="text-blue-400 hover:underline"
        >GO TO HOME</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "error", // you can set a custom layout for the error page
};
</script>
