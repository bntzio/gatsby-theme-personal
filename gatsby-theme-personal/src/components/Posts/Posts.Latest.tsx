import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import { Chevron } from './../../components/Icon'

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
      <Title>Latest articles</Title>
      {posts.map(({ id, title, slug }: Post) => (
        <PostListItem key={id}>
          <Link to={slug}>
            <PostListItem>{title}</PostListItem>
          </Link>
        </PostListItem>
      ))}
    </PostList>
    <ViewAll>
      <Link to="/blog">
        <span>View all</span>
        <Chevron />
      </Link>
    </ViewAll>
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

export const PostListItem = styled.h2`
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

export default Posts
