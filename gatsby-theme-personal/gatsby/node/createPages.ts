interface Options {
  basePath: string
}

interface Post {
  id: string
  frontmatter: {
    slug: string
  }
}

exports.createPages = async ({ actions, graphql, reporter }: any, options: Options) => {
  const basePath = options.basePath || '/'

  actions.createPage({
    path: basePath,
    component: require.resolve('./../../src/templates/home.tsx')
  })

  const result = await graphql(`
    query {
      allMdx(sort: { fields: [frontmatter___published_at], order: DESC }) {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  if (result.error) {
    return reporter.panic('error loading posts', reporter.errors)
  }

  const posts = result.data.allMdx.nodes

  posts.forEach((post: Post) => {
    const { slug } = post.frontmatter

    actions.createPage({
      path: slug,
      component: require.resolve('./../../src/templates/post.tsx'),
      context: {
        postID: post.id
      }
    })
  })
}

export {}
