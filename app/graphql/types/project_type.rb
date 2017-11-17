module Types
  ProjectType = GraphQL::ObjectType.define do
    name 'Project'
    description 'a description'

    field :id, !types.Int
    field :name, !types.String
    field :url, !types.String
    field :organization, !OrganizationType
    field :reports, types[Types::ReportType]
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