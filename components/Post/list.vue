<template>
  <div class="mt-5">
    <!-- list of own posts and friends posts -->

    <post-skeleton v-if="loading"></post-skeleton>

    <post-content
      v-else
      v-for="(post, i) in getPosts"
      :post="post"
      :key="i"
    ></post-content>

    <div
      v-if="getPosts == '' && loading == false"
      class="flex items-center justify-center"
    >
      No posts to show
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      truncate: true,
      posts: [],
      loading: true,
    };
  },
  created() {
    this.fetchPosts();
  },
  methods: {
    fetchPosts() {
      setTimeout(() => {
        this.$axios
          .$get("/users/posts/", {
            params: {
              secret_token: this.token,
            },
          })
          .then((res) => {
            this.posts = res.data;
          });
        this.loading = false;
      }, 2000);
    },
  },
  computed: {
    ...mapGetters({ user: "user/getUserInfo", token: "localStorage/getToken" }),
    getPosts() {
      if (
        this.$EventBus.$on("fetchPosts", (status) => {
          if (status) {
            this.fetchPosts();
          }
        })
      )
        return this.posts;
    },
  },
};
</script>