<template>
  <section
    class="popup__bg absolute flex justify-center items-center top-0 left-0 w-full h-full z-50"
  >
    <div style="width: 550px" class="bg-white border rounded max-w-lg shadow-lg p-6 text-gray-600">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search here"
        class="border-b-2 mb-3 w-full font-semibold text-gray-600 py-1 px-1 focus:outline-none"
      />
      <div>
        <p class="text-sm mb-2 text-gray-700 font-semibold">
          Click on the list to add item
        </p>
        <ul class="h-40 border overflow-y-scroll scrolable">
          <li
            @click="addToList(lang)"
            class="px-2 py-1 cursor-pointer border-b hover:bg-gray-200"
            v-for="(lang, i) in filteredLangList"
            :key="i"
          >
            {{ lang.title }}
          </li>
        </ul>

        <ul class="my-4 text-center">
          <li
            class="pill inline-flex cursor-pointer justify-center items-center text-sm  py-2 px-4 mb-2 border rounded-full"
            v-for="(lang, ii) in selectedLanguags"
            :key="ii"
            @click="removeLang(lang)"
          >
            {{ lang.title }}

            <svg
              class="fill-current stroke-current ml-2 -mb-1"
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="11"
              viewBox="0 0 13 13"
            >
              <g transform="translate(-5.293 -5.293)">
                <path
                  d="M.5,0V16.971"
                  transform="translate(17.646 5.646) rotate(45)"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="1"
                />
                <path
                  d="M0,.5H16.971"
                  transform="translate(6.354 5.646) rotate(45)"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="1"
                />
              </g>
            </svg>
          </li>
        </ul>
      </div>

      <div class="mt-3 flex justify-end">
        <ui-button @click="save" color="blue" class="px-8 mr-3">Save</ui-button>
        <ui-button @click="cancel">Cancel</ui-button>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'popupMenu',
  data() {
    return {
      allLanguags: [],
      selectedLanguags: [],
      searchQuery: ''
    }
  },
  methods: {
    save() {
      alert('hey button savse')
    },
    cancel() {
      alert('hey button cancel')
    },
    addToList(lang) {
      this.selectedLanguags.push(lang)
    },
    removeLang(lang) {
      console.log(lang.title)
    }
  },

  computed: {
    filteredLangList() {
      return this.allLanguags.filter(lang => {
        return lang.title.toLowerCase().match(this.searchQuery.toLowerCase())
      })
    }
  },
  created() {
    axios
      .get('/data/index.json')
      .then(response => {
        this.allLanguags = response.data
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style lang="scss" scoped>
.popup__bg {
  background: rgba(0, 0, 0, 0.226);
}
.pill:not(:last-child) {
  margin-right: 10px;
}
</style>
