Rails.application.routes.draw do
  namespace :api do
    post "/signup", to: "user_accounts#create"
    get "/me", to: "user_accounts#show"
  end
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
