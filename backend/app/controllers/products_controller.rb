class ProductsController < ApplicationController
  before_action :set_product, only: [:show, :show_ratings]
  protect_from_forgery with: :null_session
  
  def show
    render json: @product
  end

  def create
    new_product = Product.new(product_params)
    if new_product.save
      render json: {
        code: 0,
        product: new_product
      }
    else
      render json: {
        code: 1,
        message: new_product.errors.full_messages
      }
    end
  end

  def display_product
    type = params[:type] ? params[:type] : "all"
    page = params[:page] ? params[:page].to_i : 0
    limit = params[:limit] ? params[:limit].to_i : 0 
    total = 0

    if type != "all"
      total = Product.where(category: type).count
      @products = page == 0 ? Product.where(category: type).select(:id, :name, :image, :price) : \
      Product.where(category: type).select(:id, :name, :image, :price).limit(limit).offset((page-1)*limit)
    else
      total = Product.count
      @products = page == 0 ? Product.select(:id, :name, :image, :price) : \
      Product.select(:id, :name, :image, :price).limit(limit).offset((page-1)*limit)
    end 

    
    render json: {
      data: @products,
      total: total
    }
  end

  def search
    if params[:name] == nil
      render json: {
        code: 0,
        message: "Please provide a name!"
      }
      return 
    end
    products_result = Product.where("name LIKE ?", "%" + params[:name] + "%")
    total = products_result.length

    render json: {
      data: products_result,
      total: total
    }
  end

  def show_ratings
    type = params[:type] ? params[:type] : "all"
    ratings = Rating.where(category: type).where(product_id: @product.id)

    render json: {
        code: 0,
        ratings: ratings
    }
  end

  def create_ratings
    user = User.find_by(email: params[:email])
    product = Product.find_by(id: params[:id])

    rating = Rating.create(
        title: params[:title],
        user_id: user.id,
        product_id: product.id,
        description: params[:description],
        image: params[:image],
        video: params[:video],
        category: params[:category],
        star: params[:star]
    )
    render json: {
        code: 0,
        rating: rating
    }
  end

  private

  def set_product
    @product = Product.find_by(id: params[:id])
  end

  def product_params
    params.require(:product).permit(:name,:image,:description,:price,:third_party,:color,:size,:overview, :category)
  end
end