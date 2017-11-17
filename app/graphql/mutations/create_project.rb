# mutation{
#   create_project(
#     input: { name: "Hello", url: "https://hello.com", organization_id: 1 }
#   )
#   {
#     project{
#       id
#       organization{
#         name
#       }
#     }
#     errors
#   }
# }

Mutations::CreateProject = GraphQL::Relay::Mutation.define do
  name "CreateProject"

  return_field :project, Types::ProjectType
  return_field :errors, types.String

  input_field :name, !types.String
  input_field :url, types.String
  input_field :organization_id, !types.Int

  resolve ->(obj, args, ctx) {
    project = Project.new(
        name: args[:name],
        url: args[:name],
        organization_id: args[:organization_id]
    )
    if project.save
      { project: project }
    else
      { errors: project.errors.to_a }
    end
  }
end
