<template>
  <div id="app" class="font-sans">
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
  // overflow-y: hidden;
  // background-color: #f7fafc;
}

.scrolable {
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #e2e8f0;
    border-left: 4px solid var(--scoll-bg-l, white);
    border-right: 4px solid var(--scoll-bg-r, white);
  }

  &::-webkit-scrollbar-thumb {
    background: #d8dde4;
    border-left: 3px solid var(--scoll-bg-l, white);
    border-right: 3px solid var(--scoll-bg-r, white);

    &:hover {
      background-color: tomato;
    }
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
</style>
