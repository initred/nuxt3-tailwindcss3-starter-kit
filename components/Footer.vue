<script setup lang="ts">
import HeroiconsOutlineHome from '~icons/heroicons-outline/home'
import CarbonLogoGithub from '~icons/carbon/logo-github'
</script>

<template>
  <div class="text-gray-400 m-5 flex justify-center gap-4">
    <NuxtLink :to="'/'">
      <HeroiconsOutlineHome
        class="w-6 h-6 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200"
        aria-hidden="true"
      />
    </NuxtLink>
    <a
      href="https://github.com/initred/nuxt3-tailwindcss3-starter-kit"
      target="_blank"
    >
      <CarbonLogoGithub class="w-6 h-6 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200" />
    </a>
    <DarkToggle />
  </div>
</template>
