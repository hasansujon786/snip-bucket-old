<template>
  <div class="home text-center bg-black h-screen flex flex-col justify-center items-center">
    <div class="pb-64">
      <h1 class="text-blue-300 text-5xl font-mono">snip bucket</h1>
      <router-link to="/contents/vue" class="text text-red-500 underline">Go to app</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
