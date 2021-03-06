export default {
  mode: 'universal',
  components: true,
  /*
   ** Headers of the page
   */
  head: {
    title: 'Harry Lawson',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'og:locale',
        property: 'og:locale',
        content: 'en_GB'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'description',
        name: 'description',
        content: `Harry Lawson (b. South Shields, 1994) is an artist and documentary filmmaker based in London. His work is split between archival research, experimental documentary and image-making. He sporadically programmes and hosts documentary film screenings, exhibiting experimental non-fiction work in London and elsewhere.`
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: `Harry Lawson (b. South Shields, 1994) is an artist and documentary filmmaker based in London. His work is split between archival research, experimental documentary and image-making. He sporadically programmes and hosts documentary film screenings, exhibiting experimental non-fiction work in London and elsewhere.`
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: `Harry Lawson (b. South Shields, 1994) is an artist and documentary filmmaker based in London. His work is split between archival research, experimental documentary and image-making. He sporadically programmes and hosts documentary film screenings, exhibiting experimental non-fiction work in London and elsewhere.`
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://harry.ooo/'
      },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://harry.ooo/'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Harry Lawson'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Harry Lawson'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://harry.ooo/og.png'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://harry.ooo/og.png'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Harry Lawson'
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'Harry Lawson'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: false,
  /*
   ** Global CSS
   */
  css: [
    { src: '~/assets/union.css', lang: 'css' },
    { src: '~/assets/suisse-works.css', lang: 'css' },
    { src: '~/assets/style.css', lang: 'css' }
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/vue-tippy', ssr: false },
    { src: '~/plugins/vue-marquee', ssr: false },
    { src: '~/plugins/vue-scroll-to', ssr: false },
    { src: '~/plugins/vue-vimeo-player', ssr: false },
    { src: '~/plugins/intersection-observer-polyfill', ssr: false },
    { src: '~/plugins/locomotive-scroll', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxt/components',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-171825075-1'
      }
    ]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['vue-scrollto/nuxt', '@nuxtjs/robots'],
  /*
   ** Build configuration
   */
  build: {
    transpile: ['vue-100vh', 'gsap']
  }
}
