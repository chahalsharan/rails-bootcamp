class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :name
      t.string :description
      t.string :brand
      t.string :model
      t.string :condition
      t.decimal :price

      t.timestamps
    end
  end
end
