<template>
  <form @submit.prevent="search" class="mr-40 relative w-1/2 z-50">
    <input
      class="input border z-10 relative py-3 transition-fast text-sm px-6 text-gray-600 w-full outline-none rounded-full bg-gray-110 shadow focus:shadow-outline-black"
      placeholder='Search the docs (Press " Ctrl + / " to focus)'
      type="text"
      v-model="searchQuery"
      ref="searchInput"
    />
    <i
      class="search-icon opacity-25  text-gray-900 stroke-current mr-5 right-0 absolute z-30 abs-center-h"
    >
      <svg width="21" height="21" viewBox="0 0 21 21">
        <g transform="translate(-408.986 -30.5)">
          <circle
            cx="8.768"
            cy="8.768"
            r="8.768"
            transform="translate(409.486 31)"
            fill="none"
            stroke-miterlimit="10"
            stroke-width="1"
          />
          <path
            d="M.5.5,5.156,5.157"
            transform="translate(424.33 45.844)"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="1"
          />
        </g>
      </svg>
    </i>

    <!-- btn-cross -->
    <button
      type="button"
      @click="searchQuery = ''"
      class="clear-btn bg-transpaent mr-3 flex items-center justify-center abs-center-h right-0 rounded-full hidden absolute z-10 w-8 on-active-gray h-8 text-gray-900  focus:outline-none focus:text-red-500 hover:text-red-500"
    >
      <svg
        class="fill-current stroke-current"
        xmlns="http://www.w3.org/2000/svg"
        width="13.414"
        height="13.414"
        viewBox="0 0 13.414 13.414"
      >
        <g transform="translate(-5.293 -5.293)">
          <path
            d="M.5,0V16.971"
            transform="translate(17.646 5.646) rotate(45)"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="1"
          />
          <path
            d="M0,.5H16.971"
            transform="translate(6.354 5.646) rotate(45)"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="1"
          />
        </g>
      </svg>
    </button>

    <div
      class="result-bar absolute border overflow-y-scroll -mt-3 rounded-t-none text-gray-600 rounded-lg w-full shadow bg-white hidden"
    >
      <a
        v-for="(item, i) in filteredArray"
        :key="i"
        @click="handleExit(item)"
        @keyup.enter="handleExit(item)"
        class="text-sm mb-1 block cursor-pointer px-4 py-1"
        tabindex="0"
      >
        {{ item }}
      </a>
    </div>
  </form>
</template>

<script>
export default {
  name: 'searchBox',
  data() {
    return {
      searchQuery: ''
    }
  },
  props: {
    allitemArr: {
      type: Array,
      required: false
    }
  },
  methods: {
    handleExit(item) {
      // (i) active when click/enter on results
      this.searchQuery = ''
      item = item
        .toLowerCase()
        .split(' ')
        .join('')

      let el = document.getElementById(item)
      el.scrollIntoView()
      setTimeout(() => {
        // highlight the searched el
        el.classList.toggle('search-text-highlight')
        setTimeout(() => el.classList.toggle('search-text-highlight'), 400)
      }, 200)
    },
    search() {
      // (i) active on from submit
      if (!this.filteredArray.length || !this.searchQuery) return

      // highligh the first result item
      this.handleExit(this.filteredArray[0])
    },
    focusOnSearchBar(e) {
      if (e.keyCode == 191 && e.ctrlKey) {
        this.$refs.searchInput.focus()
      }
    }
  },
  computed: {
    filteredArray() {
      return this.allitemArr.filter(item => {
        return item.toLowerCase().match(this.searchQuery.toLowerCase())
      })
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
input:not(:placeholder-shown) {
  & ~ .result-bar {
    display: block;
  }
  & ~ button {
    display: inline-flex;
  }

  & ~ .search-icon {
    display: none;
  }
}

.result-bar {
  max-height: 250px;
  a:first-child {
    margin-top: 1rem;
  }
}
</style>
