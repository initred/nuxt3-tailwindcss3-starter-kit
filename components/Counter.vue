<script setup lang='ts'>
const { count, inc, dec } = useCount()
</script>

<template>
  <div class="flex justify-center items-center py-8">
    <button
      class="w-6 h-6 p-2 rounded-full flex justify-center items-center bg-emerald-500 text-white"
      @click="dec()"
    >
      <Icon name="heroicons-solid:minus" class="w-5 h-5 text-white" />
    </button>
    <div class="mx-4">
      {{ count }}
    </div>
    <button
      class="w-6 h-6 p-2 rounded-full flex justify-center items-center bg-emerald-500 text-white"
      @click="inc()"
    >
      <Icon name="heroicons-solid:plus" class="w-5 h-5 text-white" />
    </button>
  </div>
</template>
