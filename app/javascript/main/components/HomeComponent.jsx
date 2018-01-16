import React, {Component} from 'react'
import { Link } from 'react-router-dom';


import ProjectsListComponent from './ProjectsListComponent'

export default class HomeComponent extends Component {

  render() {
    return (
      <div>
        <ProjectsListComponent />
        <br/>
        <Link to={`/reports/new`}>
          New report
        </Link>
      </div>
    )
  }
}