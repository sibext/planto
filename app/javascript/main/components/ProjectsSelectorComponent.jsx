import React, {Component} from 'react'
import { graphql } from 'react-apollo'

import { projects_query } from "../queries/projects_query"


class ProjectsSelectorComponent extends Component {

  setInitialProjectId(projects) {
    const { handleInputChange} = this.props

    const event = {
      target: {
        type: 'select',
        name: 'project_id',
        value: projects && projects[0] && projects[0].id,
      }
    }

    handleInputChange(event)
  }

  render() {
    const { data: { loading, error, projects } } = this.props

    if (loading) {
      return <div>Loading...</div>
    } else if (error) {
      return <p>Error!</p>
    }

    this.setInitialProjectId(projects)

    return (
      <select name="project_id" onChange={this.props.handleInputChange}>
        {projects.map((item, index) =>(
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
        ))}
      </select>
    )
  }
}

const ProjectsSelectorComponentWithData = graphql(projects_query)(ProjectsSelectorComponent)
export default ProjectsSelectorComponentWithData