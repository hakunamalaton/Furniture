class OrdersProduct < ApplicationRecord
  belongs_to :order
  belongs_to :product

  # validates :quantity, presence: true, numericality: { greater_than: 0, only_integer: true }
  # validates :size, presence: true
  # validates :color, presence: true
end
