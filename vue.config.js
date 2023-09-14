/* eslint-disable */
const { resolve } = require("path");
const { defineConfig } = require("@vue/cli-service");

const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");
const StyleLintPlugin = require("stylelint-webpack-plugin");
const stylelintFormatter = require("stylelint-formatter-pretty");

module.exports = defineConfig({
  devServer: { port: 4545, allowedHosts: 'all' },
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      new StyleLintPlugin({
        files: [resolve(__dirname, "src/**/*.{vue,scss}")],
        formatter: stylelintFormatter,
      }),
    ],
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/styles/main.scss";`
      },
    }
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
        .loader('vue-loader')
        .tap(options => {
          options.transpileOptions = {
            transforms: {
              dangerousTaggedTemplateString: true,
            },
          }
          return options
        })
  }
});
