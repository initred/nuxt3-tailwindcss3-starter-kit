<script setup lang='ts'>
import HeroiconsSolidMinus from '~icons/heroicons-solid/minus'
import HeroiconsSolidPlus from '~icons/heroicons-solid/plus'

const { count, inc, dec } = useCount()
</script>

<template>
  <div class="flex justify-center items-center py-8">
    <button
      class="w-6 h-6 p-2 rounded-full flex justify-center items-center bg-emerald-500 text-white"
      @click="dec()"
    >
      <HeroiconsSolidMinus class="w-5 h-5 text-white" aria-hidden="true" />
    </button>
    <div class="mx-4">
      {{ count }}
    </div>
    <button
      class="w-6 h-6 p-2 rounded-full flex justify-center items-center bg-emerald-500 text-white"
      @click="inc()"
    >
      <HeroiconsSolidPlus class="w-5 h-5 text-white" aria-hidden="true" />
    </button>
  </div>
</template>
