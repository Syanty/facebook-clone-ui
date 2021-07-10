<template>
  <div>
    <div
      class="w-11/12 pt-10 mx-auto transform  lg:-translate-x-1/2 lg:-translate-y-1/4 lg:absolute lg:w-9/12 top-1/4 left-1/2"
    >
      <div class="grid grid-cols-1 gap-10 lg:gap-0 lg:grid-cols-2">
        <div class="flex items-center justify-center">
          <div class="flex flex-col items-center lg:items-start">
            <div class="mb-4 text-5xl font-bold text-blue-600">facebook</div>
            <div class="p-1 text-2xl font-normal text-center lg:text-justify">
              Connect with friends and the world around you on Facebook.
            </div>
          </div>
        </div>
        <div class="pt-2">
          <auth-login @showRegisterModal="signupForm = $event"></auth-login>
        </div>
      </div>
    </div>
    <div
      v-if="signupForm"
      class="fixed inset-0 z-50 w-full h-screen overflow-y-scroll text-xs bg-gray-300 bg-opacity-75 "
    >
      <div
        class="absolute w-11/12 h-full p-4 transform -translate-x-1/2 -translate-y-1/2 bg-white  top-1/2 left-1/2 md:w-1/2 lg:w-1/3 signupform rounded-xl"
      >
        <div class="flex justify-between p-2 border-b border-gray-300">
          <div>
            <h1 class="text-3xl font-bold text-black">Sign Up</h1>
            <p>It's quick and easy</p>
          </div>
          <div class="text-gray-400 cursor-pointer" @click="signupForm = false">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4"
              viewBox="0 0 24 24"
            >
              <path
                d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
              />
            </svg>
          </div>
        </div>
        <div class="w-full mt-3">
          <auth-signup @closeModal="signupForm = false"></auth-signup>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      signupForm: null,
    };
  },
};
</script>
<style scoped>
.signupform {
  height: 500px;
}
</style>