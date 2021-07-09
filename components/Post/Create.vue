<template>
  <div class="p-6 bg-white rounded-lg">
    <div class="flex items-center">
      <div
        class="w-10 h-10 p-6 mr-2 bg-gray-900 border-2 border-red-600 rounded-full "
      ></div>
      <div
        class="w-full p-2 px-4 bg-gray-300 rounded-full"
        @click="postCreateModal = true"
      >
        <input
          type="text"
          :placeholder="`What's on your mind, ${user.first_name}?`"
          class="w-full bg-gray-300 focus:outline-none"
        />
      </div>
    </div>
    <div class="grid grid-cols-3 mt-5 text-gray-500">
      <div
        class="flex items-center justify-center p-1 rounded-md cursor-pointer  hover:bg-gray-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          class="text-red-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M16 16c0 1.104-.896 2-2 2h-12c-1.104 0-2-.896-2-2v-8c0-1.104.896-2 2-2h12c1.104 0 2 .896 2 2v8zm8-10l-6 4.223v3.554l6 4.223v-12z"
          />
        </svg>
        <span class="hidden p-1 ml-2 sm:block">Live Video</span>
      </div>
      <div
        class="flex items-center justify-center p-1 rounded-md cursor-pointer  hover:bg-gray-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="text-green-500"
          fill="currentColor"
        >
          <path
            d="M9 12c0-.552.448-1 1.001-1s.999.448.999 1-.446 1-.999 1-1.001-.448-1.001-1zm6.2 0l-1.7 2.6-1.3-1.6-3.2 4h10l-3.8-5zm5.8-7v-2h-21v15h2v-13h19zm3 2v14h-20v-14h20zm-2 2h-16v10h16v-10z"
          />
        </svg>

        <span class="hidden p-1 ml-2 sm:block">Photo/Video</span>
      </div>
      <div
        class="flex items-center justify-center p-1 rounded-md cursor-pointer  hover:bg-gray-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="text-yellow-500"
          fill="currentColor"
        >
          <path
            d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.507 13.941c-1.512 1.195-3.174 1.931-5.506 1.931-2.334 0-3.996-.736-5.508-1.931l-.493.493c1.127 1.72 3.2 3.566 6.001 3.566 2.8 0 4.872-1.846 5.999-3.566l-.493-.493zm-9.007-5.941c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5zm7 0c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5z"
          />
        </svg>
        <span class="hidden p-1 ml-2 sm:block">Feeling/Activity</span>
      </div>
    </div>
    <post-create-modal
      :postCreateModal="modal"
      @closeModal="postCreateModal = $event"
    ></post-create-modal>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      postCreateModal: false,
    };
  },
  computed: {
    ...mapGetters({ user: "user/getUserInfo" }),
    modal() {
      return this.postCreateModal;
    },
  },
};
</script>
