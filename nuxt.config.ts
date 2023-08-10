module.exports = {
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/img/logo_adastra.png' }
      ]
    }
  },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: '~/assets/css/input.css',
  },
  serverMiddleware: ['~/proxy.js'],
}
