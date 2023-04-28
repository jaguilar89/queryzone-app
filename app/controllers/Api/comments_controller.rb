class Api::CommentsController < ApplicationController
  def index
    comments = Comment.all
    render json: comments
  end

  def create
    comment = @current_user.comments.create!(body: params[:body], post_id: params[:post_id])
    render json: comment, status: :accepted
  end

  def update
    comment = @current_user.comments.find_by(id: params[:id])

    if comment
      comment.update!(body: params[:body])
      render json: comment, status: :ok
    else
      render json: { errors: ["You are not authorized to perform this action"] }, status: :unauthorized
    end
  end

  def destroy
    comment = @current_user.comments.find_by(id: params[:id])
    if comment
      comment.destroy
      head :no_content
    else
      render json: { errors: ["You are not authorized to perform this action"] }, status: :unauthorized
    end
  end

  private

  def comment_params
    params.permit(:body)
  end
end
