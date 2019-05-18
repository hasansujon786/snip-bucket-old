<template>
  <button
    v-on="$listeners"
    class="btn border-2 px-5 py-2 font-semibold rounded-lg text-sm tracking-wider focus:shadow-outline focus:outline-none"
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

.btn.blue {
  background-color: #2680EB;
  border-color: #2680EB;
}

</style>
