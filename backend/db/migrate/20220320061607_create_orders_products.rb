class CreateOrdersProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :orders_products do |t|
      t.belongs_to :order, null: false, foreign_key: true
      t.belongs_to :product, null: false, foreign_key: true

      t.timestamps
    end
  end
end
