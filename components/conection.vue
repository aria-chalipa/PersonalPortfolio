
<template>
  <div v-if="connections" class="max-w-lg mx-auto my-auto p-6 border border-gray-300 rounded-lg bg-white shadow-md">
    <div class="flex flex-col items-center mb-4">
      <h1 class="text-2xl font-bold">Connections</h1>
    </div>
    <div class="grid grid-cols-1 gap-4 margin">
      <div
        v-for="(connection, index) in connections"
        :key="index"
        class="flex flex-col margin items-center cursor-pointer hover:scale-105 transition-transform duration-200"
        @click="openUrl(connection.url)"
      >
        <img :src="connection.icon" :alt="connection.name" class="w-16 h-16 mb-2" />
        <span class="text-lg font-medium text-gray-800">{{ connection.name }}</span>
      </div>
    </div> 
  </div>
  <div v-else class="max-w-lg mx-auto p-6">
    <p>Loading...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const connections = ref([]);

// Sample data for connections with actual icon URLs
const fetchConnections = () => {
  connections.value = [
    {
      name: 'GitHub',
      url: 'https://github.com/aria-chalipa',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/2/29/GitHub_logo_2013.svg', // GitHub icon
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/aria-chalipa-016983240/',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg', // LinkedIn icon
    },
    {
      name: 'X',
      url: 'https://x.com',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg', // x icon
    },
  ];
};

onMounted(() => {
  fetchConnections();
});

const openUrl = (url) => {
  window.open(url, '_blank');
};
</script>

<style scoped>
.margin{
    margin: 5px 0 5px 0;
}
</style>