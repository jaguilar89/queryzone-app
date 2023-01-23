class Comment < ApplicationRecord
  validates :body, presence: true

  belongs_to :user_account
  belongs_to :post
end
