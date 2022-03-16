class ProductsController < ApplicationController
  before_action :set_product, only: [:show, :show_ratings]
  protect_from_forgery with: :null_session
  
  def show
    render json: @product
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
end