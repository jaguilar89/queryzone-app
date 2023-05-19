class Post < ApplicationRecord
  validates :title, :body, presence: true

  has_many :comments, dependent: :destroy
  has_many :user_accounts, through: :comments
  belongs_to :user_account
end
