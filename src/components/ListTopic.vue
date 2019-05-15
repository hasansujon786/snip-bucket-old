<template>
  <div class="listTopic" style="width: 220px;">
    <section class="" v-for="(topic, i) in topics" :key="i">
      <input class="hidden" type="checkbox" checked :id="topic.title + 'check-box'" />
      <!-- label block -->
      <label
        class="label font-semibold text-sm disable-select text-gray-900 cursor-pointer p-3 border-b border-t flex justify-between items-center hover:bg-gray-200"
        :for="topic.title + 'check-box'"
      >
        {{ topic.title }}
        <i class="arrow-down">
          <svg class="inline-block stroke-current" width="17" height="8" viewBox="0 0 17 8">
            <g transform="translate(-4.5 -8.5)">
              <path
                d="M0,0,8,7l8-7"
                transform="translate(5 9)"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="1"
              />
            </g>
          </svg>
        </i>
      </label>

      <!-- links -->
      <ul class="link-ul text-sm text-gray-600">
        <li class="" v-for="(item, i) in topic.items" :key="i">
          <a
            class="link-a block border-l-4 pl-3 py-2"
            :href="
              `#${item.description
                .toLowerCase()
                .split(' ')
                .join('')}`
            "
            >{{ item.description }}</a
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
    transform: rotate(180deg);
  }
}
.label {
  background-color: var(--bg-deem-100);
}
.border-white {
  border-color: var(--bg-light) !important;
}
.link-a {
  border-color: var(--bg-light) !important;
  &:hover {
    background-color: var(--bg-deem-100);
    border-color: #68d391 !important;
  }
}
</style>
