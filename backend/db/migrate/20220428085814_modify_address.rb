class ModifyAddress < ActiveRecord::Migration[7.0]
  def change
    change_column :addresses, :price , :float
    remove_column :addresses, :town
    remove_column :addresses, :city
    remove_column :addresses, :district
    add_column :addresses, :location, :string
  end
end
