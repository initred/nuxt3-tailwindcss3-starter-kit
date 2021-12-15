<script setup lang="ts">
const name = ref('')
const router = useRouter()
const go = () => {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}
</script>

<template>
  <div class="max-w-xs space-y-4 mx-auto mt-4">
    <BaseInput
      id="input"
      v-model="name"
      class="text-center"
      placeholder="What's your name?"
      type="text"
      autocomplete="false"
      @keydown.enter="go"
    />
    <div>
      <BaseButton
        class="disabled:cursor-not-allowed"
        :disabled="!name"
        @click="go"
      >
        GO
      </BaseButton>
    </div>
  </div>
</template>
