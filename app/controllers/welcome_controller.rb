class WelcomeController < ApplicationController

	def index
		
	end

	def show


		p "GOT IT!!!"
		letters = JSON.parse(params["array"])
		p letters[0]["letter"]
		p "*"*60
		render json: "Response! KATHY!"
	end

end