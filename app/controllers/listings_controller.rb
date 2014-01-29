class ListingsController < ApplicationController
    def index 
    end

    def search
        @searchTerm = params[:searchTerm]
        @searchLocation = params[:searchLocation]
    end

    def navigation
        render partial: "layouts/navigation"
    end
end
