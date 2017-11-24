import React, {Component} from 'react'
import {gql, graphql} from 'react-apollo'
import { Link } from 'react-router-dom';

const query = gql`
  query{
    projects{
      id
      name
    }
  }
`

class ProjectsListComponent extends Component {

  render() {
    const { data: { loading, error, projects } } = this.props

    if (loading) {
      return <div>Loading...</div>
    } else if (error) {
      return <p>Error!</p>
    }

    return (
      <div>
        <h1>Projects list</h1>
        {projects.map((item, index) =>(
          <div key={item.id}>
            <Link to={`/projects/${item.id}/reports`}>
              {item.name}
            </Link>
          </div>
          )
        )}
      </div>
    )
  }
}

const ProjectsListComponentWithData = graphql(query)(ProjectsListComponent)
export default ProjectsListComponentWithData