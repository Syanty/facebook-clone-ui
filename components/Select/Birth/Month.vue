<template>
  <select
    class="p-2 bg-white border border-gray-300 rounded-md focus:outline-none"
    v-model="selected_month"
    @change="$emit('updatedMonth', selected_month)"
  >
    <option v-for="(month, i) in monthList" :value="i + 1" :key="i">
      {{ month }}
    </option>
  </select>
</template>
<script>
export default {
  props: ["month", "monthList"],
  data() {
    return {
      selected_month: "",
    };
  },
  created() {
    this.selected_month = new Date().getMonth() + 1;
  },
};
</script>