<template>
  <span
    @click="menuDrop"
    class="items-center justify-center hidden p-2 bg-gray-200 rounded-full cursor-pointer  lg:flex hover:bg-gray-300 h-9 w-9"
  >
    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24">
      <path
        d="M6 6h-6v-6h6v6zm9-6h-6v6h6v-6zm9 0h-6v6h6v-6zm-18 9h-6v6h6v-6zm9 0h-6v6h6v-6zm9 0h-6v6h6v-6zm-18 9h-6v6h6v-6zm9 0h-6v6h6v-6zm9 0h-6v6h6v-6z"
      />
    </svg>
  </span>
</template>
<script>
export default {
  props: ["showMenuDropDown"],
  data() {
    return {
      dropdown: false,
    };
  },
  methods: {
    menuDrop() {
      this.dropdown = !this.dropdown;
      this.$emit("menuDrop", this.dropdown);
    },
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.dropdown = false;
        this.$emit("menuDrop", this.dropdown);
      }
    },
  },
  created() {
    this.dropdown = this.showmenuDropDown;
  },
  mounted() {
    document.addEventListener("click", this.close);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.close);
  },
};
</script>