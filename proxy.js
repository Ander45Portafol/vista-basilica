const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:8000',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '/api', // Cambia '/api' en la URL a '/api' en la solicitud al servidor backend
            },
        })
    );
};