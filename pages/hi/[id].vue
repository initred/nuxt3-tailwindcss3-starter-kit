<script setup lang="ts">
import { useUserStore } from '~/stores/user'

const route = useRoute()
const user = useUserStore()
const name = route.params.id

watchEffect(() => {
  user.setNewName(route.params.id as string)
})
</script>

<template>
  <div>
    <div class="inline-block animate-bounce">
      <HeroiconsOutlineHand class="w-10 h-10 text-gray-500" aria-hidden="true" />
    </div>
    <h3 class="text-xl font-medium">
      Hi,
    </h3>
    <div class="text-lg text-gray-700 dark:text-gray-400">
      {{ name }}!
    </div>

    <template v-if="user.otherNames.length">
      <p class="text-sm my-4">
        <span class="opacity-50">Also as known as:</span>
        <ul>
          <li v-for="otherName in user.otherNames" :key="otherName">
            <router-link :to="`/hi/${otherName}`" replace>
              {{ otherName }}
            </router-link>
          </li>
        </ul>
      </p>
    </template>

    <Counter />

    <div>
      <BaseNuxtLink
        to="/"
      >
        Back
      </BaseNuxtLink>
    </div>
  </div>
</template>
