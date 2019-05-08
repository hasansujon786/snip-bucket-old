<template>
  <section class="contents-child pb-12">
    <div v-if="response.title">
      <!-- title -->
      <div class="text-center font-mono mt-6">
        <h1 class="text-4xl tracking-tighter">{{ response.title }}</h1>
        <p class="text-sm font-bold tracking-wide text-gray-500 mb-2">{{ response.description }}</p>
      </div>

      <!-- code block -->
      <div
        class="code bg-white my-6 mx-auto shadow p-5 rounded"
        v-for="(cont, i) in response.contents"
        :key="i"
      >
        <h4 class="font-semibold mb-6">{{ cont.title }}</h4>
        <div v-for="(item, i) in cont.items" :key="i">
          <p class="text-sm text-gray-600">{{ item.definition }}</p>
          <prism contenteditable class="code__block rounded-lg" language="javascript">{{
            item.code
          }}</prism>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import 'prismjs'
import 'prismjs/themes/prism.css'
import Prism from 'vue-prism-component'

export default {
  name: 'contents-child',
  props: {
    response: {
      type: Object,
      required: true
    },
    makeReqToApiForContent: {
      type: Function,
      required: true
    }
  },
  watch: {
    '$route.params.lang': {
      handler(lang) {
        this.makeReqToApiForContent(lang)
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
