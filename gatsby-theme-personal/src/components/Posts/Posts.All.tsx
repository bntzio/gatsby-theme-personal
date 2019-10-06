import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import { PostListItem } from './Posts.Latest'

interface Post {
  id: string
  title: string
  slug: string
}

interface Props {
  posts: Post[]
}

const Posts = ({ posts }: Props) => (
  <React.Fragment>
    <PostList>
      <Title>All Articles</Title>
      {posts.map(({ id, title, slug }: Post) => (
        <PostListItem key={id}>
          <Link to={slug}>
            <PostListItem>{title}</PostListItem>
          </Link>
        </PostListItem>
      ))}
    </PostList>
  </React.Fragment>
)

const PostList = styled.section`
  margin-top: 14rem;
`

const Title = styled.h5`
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 4rem;
`

export default Posts
