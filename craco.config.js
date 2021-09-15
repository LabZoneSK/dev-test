const CracoLessPlugin = require('craco-less');

const lessModifyVars = {}

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: lessModifyVars,
            javascriptEnabled: true,
          },
        },
        modifyLessRule: function (lessRule, context) {
          lessRule.test = /\.(less)$/
          lessRule.exclude = undefined
          return lessRule
        },
        cssLoaderOptions: {
          modules: {
            auto: /\.module\.\w+$/i,
            localIdentName: '[local]_[hash:base64:5]',
          },
        },
      },
    },
  ],
};