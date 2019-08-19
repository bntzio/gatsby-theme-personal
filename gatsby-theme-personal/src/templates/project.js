import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Project from '../components/Project'

export const query = graphql`
  query ($projectID: String!) {
    project(id: { eq: $projectID }) {
      name
      url
      release(formatString: "MMMM D, YYYY")
      slug
    }
  }
`

export default ({ data: { project } }) => (
  <Layout>
    <Project {...project} />
  </Layout>
)
