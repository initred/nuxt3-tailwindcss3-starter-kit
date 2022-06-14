<script setup lang='ts'>
import HeroiconsOutlineMoon from '~icons/heroicons-outline/moon'
import HeroiconsOutlineSun from '~icons/heroicons-outline/sun'

const color = useColorMode()

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button
    class="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200"
    @click="toggleDark()"
  >
    <HeroiconsOutlineMoon v-if="color.value === 'dark'" class="w-6 h-6" aria-hidden="true" />
    <HeroiconsOutlineSun v-else class="w-6 h-6" aria-hidden="true" />
  </button>
</template>
