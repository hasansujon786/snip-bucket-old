<template>
  <div id="app" class="font-sans ">
    <router-view />
  </div>
</template>

<script>
import './assets/css/main.css'
export default {
  name: 'app'
}
</script>

<style lang="scss">
body {
  overflow-y: hidden;
  max-height: 100vh;
}
.search-text-highlight {
  background: #68d391;
  color: white;
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
</style>
