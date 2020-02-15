<template>
  <div class="px-8 py-12">
    <img class="h-10" src="./img/index.svg" alt="logo">
    <img src="./img/beach-work.jpg" alt="Nothing" class="mt-6 rounded-lg shadow-xl">
    <h1 class="mt-6 text-2xl font-bold text-gray-900 leading-tight">You can work from anywhere.
      <span class="text-indigo-500">Take advantage of it.</span>
    </h1>
    <p class="mt-2 text-gray-600">
      Workcation helps you find work-freindly rentals in beautiful locations so you can enjoy some nice weather
      even when you are not on vacation.
    </p>
    <div class="mt-4">
      <a href="#"
         class="inline-block bg-indigo-500 text-sm text-white py-2 px-4 rounded-lg shadow-lg uppercase tracking-wider font-semibold ">Book
        your escape</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>