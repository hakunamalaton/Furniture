class Order < ApplicationRecord
  belongs_to :user
  has_many :orders_products
  has_many :products, through: :orders_products
  has_many :ratings

end
