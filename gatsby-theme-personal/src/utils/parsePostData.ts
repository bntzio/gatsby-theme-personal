interface Post {
  id: string
  frontmatter: {
    title: string
    slug: string
  }
}

interface ParsedPost {
  id: string
  title: string
  slug: string
}

const parsePostData = (posts: Post[]): ParsedPost[] => {
  return posts.map(post => {
    const parsed = {
      ...post,
      title: post.frontmatter.title,
      slug: post.frontmatter.slug
    }
    delete parsed.frontmatter
    return parsed
  })
}

export default parsePostData
