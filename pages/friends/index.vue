<template>
  <friends-grid :users="refreshUsers" :showButton="true">
    People You May Know
  </friends-grid>
</template>
<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async fetch() {
      await this.$axios
        .get("/users/specified/", {
          params: {
            secret_token: this.$auth.strategy.token.get().slice(7),
          },
        })
        .then((res) => {
          this.users = res.data.data;
        });
    },
  },
  created() {
    this.fetch();
  },
  computed: {
    refreshUsers() {
      return this.users;
    },
  },
};
</script>