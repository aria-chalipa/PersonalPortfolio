<template>
  <div v-if="personalInfo" class="max-w-lg mx-auto my-auto  p-6 border border-gray-300 rounded-lg bg-white shadow-md">
    <div class="flex flex-col items-center mb-4">
      <!-- Add a circular image for the personal picture -->
      <img
        v-if="personalInfo.picture" 
        :src="personalInfo.picture"
        alt="Personal Picture"
        class="w-32 h-32 rounded-full mb-4" 
      />
      <h1 class="text-2xl font-bold">Personal Information</h1>
    </div>
    <div class="mb-4 ">
      <p class="text-lg"><strong>Name:</strong> {{ personalInfo.name }}</p>
      <p class="text-lg"><strong>Last Name:</strong> {{ personalInfo.lastName }}</p>
      <p class="text-lg"><strong>Age:</strong> {{ personalInfo.age }}</p>
      <p class="text-lg"><strong>Email:</strong> {{ personalInfo.email }}</p>
      <p class="text-lg"><strong>Phone:</strong> {{ personalInfo.phone }}</p>
      <p class="text-lg"><strong>About:</strong> {{ personalInfo.about }}</p>
    </div>
    <div>
      <h2 class="text-xl font-semibold mb-2">Skills</h2>
      <ul class="list-disc list-inside">
        <li v-for="(skill, index) in personalInfo.skills" :key="index" class="text-lg">{{ skill }}</li>
      </ul>
    </div>
  </div>
  <div v-else class="max-w-lg mx-auto p-6">
    <p>Loading...</p>
  </div>
</template>

<script setup>
import { usePersonalInfoStore } from '@/stores/usePersonalinfostore';
import { onMounted } from 'vue';

const personalInfoStore = usePersonalInfoStore();
const { personalInfo, fetchPersonalInfo } = personalInfoStore;

// Fetch personal information when the component mounts
onMounted(() => {
  personalInfoStore.fetchPersonalInfo();
});
// const fetchPersonalInfo = async () => {
//   try {
//     const response = await fetch('/personalInfo.json'); // Adjust the path if necessary
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     personalInfo.value = await response.json();
//   } catch (error) {
//     console.error('Error fetching personal info:', error);
//   }
// };
</script>

