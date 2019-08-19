const fs = require('fs')

exports.onPreBootstrap = ({ reporter }) => {
  const contentPath = 'data'

  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`)
    fs.mkdirSync(contentPath)
  }
}

exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
    type Project implements Node @dontInfer {
      id: ID!
      name: String!
      description: String!
      type: String
      release: Int!
      url: String!
      status: String!
      slug: String!
    }
  `)
}

exports.createResolvers = ({ createResolvers }) => {
  const basePath = '/'

  const slugify = str => {
    const slug = str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
    return `/${basePath}/${slug}`.replace(/\/\/+/g, '/')
  }

  createResolvers({
    Project: {
      slug: {
        resolve: source => slugify(source.name)
      }
    }
  })
}
