class Api::CommentsController < ApplicationController
  def create
    comment = @current_user.comments.create(body: params[:body], post_id: params[:post_id])
    render json: comment, status: :accepted
  end
end
