class NavigationController < ActionController::Base

    def navigation
        render partial: "layouts/navigation"
    end
end
