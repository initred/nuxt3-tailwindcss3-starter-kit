import { defineNuxtConfig } from 'nuxt3'
import UnpluginComponentsVite from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: 'Nuxt3 Tailwindcss3 Starter-Kit',
  },
  buildModules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'unplugin-icons/nuxt',
  ],
  components: true,
  vite: {
    plugins: [
      UnpluginComponentsVite({
        dts: true,
        resolvers: [
          IconsResolver({
            prefix: false,
          }),
         ],
       }),
    ],
  },
  vueuse: {
    ssrHandlers: true,
  },
  build: {
    transpile: ['@headlessui/vue'],
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
})
