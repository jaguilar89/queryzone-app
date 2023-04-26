class Api::CommentsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response

  def create
    comment = @current_user.comments.create!(body: params[:body], post_id: params[:post_id])
    render json: comment, status: :accepted
  end

  def update
    comment = @current_user.comments.find_by(id: params[:id])
    comment.update!(body: params[:body])
    render json: comment, status: :ok
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
