class CreateAddresses < ActiveRecord::Migration[7.0]
  def change
    create_table :addresses do |t|
      t.string :city
      t.string :district
      t.string :town
      t.string :description
      t.integer :price
      t.string :phone_number
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
