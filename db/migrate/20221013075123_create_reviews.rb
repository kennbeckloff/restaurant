class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :title
      t.string :image
      t.string :description
      t.string :reviews
      t.float :rating

      t.timestamps
    end
  end
end
