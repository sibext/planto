module Types
  ReportType = GraphQL::ObjectType.define do
    name 'Report'
    description 'a description'

    field :id, !types.Int
    field :text, !types.String
    field :project, !ProjectType
    field :user, !UserType
    field :createdAt do
      type types.String
      property :created_at
      resolve -> (obj, args, ctx) {
        obj.created_at.iso8601
      }
    end
    field :updatedAt do
      type types.String
      property :updated_at
      resolve -> (obj, args, ctx) {
        obj.updated_at.iso8601
      }
    end
  end
end