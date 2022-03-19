class AddIndexToProductOVerview < ActiveRecord::Migration[7.0]
  def change
    add_index :products, :overview, using: 'gin'
  end
end
