<template>
  <div class="mt-5">
    <!-- list of own posts and friends posts -->

    <post-skeleton v-if="loading"></post-skeleton>
    <div
      v-else
      class="p-4 mb-5 bg-white rounded-md"
      v-for="(post, i) in getPosts"
      :key="i"
    >
      <div class="flex items-center">
        <div
          class="w-10 h-10 p-6 mr-2 bg-gray-900 border-2 border-red-600 rounded-full "
        ></div>
        <div class="flex flex-col w-full">
          {{ post.posted_by.first_name }} {{ post.posted_by.last_name }}
          <span class="text-sm text-gray-500">{{ post.date_posted }}</span>
        </div>
      </div>
      <div class="p-2 text-justify">
        {{ post.content }}
      </div>
      <!-- :class="truncate ? 'truncate' : ''"<span
        class="float-right text-blue-500 cursor-pointer hover:underline"
        @click="truncate = !truncate"
        ><p v-if="truncate">see more...</p>
        <p v-else>see less</p></span
      > -->

      <div class="mt-2">
        <img
          src="https://images.unsplash.com/photo-1625733143269-901b474308a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
          alt="post_img"
          class="object-cover"
        />
      </div>
    </div>
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