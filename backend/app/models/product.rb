class Product < ApplicationRecord
    has_many :ratings, dependent: :delete_all
    has_and_belongs_to_many :orders, dependent: :delete_all
end
