class RegistrationsController < Devise::RegistrationsController
  
  before_filter :authenticate_user!, only: :update

  respond_to :json, :html

  def new
    super
  end

  def signup_form
    render partial: "users/signup" 
  end

  def create
    resource = User.new(params[:user].permit(:email, :password))
    if resource.save
      render json: resource
    else

      render json: {:errors => resource.errors}, :status => :unprocessable_entity
    end
  end

  def update
    super
  end

  # def resetpassword
  #   console.log "In resetpassword "
  #   user = User.send_reset_password_instructions(params[:user].permit(:email));
  #   if user.errors.blank?
  #     render status: :ok
  #   else
  #     render status: :unprocessable_entity, json: user.errors
  #   end
  # end

  # def password
  #   console.log "In password "
  #   user = User.send_reset_password_instructions(params[:user].permit(:email));
  #   if user.errors.blank?
  #     render status: :ok
  #   else
  #     render status: :unprocessable_entity, json: user.errors
  #   end
  # end
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