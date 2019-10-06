import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from './../components/Layout'
import About from './../components/About'
import Navbar from './../components/Navbar'
import Posts from './../components/Posts'
import parsePostData from './../utils/parsePostData'

interface Post {
  id: string
  frontmatter: {
    title: string
    slug: string
  }
}

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: [frontmatter___published_at], order: DESC }, limit: 6) {
        nodes {
          id
          frontmatter {
            title
            slug
          }
        }
      }
    }
  `)

  const posts: Post[] = data.allMdx.nodes

  const parsed = parsePostData(posts)

  return (
    <Layout.home>
      <About />
      <Navbar />
      <Posts.latest posts={parsed} />
    </Layout.home>
  )
}
