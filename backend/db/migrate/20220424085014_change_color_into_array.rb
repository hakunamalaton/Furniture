class ChangeColorIntoArray < ActiveRecord::Migration[7.0]
  def change
    change_column :products, :color, 'varchar[] USING CAST(color AS varchar[])'
  end
end
