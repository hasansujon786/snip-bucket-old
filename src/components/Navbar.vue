<template>
  <nav class="navbar w-full flex items-center justify-between flex-wrap bg-white py-4 px-3">
    <!-- sideNav toggle button -->
    <button
      @click="handleShrinkMenu('left')"
      class="left-btn text-green-900 on-active-gray w-12 h-12 mr-2 flex items-center justify-center rounded-full focus:outline-none"
    >
      <svg class="stroke-current" width="26" height="22" viewBox="0 0 32 22">
        <g transform="translate(-25 -25.444)">
          <path
            d="M0,.5H30"
            transform="translate(26 25.944)"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="2"
          />
          <path
            d="M0,.5H30"
            transform="translate(26 35.942)"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="2"
          />
          <path
            d="M0,.5H30"
            transform="translate(26 45.944)"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="2"
          />
        </g>
      </svg>
    </button>

    <!-- brand -->
    <router-link to="/" class="text-gray-900 mr-6">
      <span class="font-semibold font-mono text-2xl tracking-tighter">snip bucket</span>
    </router-link>
    <!-- brand end -->

    <!-- Navbar toggle button -->
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
    <!-- navbar toggle button end -->

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
      <slot></slot>
      <!-- search box end -->

      <!-- Download button -->
      <section class="flex items-center text-gray-900">
        <ui-button :rounded="false" color="gray">Ofline Manage</ui-button>
      </section>
      <!-- Download button end -->
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
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
  props: {
    handleShrinkMenu: {
      type: Function,
      required: false
    }
  },
  methods: {},
  components: {}
}
</script>

<style lang="scss" scoped>
.navbar {
  background-color: var(--bg-light);
}
.menuInput:checked + .navbar__links {
  display: none;
}

@media screen and (min-width: 1024px) {
  .navbar__links {
    display: flex !important;
  }
}
</style>
