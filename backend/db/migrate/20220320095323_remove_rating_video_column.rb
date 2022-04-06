class RemoveRatingVideoColumn < ActiveRecord::Migration[7.0]
  def change
    remove_column :ratings, :video
    
  end
end
