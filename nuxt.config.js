export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Earn Any Desired Token For Free',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Farming, staking and lending for all kinds of users to easily invest and manage their money at low risk and high APY. '
      },
      { property: 'og:title', content: 'Earn Any Desired Token For Free' },
      { property: 'og:description', content: 'Farming, staking and lending for all kinds of users to easily invest and manage their money at low risk and high APY.' },
      { property: 'og:image:secure_url', content: 'https://staging.goen.finance/description.png' },
      { property: 'og:url', content: 'https://staging.goen.finance' },
      { property: 'og:image', content: 'https://staging.goen.finance/description.png' },
      { property: 'og:type', content: 'website' },
      { name: 'thumbnail', content: 'https://staging.goen.finance/thumbnail.png' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'image_src', href: '/favicon.png' },
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/css/customize.css',
    'aos/dist/aos.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "@/plugins/aos.client", ssr: false },
    'plugins/i18n.js'
  ],
  router: {
    middleware: ['i18n']
  },
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/dotenv',
  ],
  purgeCSS: {
    whitelist: ['hidden', "aos-init", "aos-animate", "data-aos-delay", "data-aos-duration", "fade-up", "fade-left", "fade-right", "flip-left"],
    whitelistPatterns: [
      /md:w-[1-6]/,
      /(^slick-)\w+/
    ]
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, { isClient }) {
      if (isClient) {
        config.optimization.splitChunks.maxSize = 10000
      }
      loaders: {
        file: {
          esModule: false
        }
      }
    },
    vendor: ["aos"]
  }
}
