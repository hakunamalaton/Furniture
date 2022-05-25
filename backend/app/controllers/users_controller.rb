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

  def show_order
    @orders = Order.where(user_id: params[:id])
    if params[:status] != nil
      if params[:status] != "Shipped"
        @orders = @orders.where(status: params[:status]) 
      else
        @orders = @orders.where(status: ["Shipped", "Evaluated"]) 
      end
    end
    @orders = @orders.select(:id, :status, :total_price, :description, :address)
    total = @orders.length

    render json: {
      orders: @orders,
      total: total
    }
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation, :name)
  end
end