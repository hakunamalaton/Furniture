class ProductsController < ApplicationController
  before_action :set_product, only: [:show, :show_ratings, :update, :destroy]
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

  def update
    @product.update(product_params)
    if @product.save
      render json: @product, status: :ok
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @product.destroy
    if @product
      render json: {
        code: 0,
        message: "Delete successfully!"
      }, status: :ok
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  def display_product
    type = params[:type] ? params[:type] : "all"
    page = params[:page] ? params[:page].to_i : 0
    limit = params[:limit] ? params[:limit].to_i : 0 
    name = params[:name] ? params[:limit].to_i : ""
    total = 0

    if name != ""
      search
    else

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
  end

  def search
    if params[:name] == nil
      render json: {
        code: 0,
        message: "Please provide a name!"
      }
      return 
    end
    products_result = Product.where("name ILIKE ?", "%" + params[:name] + "%")
    total = products_result.length

    render json: {
      data: products_result,
      total: total
    }
  end

  def show_ratings
    type = params[:type] ? params[:type] : "all"
    ratings = Rating.where(product_id: @product.id)

    # select the type given
    ratings = ratings.select do |rating|
      rating[:category] != nil && (rating[:category].include? type) 
    end if type != "all"
    
    # update name in ratings
    # name = ""
    ratings = ratings.as_json.each do |rating|
      name = User.find_by(id: rating["user_id"]).name
      rating["name"] = name
      # puts User.find_by(id: rating[:user_id]).email
    end

    render json: {
        code: 0,
        ratings: ratings,
        total: ratings.length
    }
  end

  def create_ratings
    user = User.find_by(email: params[:email])
    #product = Product.find_by(id: params[:id])
    # modify the average stars. 
    all_ratings = product.ratings.count
    new_avg_star = (product.avg_star * all_ratings + params[:star])/(all_ratings + 1)
    product.update(avg_star: new_avg_star)
    product.save

    rating = Rating.create(
        title: params[:title],
        user_id: user.id,
        product_id: product.id,
        description: params[:description],
        image: params[:image],
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
    render json: {
      code: 1,
      message: "Not found"
    }, status: :not_found if @product == nil
  end

  def product_params
    params.require(:product).permit(:name,:description,:price,:third_party, :category, size: [], overview: [], image: [], color: [])
  end
end
