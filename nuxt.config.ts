import { devtools } from "vue";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/fonts'],
  // css: ['~/assets/css/main.css'],
  fonts: {
    devtools: true,
    families: [
      { name: 'PT ROOT', provider: 'none', src: ['~/assets/fonts/pt-root-ui_regular.woff', '~/assets/fonts/pt-root-ui_regular.woff2'], weight: 'normal', global: true },
      { name: 'PT ROOT', provider: 'none', src: ['~/assets/fonts/pt-root-ui_bold.woff', '~/assets/fonts/pt-root-ui_bold.woff2'], weight: 'bold' },
    ]
  }
})