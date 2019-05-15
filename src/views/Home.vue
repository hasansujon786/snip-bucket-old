<template>
  <section class="home h-screen overflow-y-scroll">
    <router-link
      class="float-right p-3 text-sm font-semibold text-gray-600 hover:text-blue-600"
      :to="{ name: 'contents-child', params: { lang: this.appRoute } }"
      >Open app</router-link
    >
    <div class="text-center font-mono pt-20">
      <h1 class="text-4xl tracking-tighter">snip bucket</h1>
      <p class="text-sm font-bold tracking-wide text-gray-500">
        A effort to do something good
      </p>
    </div>

    <!-- search box -->
    <div class="px-4">
      <form
        @submit.prevent="gotoFirstResult"
        class="relative text-center mt-12 max-w-xl text-gray-600 mx-auto w-full"
      >
        <input
          type="text"
          class="search-input border w-full rounded-full font-semibold py-3 px-6 shadow transition-fast focus:outline-none focus:shadow-outline"
          placeholder="Search here"
          v-model="searchQuery"
        />
        <i
          class="search-icon opacity-50 text-gray-900 stroke-current mr-5 right-0 absolute z-30 abs-center-h"
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
      </form>
    </div>

    <!-- search box end -->

    <div class="langeag-block sm:w-5/6 mx-auto mt-16">
      <div class="text-center font-semibold text-gray-500" v-if="!filteredLangList.length">
        <p>No result for "{{ searchQuery }}"</p>
      </div>

      <div class="px-2">
        <div class="flex -mx-2 flex-wrap justify-center">
          <div
            v-for="(lang, i) in filteredLangList"
            :key="i"
            class="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 px-2 flex justify-center"
          >
            <router-link
              :to="{ name: 'contents-child', params: { lang: lang.slug } }"
              class="inline-flex justify-center items-center flex-col shadow w-40 h-48 p-2 border shadow text-center hover:shadow-lg"
            >
              <figure class="w-16 h-16">
                <img
                  class="object-cover w-full h-full"
                  :src="require(`@/assets/img/lang/${lang.logo}.png`)"
                  :alt="lang.title"
                />
              </figure>
              {{ lang.title }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'home',
  data() {
    return {
      allLanguags: [],
      searchQuery: '',
      appRoute: 'react'
    }
  },
  computed: {
    filteredLangList() {
      return this.allLanguags.filter(lang => {
        return lang.title.toLowerCase().match(this.searchQuery.toLowerCase())
      })
    }
  },
  methods: {
    gotoFirstResult() {
      if (!this.searchQuery || !this.filteredLangList.length) return

      this.$router.push({ name: 'contents-child', params: { lang: this.filteredLangList[0].slug } })
    },
    getPinnedItems() {
      const pinnedItems = JSON.parse(localStorage.getItem('pinnedItems'))
      if (pinnedItems && pinnedItems.length) {
        this.appRoute = pinnedItems[0].slug
      }
    }
  },
  created() {
    axios
      .get('/data/index.json')
      .then(response => {
        this.allLanguags = response.data
      })
      .catch(err => {
        console.log(err)
      })

    this.getPinnedItems()
  }
}
</script>

<style lang="scss" scoped>
.home {
  background-color: var(--bg-deem);
}
.search-input {
  background-color: var(--bg-deem-100);
  // background-color: var(--bg-light);
}
</style>
