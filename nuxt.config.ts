module.exports = {
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/img/logo_sin_letras.png' }
      ],
      title: 'AD-ASTRA'
    }
  },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: '~/assets/css/input.css',
  },
  serverMiddleware: ['~/proxy.js'],
  resolve: {
    alias: {
      'vue-easy-lightbox$': 'vue-easy-lightbox/dist/external-css/vue-easy-lightbox.esm.min.js',
    },
  },
};
