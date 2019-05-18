<template>
  <section class="contents-child pb-12 min-h-full md:px-5">
    <div v-if="response.title">
      <!-- lang title -->
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
          <prism contenteditable class="rounded-lg" :language="item.type">{{ item.code }}</prism>
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

<style scoped>
.contents-child {
  background-color: var(--bg-deem);
}
.code {
  background-color: var(--bg-light);
  max-width: 720px;
}
</style>
