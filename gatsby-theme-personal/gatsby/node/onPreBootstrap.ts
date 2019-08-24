const fs = require('fs')

interface Options {
  contentPath: string
}

exports.onPreBootstrap = ({ reporter }: any, options: Options) => {
  const contentPath = options.contentPath || 'data'

  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`)
    fs.mkdirSync(contentPath)
  }
}

export {}
