<template>
  <form
    class="w-11/12 p-6 mx-auto mb-10 bg-white rounded-lg lg:w-9/12"
    method="post"
    @submit.prevent="onLogin"
  >
    <input-username
      class="w-full mb-4"
      :username="email"
      @updatedUsername="email = $event"
    ></input-username>
    <div class="flex w-full border border-gray-300 rounded-md">
      <input-password
        :password="password"
        :isVisible="isVisible"
        @updatedPassword="password = $event"
      ></input-password>
      <password-visibility
        @visibility="isVisible = $event"
        :password="user_password"
      ></password-visibility>
    </div>
    <button
      class="w-full p-3 mt-4 text-xl font-bold text-white bg-blue-600 rounded-md "
      type="submit"
    >
      Login
    </button>
    <div class="block p-3 mt-4 text-center border-b border-gray-300">
      <nuxt-link to="/forgot-password" class="text-blue-500 hover:underline"
        >Forgot Password?</nuxt-link
      >
    </div>
    <div
      @click="showRegisterModal"
      class="w-2/3 p-2 mx-auto mt-4 text-base font-bold text-center text-white bg-green-800 rounded-md cursor-pointer "
    >
      Create New Account
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      isVisible: false,
      email: "",
      password: "",
    };
  },
  methods: {
    showRegisterModal() {
      this.$emit("showRegisterModal", true);
    },
    onLogin() {
      this.$axios
        .$post("/account/login/", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          this.$store.commit("localStorage/storeToken", res.token);
          this.$success(res.message);
        })
        .catch((err) => {
          this.$error(err.response.data.message);
        });
    },
  },
  computed: {
    user_password() {
      return this.password;
    },
  },
};
</script>