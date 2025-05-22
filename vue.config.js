const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/',
  productionSourceMap: false,
  configureWebpack: {
    performance: {
      hints: false
    }
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].meta = {
        viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
      }
      return args
    })
  },
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [
            require('tailwindcss'),
            require('autoprefixer'),
          ],
        },
      },
    },
  },
})
