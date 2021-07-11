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
  </div>
</template>
<script>
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
              secret_token: this.$auth.strategy.token.get().slice(7),
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