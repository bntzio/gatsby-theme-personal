import React from 'react'
import { graphql } from 'gatsby'

import Layout from './../components/Layout'
import Posts from './../components/Posts'
import parsePostData from './../utils/parsePostData'

interface Post {
  id: string
  frontmatter: {
    title: string
    slug: string
  }
}

interface Props {
  data: {
    allMdx: {
      nodes: Post[]
    }
  }
}

export default ({
  data: {
    allMdx: { nodes }
  }
}: Props) => {
  const parsed = parsePostData(nodes)

  return (
    <Layout.blog>
      <main>
        <Posts posts={parsed} />
      </main>
    </Layout.blog>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___published_at], order: DESC }) {
      nodes {
        id
        frontmatter {
          title
          slug
        }
      }
    }
  }
`
