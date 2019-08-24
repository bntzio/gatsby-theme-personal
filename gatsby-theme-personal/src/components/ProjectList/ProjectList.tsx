import React from 'react'
import { Link } from 'gatsby'
import { Styled } from 'theme-ui'

interface Project {
  id: string
  slug: string
  name: string
  release: string
}

interface Props {
  projects: Project[]
}

const ProjectList = ({ projects }: Props) => (
  <Styled.ul>
    {projects.map(project => (
      <Styled.li key={project.id}>
        <strong>
          <Link to={project.slug}>{project.name}</Link>
        </strong>
        <br />
        {new Date(project.release).toLocaleDateString('en-us', {
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        })}
      </Styled.li>
    ))}
  </Styled.ul>
)

export default ProjectList
