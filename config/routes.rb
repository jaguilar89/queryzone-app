Rails.application.routes.draw do
  namespace :api do
    resources :posts, only: [:index, :show, :create]
    resources :comments, only: [:index, :create, :update, :destroy]
    get "/me", to: "user_accounts#show"
    post "/signup", to: "user_accounts#create"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
  end
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
