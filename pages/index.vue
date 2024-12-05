<template>
    <div class="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
        <div class="bg-white rounded-lg shadow-lg p-8 max-w-md text-center transition-shadow duration-300 hover:shadow-2xl">
            <h1 class="text-3xl font-bold text-gray-800 mb-4">
                Welcome to My Personal Introduction Web Page
            </h1>
            <p class="text-gray-600">
                Hi! I'm Aria, and I'm excited to share a little about myself. 
                Feel free to explore and learn more!
            </p>
            <NuxtLink to="/personal" class="mt-6 inline-block px-4 py-2 bg-blue-600 text-white rounded transition-transform transform hover:scale-105 hover:bg-blue-700 duration-300">
                Learn More
            </NuxtLink>
        </div>
    </div>
</template>


<script setup>
useHead({
  title: "home"
})
</script>

