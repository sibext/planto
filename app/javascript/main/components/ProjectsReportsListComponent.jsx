import React, {Component} from 'react'
import ReportsListComponent from "./ReportsListComponent"


class ProjectsReportsListComponent extends Component {
  render() {
    console.log(this.props.match.params.project_id)

    return (
      <ReportsListComponent
        title="Reports list"
        project_id={parseInt(this.props.match.params.project_id)}/>
    )
  }
}

export default ProjectsReportsListComponent