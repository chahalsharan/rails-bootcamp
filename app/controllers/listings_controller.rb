class ListingsController < ApplicationController
    def index 
    end

    def search
        @searchTerm = params[:searchTerm]
        @searchLocation = params[:searchLocation]
    end
end
