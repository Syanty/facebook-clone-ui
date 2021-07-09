<template>
  <div
    class="items-center justify-center hidden h-full md:flex lg:justify-around"
  >
    <nuxt-link to="/" class="link">
      <div
        class="flex items-center justify-center w-11/12 h-12 rounded-lg  nav_link"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 icon"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"
          />
        </svg></div
    ></nuxt-link>
    <nuxt-link to="/#videos" class="link">
      <div
        class="flex items-center justify-center w-11/12 h-12 rounded-lg  nav_link"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 icon"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z"
          />
        </svg>
      </div>
    </nuxt-link>
    <nuxt-link to="/#store" class="link">
      <div
        class="flex items-center justify-center w-11/12 h-12 rounded-lg  nav_link"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 icon"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M9.939 0l-.939 4.971v1.098c0 1.066-.933 1.931-2 1.931s-2-.865-2-1.932v-1.097l2.996-4.971h1.943zm-3.052 0l-2.887 4.971v1.098c0 1.066-.933 1.931-2 1.931s-2-.865-2-1.932v-1.097l4.874-4.971h2.013zm17.113 6.068c0 1.067-.933 1.932-2 1.932s-2-.933-2-2v-1.098l-2.887-4.902h2.014l4.873 4.971v1.097zm-10-1.168v1.098c0 1.066-.933 2.002-2 2.002s-2-.933-2-2v-1.098l1.047-4.902h1.905l1.048 4.9zm2.004-4.9l2.993 5.002v1.098c.001 1.067-.93 1.9-1.997 1.9s-2-.933-2-2v-1.098l-.939-4.902h1.943zm-15.004 10v14h10v-2h-8v-10h18v12h2v-14h-22zm18 4h-6v10h6v-10z"
          />
        </svg>
      </div>
    </nuxt-link>
    <nuxt-link to="/#groups" class="link">
      <div
        class="flex items-center justify-center w-11/12 h-12 rounded-lg  nav_link"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-10 h-10 icon"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M17.997 18h-11.995l-.002-.623c0-1.259.1-1.986 1.588-2.33 1.684-.389 3.344-.736 2.545-2.209-2.366-4.363-.674-6.838 1.866-6.838 2.491 0 4.226 2.383 1.866 6.839-.775 1.464.826 1.812 2.545 2.209 1.49.344 1.589 1.072 1.589 2.333l-.002.619zm4.811-2.214c-1.29-.298-2.49-.559-1.909-1.657 1.769-3.342.469-5.129-1.4-5.129-1.265 0-2.248.817-2.248 2.324 0 3.903 2.268 1.77 2.246 6.676h4.501l.002-.463c0-.946-.074-1.493-1.192-1.751zm-22.806 2.214h4.501c-.021-4.906 2.246-2.772 2.246-6.676 0-1.507-.983-2.324-2.248-2.324-1.869 0-3.169 1.787-1.399 5.129.581 1.099-.619 1.359-1.909 1.657-1.119.258-1.193.805-1.193 1.751l.002.463z"
          />
        </svg>
      </div>
    </nuxt-link>
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
.nav_link:hover {
  background-color: rgba(229, 231, 235);
}
.icon {
  color: rgb(151, 153, 156);
}
.nuxt-link-exact-active .icon {
  color: rgba(59, 130, 246);
}

.nuxt-link-exact-active {
  color: rgba(59, 130, 246);
  border-bottom: 2px solid rgba(59, 130, 246);
}
.nuxt-link-exact-active .nav_link:hover {
  background-color: white;
}
</style>