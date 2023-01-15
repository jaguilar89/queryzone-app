class UserAccountSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest
end
