class Api::PostsController < ApplicationController
  def index
    posts = Post.all
    render json: posts, status: :ok
  end

  def show
    post = Post.find_by(id: params[:id])
    render json: post, status: :ok
  end

  def create
  end

  private

  def post_params
    params.permit(:title, :body)
  end
end
