import React, {Component} from 'react'
import { graphql } from 'react-apollo'

import ValidationErrorsComponent from "./ValidationErrorsComponent"
import { update_report } from "../mutations/update_report"


class NewReportComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      errors: null,
      text: "",
      id: null
    }
  }

  componentWillMount() {
    const { id, text, project_id, reported_at } = this.props

    this.setState({
      id: id,
      text: text,
      project_id: project_id,
      reported_at: reported_at
    })
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
    const { id, text, project_id, reported_at } = this.state

    this.props.mutate({
      variables: {
        id: id,
        text: text,
        project_id: project_id,
        reported_at: reported_at
      },
    })
      .then(({ data }) => {
        this.setState({
          errors: JSON.parse(data.update_report.errors),
          text: ''
        })
        this.props.history.push(`/projects/${this.state.project_id}/reports/`)
      }).catch((error) => {
        this.setState({errors: [error]})
    })
  }

  render() {
    const { errors } = this.state

    return (
      <div>
        <ValidationErrorsComponent errors={errors}/>

        <textarea rows="5" cols="65" name="text"
                  value={this.state.text}
                  onChange={this.handleInputChange}/>
        <br/>
        <div onClick={this.onClick}>Submit</div>

        <br/>

      </div>
    )
  }
}

const NewReportComponentWithData = graphql(update_report, {
  options: {
    refetchQueries: [
      'reports',
    ],
  },
})(NewReportComponent)
export default NewReportComponentWithData