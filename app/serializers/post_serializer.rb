class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :created_at
  has_many :comments

  def user_account_name
    user = UserAccount.find_by(id: self.object.user_account_id)
    user.username
  end
end
