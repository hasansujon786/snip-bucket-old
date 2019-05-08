<template>
  <div
    @keydown.space.prevent="updateActivePlan"
    @click="updateActivePlan"
    :class="{ 'bg-green-200 outline': isActive }"
    class="selecteblePlan p-5 flex flex-col bg-white shadow  w-48 h-48 rounded-lg cursor-pointer hover:bg-green-200 focus:outline mb-6"
    tabindex="0"
  >
    <div class="selecteblePlan__top flex justify-between items-center ">
      <h3 class="uppercase py-2 font-bold">{{ planName }}</h3>
      <div class="selecteblePlan__icon">
        <svg
          v-if="isActive"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="30"
          height="30"
        >
          <path
            fill="rgb(162,238,194)"
            stroke="none"
            d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15Z"
          />
          <path
            fill="none"
            stroke="rgb(18,40,58)"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-opacity="0.74901962"
            transform="translate(9 10.175)"
            d="M0 4.32L2.88 9.12L12 0"
          />
        </svg>
      </div>
    </div>
    <div class="flex flex-grow items-end">
      <h2 class="text-6xl leading-none pr-2">4</h2>
      <h3 class="text-4xl">GB</h3>
    </div>
    <div class="selecteblePlan__bottom text-3xl tracking-wide font-medium">
      <span class="yo">$</span>
      <span>3</span>
      <span class="text-base yo">/mo</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'selecteblePlan',
  model: {
    prop: 'activeCard',
    event: 'changePlan'
  },

  props: {
    planName: {
      type: String
    },
    activeCard: {
      type: String,
      default: 'none'
    }
  },
  computed: {
    isActive() {
      return this.activeCard == this.planName
    }
  },
  methods: {
    updateActivePlan() {
      this.$emit('changePlan', this.planName)
    }
  }
}
</script>

<style lang="scss" scoped>
.yo {
  color: hsl(207, 66%, 31%);
}
.selecteblePlan {
  // outline: none;
}
</style>
