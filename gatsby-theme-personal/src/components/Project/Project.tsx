import React from 'react'

interface Props {
  name: string
  description: string
  url: string
  release: string
}

const Project = ({ name, description, url, release }: Props) => (
  <div>
    <h1>{name}</h1>
    <h2 style={{ fontSize: 18 }}>{description}</h2>
    <p>Released on {release}</p>
    <a href={url}>{url}</a>
  </div>
)

export default Project
