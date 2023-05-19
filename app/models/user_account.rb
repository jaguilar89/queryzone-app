class UserAccount < ApplicationRecord
  has_secure_password
  validates :username, presence: true, uniqueness: true
  validates :password, length: { minimum: 8 }

  has_many :comments
  has_many :posts, through: :comments
  has_many :own_posts, class_name: "Post", foreign_key: "user_account_id"
end
