class OrdersController < ApplicationController
  protect_from_forgery with: :null_session
  
  before_action :set_order, only: [:show]
  def index
    user_id = params[:id] != nil ? params[:id] : nil
    status = params[:status] != nil ? params[:status] : nil 

    # render all orders
      all_order = Order.all
      all_order = all_order.where(status: status)
      render json: {
          code: 0,
          all_order: all_order,
          total: all_order.length
      }
  end

  def show
    product_id = @order.orders_products.pluck(:product_id, :quantity, :size, :color).map do |information|
      {
        product_id: information[0],
<<<<<<< HEAD
        name: Product.find_by(id: information[0]).name,
        price: Product.find_by(id: information[0]).price,
        image: Product.find_by(id: information[0]).image ? Product.find_by(id: information[0]).image[0] : nil ,
=======
>>>>>>> long
        quantity: information[1],
        size: information[2],
        color: information[3]
      }
    end
    # quantity = @order.orders_products.pluck(:quantity)    

    render json: {
      order: @order,
      detail_information: product_id
    }, status: :ok

    #handle error
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
    # handle valid quantity, size, color
    unless params[:quantity].length == params[:size].length && params[:quantity].length == params[:color].length \
      && (params[:quantity].all? { |number|
        number > 0
      })
      render json: {
        code: 1,
        message: "Invalid quantity or size or color!"
      }
      return 
    end

    if params[:products].length != params[:quantity].length
      render json: {
        code: 1,
        message: "Product providing is deficient or redundant!"
      }
      return 
    end

    new_order = Order.create(set_params.merge({user_id: params[:id]}))
    
    # array of id
    # quantity
    products = params[:products].map do |product|
                  Product.find_by(id: product)
                end

    email = User.find_by(id: params[:id]).email 

    # Add records to OrdersProduct
    new_order.products << products
    

    # update quantity, size, color
    OrdersProduct.where(order_id: new_order.id).each_with_index.map do |product, index|
      product.update(quantity: params[:quantity][index])
      product.update(size: params[:size][index])
      product.update(color: params[:color][index])
    end
    
    render json: {
        code: 0,
        email: email,
        order: new_order,
<<<<<<< HEAD
        product_ids: new_order.products.ids,  # change more detail into ids
=======
        products: new_order.products,
>>>>>>> long
        quantity: params[:quantity],
        size: params[:size],
        color: params[:color]
    }
  end

  private

  def set_params
    params.require(:order).permit(:status, :total_price, :description, :address)
  end

  def set_order 
    @order = Order.find_by(id: params[:id])
    if @order == nil
      render json: {
        code: 1,
        message: "Order does not exist"
      }
    end
  end
end