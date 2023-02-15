class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :post_id, :user_account_id, :user_account_name, :created_at

  def user_account_name
    user = UserAccount.find_by(id: self.object.user_account_id)
    user.username
  end
end
