<template>
  <div v-if="createModal" class="fixed inset-0 bg-gray-200 bg-opacity-90">
    <div
      class="absolute w-11/12 p-6 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg  sm:w-10/12 md:w-500 h-96 top-1/2 left-1/2"
    >
      <div class="flex items-center justify-between px-2">
        <div class="flex items-center" v-if="user">
          <nuxt-link :to="`/${user.slug}/`" class="mr-2">
            <img
              class="object-cover w-12 h-12 rounded-full"
              src="https://images.unsplash.com/photo-1625740137603-0f5606b742af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=358&q=80"
              alt=""
            />
          </nuxt-link>
          <div class="flex flex-col">
            <p
              class="text-lg font-semibold cursor-pointer"
              @click="$router.push(`/${user.slug}/`)"
            >
              {{ user.first_name }} {{ user.last_name }}
            </p>
            <span class="text-sm text-gray-400">public</span>
          </div>
        </div>
        <div
          class="flex items-center justify-center w-8 h-8 p-2 bg-gray-200 rounded-full cursor-pointer "
          @click="$emit('closeModal')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            class="text-gray-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
            />
          </svg>
        </div>
      </div>
      <div class="w-full">
        <textarea
          class="w-full p-4 mt-4 text-lg resize-none  focus:outline-none overscroll-y-auto"
          :placeholder="`What's on your mind, ${user.first_name}?`"
          rows="7"
          v-model="post.content"
        ></textarea>
      </div>
      <button
        @click="newPost"
        :disabled="post.content == '' || posting ? true : false"
        :class="post.content != '' ? 'bg-blue-600 text-white' : 'bg-gray-200 '"
        class="flex items-center justify-center w-full p-2 font-bold border border-gray-400 rounded-md  focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <svg
          v-if="posting"
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5 mr-2 text-white animate-spin"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M13 23c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.448 1-1zm4.084-.834c0-.483-.393-.875-.875-.875s-.875.392-.875.875.393.875.875.875.875-.392.875-.875zm3.443-2.387c0-.414-.336-.75-.75-.75s-.75.336-.75.75.336.75.75.75.75-.336.75-.75zm2.343-3.568c0-.391-.317-.708-.708-.708s-.708.317-.708.708.317.708.708.708.708-.317.708-.708zm.796-4.209c0-.368-.298-.667-.666-.667s-.666.298-.666.667.298.667.666.667.666-.298.666-.667zm-.879-4.209c0-.345-.28-.625-.625-.625s-.625.28-.625.625.28.625.625.625.625-.279.625-.625zm-2.427-3.568c0-.322-.262-.583-.583-.583s-.583.261-.583.583.262.583.583.583.583-.261.583-.583zm-3.609-2.385c0-.299-.242-.542-.541-.542s-.541.242-.541.542.242.542.541.542.541-.243.541-.542zm-3.751-.84c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.448 1-1zm-4.21.838c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.448 1-1zm-3.569 2.385c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.448 1-1zm-2.384 3.57c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.447 1-1zm-.837 4.209c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.448 1-1zm.837 4.209c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.447 1-1zm2.384 3.569c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.447 1-1zm3.571 2.383c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.448 1-1z"
          />
        </svg>
        Post
      </button>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: ["postCreateModal"],
  data() {
    return {
      modal: null,
      posting: false,
      post: {
        content: "",
      },
      user: "",
    };
  },
  methods: {
    newPost() {
      this.posting = true;
      this.$axios
        .$post(`/posts/`, this.post, {
          params: {
            secret_token: this.token,
          },
        })
        .then((res) => {
          setTimeout(() => {
            this.posting = false;
            this.$emit("closeModal");
            this.$EventBus.$emit("fetchPosts", true);
            this.$success(res.message);
          }, 2000);
        })
        .catch((err) => {
          this.$error(err.response.data.message);
        });
    },
  },
  computed: {
    createModal() {
      this.modal = this.postCreateModal;
      return this.modal;
    },
  },
};
</script>
