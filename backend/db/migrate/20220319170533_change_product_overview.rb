class ChangeProductOverview < ActiveRecord::Migration[7.0]
  def change
    change_column :products, :overview, 'text[] USING CAST(overview AS text[])'
  end
end
