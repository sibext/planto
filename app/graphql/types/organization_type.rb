module Types
  OrganizationType = GraphQL::ObjectType.define do
    name 'Organization'
    description 'a description'

    field :id, !types.Int
    field :name, !types.String
    field :url, !types.String
    field :email, !types.String
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