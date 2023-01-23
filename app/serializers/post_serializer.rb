class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :user_account_id, :body
end
