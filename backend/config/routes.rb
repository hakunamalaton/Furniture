Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post "/sign-up", to: "users#create"
  post "/sign-in", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/address/:id", to: "addresses#show"
  post "/address/:id", to: "addresses#create"
  
  get "/product/:id", to: "products#show"
  get "/product/:id/rating", to: "products#show_ratings"
  post "/product/:id/rating", to: "products#create_ratings"
end
