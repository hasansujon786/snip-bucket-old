<template>
  <!-- bg-gray-110 -->
  <section class="contents-child pb-12 min-h-full">
    <div v-if="response.title">
      <!-- title -->
      <div class="text-center font-mono pt-6">
        <h1 class="text-4xl text-gray-900 tracking-tighter">{{ response.title }}</h1>
        <p class="text-sm font-bold tracking-wide text-gray-600 mb-2">{{ response.description }}</p>
      </div>

      <!-- code block -->
      <div
        class="code my-6 mx-auto p-5 rounded shadow border"
        v-for="(topic, i) in response.topics"
        :key="i"
      >
        <h4
          class="font-semibold mb-6 text-gray-900"
          :id="
            topic.title
              .toLowerCase()
              .split(' ')
              .join('')
          "
        >
          {{ topic.title }}
        </h4>
        <div v-for="(item, i) in topic.items" :key="i">
          <p
            class="text-sm text-gray-600"
            :id="
              item.description
                .toLowerCase()
                .split(' ')
                .join('')
            "
          >
            {{ item.description }}
          </p>
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
.contents-child {
  background-color: var(--bg-deem);
}
.code {
  background-color: var(--bg-light);
  max-width: 720px;
  &:hover &__block::-webkit-scrollbar-thumb {
    background-color: rgb(194, 194, 194);
  }
  &__block {
    // background-color: rgb(255, 251, 251);
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
