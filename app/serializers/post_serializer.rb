class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :user_account_name, :created_at
  has_many :comments
  belongs_to :user_account

  def user_account_name
    user = UserAccount.find_by(id: self.object.user_account_id)
    user.username
  end
end
