import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Project from '../components/Project'

interface Props {
  data: {
    project: {
      name: string
      description: string
      url: string
      release: string
      slug: string
    }
  }
}

export const query = graphql`
  query($projectID: String!) {
    project(id: { eq: $projectID }) {
      name
      description
      url
      release(formatString: "MMMM D, YYYY")
      slug
    }
  }
`

export default ({ data: { project } }: Props) => (
  <Layout>
    <Project {...project} />
  </Layout>
)
