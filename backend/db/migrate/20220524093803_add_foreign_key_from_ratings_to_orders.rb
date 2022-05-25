class AddForeignKeyFromRatingsToOrders < ActiveRecord::Migration[7.0]
  def change

    add_column :ratings, :order_id, :integer
    add_foreign_key :ratings, :orders
  end
end
