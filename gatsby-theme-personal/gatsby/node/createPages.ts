interface Options {
  basePath: string
}

interface Project {
  id: string
  slug: string
}

exports.createPages = async ({ actions, graphql, reporter }: any, options: Options) => {
  const basePath = options.basePath || '/'

  actions.createPage({
    path: basePath,
    component: require.resolve('./../../src/templates/home.tsx')
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

  projects.forEach((project: Project) => {
    const slug = project.slug

    actions.createPage({
      path: slug,
      component: require.resolve('./../../src/templates/project.tsx'),
      context: {
        projectID: project.id
      }
    })
  })
}

export {}
