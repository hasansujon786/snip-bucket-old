<template>
  <div class="side-nav border-gray-300 flex hidden">
    <ul class="nav-items scrolable overflow-y-scroll h-full overflow-x-hidden">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'sideNav',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.side-nav {
  background-color: var(--bg-light);
}
</style>
