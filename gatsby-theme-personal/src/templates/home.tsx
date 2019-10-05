import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from './../components/Layout/Layout.Home'
import About from './../components/About'
import Navbar from './../components/Navbar'
import { LatestPosts } from './../components/Posts'

interface Post {
  id: string
  title: string
  slug: string
}

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allPost(sort: { fields: published_at, order: DESC }, limit: 6) {
        nodes {
          id
          title
          slug
        }
      }
    }
  `)

  const posts: Post[] = data.allPost.nodes

  return (
    <Layout>
      <About />
      <Navbar />
      <LatestPosts posts={posts} />
    </Layout>
  )
}
