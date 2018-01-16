Rails.application.routes.draw do
  devise_for :users
  root to: 'home#index'
  mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  post "/graphql", to: "graphql#execute"
  get '*path', to: 'home#index'
end
