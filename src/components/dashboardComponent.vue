<template>
    <div>
        <nav class="flex items-center justify-between flex-wrap bg-black opacity-75 w-full fixed p-3 z-10">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <a href="#" id="navbar-brand"> <img src="../img/cnc-logo.png" class="h-10 mx-3" alt=""> </a>
                <span class="font-semibold text-xl tracking-tight">Slog</span>
            </div>
            <div class="block lg:hidden">
                <button
                    class="flex navbar-burger items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div id="main-nav" class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow">
                    <a href="#responsive-header"
                        class="block mt-4 font-semibold lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                        About Us
                    </a>
                    <a href="#responsive-header"
                        class="block mt-4 font-semibold lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                        Portfolio
                    </a>
                    <a href="#responsive-header"
                        class="block mt-4 font-semibold lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                        Blog
                    </a>
                        <a href="#responsive-header"
                        class="block mt-4 font-semibold lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                        Home
                    </a>
                    <a href="#responsive-header"
                        class="block mt-4 font-semibold lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                        Courses
                    </a>
                    <a href="#responsive-header"
                        class="block mt-4 font-semibold lg:inline-block lg:mt-0 text-white hover:text-white">
                        Services
                    </a>
                    
                </div>
                <div>
                    <a href="#"
                        class="inline-block text-sm px-4 mr-2 py-2 leading-none border rounded-full text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Sign Up</a>
                     <a href="#"
                        class="inline-block text-sm px-4 mr-2 py-2 leading-none border rounded-full text-white border-white hover:border-transparent hover:text-red-500 hover:bg-red-100 mt-4 lg:mt-0">Login</a>
                
                </div>
            </div>
        </nav>
        <carouselComponent></carouselComponent>
    </div>
</template>
<script>
import carouselComponent from './carouselComponent';
// Navbar Toggle
  document.addEventListener('DOMContentLoaded', function () {

    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

      // Add a click event on each of them
      $navbarBurgers.forEach(function ($el) {
        $el.addEventListener('click', function () {

          // Get the "main-nav" element
          var $target = document.getElementById('main-nav');

          // Toggle the class on "main-nav"
          $target.classList.toggle('hidden');

        });
      });
    }

  });
export default {
    name: "dashboardComponent",
    components: {
        carouselComponent,
    }
}
</script>