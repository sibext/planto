import { gql } from 'react-apollo'

export const report_query =  gql`
  query report_query($id: Int!){
    report(id: $id){
      id
      text
      reported_at
      project{
        id
      }
    }
  }
`