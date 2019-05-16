<template>
  <button
    v-on="$listeners"
    class="btn border-2 px-5 py-2 font-semibold rounded-lg text-sm focus:shadow-outline focus:outline-none"
    :class="[color, { 'rounded-full': rounded }]"
  >
    <span class="text-content">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'uiButtons',
  props: {
    color: {
      type: String,
      default: 'default'
    },
    rounded: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped lang="scss">
.btn {
  color: #fff;
  transition: all 150ms ease-out;

  &:active {
    filter: brightness(90%);
    .text-content {
      opacity: 0.6;
    }
  }
}

.btn.default {
  @apply text-gray-500 border-gray-500;
}

.btn.gray {
  @apply bg-gray-500 border-gray-500;
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
  @apply bg-teal-400 border-teal-400;
}

.btn.pink {
  @apply bg-pink-500 border-pink-500;
}
</style>
