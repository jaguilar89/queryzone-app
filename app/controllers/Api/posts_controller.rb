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
    post = Post.create(title: params[:title], body: params[:body])
    render json: post, status: :created
  end

  private

  def post_params
    params.permit(:title, :body)
  end
end
