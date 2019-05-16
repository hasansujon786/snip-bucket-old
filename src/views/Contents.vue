<template>
  <section class="default-layout max-h-screen h-screen">
    <!-- Navbar -->
    <nav-bar v-if="true" :handleShrinkMenu="handleShrinkMenu" class="border-b-2 border-gray-300">
      <search-box class="mr-6" :allitemArr="allitemArr"></search-box>
      <theme-button class="mr-6"></theme-button>
    </nav-bar>

    <popup-menu v-if="showPopup" :showPinMenu="showPinMenu" @save="getPinnedItems"></popup-menu>
    <section
      v-if="true"
      class="flex flex-1 h-full max-h-full relative"
      style="height: calc(100% - 82px);"
    >
      <!-- left sidebar -->
      <side-nav class="relative">
        <list-lang
          v-for="(lang, i) in pinnedItems"
          :key="i"
          :slug="lang.slug"
          :langName="lang.title"
          :langDetail="lang.detail"
          :logo="lang.logo"
          :isShrink="isLeftMenuShrink"
        ></list-lang>
        <!-- actions -->
        <sidebarActions :showPinMenu="showPinMenu" />
      </side-nav>

      <!-- content page -->
      <div class="w-full">
        <div class="scrolable overflow-y-scroll h-full">
          <router-view
            :makeReqToApiForContent="makeReqToApiForContent"
            :response="response"
          ></router-view>
        </div>
      </div>
      <!-- content end -->

      <!-- right sidebar -->
      <side-nav>
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
import sidenavActionsVue from '@/components/sidenavActions.vue'
import PopupMenuVue from '@/components/PopupMenu.vue'
import ThemeToggleButtonVue from '@/components/ThemeToggleButton.vue'

export default {
  name: 'Contents-page',
  data() {
    return {
      pinnedItems: [],
      allLanguags: [],
      response: {},
      isLeftMenuShrink: false,
      searchArr: ['one', 'two', 'there', 'four', 'five', 'six'],
      searchQuery: '',
      allitemArr: [],
      showPopup: false
    }
  },
  components: {
    sideNav: SideNav,
    navBar: Navbar,
    listLang: ListLang,
    listTopic: ListTopic,
    searchBox: SearchBoxVue,
    sidebarActions: sidenavActionsVue,
    popupMenu: PopupMenuVue,
    themeButton: ThemeToggleButtonVue
  },
  methods: {
    getPinnedItems() {
      let jsondata = [
        {
          id: '01',
          slug: 'html',
          title: 'HTML',
          detail: 'Usefull HTML cheetsheet',
          logo: 'html'
        },
        {
          id: '02',
          slug: 'css',
          title: 'CSS',
          detail: 'Usefull CSS cheetsheet',
          logo: 'css'
        },
        {
          id: '03',
          slug: 'js',
          title: 'JavaScript',
          detail: 'Usefull JS cheetsheet',
          logo: 'js'
        }
      ]
      const pinnedItems = JSON.parse(localStorage.getItem('pinnedItems'))
      if (pinnedItems && pinnedItems.length) {
        this.pinnedItems = pinnedItems
      } else {
        this.pinnedItems = jsondata
        localStorage.setItem('pinnedItems', JSON.stringify(jsondata))
      }
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
    },
    showPinMenu(bool) {
      this.showPopup = bool
    }
  },
  created() {
    // this.makeReqToLangList()
    this.getPinnedItems()
  }
}
</script>
