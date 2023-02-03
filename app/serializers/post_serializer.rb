class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :user_account_id, :user_account_name, :body

  def user_account_name
    user = UserAccount.find_by(id: self.object.user_account_id)
  end
end
