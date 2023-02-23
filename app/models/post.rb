class Post < ApplicationRecord
  validates :title, :body, presence: true

  belongs_to :user_account
  has_many :comments, dependent: :destroy
  has_many :user_accounts, through: :comments
end
