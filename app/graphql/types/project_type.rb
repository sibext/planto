module Types
  ProjectType = GraphQL::ObjectType.define do
    name 'Project'
    description 'a description'

    field :id, !types.Int
    field :name, !types.String
    field :url, !types.String
    field :organization, !OrganizationType
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