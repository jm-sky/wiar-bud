import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'pl'
      }
    }
  },
  modules: ['@nuxt/eslint', '@nuxt/ui', 'shadcn-nuxt', '@nuxtjs/i18n', '@vueuse/motion/nuxt'],
  css: ['~/assets/css/index.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  // Global animation configuration
  runtimeConfig: {
    public: {
      motion: {
        // Global animation defaults
        transition: {
          duration: 400,
          ease: 'easeOut'
        },
        // Respect user preferences
        respectMotionPreferences: true
      }
    }
  },
  shadcn: {
    prefix: '',
    componentDir: './app/components/ui',
  },
  i18n: {
    defaultLocale: 'pl',
    locales: [
      {
        code: 'en',
        language: 'en',
        name: 'English',
        file: 'en.ts',
      },
      {
        code: 'pl',
        language: 'pl',
        name: 'Polski',
        file: 'pl.ts',
      },
      {
        code: 'ru',
        language: 'ru',
        name: 'Русский',
        file: 'ru.ts',
      }
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    },
  }
})
