class CreateRelationships < ActiveRecord::Migration[5.1]
  def change
    create_table :relationships do |t|
      t.integer :follower_id
      t.integer :followed_id

      t.timestamps
    end
    #add_index :relationship, :follower_id
    #add_index :relationship, :followed_id
   # add_index :relationship [:followed_id, :followed_id], unique: true
  end
end
