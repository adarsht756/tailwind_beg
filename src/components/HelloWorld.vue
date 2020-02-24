<template>
<div>
  <!-- <div>
    <div class="bg-center bg-cover lg:h-screen" style="background-image: url(https://cdn.pixabay.com/photo/2019/10/01/21/42/caravansary-4519442_1280.jpg);">
      <div>
        <h1 class="">HelloWorld</h1>
      </div>
    </div>
  </div> -->
  <div class="px-8 py-4">
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
    <div class="md:flex bg-white rounded-lg p-6 shadow-xs mt-6">
      <img src="https://pngimage.net/wp-content/uploads/2018/05/dummy-profile-image-png-6.png" alt="" class="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6">
      <div class="text-centermd:text-left">
        <h2 class="text-lg">Lorem ipsum.</h2>
        <div class="text-purple-500">Customer Support</div>
        <div class="text-gray-500">loremipsun20@gmail.com</div>
        <div class="text-gray-500">1234567899</div>
     </div>
    </div>
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