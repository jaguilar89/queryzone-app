class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_response

  before_action :authorize

  private

  def authorize
    @current_user = UserAccount.find_by(id: session[:user_id])
    unless @current_user
      render json: { errors: ["Not Authorized"] }, status: :unauthorized
    end
  end

  def unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end
end
