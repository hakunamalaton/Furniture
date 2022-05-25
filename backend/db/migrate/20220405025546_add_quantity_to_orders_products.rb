class AddQuantityToOrdersProducts < ActiveRecord::Migration[7.0]
  def change
    add_column :orders_products, :quantity, :integer
  end
end
