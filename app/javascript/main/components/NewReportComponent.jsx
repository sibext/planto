import React, {Component} from 'react'
import { graphql } from 'react-apollo'

import ReportsListComponent from "./ReportsListComponent"
import ProjectsSelectorComponent from "./ProjectsSelectorComponent"
import ValidationErrorsComponent from "./ValidationErrorsComponent"
import { reports_query } from "../queries/reports_query"
import { create_report } from "../mutations/create_report"


class NewReportComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      errors: null,
      text: "",
      project_id: null
    }
  }

  handleInputChange = (event) => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }


  onClick = () => {
    const {project_id, text} = this.state

    this.props.mutate({
      variables: {
        text: text,
        project_id: parseInt(project_id),
        reported_at:  new Date(Date.UTC(96, 11, 1, 0, 0, 0))
      },
      update: (proxy, { data: { create_report } }) => {
        if (!create_report.errors) {
          // Read the data from our cache for this query.
          const data = proxy.readQuery({ query: reports_query })

          // Add our todo from the mutation to the end.
          data.reports.push(create_report.report)

          // Write our data back to the cache.
          proxy.writeQuery({ query: reports_query, data })
        }
      },
    })
      .then(({ data }) => {
        this.setState({
          errors: JSON.parse(data.create_report.errors),
          text: ''
        })
      }).catch((error) => {
        this.setState({errors: [error]})
    })
  }

  render() {
    const { errors } = this.state

    return (
      <div>
        <ValidationErrorsComponent errors={errors}/>

        <h1>New report</h1>

        <div>
          <ProjectsSelectorComponent handleInputChange={this.handleInputChange}/>
        </div>

        <textarea rows="5" cols="65" name="text"
                  value={this.state.text}
                  onChange={this.handleInputChange}/>
        <br/>
        <div onClick={this.onClick}>Submit</div>

        <br/>

        <ReportsListComponent title="Reports for this day"/>
      </div>
    )
  }
}

const NewReportComponentWithData = graphql(create_report)(NewReportComponent)
export default NewReportComponentWithData