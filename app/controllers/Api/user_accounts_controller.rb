class Api::UserAccountsController < ApplicationController
  wrap_parameters format: []
  skip_before_action :authorize, only: :create

  def create
    user = UserAccount.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def show
    render json: @current_user
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end
end
