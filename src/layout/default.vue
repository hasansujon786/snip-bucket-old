<template>
  <div ref="layout" class="default-layout h-screen" :style="'--scoll-bg-l: ' + scrollBgL">
    <Navbar class="border-b-2 border-gray-300" />
    <section class="flex h-full" style="max-height: calc(100vh - 81px);">
      <side-nav>
        <list-lang
          v-for="lang in allLanguags"
          :key="lang.name"
          :langName="lang.name"
          :langDetail="lang.detail"
          :slug="lang.slug"
          :image="lang.imgae"
        ></list-lang>
      </side-nav>

      <!-- content -->
      <div class="flex-1">
        <div class="scrolable overflow-y-scroll h-full">
          <slot></slot>
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

export default {
  name: 'default-layout',
  data() {
    return {
      allLanguags: []
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
    Navbar,
    listLang: ListLang
  },
  methods: {
    makeReqToApi() {
      fetch('https://raw.githubusercontent.com/hasansujon786/the-doc/master/data/index.json')
        .then(response => {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status)
            return
          }
          // Examine the text in the response
          response.json().then(data => {
            console.log(data)
            this.allLanguags = data
          })
        })
        .catch(err => {
          console.log('Fetch Error :-S', err)
        })
    }
  },
  created() {
    this.makeReqToApi()
  }
}
</script>

<style lang="scss" scoped></style>
