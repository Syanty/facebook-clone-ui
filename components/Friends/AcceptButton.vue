<template>
  <div class="flex items-center justify-between">
    <div
      @click="acceptFriend"
      class="p-2 mt-5 text-center bg-green-100 rounded-md cursor-pointer  hover:bg-green-200"
    >
      Accept
    </div>
    <div
      @click="declineRequest"
      class="p-2 mt-5 text-center bg-red-100 rounded-md cursor-pointer  hover:bg-red-200"
    >
      Decline
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: ["userId"],
  data() {
    return {
      requests_users_id: [],
    };
  },
  computed: {
    ...mapGetters(["loggedInUser"]),
  },
  methods: {
    acceptFriend() {
      this.$axios
        .post(
          `/users/${this.userId}/request/accept/`,
          {},
          {
            params: {
              secret_token: this.$auth.strategy.token.get().slice(7),
            },
          }
        )
        .then((res) => {
          this.$auth.setUser(res.data.data);

          this.$success(res.data.message);
        })
        .catch((err) => {
          this.$error(err.response.data.message);
        });
    },
    declineRequest() {
      this.$axios
        .post(
          `/users/${this.userId}/request/decline/`,
          {},
          {
            params: {
              secret_token: this.$auth.strategy.token.get().slice(7),
            },
          }
        )
        .then((res) => {
          this.$auth.setUser(res.data.data);

          this.$success(res.data.message);
        })
        .catch((err) => {
          this.$error(err.response.data.message);
        });
    },
  },
};
</script>