RailsBootstrap::Application.routes.draw do
  resources :items

  root :to => 'listings#index'

  get 'search' => 'listings#search', :as => 'search'

  devise_for :users, path_names: {sign_in: "login", sign_out: "logout"}
  
end
