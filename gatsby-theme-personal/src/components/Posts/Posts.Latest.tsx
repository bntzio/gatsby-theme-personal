import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

interface Props {
  posts: Post[]
}

interface Post {
  id: string
  title: string
  slug: string
}

const Posts = ({ posts }: Props) => (
  <PostList>
    <Title>Latest articles</Title>
    {posts.map(({ id, title, slug }: Post) => (
      <PostListItem key={id}>
        <Link to={slug}>
          <PostListItem>{title}</PostListItem>
        </Link>
      </PostListItem>
    ))}
  </PostList>
)

const PostList = styled.section`
  margin-top: 14rem;
`

const Title = styled.h5`
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 4rem;
`

const PostListItem = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
  color: hsla(0, 0%, 7%, 0.6);
  margin-bottom: 2rem;

  a {
    text-decoration: none;
  }

  &:hover {
    cursor: pointer;
    color: hsla(0, 0%, 7%, 0.8);
  }
`

export default Posts
