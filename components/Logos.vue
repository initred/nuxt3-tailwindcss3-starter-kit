<script setup lang="ts">
import HeroiconsSolidPlus from '~icons/heroicons-solid/plus'
</script>

<template>
  <div class="inline-flex text-2xl cursor-default">
    <div class="flex flex-col">
      <div>
        <img class="w-16 h-16 inline-block" src="/nuxt.png">
      </div>
      <span class="text-green-500 mt-2">Nuxt 3</span>
    </div>
    <div
      class="text-2xl text-gray-400 mx-4 my-auto transform hover:rotate-45 hover:duration-500"
    >
      <HeroiconsSolidPlus class="w-6 h-6" aria-hidden="true" />
    </div>
    <div class="flex flex-col">
      <div>
        <img class="w-16 h-16 inline-block" src="/tailwindcss.png">
      </div>
      <span class="text-sky-500 mt-2">Tailwindcss 3</span>
    </div>
  </div>
</template>
