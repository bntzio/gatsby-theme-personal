import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

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
    {posts.map(({ id, title, slug }: Post) => (
      <Link to={slug} key={id} style={{ textDecoration: 'none' }}>
        <PostItem>{title}</PostItem>
      </Link>
    ))}
  </React.Fragment>
)

const PostItem = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
  color: hsla(0, 0%, 7%, 0.6);
  margin-bottom: 2rem;

  &:hover {
    cursor: pointer;
    color: hsla(0, 0%, 7%, 0.8);
  }
`

export default Posts
