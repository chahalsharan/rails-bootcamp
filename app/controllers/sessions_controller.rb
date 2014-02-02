class SessionsController < Devise::SessionsController
  respond_to :json
  #:protect_from_forgery with: :except => [:destroy]

  def login_form
    render partial: "users/login" 
  end

  def signup_form
    render partial: "users/signup" 
  end

  def create
    resource = warden.authenticate!(:scope => resource_name, :recall => "#{controller_path}#failure")
    render :status => 200,
           :json => { :success => true,
                      :info => "Logged in",
                      :user => current_user
           }
  end

  def failure
    puts "i am here in failure"
    render :status => 401,
           :json => { :success => false,
                      :info => "Login Credentials Failed"
           }
  end

  # def login
  #   puts "I am here in side login*****"
  #   resource = warden.authenticate!(:scope => resource_name, :recall => "#{controller_path}#failure")
  #   render :status => 200,
  #          :json => { :success => true,
  #                     :info => "Logged in",
  #                     :user => current_user
  #          }
  # end

  # def destroy
  #   warden.authenticate!(:scope => resource_name, :recall => "#{controller_path}#failure")
  #   sign_out
  #   render :status => 200,
  #          :json => { :success => true,
  #                     :info => "Logged out",
  #          }
  # end

  # def failure
  #   puts "i am here in failure"
  #   render :status => 401,
  #          :json => { :success => false,
  #                     :info => "Login Credentials Failed"
  #          }
  # end

  # def show_current_user
  #   warden.authenticate!(:scope => resource_name, :recall => "#{controller_path}#failure")
  #   render :status => 200,
  #          :json => { :success => true,
  #                     :info => "Current User",
  #                     :user => current_user
  #          }

  # end
end