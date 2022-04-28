class ChangeRatingsCategoryToArray < ActiveRecord::Migration[7.0]
  def change
    remove_column :ratings, :category
    add_column :ratings, :category, 'varchar[]'
  end
end
