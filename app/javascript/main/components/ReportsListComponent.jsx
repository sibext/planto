import React, {Component} from 'react'
import {gql, graphql} from 'react-apollo'
import { Link } from 'react-router-dom'

const query = gql`
  query CurrentUserForLayout($project_id: Int){
    reports(project_id: $project_id){
      id
      text
    }
  }
`

class ReportsListComponent extends Component {
  render() {
    const { data: { loading, error, reports } } = this.props

    if (loading) {
      return <div>Loading...</div>
    } else if (error) {
      return <p>Error!</p>
    }

    return (
      <div>
        <h1>Reports list</h1>
        {reports.map((item, index) =>(
          <div key={item.id}>
            <Link to={`/projects/${item.id}/reports`}>
              {item.text}
            </Link>
          </div>
          )
        )}
      </div>
    )
  }
}

const ReportsListComponentWithData = graphql(query, {
    options: (ownProps) => ({
      variables: {
        project_id: parseInt(ownProps.match.params.project_id)
      }
    }),
  })(ReportsListComponent)
export default ReportsListComponentWithData