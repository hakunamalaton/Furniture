Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
  post "/sign-up", to: "users#create" #email #password #password_confirmation
  post "/sign-in", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "users/:id/address", to: "addresses#show"
  post "users/:id/address", to: "addresses#create"
  
  get "/products/:id", to: "products#show"
  get "/products/:id/ratings", to: "products#show_ratings" # ?type=
  post "/products/:id/ratings", to: "products#create_ratings"

  post "products", to: "products#create"

  get "products", to: "products#display_product" # ?type= & page=1 & limit=10
  # get "/products", to: "products#search" #?name=


  get "orders", to: "orders#show"  #?id & status
  patch "/orders/:id", to: "orders#update"
  post "/users/:id/orders", to: "orders#create" # quantity
  get "/users/:id/orders", to: "users#show_order" # quantity

  ####

end
