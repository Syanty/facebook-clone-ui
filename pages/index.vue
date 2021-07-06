<template>
  <div>
    <!-- authenticated stuff -->
    <div v-if="auth">my posts</div>

    <!-- unauthenticated -->
    <div v-else>
      <auth-base></auth-base>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      auth: false,
    };
  },
  layout: "default",
};
</script>
