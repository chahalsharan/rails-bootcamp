class PasswordsController < Devise::PasswordsController
  respond_to :json
  #:protect_from_forgery with: :except => [:destroy]

  def forgotpassword_form
    render partial: "passwords/reset" 
  end

  def create
    user = User.send_reset_password_instructions(params[:user].permit(:email));
    if user.errors.blank?
      render partial: "passwords/resetsuccessful", status: :ok
    else
      render status: :unprocessable_entity, json: {:errors => user.errors}
    end
  end

end