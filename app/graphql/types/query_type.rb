Types::QueryType = GraphQL::ObjectType.define do
  name "Query"
  # Add root-level fields here.
  # They will be entry points for queries on your schema.

  field :projects, types[Types::ProjectType] do
    description "Project field"
    resolve ->(obj, args, ctx) {Project.all.order(id: :desc)}
  end

  field :reports, types[Types::ReportType] do
    description "Report field"
    argument :user_id, types.Int
    resolve ->(obj, args, ctx) {
      if args[:user_id]
        User.find(args[:user_id]).reports.order(id: :desc)
      else
        ctx[:current_user].reports.order(id: :desc)
      end
    }
  end

  field :me, Types::UserType do
    description "Current user field"
    resolve ->(obj, args, ctx) {ctx[:current_user]}
  end
end
