import {gql} from "react-apollo/index";

export const update_report = gql`
  mutation create_report($id: Int!, $text: String!, $project_id: Int!, $reported_at: String!) {
    update_report(
      input: { id: $id, text: $text, project_id: $project_id, reported_at: $reported_at }
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