import React, {Component} from 'react'
import { graphql } from 'react-apollo'
import FormReportComponent from "./FormReportComponent"
import { report_query } from "../queries/report_query"

class NewReportComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      errors: null,
      text: ""
    }
  }

  render() {
    const { data: { loading, error, report } } = this.props

    if (loading) {
      return <div>Loading...</div>
    } else if (error) {
      return <p>Error!</p>
    }

    return (
      <div>

        <h1>Update report</h1>

        <FormReportComponent
          id={report.id}
          text={report.text}
          project_id={report.project.id}
          reported_at={report.reported_at}
        />

      </div>
    )
  }
}

const NewReportComponentWithData = graphql(report_query, {
  options: (ownProps) => ({
    variables: {
      id: parseInt(ownProps.match.params.report_id)
    }
  }),
})(NewReportComponent)
export default NewReportComponentWithData