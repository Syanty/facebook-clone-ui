<template>
  <div
    v-if="dropdown"
    class="absolute w-64 h-40 bg-white rounded-lg shadow-lg right-4 top-12"
  >
    hello
  </div>
</template>
<script>
export default {
  props: ["dropdown"],
};
</script>