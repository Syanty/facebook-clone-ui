<template>
  <div class="p-4 mt-5 bg-white rounded-lg h-5/6">
    <span class="text-lg font-semibold">Create</span>
    <ul class="pb-2 mt-2 border-b border-gray-200">
      <li class="rounded-lg hover:bg-gray-200">
        <div
          @click="$EventBus.$emit('openCreateModal')"
          class="flex items-center p-2"
        >
          <span
            class="flex items-center justify-center p-2 bg-gray-300 rounded-full  h-9 w-9"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M8.424 12.282l4.402 4.399-5.826 1.319 1.424-5.718zm15.576-6.748l-9.689 9.804-4.536-4.536 9.689-9.802 4.536 4.534zm-6 8.916v6.55h-16v-12h6.743l1.978-2h-10.721v16h20v-10.573l-2 2.023z"
              />
            </svg>
          </span>
          <div class="flex-1 ml-2">Post</div>
        </div>
      </li>
    </ul>
    <ul class="mt-2">
      <li class="rounded-lg hover:bg-gray-200">
        <div class="flex items-center p-2">
          <span
            class="flex items-center justify-center p-2 bg-gray-300 rounded-full  h-9 w-9"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M8.424 12.282l4.402 4.399-5.826 1.319 1.424-5.718zm15.576-6.748l-9.689 9.804-4.536-4.536 9.689-9.802 4.536 4.534zm-6 8.916v6.55h-16v-12h6.743l1.978-2h-10.721v16h20v-10.573l-2 2.023z"
              />
            </svg>
          </span>
          <div class="flex-1 ml-2">Story</div>
        </div>
      </li>
    </ul>
  </div>
</template>