RailsBootstrap::Application.routes.draw do
  resources :items

  root :to => 'listings#index'

  get 'search' => 'listings#search', :as => 'search'

  devise_for :users, :controllers => {:users => "users"}, path_names: {sign_in: "login", sign_out: "logout"}

  devise_scope :user do
    get '/login_form' => 'sessions#login_form', :as => 'login_form'
  end
  
end
