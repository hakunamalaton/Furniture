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
  get "/product/:id/rating", to: "products#show_ratings" # ?type=
  post "/product/:id/rating", to: "products#create_ratings"
  post "product/create", to: "products#create"

  get "/displayproduct", to: "products#display_product" # ?type= & page= & limit=
  get "/search", to: "products#search" #?name=
end
