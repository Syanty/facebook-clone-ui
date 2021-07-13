<template>
  <ul class="w-full h-screen hover:overflow-y-auto">
    <h1 class="mb-5 text-lg font-bold">Contacts</h1>
    <li
      v-for="i in 10"
      :key="i"
      class="flex items-center p-2 rounded-md cursor-pointer hover:bg-gray-400"
    >
      <div
        class="w-6 h-6 mr-1 bg-gray-900 border-2 border-red-600 rounded-full"
      ></div>
      friend {{ i }}
    </li>
  </ul>
</template>
