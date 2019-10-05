import React from 'react'
import { graphql } from 'gatsby'

interface Props {
  data: {
    post: {
      title: string
      slug: string
    }
  }
}

export const query = graphql`
  query($postID: String!) {
    post(id: { eq: $postID }) {
      title
      slug
    }
  }
`

export default ({ data: { post } }: Props) => (
  <main>
    <h1>{post.title}</h1>
  </main>
)
