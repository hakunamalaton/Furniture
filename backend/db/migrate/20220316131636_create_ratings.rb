class CreateRatings < ActiveRecord::Migration[7.0]
  def change
    create_table :ratings do |t|
      t.string :title
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :product, null: false, foreign_key: true
      t.string :description
      t.string :image, array: true
      t.string :video, array: true
      t.string :type
      t.integer :star

      t.timestamps
    end
  end
end
