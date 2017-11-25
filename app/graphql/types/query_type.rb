Types::QueryType = GraphQL::ObjectType.define do
  name "Query"
  # Add root-level fields here.
  # They will be entry points for queries on your schema.

  field :projects, types[Types::ProjectType] do
    description "Project field"
    resolve ->(obj, args, ctx) {Organization.first.projects.order(id: :asc)}
  end

  field :reports, types[Types::ReportType] do
    description "Report field"
    argument :user_id, types.Int
    argument :project_id, types.Int
    resolve ->(obj, args, ctx) {
      if args[:user_id]
        User.find(args[:user_id]).reports.order(id: :asc)
      elsif args[:project_id]
        Project.find(args[:project_id]).reports.order(id: :asc)
      else
        ctx[:current_user].reports.order(id: :asc)
      end
    }
  end

  field :me, Types::UserType do
    description "Current user field"
    resolve ->(obj, args, ctx) {ctx[:current_user]}
  end
end
