<template>
  <nuxt-link
    to="/bookmarks"
    class="flex items-center justify-center w-full h-14"
  >
    <div
      class="flex items-center justify-center w-11/12 h-12 rounded-lg nav_link"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-8 h-8 text-gray-500 icon"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
      </svg>
    </div>
  </nuxt-link>
</template>
<style scoped>
.nuxt-link-exact-active .icon {
  color: #3b82f6;
}
.nav_link:hover {
  background-color: rgba(229, 231, 235);
}
.nuxt-link-exact-active {
  color: rgba(59, 130, 246);
  border-bottom: 2px solid rgba(59, 130, 246);
}
.nuxt-link-exact-active .nav_link:hover {
  background-color: white;
}
</style>