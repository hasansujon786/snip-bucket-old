<template>
  <nav class="navbar w-full flex items-center justify-between flex-wrap bg-white p-4">
    <!-- brand -->
    <router-link to="/contents" class="flex items-center flex-no-shrink text-black mr-6">
      <svg
        class="fill-current h-8 w-8 mr-2"
        width="54"
        height="54"
        viewBox="0 0 54 54"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
        />
      </svg>
      <span class="font-semibold text-3xl">dev's note</span>
    </router-link>
    <!-- brand end -->

    <!-- menu toggle button -->
    <label
      for="menu"
      class="flex block lg:hidden items-center px-3 py-2 border rounded text-gray-500 border-gray-500 hover:text-gray-700 hover:border-gray-700"
    >
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
      </svg>
    </label>
    <input type="checkbox" name="menu" id="menu" class="menuInput hidden" checked />
    <!-- menu toggle button end -->

    <div class="navbar__links w-full block flex-grow lg:items-center lg:w-auto">
      <!-- Nav Links -->
      <div class="text-sm lg:flex-grow">
        <router-link
          v-for="(link, i) in links"
          :key="i"
          :to="{ name: link.pageName }"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-400 hover:text-teal-600 mr-4"
        >
          {{ link.name }}
        </router-link>
      </div>
      <!-- Nav Links end -->

      <!-- search box -->

      <form @submit.prevent="search" class="mr-40 w-1/2">
        <input
          class="border border-gray-300 bg-gray-100 py-3 text-sm px-5 text-gray-500 focus:text-gray-600 w-full outline-none rounded-lg focus:border-gray-400"
          placeholder='Search the docs (Press "/" to focus)'
          type="text"
          v-model="searchQuery"
        />
      </form>

      <!-- search box end -->

      <!-- Download button -->
      <div>
        <button
          class="inline-block  px-4 py-2  border rounded leading-none  bg-gray-300 border-gray-300  hover:bg-gray-400 mt-4 lg:mt-0"
        >
          <span class="text-sm font-semibold text-gray-l00">
            Offline
          </span>
        </button>
      </div>
      <!-- Download button end -->
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
      searchQuery: '',
      links: [
        {
          name: 'About',
          pageName: 'about'
        },
        {
          name: 'Youtube',
          pageName: 'youtube'
        }
      ]
    }
  },
  methods: {
    search() {
      alert(this.searchQuery)
    }
  }
}
</script>

<style lang="scss" scoped>
.menuInput:checked + .navbar__links {
  display: none;
}

@media screen and (min-width: 1024px) {
  .navbar__links {
    display: flex !important;
  }
}
</style>
