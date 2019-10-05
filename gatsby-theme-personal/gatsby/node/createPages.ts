interface Options {
  basePath: string
}

interface Post {
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
      allPost(sort: { fields: published_at, order: DESC }) {
        nodes {
          id
          slug
        }
      }
    }
  `)

  if (result.error) {
    return reporter.panic('error loading posts', reporter.errors)
  }

  const posts = result.data.allPost.nodes

  posts.forEach((post: Post) => {
    const slug = post.slug

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
