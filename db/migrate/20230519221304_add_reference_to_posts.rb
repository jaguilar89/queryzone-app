class AddReferenceToPosts < ActiveRecord::Migration[6.1]
  def change
    add_reference :posts, :user_account, foreign_key: { to_table: :user_accounts }
  end
end
