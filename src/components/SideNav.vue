<template>
  <div class="side-nav  bg-white border-gray-300 flex hidden lg:block">
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
