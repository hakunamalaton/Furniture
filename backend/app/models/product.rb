class Product < ApplicationRecord
    has_many :ratings, dependent: :delete_all
    has_many :orders_products
    has_many :orders, through: :orders_products ,dependent: :delete_all
end
