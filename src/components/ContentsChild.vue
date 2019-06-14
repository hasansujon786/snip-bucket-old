<template>
  <section class="contents-child pb-12 min-h-full md:px-5">
    <div v-if="response.title">
      <!-- lang title -->
      <div class="text-center font-mono pb-5 pt-6">
        <h1 :style="{ color: response.theme }" class="text-4xl tracking-tighter">
          {{ response.title }}
        </h1>
        <p class="text-sm font-bold tracking-wide text-gray-700 mb-2">
          {{ response.description }}
        </p>
      </div>

      <!-- code block -->
      <div
        class="code my-6 mx-auto p-5 rounded shadow border border-app-border"
        v-for="(topic, i) in response.topics"
        :key="i"
      >
        <h4
          class=" text-xl mb-6 text-gray-900 border-l-4 pl-3 py-2"
          :style="{ 'border-color': response.theme }"
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
            class="text-sm text-gray-600 mb-3 font-semibold"
            :id="
              item.description
                .toLowerCase()
                .split(' ')
                .join('')
            "
          >
            {{ item.description }}
          </p>
          <prism class="rounded-lg" :language="item.type">{{ item.code }}</prism>
          <br />
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
/* h4 {
  @apply border-blue-theme !important;
} */
</style>
