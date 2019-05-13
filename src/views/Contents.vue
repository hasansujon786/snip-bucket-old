<template>
  <section
    class="default-layout bg-blue-400 max-h-screen h-screen"
    :style="'--scoll-bg-l: ' + scrollBgL"
  >
    <!-- Navbar -->
    <nav-bar v-if="true" :handleShrinkMenu="handleShrinkMenu" class="border-b-2 border-gray-300">
      <search-box :allitemArr="allitemArr"></search-box>
    </nav-bar>

    <section v-if="true" class="flex flex-1 h-full max-h-full" style="height: calc(100% - 82px);">
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
      <div class="w-full">
        <div class="scrolable overflow-y-scroll h-full">
          <router-view
            :makeReqToApiForContent="makeReqToApiForContent"
            :response="response"
            :contents="searchArr"
          ></router-view>
        </div>
      </div>
      <!-- content end -->

      <!-- right sidebar -->
      <side-nav style="max-width: 220px;">
        <list-topic :topics="response.topics"></list-topic>
      </side-nav>
    </section>
  </section>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import SideNav from '@/components/SideNav.vue'
import ListLang from '@/components/ListLang.vue'
import ListTopic from '@/components/ListTopic.vue'
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
    listTopic: ListTopic,
    searchBox: SearchBoxVue
  },
  methods: {
    makeReqToLangList() {
      // get the list of all the languages
      // fetch('https://raw.githubusercontent.com/hasansujon786/the-doc/master/data/index.json')
      fetch('/data/index.json')
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
      // active on language page page load

      // get all the content of the selected language
      // fetch(`https://raw.githubusercontent.com/hasansujon786/the-doc/master/data/lang/${lang}.json`)
      fetch(`/data/lang/${lang}.json`)
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
      // contross the sidebar to shrink or enlarge
      if (side === 'left') {
        this.isLeftMenuShrink = !this.isLeftMenuShrink
      }
    },
    makeAllContentsToAnArr() {
      // reset all previous indexes
      this.allitemArr = []
      // (i) for search Index make all random data to array
      this.response.topics.forEach(topic => {
        this.allitemArr.push(topic.title)
        topic.items.forEach(item => {
          this.allitemArr.push(item.description)
        })
      })
    }
  },
  created() {
    this.makeReqToLangList()
  }
}
</script>
