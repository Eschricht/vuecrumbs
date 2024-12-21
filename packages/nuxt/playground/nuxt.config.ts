export default defineNuxtConfig({
  experimental: {
    typedPages: true,
  },
  modules: ['../src/module'],
  devtools: { enabled: true },
  compatibilityDate: '2024-10-30',
  crumby-vue: {
    composableName: 'usecrumby-vue',
  },
})
