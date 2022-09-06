<script setup lang='ts'>
const color = useColorMode()

function toggleDark () {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button
    class="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200"
    @click="toggleDark()"
  >
    <Icon v-if="color.value === 'dark'" name="heroicons-outline:moon" class="w-6 h-6" />
    <Icon v-else name="heroicons-outline:sun" class="w-6 h-6" />
  </button>
</template>
