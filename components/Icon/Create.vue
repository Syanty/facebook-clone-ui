<template>
  <span
    @click="createDrop"
    class="flex items-center justify-center p-2 bg-gray-200 rounded-full cursor-pointer  lg:hidden hover:bg-gray-300 h-9 w-9"
  >
    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24">
      <path d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z" />
    </svg>
  </span>
</template>
<script>
export default {
  props: ["showCreateDropDown"],
  data() {
    return {
      dropdown: false,
    };
  },
  methods: {
    createDrop() {
      this.dropdown = !this.dropdown;
      this.$emit("createDrop", this.dropdown);
    },
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.dropdown = false;
        this.$emit("createDrop", this.dropdown);
      }
    },
  },
  created() {
    this.dropdown = this.showCreateDropDown;
  },
  mounted() {
    document.addEventListener("click", this.close);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.close);
  },
};
</script>