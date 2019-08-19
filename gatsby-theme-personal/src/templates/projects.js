import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/Layout'
import ProjectList from '../components/ProjectList'

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allProject(sort: { fields: release, order: ASC }) {
        nodes {
          id
          name
          release
          url
          slug
        }
      }
    }
  `)


  const projects = data.allProject.nodes
  console.log(projects)

  return (
    <Layout>
      <ProjectList projects={projects} />
    </Layout>
  )
}
