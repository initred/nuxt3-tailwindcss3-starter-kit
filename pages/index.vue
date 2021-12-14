<template>
  <div class="py-20 px-10 text-center">
    <Logos class="mb-6" />
    <Suspense>
      <PageView />
      <template #fallback>
        <div class="opacity-50 italic">
          <span class="pulse">Loading...</span>
        </div>
      </template>
    </Suspense>
    <InputEntry />
  </div>
</template>
