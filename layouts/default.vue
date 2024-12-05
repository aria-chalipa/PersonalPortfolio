<template>
    <header class="bg-blue-200 text-gray-800 p-4">
      <div class="container mx-auto flex justify-between items-center">
        <div class="text-xl font-bold">personal page</div>
        <nav class="hidden md:flex space-x-4">
            <NuxtLink to="/personal" class="hover:text-gray-600">info</NuxtLink>
            <NuxtLink to="/" class="hover:text-gray-600">home</NuxtLink>
            <NuxtLink to="/conection" class="hover:text-gray-600">conection</NuxtLink>
        </nav>
        <button id="menu-btn" class="block md:hidden" @click="toggleMenu">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      <nav id="menu" :class="{'hidden': !isMenuOpen}" class="md:hidden flex flex-col space-y-2 mt-4">
        <NuxtLink to="/personal" class="hover:text-gray-600">info</NuxtLink>
        <NuxtLink to="/" class="hover:text-gray-600">home</NuxtLink>
        <NuxtLink to="/conection" class="hover:text-gray-600">conection</NuxtLink>
      </nav>
    </header> 



    <slot />


    <footer class="bg-gray-200 h-screen md:h-48 p-4 md:p-8 text-gray-600">
  <div class="container mx-auto p-4 md:p-8">
    <div class="flex flex-wrap justify-center mb-4">
      <a href="#" class="text-gray-600 hover:text-gray-900 transition duration-300 mr-4">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="#" class="text-gray-600 hover:text-gray-900 transition duration-300 mr-4">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="#" class="text-gray-600 hover:text-gray-900 transition duration-300 mr-4">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="#" class="text-gray-600 hover:text-gray-900 transition duration-300 mr-4">
        <i class="fab fa-linkedin-in"></i>
      </a>
    </div>
    <p class="text-sm text-center mb-4">
      &copy; 2023 aria. All rights reserved.
    </p>
    <p class="text-sm text-center mb-4">
      Built with <a href="https://tailwindcss.com/" class="text-gray-600 hover:text-gray-900 transition duration-300">Tailwind CSS</a>
    </p>
    <p class="text-sm text-center">
        this page is created by aria chalipa
    </p>
  </div>
</footer>
  </template>

 


  
  
  <script setup>
  import { ref } from 'vue';
  
  const isMenuOpen = ref(false);
  
  function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
  }
  </script>
  