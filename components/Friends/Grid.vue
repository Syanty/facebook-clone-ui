<template>
  <div v-if="users != ''">
    <h1 class="text-lg font-bold"><slot /></h1>
    <div
      class="grid grid-cols-1 gap-4 mt-5  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <friends-card
        v-for="(user, i) in users"
        :key="i"
        :user="user"
        :showButton="showButton"
        :showAcceptButton="showAcceptButton"
        :showUnfriendButton="showUnfriendButton"
      ></friends-card>
    </div>
  </div>
  <div
    v-else
    class="flex items-center justify-center text-lg font-semibold h-96"
  >
    When you have friend requests or suggestions, you'll see them here.
  </div>
</template>
<script>
export default {
  props: ["users", "showButton", "showAcceptButton", "showUnfriendButton"],
};
</script>