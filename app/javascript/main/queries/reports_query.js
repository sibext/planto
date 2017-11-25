import { gql } from 'react-apollo'

export const reports_query =  gql`
  query CurrentUserForLayout($project_id: Int){
    reports(project_id: $project_id){
      id
      text
    }
  }
`