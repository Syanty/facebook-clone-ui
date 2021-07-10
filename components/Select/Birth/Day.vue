<template>
  <select
    class="p-2 bg-white border border-gray-300 rounded-md focus:outline-none"
    v-model="selected_day"
    @change="$emit('updatedDay', selected_day)"
  >
    <option v-for="i in num_of_days" :value="i" :key="i">
      {{ i }}
    </option>
  </select>
</template>
<script>
export default {
  props: ["day", "month", "year", "monthList"],
  data() {
    return {
      selected_day: "",
      num_of_days_in_month: "",
    };
  },
  created() {
    this.selected_day = this.day;
    this.num_of_days_in_month = new Date(this.year, this.month, 0).getDate();
  },
  computed: {
    num_of_days() {
      this.num_of_days_in_month = new Date(this.year, this.month, 0).getDate();
      return this.num_of_days_in_month;
    },
  },
};
</script>