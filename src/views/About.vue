<template>
  <section class="bg-blue-100 flex-1 about h-screen">
    <div class="about container max-w-xl px-2 mx-auto">
      <div
        class="flex items-end justify-between text-blue-900 border-b-2 border-gray-500 font-bold py-6"
      >
        <h2 class="text-2xl">Change Plan</h2>
        <h4>Cancel Your Plan</h4>
      </div>
      <div class="flex pt-8 flex-wrap justify-around md:justify-between">
        <SelecteblePlan v-model="activeCard" planName="groth" />
        <SelecteblePlan v-model="activeCard" planName="bloom" />
        <SelecteblePlan v-model="activeCard" planName="flower" />
        <SelecteblePlan v-model="activeCard" planName="blosum" />
      </div>
    </div>
  </section>
</template>

<script>
import SelecteblePlan from '@/components/SelecteblePlan.vue'

export default {
  data() {
    return {
      activeCard: 'bloom'
    }
  },
  methods: {},
  components: {
    SelecteblePlan
  }
}
</script>

<style scoped>
.about {
  min-height: calc(100vh - 80px);
}
</style>
