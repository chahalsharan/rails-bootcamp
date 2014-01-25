class UserRegistrationController < Devise::PasswordsController

	prepend_view_path "app/views/devise"

	def create
		super
	end
end