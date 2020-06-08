class StaticController < ApplicationController
  def root; end
  def login
    render json: {dog: 'doggo'}
  end
end
