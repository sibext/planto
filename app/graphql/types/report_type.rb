module Types
  ReportType = GraphQL::ObjectType.define do
    name 'Report'
    description 'a description'

    field :id, !types.Int
    field :text, !types.String
    field :reported_at do
      type !types.String
      resolve -> (obj, args, ctx) {
        obj.reported_at.iso8601
      }
    end
    field :project, !ProjectType
    field :user, !UserType
    field :created_at do
      type types.String
      resolve -> (obj, args, ctx) {
        obj.created_at.iso8601
      }
    end
    field :updated_at do
      type types.String
      resolve -> (obj, args, ctx) {
        obj.updated_at.iso8601
      }
    end
  end
end