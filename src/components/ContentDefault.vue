<template>
  <div class="contentDefault h-full">
    <div class="text-center font-mono pt-20">
      <h1 class="text-4xl text-gray-900 tracking-tighter">snip bucket</h1>
      <h2 class="text-sm font-bold tracking-wide text-gray-500 mb-2">
        A effort to do something good
      </h2>

      <div class="code my-6 mx-auto p-5 rounded shadow border">
        <textarea
          ref="textarea"
          v-model="code"
          class="bg-gray-500 rounded-lg w-full p-3 border focus:outline-none"
          rows="10"
        ></textarea>
        <div class="flex items-center mt-3">
          <ui-button @click="copyCode">Copy</ui-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contentDefault',
  data() {
    return {
      code: ''
    }
  },
  methods: {
    copyCode() {
      let code = JSON.stringify(this.code)
      this.$refs.textarea.value = code
      this.$refs.textarea.select()
      document.execCommand('copy')
    }
  }
}
</script>

<style lang="scss" scoped>
.contentDefault {
  background-color: var(--bg-deem);
}

.code {
  background-color: var(--bg-light);
  max-width: 720px;
}
</style>
