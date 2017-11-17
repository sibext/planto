# mutation{
#   create_report(
#       input: { text: "Hello", project_id: 1, reported_at: "2018-11-17 23:27:04 +0500" }
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

Mutations::CreateReport = GraphQL::Relay::Mutation.define do
  name "CreateReport"

  return_field :report, Types::ReportType
  return_field :errors, types.String

  input_field :text, !types.String
  input_field :project_id, !types.Int
  input_field :reported_at, !types.String

  resolve ->(obj, args, ctx) {
    report = Report.new(
        text: args[:text],
        user: ctx[:current_user],
        project_id: args[:project_id],
        reported_at: Time.new(args[:reported_at])
    )
    if report.save
      { report: report }
    else
      { errors: report.errors.to_a }
    end
  }
end
