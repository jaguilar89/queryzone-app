class RemoveUserAccountIdFromPosts < ActiveRecord::Migration[6.1]
  def change
    change_table :posts do |t|
      t.remove :user_account_id
    end
  end
end
