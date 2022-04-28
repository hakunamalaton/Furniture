class DeleteTitleInRating < ActiveRecord::Migration[7.0]
  def change
    remove_column :ratings, :title
  end
end
