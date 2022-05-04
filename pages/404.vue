<script setup lang="ts">
import CarbonWarning from '~icons/carbon/warning'

const router = useRouter()
</script>

<template>
  <main class="text-center text-teal-700 dark:text-gray-200">
    <div text-4xl>
      <CarbonWarning class="inline-block" />
    </div>
    <div>Not found</div>
    <div>
      <button type="button" class="text-sm m-3" @click="router.back()">
        Back
      </button>
    </div>
  </main>
</template>
