(function() {
    /* Controller for website Navigation bad and its actions
     *  Like reacting to navigation option clicks
     *   for usage see _navigation.html.erb
     */
    this.NavCtrl = ["$scope", "$http", 
        function($scope, $http) {
            "use strict";

            // standard set of templates for application navigation
            $scope.templates = {
                'login': '/login_form',
                'signup': '/signup_form'
            };

            $scope.nav = {}
            $scope.nav.sharedlinks = [
                {label: "Sign in", action: "login"},
                {label: "Sign up", action: "signup"},
                {label: "Forgot your password", action: "frgotpassword"}
            ];
            $scope.nav.url = "/navigation";
            $scope.nav.current = "";

            // listener that reloads the navigation discarding the cache
            $scope.$on("navigation_reload", function(event, args){
                console.log("In navigation reload ******");
                $scope.nav.url = null;
                $scope.nav.url = "/navigation?" + (new Date).getTime();                
                event.stopPropagation;
            });

            // react to navigation bar's options
            //  like login, signup
            //  for usage see _navigation.html.erb
            $scope.loadAndShowModal = function(temp){
                $scope.$root.$broadcast("modal_load", {templateUrl : $scope.templates[temp]});
                // hide the alert messages on navigation clicks
                $scope.$root.$broadcast("hide-flash-messages");
                //store the current location in a variable
                $scope.app.currentlink = temp;
            };

            $scope.sharedlinks = function(){
                var links = [];
                for(var index in $scope.nav.sharedlinks){
                    if($scope.nav.sharedlinks[index].action != $scope.app.currentlink){
                        links.push($scope.nav.sharedlinks[index])    
                    }
                }
                return links;
            };
        }
    ];
}).call(this);