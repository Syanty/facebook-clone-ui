<template>
  <span
    @click="accountDrop"
    class="flex items-center justify-center p-2 bg-gray-200 rounded-full cursor-pointer  hover:bg-gray-300 h-9 w-9"
  >
    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" viewBox="0 0 24 24">
      <path d="M12 21l-12-18h24z" />
    </svg>
  </span>
</template>
<script>
export default {
  props: ["showAccountDropDown"],
  data() {
    return {
      dropdown: false,
    };
  },
  methods: {
    accountDrop() {
      this.dropdown = !this.dropdown;
      this.$emit("accountDrop", this.dropdown);
    },
  },
  created() {
    this.dropdown = this.showAccountDropDown;
  },
};
</script>