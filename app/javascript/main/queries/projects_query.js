import {gql} from "react-apollo/index";

export const projects_query = gql`
  query{
    projects{
      id
      name
    }
  }
`