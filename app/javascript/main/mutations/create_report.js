import {gql} from "react-apollo/index";

export const create_report = gql`
  mutation create_report($text: String!, $project_id: Int!, $reported_at: String!) {
    create_report(
      input: { text: $text, project_id: $project_id, reported_at: $reported_at }
    )
    {
      report{
        id
        text
        reported_at
        project{
          id
        }
      }
      errors
    }
  }
`