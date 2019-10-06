import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import styled from '@emotion/styled'

import Layout from './../components/Layout'
import About from './../components/About'
import Navbar from './../components/Navbar'
import Posts from './../components/Posts'
import parsePostData from './../utils/parsePostData'
import { Chevron } from './../components/Icon'

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
      <Title>Latest Articles</Title>
      <Posts posts={parsed} />
      <ViewAll>
        <Link to="/blog">
          <span>View all</span>
          <Chevron />
        </Link>
      </ViewAll>
    </Layout.home>
  )
}

const Title = styled.h5`
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 4rem;
  margin-top: 14rem;
`

const ViewAll = styled.div`
  a {
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    color: hsla(0, 0%, 7%, 0.4);

    &:hover {
      color: hsla(0, 0%, 7%, 0.6);
      svg {
        color: hsla(0, 0%, 7%, 0.5);
      }
    }

    span {
      font-size: 1.5rem;
      font-weight: 500;
      margin-right: 0.1rem;
    }

    svg {
      color: hsla(0, 0%, 7%, 0.35);
    }
  }
`
