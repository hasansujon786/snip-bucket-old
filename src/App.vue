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
html {
  // overflow: hidden;
}
.search-text-highlight {
  background: #68d391;
  color: white;
}

@supports (scrollbar-width: thin) {
  .scrolable {
    scrollbar-width: thin;
  }
}

.dbug {
  *:not(path):not(g) {
    /*! debug.css | MIT License | zaydek.github.com/debug.css */
    color: hsla(210, 100%, 100%, 0.9) !important;
    background: hsla(210, 100%, 50%, 0.5) !important;
    outline: solid 0.25rem hsla(210, 100%, 100%, 0.5) !important;

    box-shadow: none !important;
  }
}

.on-active-gray {
  &:active {
    background: #e2e8f071;
  }
}

.disable-select {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.abs-center-h {
  top: 50%;
  transform: translateY(-50%);
}

.transition-fast {
  transition: all 0.1s ease-in-out;
}
.border-r-3 {
  border-right-width: 3px;
}
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
}

/* --------------- Dark mode --------------- */
.app[data-theme='dark'] {
  --bg-deem-100: #202a38;
  --bg-deem: #1c2532;
  --bg-light: #283243;
  *,
  *::before,
  *::after {
    border-color: #293d5a;
  }
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
