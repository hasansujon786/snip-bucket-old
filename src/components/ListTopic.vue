<template>
  <div class="listTopic" style="width: 220px;">
    <section class="" v-for="(topic, i) in topics" :key="i">
      <input class="hidden" type="checkbox" :id="topic.title + 'check-box'" />
      <!-- label block -->
      <label
        :style="{ color: theme }"
        class="flex justify-between items-center
        label font-semibold text-sm disable-select
        p-3 border-b border-t border-app-border
        hover:bg-gray-200 cursor-pointer"
        :for="topic.title + 'check-box'"
      >
        {{ topic.title }}
        <i class="arrow-down" style="transform: rotate(-90deg);">
          <svg class="stroke-current" width="17" height="8" viewBox="0 0 17 8">
            <g transform="translate(-4.5 -8.5)">
              <path
                d="M0,0,8,7l8-7"
                transform="translate(5 9)"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="2"
              />
            </g>
          </svg>
        </i>
      </label>

      <!-- links -->
      <ul class="link-ul text-sm text-gray-500">
        <li class="" v-for="(item, i) in topic.items" :key="i">
          <a
            @mouseover="addBorderOnHover"
            @mouseout="removeBorderOnHover"
            class="link-a pl-3 py-2 block border-l-4 border-transparent"
            :href="
              `#${item.description
                .toLowerCase()
                .split(' ')
                .join('')}`
            "
          >
            &raquo; {{ item.description }}</a
          >
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'listTopic',
  data() {
    return {}
  },
  props: {
    topics: {
      type: Array,
      default: () => []
    },
    theme: {
      type: String,
      default: '#2680EB'
    }
  },
  methods: {
    addBorderOnHover(e) {
      e.target.style.borderColor = this.theme
    },
    removeBorderOnHover(e) {
      e.target.style.borderColor = 'transparent'
    }
  }
}
</script>

<style lang="scss" scoped>
input[type='checkbox'] {
  &:checked ~ ul.link-ul {
    display: none;
  }

  &:not(:checked) ~ label i.arrow-down {
    transform: rotate(0deg) !important;
  }
}
.label {
  background-color: var(--bg-deem-100);
}
.border-white {
  border-color: var(--bg-light) !important;
}
.link-a {
  &:hover {
    background-color: var(--bg-deem-100);
  }
}
</style>
