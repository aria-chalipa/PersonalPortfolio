import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePersonalInfoStore = defineStore('personalInfo', () => {
  const personalInfo = ref(null);

  const fetchPersonalInfo = async () => {
    try {
      const response = await fetch('/personalinfo.json'); // Adjust path based on where the file is served
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      personalInfo.value = await response.json();
    } catch (error) {
      console.error('Error fetching personal info:', error);
    }
  };

  return { personalInfo, fetchPersonalInfo };
});