class Product < ApplicationRecord
    has_many :ratings
    has_and_belongs_to_many :orders
end
