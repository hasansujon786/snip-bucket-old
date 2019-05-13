<template>
  <li class="listLanguage hover:bg-gray-200 w-full">
    <router-link
      :to="{ name: 'contents-child', params: { lang: slug } }"
      class="border-b py-5 px-3 inline-flex items-center w-full"
    >
      <figure class="w-10 h-10">
        <img
          class="object-cover w-full h-full"
          :src="require(`@/assets/img/lang/${logo}.png`)"
          :alt="langName"
        />
      </figure>
      <div class="pl-3" v-show="isShrink">
        <h3 class="text-sm font-semibold">{{ langName }}</h3>
        <p class="text-xs text-gray-500">{{ langDetail }}</p>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'listLanguage',
  props: {
    langName: {
      type: String,
      default: 'Lang Name'
    },
    langDetail: {
      type: String,
      default: 'This is a detail'
    },
    slug: {
      type: String,
      default: 'about'
    },
    logo: {
      type: String,
      default: 'default-logo'
    },
    isShrink: {
      type: Boolean,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
.listLanguage {
  max-width: 220px;
}
</style>
