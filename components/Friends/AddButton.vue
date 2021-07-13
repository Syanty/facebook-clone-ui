<template>
  <div>
    <div
      @click="addFriend"
      v-if="!requested_users_id.includes(userId)"
      class="p-2 mt-5 text-center bg-blue-100 rounded-md cursor-pointer  hover:bg-blue-200"
    >
      Add Friend
    </div>
    <div
      @click="cancelRequest"
      v-else
      class="p-2 mt-5 text-center bg-red-100 rounded-md cursor-pointer  hover:bg-red-200"
    >
      Cancel Request
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: ["userId"],
  data() {
    return {
      requested_users_id: [],
    };
  },
  computed: {
    ...mapGetters(["loggedInUser"]),
  },
  created() {
    this.loggedInUser.friends_requested.map((e) => {
      this.requested_users_id.push(e._id);
    });
  },
  methods: {
    addFriend() {
      this.$axios
        .post(
          `/users/${this.userId}/request/send/`,
          {},
          {
            params: {
              secret_token: this.$auth.strategy.token.get().slice(7),
            },
          }
        )
        .then((res) => {
          this.$auth.setUser(res.data.data);
          this.requested_users_id.push(this.userId);
          this.$success(res.data.message);
        })
        .catch((err) => {
          this.$error(err.response.data.message);
        });
    },
    cancelRequest() {
      this.$axios
        .post(
          `/users/${this.userId}/request/cancel/`,
          {},
          {
            params: {
              secret_token: this.$auth.strategy.token.get().slice(7),
            },
          }
        )
        .then((res) => {
          this.$auth.setUser(res.data.data);
          const index = this.requested_users_id.indexOf(this.userId);
          if (index > -1) {
            this.requested_users_id.splice(index, 1);
          }

          this.$success(res.data.message);
        })
        .catch((err) => {
          this.$error(err.response.data.message);
        });
    },
  },
};
</script>