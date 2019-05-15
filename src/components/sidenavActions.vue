<template>
  <div
    class="absolute border-r-3 bg-white w-full bottom-0 flex justify-srart items-center border py-6 px-4 stroke-current"
  >
    <button @click="pin">
      <svg width="32" height="32" viewBox="0 0 32 32">
        <defs>
          <clipPath id="a"><rect width="32" height="32" fill="none" /></clipPath>
        </defs>
        <g clip-path="url(#a)">
          <path
            d="M11.294,27.69a13.1,13.1,0,0,1-2.882-1.251l-.3.3a1.882,1.882,0,0,1-2.662,0l-2.07-2.07a1.882,1.882,0,0,1,0-2.662l.3-.3a13.1,13.1,0,0,1-1.251-2.882H1.882A1.882,1.882,0,0,1,0,16.941V13.176a1.882,1.882,0,0,1,1.882-1.882h.546A13.1,13.1,0,0,1,3.679,8.412l-.3-.3a1.882,1.882,0,0,1,0-2.662l2.07-2.07a1.882,1.882,0,0,1,2.662,0l.3.3a13.1,13.1,0,0,1,2.882-1.251V1.882A1.882,1.882,0,0,1,13.176,0h3.765a1.882,1.882,0,0,1,1.882,1.882v.546a13.1,13.1,0,0,1,2.882,1.251l.3-.3a1.882,1.882,0,0,1,2.662,0l2.07,2.07a1.882,1.882,0,0,1,0,2.662l-.3.3a13.1,13.1,0,0,1,1.251,2.882h.546a1.882,1.882,0,0,1,1.882,1.882v3.765a1.882,1.882,0,0,1-1.882,1.882H27.69a13.1,13.1,0,0,1-1.251,2.882l.3.3a1.882,1.882,0,0,1,0,2.662l-2.07,2.07a1.882,1.882,0,0,1-2.662,0l-.3-.3a13.1,13.1,0,0,1-2.882,1.251v.546a1.882,1.882,0,0,1-1.882,1.882H13.176a1.882,1.882,0,0,1-1.882-1.882V27.69Z"
            transform="translate(0.941 0.941)"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="1"
          />
          <circle
            cx="7.529"
            cy="7.529"
            r="7.529"
            transform="translate(8.471 8.471)"
            fill="none"
            stroke-miterlimit="10"
            stroke-width="1"
          />
        </g>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: 'sidenavActions',
  data() {
    return {}
  },
  props: {
    pin: {
      type: Function,
      required: true
    }
  }
}
</script>
