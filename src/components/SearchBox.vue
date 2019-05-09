<template>
  <form @submit.prevent="search" class="mr-40 relative w-1/2">
    <input
      class="input border z-10 relative py-3 text-sm px-5 text-gray-500 w-full outline-none rounded-lg  bg-white shadow focus:text-gray-600"
      placeholder='Search the docs (Press " Ctrl + / " to focus)'
      type="text"
      v-model="searchQuery"
      ref="searchInput"
    />
    <div
      class="result-bar absolute border overflow-y-scroll z-0 -mt-2 pt-3 rounded-t-none text-gray-600 px-4 pb-2 rounded-lg w-full shadow bg-white hidden"
    >
      <a
        v-for="(item, i) in filteredArray"
        :key="i"
        @click="handleExit(item)"
        @keyup.enter="handleExit(item)"
        class="text-sm mb-2 block cursor-pointer"
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
      this.searchQuery = ''
      item = item
        .toLowerCase()
        .split(' ')
        .join('')

      let el = document.getElementById(item)
      el.scrollIntoView()
      el.classList.toggle('search-text-highlight')
      setTimeout(() => {
        el.classList.toggle('search-text-highlight')
      }, 400)
    },
    search() {
      let el = document.getElementById(this.searchQuery)
      if (el) {
        this.searchQuery = ''
        el.scrollIntoView()
      }
    },
    focusSearch(e) {
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
    document.addEventListener('keyup', this.focusSearch)
  },
  destroyed() {
    document.removeEventListener('keyup', this.focusSearch)
  }
}
</script>

<style lang="scss" scoped>
input:not(:placeholder-shown) ~ .result-bar {
  display: block;
}
// input:focus ~ .result-bar {
//   display: block;
// }
.result-bar {
  max-height: 250px;
}
</style>
