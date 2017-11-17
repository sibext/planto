module Types
  UserType = GraphQL::ObjectType.define do
    name 'User'
    description 'a description'

    field :id, !types.Int
    field :first_name, !types.String
    field :last_name, !types.String
    field :email, !types.String
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