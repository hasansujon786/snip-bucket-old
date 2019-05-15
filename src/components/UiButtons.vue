<template>
  <button
    v-on="$listeners"
    class="btn border-2 px-5 py-2 rounded-full font-semibold text-sm focus:outline-none"
    :class="color"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'uiButtons',
  props: {
    color: {
      type: String,
      default: 'gray'
    }
  }
}
</script>

<style scoped>
.btn {
  color: white;
  transition: all 150ms ease-out;
}
.btn:active {
  filter: saturate(150%);
  color: rgba(255, 255, 255, 0.7);
  border-color: rgba(28, 25, 34, 0.3) !important;
}
.btn:focus {
  border-color: rgba(28, 25, 34, 0.3) !important;
}

.btn.gray {
  color: #9c9b9b;
  /* background: #fff; */
}
.btn.gray:active {
  background-color: #e2e5eb;
}
.btn.red {
  @apply bg-red-500 border-red-500;
}
.btn.blue {
  @apply bg-blue-500 border-blue-500;
}
.btn.green {
  @apply bg-green-500 border-green-500;
}
.btn.teal {
  @apply bg-teal-500 border-teal-500;
}
</style>
