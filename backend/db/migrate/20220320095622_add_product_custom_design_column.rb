class AddProductCustomDesignColumn < ActiveRecord::Migration[7.0]
  def change
    add_column :products, :custom_design, :boolean, default: false
  end
end
