module Types
  UserType = GraphQL::ObjectType.define do
    name 'User'
    description 'a description'

    field :id, !types.Int
    field :first_name, !types.String
    field :last_name, !types.String
    field :email, !types.String
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