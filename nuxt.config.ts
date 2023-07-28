module.exports = {
    modules: ['@nuxtjs/tailwindcss'],
    tailwindcss: {
      cssPath: '~/assets/css/input.css',
    },
    serverMiddleware: ['~/proxy.js'],
  };
