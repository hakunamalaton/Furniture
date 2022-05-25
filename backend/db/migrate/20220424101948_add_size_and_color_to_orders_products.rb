class AddSizeAndColorToOrdersProducts < ActiveRecord::Migration[7.0]
  def change
    add_column :orders_products, :size, :string
    add_column :orders_products, :color, :string
  end
end
