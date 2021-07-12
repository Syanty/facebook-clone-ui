<template>
  <div
    class="flex w-8/12 h-full pt-5 mx-auto border-t border-gray-300"
    id="sticky_tab"
  >
    <nuxt-link class="rounded-t-lg link" :to="`/${$route.params.slug}/`"
      >Posts</nuxt-link
    >

    <nuxt-link class="link" :to="`/${$route.params.slug}/about/`"
      >About</nuxt-link
    >
  </div>
</template>

<style scoped>
.link {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  width: 6rem;
}
.link:hover {
  background-color: rgba(229, 231, 235);
}
.nuxt-link-exact-active {
  color: rgba(59, 130, 246);
  border-bottom: 2px solid rgba(59, 130, 246);
}
</style>