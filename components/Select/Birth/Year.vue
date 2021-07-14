<template>
  <select
    class="p-2 bg-white border border-gray-300 rounded-md focus:outline-none"
    v-model="year"
    @change="$emit('updatedYear', year)"
  >
    <option
      v-for="i in yearLimit"
      :value="new Date().getFullYear() + 1 - i"
      :key="i"
    >
      {{ new Date().getFullYear() + 1 - i }}
    </option>
  </select>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
  created() {
    this.yearLimit = new Date().getFullYear() - 1904;
  },
};
</script>