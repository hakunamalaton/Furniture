class AddressesController < ApplicationController
  protect_from_forgery with: :null_session
  before_action :set_address, only: [:show, :create]

  def show
    address  = @user.addresses.select(:location, :description, :price, :phone_number, :id)
    render json: {
        address: address
    }
  end

  def create
    new_address = @user.addresses.create(
      user_id: @user.id,
      location: params[:location],
      description: params[:description],
      price: params[:price],
      phone_number: params[:phone_number]
    )

    render json: {
      code: 0,
      address: new_address
    }
  end

  private

  def set_address
    @user = User.find_by(id: params[:id])
  end

end