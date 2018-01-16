# mutation{
#   create_report(
#       input: { id: 1, text: "Hello", project_id: 1, reported_at: "2018-11-17 23:27:04 +0500" }
#   )
#   {
#     report{
#       id
#       text
#       reported_at
#       project{
#         id
#       }
#     }
#     errors
#   }
# }

Mutations::UpdateReport = GraphQL::Relay::Mutation.define do
  name "UpdateReport"

  return_field :report, Types::ReportType
  return_field :errors, types.String

  input_field :id, types.Int
  input_field :text, !types.String
  input_field :project_id, !types.Int
  input_field :reported_at, !types.String

  resolve ->(obj, args, ctx) {

    report = Report.find(args[:id])
    report.text = args[:text]
    report.user = ctx[:current_user]
    report.project_id = args[:project_id]
    report.reported_at = Time.new(args[:reported_at])

    if report.save
      { report: report }
    else
      { errors: report.errors.to_a }
    end
  }
end
