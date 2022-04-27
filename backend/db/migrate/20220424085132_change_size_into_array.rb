class ChangeSizeIntoArray < ActiveRecord::Migration[7.0]
  def change
    change_column :products, :size, 'varchar[] USING CAST(size AS varchar[])'
  end
end
