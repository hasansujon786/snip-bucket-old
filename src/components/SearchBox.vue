<template>
  <form @submit.prevent="search" class="relative w-2/3 lg:w-1/2 z-50">
    <search-input
      class="input z-20"
      placeholder='Search here (Press "/" to focus)'
      v-model="searchQuery"
    ></search-input>
    <div
      v-show="searchQuery"
      class="result-bar border text-gray-600 bg-white absolute w-full rounded top-0 mt-5"
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
import SearchInput from '@/components/SearchInput.vue'

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
  components: {
    searchInput: SearchInput
  }
}
</script>

<style lang="scss" scoped>
.result-bar {
  background-color: var(--bg-deem-100);
  a:first-child {
    margin-top: 2rem;
  }
}
</style>
