import React, {Component} from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'

import { reports_query } from "../queries/reports_query"


class ReportsListComponent extends Component {
  render() {
    const { data: { loading, error, reports }, title } = this.props

    if (loading) {
      return <div>Loading...</div>
    } else if (error) {
      return <p>Error!</p>
    }

    return (
      <div>
        { title &&
          <h1>{title}</h1>
        }
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

const ReportsListComponentWithData = graphql(reports_query, {
    options: (ownProps) => ({
      variables: {
        project_id: ownProps.project_id
      }
    }),
  })(ReportsListComponent)
export default ReportsListComponentWithData