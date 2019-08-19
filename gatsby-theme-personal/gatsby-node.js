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
      release: Date! @dateformat
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

exports.createPages = async ({ actions, graphql, reporter }) => {
  const basePath = '/'

  actions.createPage({
    path: basePath,
    component: require.resolve('./src/templates/projects.js')
  })

  const result = await graphql(`
    query {
      allProject(sort: { fields: release, order: ASC }) {
        nodes {
          id
          slug
        }
      }
    }
  `)

  if (result.error) {
    return reporter.panic('error loading projects', reporter.errors)
  }

  const projects = result.data.allProject.nodes

  projects.forEach(project => {
    const slug = project.slug

    actions.createPage({
      path: slug,
      component: require.resolve('./src/templates/project.js'),
      context: {
        projectID: project.id
      }
    })
  })
}
