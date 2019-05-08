<template>
  <div ref="layout" class="default-layout h-screen" :style="'--scoll-bg-l: ' + scrollBgL">
    <Navbar class="border-b-2 border-gray-300" />
    <section class="flex h-full" style="max-height: calc(100vh - 81px);">
      <side-nav></side-nav>

      <!-- content -->
      <div class="flex-1">
        <div class="scrolable overflow-y-scroll h-full">
          <slot></slot>
        </div>
      </div>
      <!-- content end -->

      <side-nav></side-nav>
    </section>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import SideNav from '@/components/SideNav.vue'

export default {
  name: 'default-layout',
  props: {
    scrollBgL: {
      type: String,
      default: 'white'
    }
  },
  components: {
    sideNav: SideNav,
    Navbar
  },
  methods: {}
}
</script>

<style lang="scss" scoped></style>
