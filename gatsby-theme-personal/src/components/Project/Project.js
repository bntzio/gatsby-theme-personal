import React from 'react'

const Project = ({ name, description, url, release }) => (
  <div>
    <h1>{name}</h1>
    <h2 style={{ fontSize: 18 }}>{description}</h2>
    <p>Released on {release}</p>
    <a href={url}>{url}</a>
  </div>
)

export default Project
