class AddRatedToOrderProducts < ActiveRecord::Migration[7.0]
  def change
    add_column :orders_products, :rated, :boolean
  end
end
