<script setup lang='ts'>
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <button
    class="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200"
    @click="toggleDark()"
  >
    <heroicons-outline-moon v-if="isDark" class="w-6 h-6" aria-hidden="true" />
    <heroicons-outline-sun v-else class="w-6 h-6" aria-hidden="true" />
  </button>
</template>
