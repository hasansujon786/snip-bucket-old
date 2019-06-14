<template>
  <li class="listLanguage w-full" style="max-width: 220px;">
    <router-link
      :to="{ name: 'contents-child', params: { lang: slug } }"
      class="border-b border-app-border py-5 px-3 inline-flex items-center w-full"
    >
      <figure class="w-10 h-10">
        <img
          class="object-contain w-full h-full"
          :src="require(`@/assets/img/lang/${logo}.svg`)"
          :alt="langName"
        />
      </figure>
      <div class="pl-3 w-40" v-show="isShrink">
        <h3 class="text-sm text-gray-900 font-semibold">{{ langName }}</h3>
        <p class="text-xs text-gray-600">{{ langDetail }}</p>
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
  &:hover {
    background-color: var(--bg-deem-100);
  }
}
</style>
