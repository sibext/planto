import React, {Component} from 'react'
import {gql, graphql} from 'react-apollo'

import ReportsListComponent from "./ReportsListComponent"
import { reports_query } from "../queries/reports_query"
import { create_report } from "../mutations/create_report"


class NewReportComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      errors: null
    }
  }

  onClick = () => {
    this.props.mutate({
      variables: {
        text: 'I added new...',
        project_id: 1,
        reported_at:  new Date(Date.UTC(96, 11, 1, 0, 0, 0))
      },
      update: (proxy, { data: { create_report } }) => {
        // Read the data from our cache for this query.
        const data = proxy.readQuery({ query: reports_query });

        // Add our todo from the mutation to the end.
        data.reports.push(create_report.report);

        // Write our data back to the cache.
        proxy.writeQuery({ query: reports_query, data });
      },
    })
      .then(({ data }) => {
        this.setState({errors: JSON.parse(data.create_report.errors)})
      }).catch((error) => {
        this.setState({errors: [error]})
    })
  }

  render() {
    const { errors } = this.state
    console.log(errors)

    return (
      <div>
        <div>
          { errors &&
            <div>
              {errors.map((item, index) =>(
                  <div key={index}>
                    {item}
                  </div>
                )
              )}
            </div>
          }
        </div>

        <h1>New report</h1>

        <div>
          <select>
            <option value="1">Project 1</option>
            <option value="2">Project 2</option>
          </select>
        </div>

        <textarea rows="5" cols="65" name="text" />
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