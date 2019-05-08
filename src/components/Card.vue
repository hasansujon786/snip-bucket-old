<template>
  <div
    class="card mx-3 lg:mx-0 mb-10 w-full lg:w-custom rounded-lg overflow-hidden bg-white shadow-lg  lg:flex"
  >
    <div
      class="card__image h-48 bg-cover lg:h-auto lg:w-full"
      style="background-image: url('https://tailwindcss.com/img/card-left.jpg')"
      title="woman holding cup"
    ></div>
    <div class="card__contet px-6 py-4">
      <div class="content__top flex justify-between text-sm text-grey-dark">
        <p class=""># Members Only</p>
        <p>Aug 23</p>
      </div>
      <div class="content__main pt-3">
        <h2 class="text-blue-darker">The post title.</h2>
        <p class="text-grey-dark text-base my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nobis nam est reiciendis
          pariatur repudiandae quam? Fugiat dicta ea corporis?
        </p>
        <div class="flex items-center">
          <img
            class="w-12 rounded-full cursor-pointer"
            height="h-12"
            src="https://tailwindcss.com/img/jonathan.jpg"
            alt=""
            title="man"
          />
          <div class="px-2">
            <h4 class="text-blue-darkest">Jonathan Wade</h4>
            <small class="text-sm text-grey-dark pt">Aug 34</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
