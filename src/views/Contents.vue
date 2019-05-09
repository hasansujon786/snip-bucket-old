<template>
  <div ref="layout" class="default-layout h-screen" :style="'--scoll-bg-l: ' + scrollBgL">
    <!-- Navbar -->
    <nav-bar :handleShrinkMenu="handleShrinkMenu" class="border-b-2 border-gray-300">
      <search-box :allitemArr="allitemArr"></search-box>
    </nav-bar>

    <section class="flex h-full" style="max-height: calc(100vh - 81px);">
      <!-- left sidebar -->
      <side-nav style="" class="">
        <list-lang
          v-for="lang in allLanguags"
          :key="lang.slug"
          :slug="lang.slug"
          :langName="lang.name"
          :langDetail="lang.detail"
          :logo="lang.logo"
          :isShrink="isLeftMenuShrink"
        ></list-lang>
      </side-nav>

      <!-- content page -->
      <div class="flex-1">
        <div class="scrolable overflow-y-scroll h-full">
          <router-view
            :makeReqToApiForContent="makeReqToApiForContent"
            :response="response"
            :contents="searchArr"
          ></router-view>
        </div>
      </div>
      <!-- content end -->

      <side-nav>
        <list-lang v-for="(item, i) in 12" :key="i"></list-lang>
      </side-nav>
    </section>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import SideNav from '@/components/SideNav.vue'
import ListLang from '@/components/ListLang.vue'
import SearchBoxVue from '@/components/SearchBox.vue'

export default {
  name: 'Contents-page',
  data() {
    return {
      allLanguags: [],
      response: {},
      isLeftMenuShrink: false,
      searchArr: ['one', 'two', 'there', 'four', 'five', 'six'],
      searchQuery: '',
      allitemArr: []
    }
  },
  props: {
    scrollBgL: {
      type: String,
      default: 'white'
    }
  },
  components: {
    sideNav: SideNav,
    navBar: Navbar,
    listLang: ListLang,
    searchBox: SearchBoxVue
  },
  methods: {
    makeReqToLangList() {
      fetch('https://raw.githubusercontent.com/hasansujon786/the-doc/master/data/index.json')
        .then(response => {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status)
            return
          }
          // Examine the text in the response
          response.json().then(data => {
            this.allLanguags = data
          })
        })
        .catch(err => {
          console.log('Fetch Error :-S', err)
        })
    },
    makeReqToApiForContent(lang) {
      // this.test = this.fetchNow()
      fetch(`https://raw.githubusercontent.com/hasansujon786/the-doc/master/data/lang/${lang}.json`)
        .then(response => {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status)
            return
          }
          // Examine the text in the response
          response.json().then(data => {
            this.response = data
            this.makeAllContentsToAnArr()
          })
        })
        .catch(err => {
          console.log('Fetch Error :-S', err)
        })
    },
    handleShrinkMenu(side) {
      if (side === 'left') {
        this.isLeftMenuShrink = !this.isLeftMenuShrink
      }
    },
    makeAllContentsToAnArr() {
      this.allitemArr = []
      this.response.contents.forEach(content => {
        this.allitemArr.push(content.title)
        content.items.forEach(item => {
          this.allitemArr.push(item.definition)
        })
      })
    }
  },
  computed: {},
  created() {
    this.makeReqToLangList()
  },
  mounted() {}
}
</script>

<style lang="scss" scoped></style>
