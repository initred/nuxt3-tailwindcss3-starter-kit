<script setup lang="ts">
const { data } = await useFetch('/api/pageview')
const time = useTimeAgo(computed(() => data.value.startAt))
</script>

<template>
  <div class="text-gray-400">
    <span class="font-medium text-gray-500">{{ data.pageview }}</span>
    page views since
    <span class="text-gray-500">{{ time }}</span>
  </div>
</template>
