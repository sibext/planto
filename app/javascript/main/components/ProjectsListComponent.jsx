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
    const {data} = this.props
    if (data.loading) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <h1>Projects list</h1>
        {data.projects.map((item, index) =>(
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