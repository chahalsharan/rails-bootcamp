RailsBootstrap::Application.routes.draw do
  resources :addresses

    resources :items

    root :to => 'listings#index'

    get 'search' => 'listings#search', :as => 'search'
    get 'navigation' => "navigation#navigation", :as => 'navigation'

    devise_for :users, :controllers => {
        :sessions => "sessions",
        :registrations => "registrations",
        :passwords => "passwords"
    }

    devise_scope :user do
        get '/login_form' => 'sessions#login_form', :as => 'login_form'
        get '/signup_form' => 'registrations#signup_form', :as => 'signup_form'
        get '/forgotpassword_form' => 'passwords#forgotpassword_form', :as => 'forgotpassword_form'
    end
  
end
