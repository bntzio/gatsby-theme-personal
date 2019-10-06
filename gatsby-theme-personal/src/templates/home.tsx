import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from './../components/Layout'
import About from './../components/About'
import Navbar from './../components/Navbar'
import { LatestPosts } from './../components/Posts'

interface Post {
  id: string
  frontmatter: {
    title: string
    slug: string
  }
}

interface ParsedPost {
  id: string
  title: string
  slug: string
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

  const parsed: ParsedPost[] = posts.map(post => {
    const parsed = {
      ...post,
      title: post.frontmatter.title,
      slug: post.frontmatter.slug
    }
    delete parsed.frontmatter
    return parsed
  })

  return (
    <Layout.home>
      <About />
      <Navbar />
      <LatestPosts posts={parsed} />
    </Layout.home>
  )
}
