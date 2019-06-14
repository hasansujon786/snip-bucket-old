<template>
  <section class="home min-h-screen h-screen scrolable overflow-y-scroll">
    <nav class="flex sticky top-0 z-50 justify-between items-center px-3 h-16 shadow">
      <router-link to="/" class="">
        <Logo />
      </router-link>
      <!-- divide -->
      <router-link :to="{ name: 'contents-child', params: { lang: this.openBtnRoute } }">
        <ui-button :rounded="false" color="blue">Open app</ui-button>
      </router-link>
    </nav>

    <header class="pt-20 pb-12">
      <div class="text-center font-mono">
        <h1 class="text-4xl tracking-tighter text-gray-900">snip bucket</h1>
        <p class="text-sm font-bold tracking-wide text-gray-600">
          A effort to do something good
        </p>
      </div>

      <!-- search box -->
      <div class="px-4">
        <form
          @submit.prevent="gotoFirstResult"
          class="relative text-center mt-12 max-w-xl text-gray-600 mx-auto w-full"
        >
          <search-input
            placeholder='Search here (Press "/" to focus)'
            v-model="searchQuery"
          ></search-input>
        </form>
      </div>
    </header>
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
            class="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-8 px-2 flex justify-center"
          >
            <!-- card -->
            <router-link
              :to="{ name: 'contents-child', params: { lang: lang.slug } }"
              class="card-lang inline-flex text-gray-600 justify-center items-center flex-col w-40 h-48 p-2 border border-app-border text-center shadow hover:shadow-lg"
            >
              <figure class="w-16 h-16">
                <img
                  class="object-contain w-full h-full"
                  :src="require(`@/assets/img/lang/${lang.logo}.svg`)"
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
import Logo from '@/components/Logo.vue'
import SearchInput from '@/components/SearchInput.vue'
export default {
  name: 'home',
  data() {
    return {
      allLanguags: [],
      searchQuery: '',
      openBtnRoute: 'html'
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
      // (i) active on form submit
      if (!this.searchQuery || !this.filteredLangList.length) return

      this.$router.push({ name: 'contents-child', params: { lang: this.filteredLangList[0].slug } })
    },
    getPinnedItems() {
      // (i) active on app load
      // set open btn route if there is pinnedItems
      const pinnedItems = JSON.parse(localStorage.getItem('pinnedItems'))
      pinnedItems && pinnedItems.length ? (this.openBtnRoute = pinnedItems[0].slug) : ''
    }
  },
  components: {
    Logo,
    searchInput: SearchInput
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
  background-image: url('~@/assets/img/bg-bottom.png');
  background-repeat: no-repeat;
  background-position: bottom center;
}
nav {
  background-color: var(--bg-light);
}
.card-lang {
  background-color: var(--bg-deem-100);
}
</style>
