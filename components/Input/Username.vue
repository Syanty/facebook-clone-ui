<template>
  <input
    type="text"
    class="p-3 border border-gray-300 rounded-md focus:outline-none"
    placeholder="Email or Phone Number"
    v-model="username_data"
    @input="$emit('updatedUsername', username_data)"
  />
</template>
<script>
export default {
  props: ["username"],
  data() {
    return {
      username_data: "",
    };
  },
  created() {
    this.username_data = this.username;
  },
};
</script>