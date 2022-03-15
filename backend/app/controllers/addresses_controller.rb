class AddressesController < ApplicationController
  before_action :set_address, only: [:show]

  def show
    address  = @user.addresses.select(:city, :district, :town, :description, :price, :phone_number)
    render json: {
        address: address
    }
  end

  private

  def set_address
    @user = User.find_by(id: params[:id])
  end

end