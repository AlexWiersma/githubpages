// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: 'techportfolio'
  }
} : {};

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Alex Wiersma | Mobile App Developer',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: 'favicon.ico'}
    ],
    script: [
      { src: 'https://www.google.com/recaptcha/api.js' }
    ]
  },
  /*
  ** Router base
  */
  routerBase,
  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},
  /*
  ** Global CSS
  */
  css: ['~/assets/css/style.css', '~/assets/css/plugins.css' ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // '~/plugins/js/jquery.js',
    // '~/plugins/js/init.js',
    // '~/plugins/js/ie8.js',
    // '~/plugins/js/modernizr.custom.js',
    // '~/plugins/js/plugins.js',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
