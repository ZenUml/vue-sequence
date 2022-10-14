module.exports = {
  pages: {
    index: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'index.html'
    },
    embed: {
      entry: 'src/main.ts',
      template: 'public/embed.html',
      filename: 'embed.html'
    },
    smoke: {
      entry: 'src/main.ts',
      template: 'public/smoke.html',
      filename: 'smoke.html'
    },
    smokeReturn: {
      entry: 'src/main.ts',
      template: 'public/smoke-return.html',
      filename: 'smoke-return.html'
    },
    smokeInteraction: {
      entry: 'src/main.ts',
      template: 'public/smoke-interaction.html',
      filename: 'smoke-interaction.html'
    },
    smokeFragmentIssue: {
      entry: 'src/main.ts',
      template: 'public/smoke-fragment-issue.html',
      filename: 'smoke-fragment-issue.html'
    },
    smokeFragment: {
      entry: 'src/main.ts',
      template: 'public/smoke-fragment.html',
      filename: 'smoke-fragment.html'
    },
    smokeCreation: {
      entry: 'src/main.ts',
      template: 'public/smoke-creation.html',
      filename: 'smoke-creation.html'
    }
  },
  chainWebpack: config =>{
    // A workaround that allows npm link or yarn link
    // https://cli.vuejs.org/guide/troubleshooting.html#symbolic-links-in-node-modules
    config.resolve.symlinks(false)

    config.plugin('define').tap((definitions) => {
      definitions[0]['VERSION'] = JSON.stringify(require('./package.json').version);
      definitions[0]['BUILD_TIME'] = JSON.stringify(new Date());
      return definitions;
    });

    // We need to clear the pre-built svg rule
    // use `vue-cli-service inspect to check the webpack
    // the built-in webpack uses file-loader
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear();
        svgRule
          //.test(/\.svg$/)  // this is not required because the built-in svg rule already defined `test`
          .use('svg-url-loader')
          .loader('svg-url-loader')
          .end()

  }
}
