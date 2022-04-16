class UsersController < ApplicationController
  protect_from_forgery with: :null_session
  def create
    user = User.find_by(email: user_params[:email])
    if user != nil
      render json: {
          code: 1,
          message: "Invalid email or password!"
      }
    else
      @user = User.create(user_params)
      if @user.id == nil
        render json: {
            code: 1,
            message: @user.errors.full_messages
        }
      else
        render json: {
            code: 0,
            message: "Done"
        }
    end
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :name, :password, :password_confirmation)
  end
end