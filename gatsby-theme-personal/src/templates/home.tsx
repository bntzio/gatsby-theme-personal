import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from './../components/Layout/Layout.Home'
import About from './../components/About'
import Navbar from './../components/Navbar'
import { LatestPosts } from './../components/Posts'

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allPost(sort: { fields: published_at, order: DESC }) {
        nodes {
          id
          title
          slug
          published_at
        }
      }
    }
  `)

  const posts = data.allPost.nodes

  return (
    <Layout>
      <About />
      <Navbar />
      <LatestPosts posts={posts} />
    </Layout>
  )
}
