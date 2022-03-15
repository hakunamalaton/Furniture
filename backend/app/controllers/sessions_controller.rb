class SessionsController < ApplicationController
  protect_from_forgery with: :null_session
  
  def create
    @user = User.find_by(email: user_params[:email])

    if @user.present? && @user.authenticate(user_params[:password])
      cookies[@user.email.to_sym] = {
          :value => @user.email,
          :expires => Time.now + 1.hour,
          :domain => "http://localhost:3000"
      }
      render json: {
          code: 0,
          message: "Login successfully!",
          token: cookies[@user.email.to_sym]
      }
    else
      render json: {
          code: 1,
          message: "Invalid email or password!"
      }
    end
  end

  def destroy
    cookies.delete(params[:email].to_sym, :domain => "http://localhost:3000")
    render json: {
        code: 0,
        message: "Log out successfully!"
    }
  end

  private 

  def user_params
    params.require(:user).permit(:email, :password)
  end
end