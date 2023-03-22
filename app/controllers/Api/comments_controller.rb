class Api::CommentsController < ApplicationController
  def create
    comment = @current_user.comments.create!(body: params[:body], post_id: params[:post_id])
    render json: comment, status: :accepted
  end

  def update
    comment = Comment.find_by(id: params[:id])
    comment.update!(body: params[:body])
    render json: comment, status: :ok
  end

  def destroy
    comment = Comment.find_by(id: params[:id])
    comment.destroy

    head :no_content
  end
end
