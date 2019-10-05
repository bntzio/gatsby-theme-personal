import React from 'react'
import { graphql } from 'gatsby'

interface Props {
  data: {
    post: {
      title: string
      slug: string
      published_at: string // eslint-disable-line camelcase
    }
  }
}

export const query = graphql`
  query($postID: String!) {
    post(id: { eq: $postID }) {
      title
      slug
      published_at
    }
  }
`

export default ({
  data: {
    post: { title, published_at: publishedAt }
  }
}: Props) => (
  <main>
    <h1>{title}</h1>
    <time>{publishedAt}</time>
  </main>
)
