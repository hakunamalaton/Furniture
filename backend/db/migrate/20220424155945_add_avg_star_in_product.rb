class AddAvgStarInProduct < ActiveRecord::Migration[7.0]
  def change
    add_column :products, :avg_star, :float, default: 0.0
  end
end
