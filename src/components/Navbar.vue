<template>
  <nav class="navbar bug w-full flex items-center justify-between bg-white py-2 pr-3">
    <section class="flex items-center">
      <!-- sideNav toggle button -->
      <button
        @click="handleShrinkMenu('left')"
        class="left-btn ml-2 hidden md:flex text-green-900 on-active-gray w-12 h-12 mr-2 items-center justify-center rounded-full focus:outline-none"
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
        <div class="font-semibold ml-3 font-mono text-2xl tracking-tighter">
          snip_bucket
        </div>
      </router-link>
    </section>

    <!-- ---------------------------------------------------------------------------- -->

    <section class="navbar__links w-full flex-grow flex justify-end items-center w-auto">
      <!-- search box -->
      <slot></slot>

      <!-- Download button -->
      <ui-button :rounded="false" color="gray">Manage</ui-button>
    </section>
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

.navbar__links {
  & > * {
    // border: 1px solid rgb(255, 0, 0) !important;
    margin-left: 1rem;
  }
}
</style>
