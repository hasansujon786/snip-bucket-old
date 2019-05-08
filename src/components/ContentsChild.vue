<template>
  <section style="" class="contents-child p-6">
    <div v-for="(lang, i) in allSnippets" :key="i" class="bg-white shadow p-5 rounded">
      <h4 class="font-semibold">{{ lang.title }}</h4>
      <code class="text-pink-300">
        {{ lang.code }}
      </code>
    </div>
  </section>
</template>

<script>
export default {
  name: 'contents-child',
  data() {
    return {
      allSnippets: []
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
  }
}
</script>

<style lang="scss" scoped></style>
