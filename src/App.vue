<template>
  <div :data-theme="theme" class="app font-sans">
    <router-view />
  </div>
</template>

<script>
import './assets/css/main.css'
export default {
  name: 'app',
  computed: {
    theme() {
      return this.isLightTheme ? 'light' : 'dark'
    },
    isLightTheme() {
      return this.$store.getters.getThemeBool
    }
  },
  created() {
    this.$store.dispatch('onAppLoadSetThemeToUserChoice')
  }
}
</script>

<style lang="scss">
.scrolable {
  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    background: #e2e8f0;
  }

  &::-webkit-scrollbar-thumb {
    background: #c1c3c7;

    &:hover {
      background-color: tomato;
    }
  }
}

/* --------------- Light mode --------------- */
.app[data-theme='light'] {
  --bg-deem-100: #f8f8f8;
  --bg-deem: #f8f8f8;
  --bg-light: #fff;
  --app-border: #e2e8f0;
}

/* --------------- Dark mode --------------- */
.app[data-theme='dark'] {
  --bg-deem-100: #202a38;
  --bg-deem: #1c2532;
  --bg-light: #283243;
  --app-border: #293d5a;
  .scrolable {
    &::-webkit-scrollbar-track {
      background: #293d5a;
    }
    &::-webkit-scrollbar-thumb {
      background: #314f7e;
      &:hover {
        background-color: tomato;
      }
    }
  }
  .text-gray-900 {
    color: #a0aec0;
  }
}
</style>
