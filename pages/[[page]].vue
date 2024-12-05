<template>
  <div>
        <div v-if="isPersonal" class="bg-gradient-to-r from-blue-500 to-purple-500 ">
        <Personalinfo />
        </div>

        <div v-if="isConnection" class="bg-gradient-to-r from-blue-500 to-purple-500 ">
            <Conection />
        </div>

        <div v-if="isNotFound" class="bg-gradient-to-r from-red-500 to-orange-500 ">
        <NotFound />
        </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'; // Import useRoute from vue-router
import { computed } from 'vue'; // Import computed from Vue

const route = useRoute(); // Get the route object


// Use computed properties to determine the state based on route params
const page = route.params.page;

const isPersonal = computed(() => page === 'personal');
const isConnection = computed(() => page === 'conection');
const isNotFound = computed(() => !isPersonal.value && !isConnection.value);


</script>