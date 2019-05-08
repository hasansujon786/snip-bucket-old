<template>
  <div
    class="side-nav bg-white block border-r-3 border-gray-300 flex hidden lg:block"
    style="flex: 0 0 250px"
  >
    <ul class="nav-items overflow-y-scroll h-full">
      <li v-for="(item, i) in 11" :key="i" class="hover:bg-gray-300">
        <router-link to="/about" class="border-b p-4 inline-block">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit
        </router-link>
      </li>
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
.border-r-3 {
  border-right-width: 3px;
  &:hover {
    border-right-width: 0px;
  }
}

.side-nav:hover .nav-items::-webkit-scrollbar {
  width: 3px;
}

.nav-items {
  &::-webkit-scrollbar {
    width: 0px;
  }

  &::-webkit-scrollbar-track {
    background: #e2e8f0;
  }

  &::-webkit-scrollbar-thumb {
    // background: #d8dde4;
    background-color: tomato;
  }
}
</style>
