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
    user = UserAccount.find_by(id: session[:id])
    post = user.posts.create(title: params[:title], body: params[:body])
    render json: post, status: :created
  end
end
