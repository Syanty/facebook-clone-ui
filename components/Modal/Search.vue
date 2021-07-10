<template>
  <div
    class="absolute top-0 left-0 z-50 p-4 bg-white rounded-lg shadow-xl  h-96 w-80"
    v-if="searchModal"
  >
    <div class="flex items-center justify-between h-12 px-2">
      <div
        class="p-2 rounded-full cursor-pointer hover:bg-gray-300"
        @click="$emit('closeModal')"
      >
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
        >
          <path
            d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z"
          />
        </svg>
      </div>
      <div class="flex items-center p-2 bg-gray-200 rounded-full h-9">
        <input
          type="search"
          placeholder="Search Facebook"
          class="h-full ml-2 text-sm font-normal text-gray-600 bg-gray-200  focus:outline-none"
        />
      </div>
    </div>
    <div class="flex items-center justify-between mt-4">
      <h1 class="text-lg font-bold">Recent Searches</h1>
      <p class="text-blue-500 cursor-pointer hover:underline">Edit</p>
    </div>
    <div>
      <ul>
        <li
          v-for="i in 5"
          :key="i"
          class="flex items-center justify-between p-3 rounded-lg cursor-pointer  hover:bg-gray-300"
        >
          <p>Search Item {{ i }}</p>
          <span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 p-2 rounded-full hover:bg-gray-400"
              viewBox="0 0 24 24"
            >
              <path
                d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
              /></svg
          ></span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: ["searchModal"],
};
</script>