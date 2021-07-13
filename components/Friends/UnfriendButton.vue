<template>
  <div>
    <div
      @click="unfriendFriend"
      class="p-2 mt-5 text-center bg-red-100 rounded-md cursor-pointer  hover:bg-red-200"
    >
      Unfriend
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: ["userId", "last_name", "first_name"],
  data() {
    return {
      requests_users_id: [],
    };
  },
  computed: {
    ...mapGetters(["loggedInUser"]),
  },
  methods: {
    unfriendFriend() {
      this.$confirm(this.first_name, this.last_name).then((result) => {
        if (result.isConfirmed) {
          this.$axios
            .post(
              `/users/${this.userId}/unfriend/`,
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
        }
      });
    },
  },
};
</script>