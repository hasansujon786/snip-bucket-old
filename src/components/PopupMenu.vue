<template>
  <section
    class="popup__bg absolute flex justify-center items-center top-0 left-0 w-full h-full z-50"
  >
    <div style="width: 550px" class="card-bg border rounded max-w-lg shadow-lg p-6 text-gray-600">
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

        <!-- all lang list -->
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

        <!-- all pill list -->
        <ul class="my-4 text-center">
          <!-- pill -->
          <li
            class="pill inline-flex cursor-pointer justify-center items-center text-sm  py-2 px-4 mb-2 border rounded-full"
            v-for="(lang, ii) in selectedLanguags"
            :key="ii"
            @click="removeLang(ii)"
          >
            {{ lang.title }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-x ml-1"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
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
  props: {
    showPinMenu: {
      type: Function,
      required: true
    }
  },
  methods: {
    makeReqToLangList() {
      axios
        .get('/data/index.json')
        .then(response => {
          this.allLanguags = response.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    save() {
      localStorage.setItem('pinnedItems', JSON.stringify(this.selectedLanguags))
      this.$emit('save')
      this.showPinMenu(false)
    },
    cancel() {
      this.showPinMenu(false)
    },
    addToList(lang) {
      let foundIndex = this.selectedLanguags.findIndex(curValue => {
        return curValue.id == lang.id
      })
      if (foundIndex == -1) {
        this.searchQuery = ''
        this.selectedLanguags.push(lang)
      }
    },
    removeLang(index) {
      this.selectedLanguags.splice(index, 1)
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
    this.makeReqToLangList()
    // get pinned data
    let pinnedItems = localStorage.getItem('pinnedItems')
    this.selectedLanguags = JSON.parse(pinnedItems)
  }
}
</script>

<style lang="scss" scoped>
input,
.card-bg {
  background-color: var(--bg-light);
}

.popup__bg {
  background: rgba(0, 0, 0, 0.226);
}
.pill {
  background-color: var(--bg-deem);
  &:not(:last-child) {
    margin-right: 10px;
  }
}
</style>
