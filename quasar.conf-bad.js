chainWebpack (chain, { isServer, isClient }) {
    chain.module.rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.transpileOptions = {
          transforms: {
            dangerousTaggedTemplateString: true
          }
        }
        return options
      })
  }