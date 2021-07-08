<template>
  <input
    :type="isVisible ? 'text' : 'password'"
    class="w-11/12 p-3 rounded-md focus:outline-none"
    placeholder="Password"
    v-model="password_data"
    required
    @input="$emit('updatedPassword', password_data)"
  />
</template>
<script>
export default {
  props: ["password", "isVisible"],
  data() {
    return {
      password_data: "",
    };
  },
  created() {
    this.password_data = this.password;
  },
};
</script>