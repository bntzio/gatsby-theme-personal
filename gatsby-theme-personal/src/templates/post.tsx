import React from 'react'
import { graphql } from 'gatsby'

import Layout from './../components/Layout'

interface Props {
  data: {
    mdx: {
      frontmatter: {
        title: string
        published_at: string // eslint-disable-line camelcase
      }
    }
  }
}

export default ({
  data: {
    mdx: {
      frontmatter: { title, published_at: publishedAt }
    }
  }
}: Props) => (
  <Layout.post>
    <main>
      <h1>{title}</h1>
      <time>{publishedAt}</time>
    </main>
  </Layout.post>
)

export const query = graphql`
  query($postID: String!) {
    mdx(id: { eq: $postID }) {
      id
      frontmatter {
        title
        published_at
      }
    }
  }
`
