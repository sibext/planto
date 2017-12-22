// Run this example by adding <%= javascript_pack_tag 'main' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
} from 'react-apollo'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import './styles/styles.sass'

import HomeComponent from "./components/HomeComponent"
import NotFondComponent from "./components/NotFoundComponent"
import ProjectsReportsListComponent from "./components/ProjectsReportsListComponent"
import NewReportComponent from "./components/NewReportComponent"
import UpdateReportComponent from "./components/UpdateReportComponent"

const networkInterface = createNetworkInterface({
  uri: '/graphql',
  opts: {
    credentials: 'same-origin',
    headers: {
      'X-CSRF-Token': document.getElementsByName('csrf-token')[0].content || '',
    }
  },
})

const client = new ApolloClient({
  networkInterface: networkInterface,
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <div>
        <div className="main-container limited">
          <Switch>
            <Route exact path="/" component={HomeComponent}/>
            <Route exact path="/projects/:project_id/reports" component={ProjectsReportsListComponent}/>
            <Route exact path="/reports/new" component={NewReportComponent}/>
            <Route exact path="/reports/:report_id/edit" component={UpdateReportComponent}/>
            <Route path="*" component={NotFondComponent} />
          </Switch>
        </div>
      </div>
    </Router>
  </ApolloProvider>,
  document.body.appendChild(document.getElementById('MainPage')),
)