export default {
  target: 'static',
  head: {
    title: 'fct-ls',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Oswald&display=swap' },
      { ref: 'stylesheet', href: 'https://rsms.me/inter/inter.css' }
    ]
  },
  css: [
    '~/assets/global.css'
  ],
  plugins: [
    '~/plugins/yt.client'
  ],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxt/content'
  ],
  axios: {},
  content: {},
  build: {
  }
}
