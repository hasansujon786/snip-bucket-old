<template>
  <div class="listTopic" style="width: 220px;">
    <section class="border-b" v-for="(topic, i) in topics" :key="i">
      <input class="hidden" type="checkbox" checked :id="topic.title + 'check-box'" />
      <label
        class="font-semibold bg-gray-110 text-sm disable-select text-gray-900 cursor-pointer p-3 border-b flex justify-between items-center hover:bg-gray-200"
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

      <ul class="lists-items text-sm text-gray-600">
        <li class="" v-for="(item, i) in topic.items" :key="i">
          <a
            class="block border-l-4 border-white pl-3 py-2  hover:border-teal-400 hover:bg-gray-200"
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
  &:checked ~ ul.lists-items {
    display: none;
  }

  &:not(:checked) ~ label i.arrow-down {
    transform: rotate(180deg);
  }
}
</style>
