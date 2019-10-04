interface Options {
  basePath: string
}

exports.createPages = async ({ actions }: any, options: Options) => {
  const basePath = options.basePath || '/'

  actions.createPage({
    path: basePath,
    component: require.resolve('./../../src/templates/home.tsx')
  })
}

export {}
