import React from 'react'
import { Link } from 'gatsby'

const ProjectList = ({ projects }) => (
  <ul>
    {projects.map(project => (
      <li key={project.id}>
        <strong>
          <Link to={project.slug}>{project.name}</Link>
        </strong>
        <br />
        {new Date(project.release).toLocaleDateString('en-us', {
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        })}
      </li>
    ))}
  </ul>
)

export default ProjectList
