class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name
      t.string :image, array: true
      t.string :description
      t.integer :price
      t.string :third_party
      t.string :color
      t.string :size
      t.string :overview
      t.string :type

      t.timestamps
    end
    rename_column :Product, :type, :category
  end
end
