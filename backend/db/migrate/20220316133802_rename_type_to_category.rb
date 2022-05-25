class RenameTypeToCategory < ActiveRecord::Migration[7.0]
  def up
    rename_column :products, :type, :category
    rename_column :ratings, :type, :category
  end

end
