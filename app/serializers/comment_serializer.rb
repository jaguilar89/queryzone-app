class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :post_id, :user_account_id
end
