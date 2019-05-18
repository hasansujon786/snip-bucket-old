<template>
  <div class="relative text-gray-600">
    <input
      type="text"
      ref="searchInput"
      class="search-input border w-full rounded-full font-semibold py-3 px-6 shadow transition-fast focus:outline-none focus:shadow-outline"
      @input="updateOnIput($event.target.value)"
      v-bind="$attrs"
    />
    <span class="mr-5 right-0 absolute z-30 abs-center-h">
      <div
        role="button"
        class=" focus:text-red-600 hover:text-red-600"
        v-show="$attrs.value"
        @click="clearVal"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-x"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </div>
      <i v-show="!$attrs.value" class="search-icon opacity-50 stroke-current ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-search"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'searchInput',
  methods: {
    updateOnIput(data) {
      this.$emit('input', data)
    },
    clearVal() {
      this.$emit('input', '')
    },
    focusOnSearchBar(e) {
      if (e.keyCode == 191) {
        // && e.ctrlKey
        this.$refs.searchInput.focus()
      }
    }
  },

  mounted() {
    document.addEventListener('keyup', this.focusOnSearchBar)
  },
  destroyed() {
    document.removeEventListener('keyup', this.focusOnSearchBar)
  }
}
</script>

<style lang="scss" scoped>
.search-input {
  background-color: var(--bg-deem-100);
}
</style>
