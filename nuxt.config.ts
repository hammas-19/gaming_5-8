export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      siteUrl: process.env.API_BASE_URL,
      API_KEY: process.env.API_KEY,
      siteName: '5-8 Movies',
      siteDescription: 'Entertainent Benefits for all',
      language: 'en',
      titleSeparator: '|'
    }
  },

  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/i18n',
    '@pinia-plugin-persistedstate/nuxt',
    '@pinia/nuxt',
    'nuxt-icon',
    '@nuxt/devtools',
    '@nuxt/image-edge',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],

  experimental: {
    typedPages: true
  },

  extends: [
    'nuxt-seo-kit'
  ],

  devtools: {
    enabled: true
  },

  i18n: {
    vueI18n: './i18n.config.ts',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected'
    },
    defaultLocale: 'en'
  },

  colorMode: {
    classSuffix: ''
  },

  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      charset: 'utf-8',
      script: [
        {
          src: '/scripts/chatwoot.js',
          type: 'text/partytown',
          async: true,
          defer: true
        }
      ]
    }
  }
})
