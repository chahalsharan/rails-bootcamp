class ItemsController < ApplicationController
    respond_to :json

    def index
        puts "search text...... " + params.to_yaml
        if params[:search_text].nil?
            render :json => Item.all
        else
            render :json => Item.where(["name LIKE ?", '%' + params[:search_text].to_s + '%'])
        end
        # respond_with Item.all
    end

    def show
        respond_with Item.find(params[:id])
    end

    def create
        respond_with Item.create(params[:item])
    end

    def update
        respond_with Item.update(params[:id], params[:entry])
    end

    def destroy
        respond_with Item.destroy(params[:id])
    end
end
