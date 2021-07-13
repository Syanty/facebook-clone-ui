<template>
  <div
    class="h-64 bg-white border border-gray-300 rounded-md shadow-md"
    v-if="user"
  >
    <div class="bg-gray-300 h-1/2"></div>
    <div class="p-3">
      <h2 class="text-lg font-bold">
        {{ user.first_name }} {{ user.last_name }}
      </h2>
      <div v-if="showButton">
        <friends-add-button :userId="user._id"></friends-add-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["user", "showButton"],
};
</script>