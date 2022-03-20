class Order < ApplicationRecord
  belongs_to :user
  has_and_belongs_to_many :products
end
