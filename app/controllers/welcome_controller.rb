class WelcomeController < ApplicationController

	def index
		
	end

	def show


		p "GOT IT!!!"
		p params["letter"]
		p "*"*60
		render json: "Response!"
	end

end