<script setup lang='ts'>
import { SunIcon, MoonIcon } from '@heroicons/vue/outline'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <button class="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200" @click="toggleDark()">
    <MoonIcon v-if="isDark" class="w-6 h-6" aria-hidden="true" />
    <SunIcon v-else class="w-6 h-6" aria-hidden="true" />
  </button>
</template>
