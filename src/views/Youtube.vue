<template>
  <div class="youtube-page p-24">
    <h1>youtube-page</h1>
    <input type="text" class="border" v-model="query" />

    <ul class="mt-5">
      <li v-for="(num, i) in numbers" :key="i">
        {{ num }}
      </li>
      <hr class="border" />

      <li v-for="(city, c) in citys" :key="city">
        {{ city }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'youtube-page',
  data() {
    return {
      arr1: ['one', 'two', 'there', 'four', 'five', 'six'],
      arr2: ['dhaka', 'india', 'america'],
      query: ''
    }
  },
  computed: {
    numbers() {
      return this.arr1.filter(num => {
        return num.match(this.query)
      })
    },
    citys() {
      return this.arr2.filter(city => {
        return city.match(this.query)
      })
    }
  },
  mounted() {
    console.log(typeof this.arr1)
  }
}
</script>

<style lang="scss">
.box {
  width: 200px;
  height: 200px;
  transition: all 0.5s ease-in-out;
  // transform: ;
}
</style>
