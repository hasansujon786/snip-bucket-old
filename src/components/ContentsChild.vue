<template>
  <section class="contents-child">
    <div
      v-for="(snip, i) in allSnippets"
      :key="i"
      class="code bg-white my-6 mx-auto shadow p-5 rounded"
    >
      <h4 class="font-semibold">{{ snip.title }}</h4>
      <prism contenteditable class="code__block " language="javascript">{{ snip.code }}</prism>
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
      code: ''
    }
  },
  methods: {
    makeReqToApi(lang) {
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
  watch: {
    '$route.params.lang': {
      handler(lang) {
        this.makeReqToApi(lang)
      },
      deep: true,
      immediate: true
    }
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
