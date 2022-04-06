class OrdersController < ApplicationController
  protect_from_forgery with: :null_session
  
  def show
    user_id = params[:id] != nil ? params[:id] : nil
    status = params[:status] != nil ? params[:status] : nil 

    if user_id != nil
      email = User.find_by(id: user_id).email
      orders_of_user = Order.where(user_id: user_id)
      if status != nil
        orders_of_user = orders_of_user.where(status: status)
        render json: {
            email: email,
            orders: orders_of_user,
            status: status,
            total: orders_of_user.length
        }
      else # render all orders (all status)
        render json: {
            email: email,
            orders: orders_of_user,
            status: "all",
            total: orders_of_user.length
        }
      end
    else # render all orders
      all_order = Order.all
      render json: {
          code: 0,
          all_order: all_order,
          total: all_order.length
      }
    end
  end

  def update
    if params[:id] == nil
      render json: {
          code: 1,
          message: "Missing id of product"
      }
      return
    end
    order = Order.find_by(id: params[:id])
    if order.update(status: params[:status])
      render json: {
        code: 0,
        message: "Updated successfully!"
      }
    else
      render json: {
        code: 1,
        message: "Fail to update!"
      }
    end
  end

  def create
    
    new_order = Order.create(set_params.merge({user_id: params[:user_id]}))
    # array of id
    # quantity
    products = params[:products].map do |product|
                 Product.find_by(id: product)  
               end
    email = User.find_by(id: params[:user_id]).email 
    new_order.products << products
    
    # update quantity
    OrdersProduct.where(order_id: new_order.id).each_with_index.map do |product, index|
      product.update(quantity: params[:quantity][index])
    end
    
    render json: {
        code: 0,
        email: email,
        order: new_order,
        products: new_order.products,
        quantity: params[:quantity]
    }
  end

  private

  def set_params
    params.require(:order).permit(:status, :total_price, :description, :address)
  end
end