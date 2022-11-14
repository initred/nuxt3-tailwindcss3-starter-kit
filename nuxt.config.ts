import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    'nuxt-headlessui'
  ],
  components: {
    global: true,
    dirs: [
      '~/components'
    ]
  },
  experimental: {
    reactivityTransform: true
  },
  colorMode: {
    classSuffix: ''
  },
  headlessui: {
    prefix: ''
  }
})
