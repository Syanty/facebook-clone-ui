<template>
  <input
    type="text"
    placeholder="First Name"
    class="p-3 border border-gray-400 rounded-md focus:outline-none"
    v-model="lname"
    @input="$emit('updatedFname', lname)"
  />
</template>
<script>
export default {
  props: ["last_name"],
  data() {
    return {
      lname: "",
    };
  },
  created() {
    this.lname = this.last_name;
  },
};
</script>