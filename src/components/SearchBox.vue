<template>
  <form @submit.prevent="search" class="mr-40 w-1/2">
    <input
      class="border border-gray-300 bg-gray-100 py-3 text-sm px-5 text-gray-500 focus:text-gray-600 w-full outline-none rounded-lg focus:border-gray-400"
      placeholder='Search the docs (Press "/" to focus)'
      type="text"
      @input="handleInput"
      v-model="searchQuery"
      ref="searchInput"
    />
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
  methods: {
    handleInput() {
      this.$emit('handle-input', this.searchQuery)
    },
    search() {
      alert(this.searchQuery)
    },
    focusSearch(e) {
      if (e.keyCode == 191 && e.ctrlKey) {
        this.$refs.searchInput.focus()
      }
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

<style lang="scss" scoped></style>
