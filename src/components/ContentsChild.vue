<template>
  <section style="" class="contents-child p-6">
    <div v-for="(lang, i) in allSnippets" :key="i" class="code  bg-white shadow p-5 rounded">
      <h4 class="font-semibold">{{ lang.title }}</h4>
      <prism contenteditable class="code__block " language="javascript">{{ lang.code }}</prism>
    </div>
  </section>
</template>

<script>
import 'prismjs'
import 'prismjs/themes/prism.css'
import Prism from 'vue-prism-component'

export default {
  name: 'contents-child',
  data() {
    return {
      allSnippets: [],
      code:
        "routes =     {\n      path: '/404',\n      name: '404',\n      component: require('./views/_404').default\n    },\n    // Redirect any unmatched routes to the 404 page.\n    {\n      path: '*',\n      redirect: '404'\n    }"
    }
  },
  methods: {
    makeReqToApi() {
      let lang = this.$route.params.lang
      fetch(`https://raw.githubusercontent.com/hasansujon786/the-doc/master/data/lang/${lang}.json`)
        .then(response => {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status)
            return
          }
          // Examine the text in the response
          response.json().then(data => {
            this.allSnippets = data
          })
        })
        .catch(err => {
          console.log('Fetch Error :-S', err)
        })
    }
  },
  created() {
    this.makeReqToApi()
    console.log(this.$route.params)
    console.log('contentChild creted')
  },
  destroyed() {
    console.log('contentChild destroyed')
  },
  components: {
    Prism
  }
}
</script>

<style lang="scss" scoped>
.code {
  max-width: 600px;
  &:hover &__block::-webkit-scrollbar-thumb {
    background-color: rgb(194, 194, 194);
  }
  &__block {
    &::-webkit-scrollbar {
      height: 3px;
    }

    &::-webkit-scrollbar-track {
      background: #e2e8f0;
    }

    &::-webkit-scrollbar-thumb {
      background: #e2e8f0;
    }
  }
}
</style>
