class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :status
      t.integer :total_price
      t.string :description
      t.string :address

      t.timestamps
    end
  end
end
