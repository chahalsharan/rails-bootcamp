RailsBootstrap::Application.routes.draw do
    resources :items

    root :to => 'listings#index'

    get 'search' => 'listings#search', :as => 'search'
    get 'navigation' => "listings#navigation", :as => 'navigation'
    devise_for :users, :controllers => {
        :sessions => "sessions",
        :registrations => "registrations"
    }

    devise_scope :user do
        get '/login_form' => 'sessions#login_form', :as => 'login_form'
        get '/signup_form' => 'sessions#signup_form', :as => 'signup_form'
    end
  
end
