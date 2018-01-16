Types::MutationType = GraphQL::ObjectType.define do
  name "Mutation"

  # field :testField, types.String do
  #   description "An example field added by the generator"
  #   resolve ->(obj, args, ctx) {
  #     "Hello World!"
  #   }
  # end

  field :create_report, Mutations::CreateReport.field
  field :update_report, Mutations::UpdateReport.field
  field :create_project, Mutations::CreateProject.field
end
