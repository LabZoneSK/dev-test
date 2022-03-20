const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/services",
    createProxyMiddleware({
      target: "https://api.flickr.com",
      changeOrigin: true,
    })
  );
};
