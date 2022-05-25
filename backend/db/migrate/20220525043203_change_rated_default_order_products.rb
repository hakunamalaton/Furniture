class ChangeRatedDefaultOrderProducts < ActiveRecord::Migration[7.0]
  def change
    change_column_default(:orders_products, :rated, false)
  end
end
