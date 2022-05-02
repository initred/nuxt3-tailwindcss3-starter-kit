import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    [
      'unplugin-icons/nuxt',
      {
        autoInstall: true,
        prefix: false,
      },
    ],
  ],
  components: {
    global: true,
    dirs: [
      '~/components',
      '~/node_modules/@headlessui/vue/dist/components',
    ],
  },
  experimental: {
    reactivityTransform: true,
    // viteNode: true,
  },
  vueuse: {
    ssrHandlers: true,
  },
  colorMode: {
    classSuffix: '',
  },
})
